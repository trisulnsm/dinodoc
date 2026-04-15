# Flows for IP

Get top 100 flows (sessions) for an IP or host name

## Code

```ruby
# Trisul Remote Protocol TRP Demo script
#
#
# Get top 100  flows in past 6 hours for a host
#
require 'rubygems' if RUBY_VERSION < '1.9'
require 'trisulrp'

include TrisulRP::Protocol
include TrisulRP::Guids

def usage()
 "\nUsage   : ruby #{$0} <zmq_endpoint> <ipaddress>" +
 "\nExample : ruby #{$0} ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0 192.168.1.8" 
end

raise usage if ARGV.length !=2


#zmq_endpint
conn = ARGV.shift


# user wants to see flows for this  hostname
#
target_ip   =   ARGV.shift
target_keyt =   TRP::KeyT.new({:label=>target_ip})


# get available time window , tmarr contains [from_time, to_time]
tmarr  = TrisulRP::Protocol.get_available_time(conn)

# set the time window to be latest 6 hours
tmarr[0] = tmarr[1] - 6*3600


# send request for sessions for key
req = TrisulRP::Protocol.mk_request(TRP::Message::Command::QUERY_SESSIONS_REQUEST,
            :any_ip => target_keyt ,
            :time_interval => mk_time_interval(tmarr))


# get response and print session details
TrisulRP::Protocol.get_response_zmq(conn,req) do |resp|
  resp.sessions.each do |sess|
    print "#{sess.session_id} ".ljust(12)
    print "#{Time.at(sess.time_interval.from.tv_sec)} ".ljust(26)
    print "#{sess.time_interval.to.tv_sec-sess.time_interval.from.tv_sec} ".rjust(8)
    print "#{sess.key1A.label}".ljust(28)
    print "#{sess.key2A.label}".ljust(11)
    print "#{sess.key1Z.label}".ljust(28)
    print "#{sess.key2Z.label}".ljust(11)
    print "#{sess.az_bytes}".rjust(10)
    print "#{sess.za_bytes}".rjust(10)
    print "#{sess.az_payload}".rjust(10)
    print "#{sess.za_payload}".rjust(10)
    print "#{sess.setup_rtt}".rjust(10)
    print "#{sess.retransmissions}".rjust(10)
    print "#{sess.tags}".rjust(10)
    print "\n"
  end


end
```

## Usage

```ruby
ruby flows_for_ip.rb ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0 192.168.1.8
```

## Sample output

```ruby
[vivek@localhost t3]$ ruby flows_for_ip.rb ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0 192.168.1.8

1.0.6090    2016-09-13 14:57:50 +0530       0 192.168.1.8                 40611      ocsp.verisign.com           http              914      2210       462      1828     15607         0          
1.0.6089    2016-09-13 14:57:51 +0530       2 192.168.1.8                 54275      si0.twimg.com               https             726      3699       328      3417     29674         0        US
1.0.6088    2016-09-13 14:57:51 +0530       3 192.168.1.8                 54277      si0.twimg.com               https            1148      3991       642      3655     74132         0          
1.0.6087    2016-09-13 14:57:50 +0530       5 192.168.1.8                 45574      mirrors.fedoraproject.org   https            2348     17111      1044     15783      3049         0        US
```
