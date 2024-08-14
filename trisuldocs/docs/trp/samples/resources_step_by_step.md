# Step by step – working with resources

This is a step by step tutorial that introduces you to all the key techniques ofTRPand Ruby.

### The task

Print allHTTPURLs over the past 6 hours.

We divide this tutorial into steps, each step demonstrating an aspect ofTRP

1. [Step 1](/docs/trp/samples/resources_step_by_step#step-1--find-matching-resources)– Retrieve matching resource IDs
2. [Step 2](/docs/trp/samples/resources_step_by_step#step-2--print-details-of-each-resource)– Print attributes of each matching resource
3. [Step 3](/docs/trp/samples/resources_step_by_step#step-3--show-keys-in-readable-format)– Show readable IP addresses and port numbers
4. [Step 4](/docs/trp/samples/resources_step_by_step#step-4--show-hostnames)– Show host names and port lables

## Step 1 : Find matching resources

Retrieve the Resource IDs of all matching resources. A resource id is a tuple of (slice_id,resource_id) as defined[here](https://www.trisul.org/docs/ref/trpproto.html)

The message we will use is[ResourceGroupRequest](https://www.trisul.org/docs/ref/trpproto.html)

### Code

#### What this does

1. Boiler plate – includes modules from the`trisulrp`gem (see[here](http://rubydoc.info/gems/trisulrp/frames)for rdoc)
2. Opens a connection to the Trisul host and port with the private key
3. Gets the recent 6 hour time window available
4. Constructs a ResourceGroupRequest for RG_URL (you can use RG_DNS if you want to see domain names that were logged by Trisul)
5. We restrict maxitems to 5 for this tutorial
6. Gets a response and prints a list of ResourceIDs

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'trisulrp'

include TrisulRP::Protocol
include TrisulRP::Guids
include TrisulRP::Keys

def usage()
 "\nUsage   : ruby #{$0} <zmq_endpoint>" +
 "\nExample : ruby #{$0} ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0" 
end
raise usage if  ARGV.length !=1

# open a TRP connection to the trisul server
#
conn = ARGV.shift


# get available time window , tmarr contains [from_time, to_time]
tmarr  = TrisulRP::Protocol.get_available_time(conn)

# set the time window to be latest 6 hours
tmarr[0] = tmarr[1] - 6*3600

# send request for all resources 
req = TrisulRP::Protocol.mk_request(TRP::Message::Command::QUERY_RESOURCES_REQUEST,
            :resource_group => TrisulRP::Guids::RG_URL,
            :maxitems => 5,
            :time_interval => mk_time_interval(tmarr))


# get response and print resource details
TrisulRP::Protocol.get_response_zmq(conn,req) do |resp|
    p "Resource IDs are :" +resp.resources.collect { |r|  r.resource_id}.join(' ')
end
```

### Run

Running the code in step 1 gives us this output

```ruby
[devbox@localhost t2]$  ruby resouce.rb ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0
"Resource IDs are :2.0.644 2.0.645 2.0.646 2.0.647 2.0.648 1.0.606 1.0.607 1.0.608 1.0.609 1.0.610"
```

We just printed the resource IDs returned as a string. Lets print out attributes of each resource in step 2.

## Step 2 : Print details of each resource

The previous step gave us five resource ids that matched our query. Now, we need to print out the attributes of each of those 5 resources. The message we need to use for that is[ResourceItemRequest](https://www.trisul.org/docs/ref/trpproto.html)

### Code

Append this code to the code in Step 1

```ruby
#require 'rubygems' if RUBY_VERSION < '1.9'
require 'trisulrp'

include TrisulRP::Protocol
include TrisulRP::Guids
include TrisulRP::Keys

def usage()
 "\nUsage   : ruby #{$0} <zmq_endpoint>" +
 "\nExample : ruby #{$0} ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0" 
end
raise usage if  ARGV.length !=1

# open a TRP connection to the trisul server
#
conn = ARGV.shift


# get available time window , tmarr contains [from_time, to_time]
tmarr  = TrisulRP::Protocol.get_available_time(conn)

# set the time window to be latest 6 hours
tmarr[0] = tmarr[1] - 6*3600

# send request for all resources 
req = TrisulRP::Protocol.mk_request(TRP::Message::Command::QUERY_RESOURCES_REQUEST,
            :resource_group => TrisulRP::Guids::RG_URL,
            :maxitems => 5,
            :time_interval => mk_time_interval(tmarr))

idlist =[]
# get response and print resource details
TrisulRP::Protocol.get_response_zmq(conn,req) do |resp|
    idlist = resp.resources.collect { |r|  r.resource_id}
end
idlist = idlist.join(",")
req = TrisulRP::Protocol.mk_request(TRP::Message::Command::QUERY_RESOURCES_REQUEST,
            :resource_group => TrisulRP::Guids::RG_URL,
            :idlist => idlist)

TrisulRP::Protocol.get_response_zmq(conn,req) do |resp|
  resp.resources.each do |item|
    p "Timestamp  #{Time.at(item.time.tv_sec)}"
    p "Resource ID =  #{item.resource_id}"
    p "Source IP =  #{item.source_ip.key }"
    p "Source Port =  #{item.source_port.key}"
    p "Dest IP =   #{item.destination_ip.key }"
    p "Dest Port =  #{item.destination_port.key}"
    p "URI =  " + item.uri
    p "---------------------"
  end
end
```

### Run Step 2

We just printed the resource IDs returned as a string. Lets print out attributes of each resource in step 2.

```ruby
[devbox@localhost t2]$ ruby resouce.rb ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0
"Timestamp  2016-09-13 13:20:12 +0530"
"Resource ID =  2.0.646"
"Source IP =  C0.A8.01.67"
"Source Port =  p-A3E2"
"Dest IP =   D8.3A.C5.22"
"Dest Port =  p-0050"
"URI =  GET googleads.g.doubleclick.net /pagead/gen_204?id=wfocus&gqid=&qqid=CKSv3OXti88CFZOGjwodYlUDyg&bgload=1 HTTP/1.1"
"---------------------"

..
```

Note that the IP address and Port numbers returned by Trisul look weird.

1. IP Addresses look like “C0.A8.01.67, 34.3F.CD.FC..”
2. Port Numbers look like “p-A9B2, p-0050..”

The reason for that is Trisul always returns keys in a canonical format for each type of counter. In the case of Hosts, the key format is hex octets separated by a dot, in case of apps the key is a 16-bit hex port number preceded by a “p-”. The good news is you dont have to worry about them, there is an easy way to make them all readable. This is Step 3.

## Step 3 : Show keys in readable format

We need to use the the`make_readable`helper method in TrisulRP::Keys module which will show real IP addresses and ports instead of keys in the Trisul format.

We need to change

```ruby
p "Source IP   = #{item.source_ip.key}"
  p "Source Port =  #{item.source_port.key}"
  ...
```

to

```ruby
p "Source IP   = #{item.source_ip.readable}"
  p "Source Port = #{item.source_port.readable}"
  ..
```

### code

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'trisulrp'

include TrisulRP::Protocol
include TrisulRP::Guids
include TrisulRP::Keys

def usage()
 "\nUsage   : ruby #{$0} <zmq_endpoint>" +
 "\nExample : ruby #{$0} ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0" 
end
raise usage if  ARGV.length !=1

# open a TRP connection to the trisul server
#
conn = ARGV.shift


# get available time window , tmarr contains [from_time, to_time]
tmarr  = TrisulRP::Protocol.get_available_time(conn)

# set the time window to be latest 6 hours
tmarr[0] = tmarr[1] - 6*3600

# send request for all resources 
req = TrisulRP::Protocol.mk_request(TRP::Message::Command::QUERY_RESOURCES_REQUEST,
            :resource_group => TrisulRP::Guids::RG_URL,
            :maxitems => 5,
            :time_interval => mk_time_interval(tmarr))

idlist =[]
# get response and print resource details
TrisulRP::Protocol.get_response_zmq(conn,req) do |resp|
    idlist = resp.resources.collect { |r|  r.resource_id}
end
idlist = idlist.join(",")
req = TrisulRP::Protocol.mk_request(TRP::Message::Command::QUERY_RESOURCES_REQUEST,
            :resource_group => TrisulRP::Guids::RG_URL,
            :idlist => idlist)

TrisulRP::Protocol.get_response_zmq(conn,req) do |resp|
  resp.resources.each do |item|
    p "Timestamp  #{Time.at(item.time.tv_sec)}"
    p "Resource ID =  #{item.resource_id}"
    p "Source IP =  #{item.source_ip.readable }"
    p "Source Port =  #{item.source_port.readable}"
    p "Dest IP =   #{item.destination_ip.readable}"
    p "Dest Port =  #{item.destination_port.readable}"
    p "URI =  " + item.uri
    p "---------------------"
  end
end
```

### Run Step 3

```ruby
[devbox@localhost t2]$ ruby resouce.rb ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0
"---------------------"
"Timestamp  2016-09-13 13:20:12 +0530"
"Resource ID =  2.0.647"
"Source IP =  192.168.1.103"
"Source Port =  43442"
"Dest IP =   52.63.205.252"
"Dest Port =  80"
"URI =  GET xx.yy.zz /serve.js.xx HTTP/1.1"
```

That is much better than before.

Now you can see IP addresses (52.63.205.252) and port numbers (Port-80) instead of the hex format. But still, we would like to see the hostnames instead of just the IPs. Lets move to the final step, Step 4

## Step 4 : Show hostnames

We need to change

```ruby
p "Source IP   = #{item.source_ip.readable}"
  p "Source Port =  #{item.source_port.readable}"
  ...
```

 to

```ruby
p "Source IP   = #{item.source_ip.label}"
  p "Source Port = #{item.source_port.label}"
  ..
```

### Code

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'trisulrp'

include TrisulRP::Protocol
include TrisulRP::Guids
include TrisulRP::Keys

def usage()
 "\nUsage   : ruby #{$0} <zmq_endpoint>" +
 "\nExample : ruby #{$0} ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0" 
end
raise usage if  ARGV.length !=1

# open a TRP connection to the trisul server
#
conn = ARGV.shift


# get available time window , tmarr contains [from_time, to_time]
tmarr  = TrisulRP::Protocol.get_available_time(conn)

# set the time window to be latest 6 hours
tmarr[0] = tmarr[1] - 6*3600

# send request for all resources 
req = TrisulRP::Protocol.mk_request(TRP::Message::Command::QUERY_RESOURCES_REQUEST,
            :resource_group => TrisulRP::Guids::RG_URL,
            :maxitems => 5,
            :time_interval => mk_time_interval(tmarr))

idlist =[]
# get response and print resource details
TrisulRP::Protocol.get_response_zmq(conn,req) do |resp|
    idlist = resp.resources.collect { |r|  r.resource_id}
end
idlist = idlist.join(",")
req = TrisulRP::Protocol.mk_request(TRP::Message::Command::QUERY_RESOURCES_REQUEST,
            :resource_group => TrisulRP::Guids::RG_URL,
            :idlist => idlist)

TrisulRP::Protocol.get_response_zmq(conn,req) do |resp|
  resp.resources.each do |item|
    p "Timestamp  #{Time.at(item.time.tv_sec)}"
    p "Resource ID =  #{item.resource_id}"
    p "Source IP =  #{item.source_ip.label }"
    p "Source Port =  #{item.source_port.label}"
    p "Dest IP =   #{item.destination_ip.label}"
    p "Dest Port =  #{item.destination_port.label}"
    p "URI =  " + item.uri
    p "---------------------"
  end
end
```

### Run Step 4

Running Step 4 we get the final output.

```ruby
[devbox@localhost t2]$ ruby resouce.rb ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0
"Timestamp  2016-09-13 13:20:12 +0530"
"Resource ID =  2.0.647"
"Source IP =  192.168.1.103"
"Source Port =  43442"
"Dest IP =   trends.revcontent.com"
"Dest Port =  http"
"URI =  GET xx.yy.zz /serve.js.php   HTTP/1.1"
```

Thats it ! MostTRPscripts follow a similar pattern of retrieving and manipulating data.
