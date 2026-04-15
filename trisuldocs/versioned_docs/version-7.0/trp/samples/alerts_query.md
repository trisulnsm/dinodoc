# Alerts Query

Simple example that queries and prints alerts of priorities 1,2,3 seen
in the last 6 hours.

## Usage

**Usage**

```rb
ruby alerts_query.rb trisul.org 12001
```

**Sample Output**

```ruby
[vivek@localhost t3]$ ruby alerts_query.rb trisul.org 12001
Listing 100 Priority 1  alerts
2009-08-01 00:55:05 +0530 10.31.10.9                  Port-36359 10.31.1.2                   Port-30082 SHELLCODE x86 inc ebx NOOP
2009-08-01 00:55:08 +0530 10.31.10.9                  Port-36359 10.31.1.2                   Port-30082 SHELLCODE x86 inc ebx NOOP
2009-08-01 00:55:11 +0530 10.31.10.9                  Port-36359 10.31.1.2                   Port-30082 SHELLCODE x86 inc ebx NOOP
2009-08-01 00:55:15 +0530 10.31.10.9                  Port-36359 10.31.1.2                   Port-30082 SHELLCODE x86 inc ebx NOOP
...

2009-08-02 05:30:17 +0530 10.31.6.100                 Port-45426 10.31.10.2                  unicall    SHELLCODE x86 NOOP
--------------------------------------------------
Listing 100 Priority 2  alerts
2009-08-01 00:52:58 +0530 10.31.1.2                   http       10.31.7.99                  Port-51023 ATTACK-RESPONSES 403 Forbidden
2009-08-01 00:53:57 +0530 10.31.10.9                             10.31.1.2                              ICMP PING NMAP
2009-08-01 00:54:18 +0530 10.31.10.9                  Port-36308 10.31.1.2                   snmp       SNMP request tcp
....
```

## Code



```ruby
# Trisul Remote Protocol TRP Demo script
#
#
# Get alerts in last 6 hours
#
require 'rubygems'  if RUBY_VERSION < '1.9'
require 'trisulrp'

include TrisulRP::Protocol
include TrisulRP::Keys
include TrisulRP::Guids
include TrisulRP::Utils


raise "Usage : alerts_query  trp_host trp_port " unless ARGV.length==2

conn = TrisulRP::Protocol.connect(ARGV.shift,ARGV.shift,"Demo_Client.crt","Demo_Client.key")


tm_arr = TrisulRP::Protocol.get_available_time(conn)


[1,2,3].each do |priority|
    print "Listing 100 Priority #{priority}  alerts \n"
    req =TrisulRP::Protocol.mk_request(TRP::Message::Command::ALERT_GROUP_REQUEST,
                :alert_group  =>TrisulRP::Guids::AG_IDS,
                :maxitems  => 50,
                :priority => "#{priority}",
                :time_interval => mk_time_interval(tm_arr))

    TrisulRP::Protocol.get_response(conn,req) do |resp|
          print_alert_details(conn,resp.alerts)
    end
    print "-"*50 + "\n"
end
```
