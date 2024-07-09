# Flows containing a payload pattern

This example will use the payload search feature of Trisul. You can supply a pattern (text or binary) and Trisul will reassemble all TCP streams and search for that pattern.



## Usage

**Usage**

ruby grep_flows.rb TRISUL_HOST TRISUL_PORT pattern

```ruby
[vivek@localhost t3]$ ruby grep_flows.rb  127.0.0.1 12001 /gen/hfmg/tmp/4032247.gif
1,27564 1999-03-01 22:09:39 +0530       0 172.16.116.194              Port-8218  usatoday.com                http              933     41886
1,27607 1999-03-01 22:09:42 +0530       0 172.16.116.194              Port-8288  usatoday.com                http              511      2149
1,27617 1999-03-01 22:09:57 +0530       3 crow.eyrie.af.mil           Port-8306  usatoday.com                http             1009     41914
1,27655 1999-03-01 22:10:00 +0530       0 crow.eyrie.af.mil           Port-8768  usatoday.com                http              588      2089
1,27780 1999-03-01 22:11:14 +0530       0 crow.eyrie.af.mil           Port-10319 usatoday.com                http              949     41914
1,27824 1999-03-01 22:11:17 +0530       0 crow.eyrie.af.mil           Port-10884 usatoday.com                http              588      2149
..
```



```ruby
# Trisul Remote Protocol TRP Demo script
#
#
# Get all flows in past 6 hours which contain a payload with a specified pattern
#
require 'rubygems' if RUBY_VERSION < '1.9'
require 'trisulrp'
include TrisulRP::Protocol
include TrisulRP::Guids
include TrisulRP::Utils


raise "Usage : grep_flows   trp_host trp_port pattern " unless ARGV.length==3

conn = TrisulRP::Protocol.connect(ARGV.shift,ARGV.shift,"Demo_Client.crt","Demo_Client.key")
target_pattern = ARGV.shift

# get available time window , tmarr contains [from_time, to_time]
tmarr  = TrisulRP::Protocol.get_available_time(conn)
tmarr[0] = tmarr[1] - 6*3600


# send  grep request
req = TrisulRP::Protocol.mk_request(TRP::Message::Command::GREP_REQUEST,
    :time_interval => mk_time_interval(tmarr),
    :maxitems => 100,
    :pattern => target_pattern )

# get response and print session details
TrisulRP::Protocol.get_response(conn,req) do |resp|

# print_session_details is a helper function in TrisulRP::Utils
#
print_session_details(conn,resp.sessions)

end
```
