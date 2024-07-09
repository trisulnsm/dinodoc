# Print Top-1000 Flows in time window

Print the top 1000 flows by total volume of data transferred in a time window. We use the flow tracker by total volume to retrieve the requested flows.



## Usage

**Usage**  
`ruby sessions.rb TRISUL_HOST TRISUL_PORT`

**Example**  
`ruby sessions.rb 192.168.1.45 12001`



## code

```ruby
# Trisul Remote Protocol TRP Demo script
#
# Sessions
#
# Prints the top  flows in specified time interval

require 'rubygems' if RUBY_VERSION < '1.9'
require 'trisulrp'

include TrisulRP::Protocol
include TrisulRP::Utils

raise "Usage : ruby sessions.rb host port" unless ARGV.length==2

TrisulRP::Protocol.connect(ARGV.shift,ARGV.shift,"Demo_Client.crt","Demo_Client.key") do |conn|
     tmarr=TrisulRP::Protocol.get_available_time(conn)
     req =TrisulRP::Protocol.mk_request(TRP::Message::Command::SESSION_TRACKER_REQUEST,
                                        :tracker_id=>1,
                                        :maxitems=>10,
                                        :time_interval=>mk_time_interval(tmarr)
                                       )

    TrisulRP::Protocol.get_response(conn,req) do |resp|
                p "Session Group = " + resp.session_group

                # helper function in TrisulRP::Utils
                print_session_details(conn,resp.sessions)
    end

end
```
