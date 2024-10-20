# Retrieve allSMTPandDNSpackets

This sample uses an expression in Trisul Filter Format to retrieve allDNS(port 53) andSMTP(port 25) packets into aPCAPfile. This also prints theSHA-1 hash of the packets as returned by the Trisul probe backend.

```ruby
# Trisul Remote Protocol TRP Demo script
#
#
# Save all DNS and SMTP traffic in past one hour
#
require 'rubygems' if RUBY_VERSION < '1.9'
require 'trisulrp'

include TrisulRP::Protocol
include TrisulRP::Guids

def usage()
 "\nUsage   : ruby #{$0} <zmq_domain_endpoint> <context_name> <probe_id>" +
 "\nExample : ruby #{$0} ipc:///usr/local/var/lib/trisul-hub/domain0/run/ctl_local_req context0 probe0" 
end
raise usage if  ARGV.length !=3



# open a TRP connection to the trisul server
#
@conn     = ARGV.shift
@context  = ARGV.shift
@probe_id = ARGV.shift

# construct an expression in  Trisul Filter Format (see doc)
# here we say that Counter Group apps contain p-0019 and p-0035. These
# two are called keys. Use can also use mk_trisul_key(..) to convert
# names to keys
#

expr = "#{TrisulRP::Guids::CG_APP}=p-0019,p-0035"
time_req = TrisulRP::Protocol.mk_request(TRP::Message::Command::PCAP_SLICES_REQUEST,
                                         :context_name=>@context,
                                         :get_total_window=>true,
                                         :destination_node=>@probe_id)
tm_arr = []
TrisulRP::Protocol.get_response_zmq(@conn,time_req) do |resp|
  tm_arr << Time.at(resp.total_window.from.tv_sec)
  tm_arr << Time.at( resp.total_window.to.tv_sec)
end

#tm_arr[0] = tm_arr[1] - 3600


# send pcap request 
def send_pcap_request(command,opts)
  req =  TrisulRP::Protocol.mk_request(command,opts)
  resp = TrisulRP::Protocol.get_response_zmq(@conn,req) 
  trp_resp_command_id = resp.instance_variable_get("@trp_resp_command_id")
  if TRP::Message::Command::ASYNC_RESPONSE == trp_resp_command_id 
    rsync_opts = {
      :token=>resp.token,
      :destination_node=>@probe_id
    }
   sleep(5)#don't send the async request immediately,wait some time to get pcap ready
   send_pcap_request(TRP::Message::Command::ASYNC_REQUEST,rsync_opts)
  else
   download_to(resp)
  end
end
# Pcap was generated and store in probe
# Get pcap file chunk by chunk and store in local file
def download_to(resp,opts={})
  p "Number of bytes = #{resp.num_bytes}\n"
  p "Hash            = #{resp.sha1}\n"


  opts[:uri] =  resp.save_file
  opts[:run_async] = false
  opts[:position] = 0
  opts[:delete_on_eof] = true
  opts[:destination_node]= @probe_id
  opts[:context_name]=@context
  done=false
  file = "#{SecureRandom.urlsafe_base64(6)}.pcap"
  p "Writing to the file #{file}"
  outfile = File.open(file,"wb")
  while not done
   downloadreq = TrisulRP::Protocol.mk_request(TRP::Message::Command::FILE_REQUEST,opts)
   resp = TrisulRP::Protocol.get_response_zmq(@conn,downloadreq)
   outfile.write( resp.content)
   opts[:position] = resp.position
   done= resp.eof
  end
  outfile.close
end

# create the request
# We can retrieve raw packets by FOUR methods (see docs)
# 1. By a filter expr (this example)
# 2,3,4. For a given flow, alert, or resource
opts = {
  :context_name => @context,
  :time_interval  => mk_time_interval(tm_arr),
  :filter_expression  => expr,
  :save_file_prefix =>"PCAP",
  :run_async=>true,
  :destination_node => @probe_id
}
send_pcap_request(TRP::Message::Command::PCAP_REQUEST,opts)
```



## Usage

```ruby
ruby pcap_simple.rb ipc:///usr/local/var/lib/trisul-hub/domain0/run/ctl_local_req default probe0

```

## sample output

```ruby
Number of bytes = 100001742\n"
"Hash            = 06fbd64226415cc1d6b228fc54dc8cbda89a6531\n"
"Writing to the file GbWzGFXn.pcap"
```

The packets are saved in a file called GbWzGFXn.pcap.pcap (see the code)

```ruby
[vivek@localhost t3]$ tcpdump -nnn -r GbWzGFXn.pcap 
reading from file GbWzGFXn.pcap, link-type EN10MB (Ethernet)
19:14:39.344589 IP 192.168.1.103.11385 > 8.8.8.8.53: 40013+ A? www.googleapis.com. (36)
19:14:39.395994 IP 8.8.8.8.53 > 192.168.1.103.11385: 40013 4/0/0 CNAME googleapis.l.google.com., A 216.58.197.42, A 216.58.197.74, A 216.58.220.42 (118)
19:14:50.966257 IP 192.168.1.103.13876 > 8.8.8.8.53: 8867+ A? apis.google.com. (33)
19:14:50.975130 IP 192.168.1.103.17156 > 8.8.8.8.53: 27086+ A? ssl.gstatic.com. (33)
19:14:50.975744 IP 192.168.1.103.17357 > 8.8.8.8.53: 22725+ A? www.gstatic.com. (33)
19:14:51.035837 IP 8.8.8.8.53 > 192.168.1.103.13876: 8867 2/0/0 CNAME plus.l.google.com., A 216.58.196.110 (70)
19:14:51.044706 IP 8.8.8.8.53 > 192.168.1.103.17156: 27086 1/0/0 A 216.58.196.99 (49)
19:14:51.046428 IP 8.8.8.8.53 > 192.168.1.103.17357: 22725 1/0/0 A 216.58.196.99 (49)
19:15:16.293179 IP 192.168.1.103.6451 > 8.8.8.8.53: 11093+ A? trisul.org. (28)
19:15:16.414788 IP 8.8.8.8.53 > 192.168.1.103.6451: 11093 1/0/0 A 104.131.215.222 (44)
```
