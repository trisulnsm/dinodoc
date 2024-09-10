# Tutorial : Your first TRP script in Ruby

This tutorial will explain step-by-step the basics of connecting,
sending and receiving commands. For this exercise, we use the Ruby
programming language.

**The task**  
```
# Connect securely to a remote Trisul  
# Send a Hello Request  
# Print the Hello Response

The goal of the tutorial is to get you familiar with :  
# Basic structure of a TRP script  
# Running Trisul server in TRP mode  
# Using the trisulrp gem
```

## The environment

To use TRP effectively you need :

1. Ruby installed on your machine
2. The *trisulrp* ruby gem

You can run TRP scripts on any platform on which Ruby is available. It
will connect remotely to a Trisul probe to fetch data.

### The trisulrp gem

You are going to need the following.  
[*trisulrp*](https://github.com/trisulnsm/trisulrp) is a helper Ruby gem
that makes it easier to work with the TRP protocol. You also need a
dependent Gem called ffi-rzmq

Install *trisulrp*

```ruby
gem install trisulrp
gem install ffi-rzmq
```

## A tiny test program - local run

Save the following program into a file called `hellotrp.rb` on the
server running the trisul-hub package.

```ruby
require ‘trisulrp’

conn =
“ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0”  
req =
TrisulRP::Protocol.mk_request(TRP::Message::Command::HELLO_REQUEST,\{:station_id=\>rand().to_s\})  
TrisulRP::Protocol.get_response_zmq(conn,req) do \|resp\|  
p resp.message  
end
```

This program tries to setup a local TRP connection over the Local Unix
Socket `ipc://..` and simply prints “hello from trp” if it worked.

```ruby
[trisul@localhost t1] ruby hellotrp.rb 
"hello from trp"
```

Now lets move to a remote TRP connection.

### Connecting to a remote TRP

By default, the TRP server on the hub node listens on a Unix Socket.
This means only local connections from the same server are allowed. You
must have used the following connection string in the previous step

```ruby
conn = "ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0"
```

To connect remotely to a TRP server you have to run the server on a
normal TCP socket. For this you need to change the
`Server>ZMQConnection` [parameter in
trisulHubConfig.xml](/docs/ref/trisulhubconfig#server) as shown
below.

Say if you wanted the TRP server to listen on TCP Port 12007

Change the line

```xml
<ZmqConnection>ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0</ZmqConnection>
```

to

```xml
<ZmqConnection>tcp://192.168.2.201:12007</ZmqConnection>
```

Then restart the hub <code>trisulctl_hub restart context
default@hub0</code>

Then change the connection string to `tcp://192.168.2.201:12007` in the
hellotrp.rb example

```ruby
require ‘trisulrp’

conn = “tcp://192.168.2.201:12007”  
req =
TrisulRP::Protocol.mk_request(TRP::Message::Command::HELLO_REQUEST,\{:station_id=\>rand().to_s\})  
TrisulRP::Protocol.get_response_zmq(conn,req) do \|resp\|  
p resp.message  
end
```

Then re-run the program
```
    [trisul@localhost t1] ruby hellotrp.rb 
    "hello from trp"
```
We are now ready to move on to more [advanced
scripts](code_samples)
