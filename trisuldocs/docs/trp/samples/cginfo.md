# Print counter group information

Print the details of counter groups.

This sample does two things

- Print details about a single counter group passed on the command line
- Print details about all available counter groups

The only difference between the two is for the former we have to specify a*:counter_group*guid parameter. For the latter, we leave it blank forcing Trisul to retrieve all the counter group information.

See[here for a list of common GUIDs](/docs/ref/guid.md). You can also go to // Customize > Counters > Meters // to get the GUIDs of all counter groups running on your system.



## Usage

**Usage**

`ruby cginfo TRISUL_HOST TRISUL_PORT guid`



## Example output

```ruby
[vivek@localhost t3]$ ruby cginfo.rb 127.0.0.1 12001 ‘{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}’
“Start Time = 1999-03-01 18:31:00 +0530”
“End time = 1999-03-02 04:09:00 +0530”
“Bucket Size = 30000”
“Name = Apps”
“GUID = {C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}”
External Hosts           {00AA77BB-0063-11A5-8380-FEBDBABBDBEA} 1999-03-01 18:31:00 +0530   1999-03-02 04:09:00 +0530   30000
VLANStats                {0EC72E9E-3AD2-43FD-8173-74693EEA08D0} 1999-03-01 18:31:00 +0530   1999-03-02 04:09:00 +0530   30000
Alert Classes            {20BC4345-37F0-44D0-ABFF-3BED97363CB1} 1999-03-01 18:31:00 +0530   1999-03-02 04:09:00 +0530   300000
FlowGens                 {2314BB8E-2BCC-4B86-8AA2-677E5554C0FE} 1999-03-01 18:31:00 +0530   1999-03-02 04:09:00 +0530   30000
Aggregates               {393B5EBC-AB41-4387-8F31-8077DB917336} 1999-03-01 18:31:00 +0530   1999-03-02 04:09:00 +0530   30000
Subnets                  {429B65AD-CDA4-452E-A852-24D8A3D0FBB3} 1999-03-01 18:31:00 +0530   1999-03-02 04:09:00 +0530   30000
…
```



## code

```ruby
# Trisul Remote Protocol TRP Demo script
#
# Counter Group Info
#
# Prints information about all supported couner  groups on a trisul instance
#
require 'rubygems' if RUBY_VERSION < '1.9'
require 'trisulrp'

include TrisulRP::Protocol
include TrisulRP::Utils


raise "Usage : cginfo host port cgguid" unless ARGV.length==3



TrisulRP::Protocol.connect(ARGV.shift,ARGV.shift,"Demo_Client.crt","Demo_Client.key") do |conn|

    target_guid = ARGV.shift

    req =TrisulRP::Protocol.mk_request(TRP::Message::Command::COUNTER_GROUP_INFO_REQUEST,
                                        :counter_group => target_guid )

# print a single counter group info
    TrisulRP::Protocol.get_response(conn,req) do |resp|
          resp.group_details.each do |group_detail|
                                p "Start Time = #{Time.at(group_detail.time_interval.from.tv_sec)}"
                                p "End time = #{Time.at(group_detail.time_interval.to.tv_sec)}"
                                p "Bucket Size = #{group_detail.bucket_size}"
                                p "Name = " + group_detail.name
                                p "GUID = " + group_detail.guid

          end
    end

    # print info about all counter groups, note that we have not specified the counter_group
    # parameter in the request. So all the counter groups are retrieved.

    req =TrisulRP::Protocol.mk_request(TRP::Message::Command::COUNTER_GROUP_INFO_REQUEST)

    TrisulRP::Protocol.get_response(conn,req) do |resp|
          resp.group_details.each do |group_detail|
                        print  group_detail.name.ljust(25)
                        print  group_detail.guid
                        print " #{Time.at(group_detail.time_interval.from.tv_sec)}  "
                        print " #{Time.at(group_detail.time_interval.to.tv_sec)}  "
                        print " #{group_detail.bucket_size}  "
print "\n"

                  end
    end

end
```
