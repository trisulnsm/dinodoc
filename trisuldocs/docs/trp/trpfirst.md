# Hello World TRP in Ruby

Lets look at a sample program in Ruby that sends a Hello Request command
to Trisul and gets back a Hello Response.

Also see : [Programming model](/docs/trp/trpprogramodel) , [Messages and
Fields](/docs/ref/trpproto)

div(info). **Pre-requisites** You must have Ruby installed on your
machine

## Step 1 : Install required gems

As root run

```bash
  gem install protobuf
  gem install ffi-rzmq
```

## Step 2 : Generate the Ruby TRP definitions

The TRP protocol is completely defined in a file called *trp.proto*.
[Download the file](/docs/ref/trpproto) and save it in your working
directory. You then need to process the trp.proto file and generate
bindings for your language.

    C:\Users\Vivek\Documents\devbo>protoc trp.proto --ruby_out .
    ./trp.pb.rb writing...

## Step 3 : Save and run this program

Lets get to the good stuff first. Run this program first and understand
the output. We can explain the parts in the next section.

**Save this program into your working directory.**

```language-ruby
if RUBY_VERSION =~ /1.8/
  require 'rubygems'
  gem 'ruby_protobuf'
end

require './trp.pb'
begin
  FFI_RZMQ_AVAIL=true
  require 'ffi-rzmq'
rescue
  FFI_RZMQ_AVAIL=false
end

# dispatch and get trp response
def  get_trp_response(endpoint,trp_request,timeout_seconds=-1)

  outbuf=""

  # out
  outbuf=trp_request.encode
  ctx=ZMQ::Context.new
  sock = ctx.socket(ZMQ::REQ)

  # time out for context termination
  sock.setsockopt(ZMQ::LINGER, 5*1_000)

  # Initialize a poll set
  poller = ZMQ::Poller.new
  poller.register(sock, ZMQ::POLLIN)


  sock.connect(endpoint)
  sock.send_string(outbuf)

  ret = poller.poll(timeout_seconds * 1_000 )
  if  ret == -1 
    sock.close
    ctx.terminate 
    raise "zeromq poll error #{endpoint} " 
  end
  if  ret == 0 
    sock.close
    ctx.terminate 
    raise "no registerted sockets #{endpoint} " 
  end

  poller.readables.each do |rsock|
  #in 
  dataarray=""
  rsock.recv_string(dataarray)
  resp =TRP::Message.new
  resp.decode dataarray
  if resp.trp_command.to_i == TRP::Message::Command::ERROR_RESPONSE
    print "TRP ErrorResponse: #{resp.error_response.error_message}\n"
    rsock.close
    ctx.terminate 
    raise resp.error_response.error_message
  end

  rsock.close
  ctx.terminate 
  #unwrap_resp = unwrap_response(resp)
  #unwrap_resp.instance_variable_set("@trp_resp_command_id",resp.trp_command.to_i)
  yield resp if block_given?
  return resp

  end
end


raise "Usage : $0 trp_zmq_endpount" if  ARGV.length !=1
conn = ARGV.shift

# create a new command of type HelloRequest
 request=TRP::Message.new
 request.trp_command = TRP::Message::Command::HELLO_REQUEST
 request.hello_request =TRP::HelloRequest.new
 request.hello_request.station_id = "TRP_TUTORIAL"

get_trp_response(conn,request) do |response|
  puts "Got Hello Response"
  puts "Station ID          : " + response.hello_response.station_id
  puts "Station ID  Request: " + response.hello_response.station_id_request
  puts "Message             : " + response.hello_response.message

end
```

**Run the program**

Before you run the program :

1. You need to know the zmq endpoint of the trp server
2. Ensure that the linux firewall allows endpoint connection through

Now run the program


```sh
    $ruby testtrp.rb ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0
    
    Got Hello Response
    Got Hello Response
    Station ID          : TRP:1 
    Station ID  Request : TRP_TUTORIAL
    Message             : hello from trp
```