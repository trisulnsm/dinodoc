# Hello World TRP in Java

How to write a Java TRP client program that :  
\* Sends a HelloRequest to Trisul and prints the HelloResponse

Also see : [Programming model](trpprogmodel) , [Messages and
Fields](/docs/ref/trpproto)

## Step 1 : Install Protocol Buffers

You need a development environment for this step.

Go to `http://code.google.com/p/protobuf/` and **download** the latest
version.  
Follow the instructions to install protobuf (usually the ./configure +
make + make install routine)

To test whether the installation was successful try running protoc

    root@vivek-hardy:~# protoc
    Missing input file.
    root@vivek-hardy:~#

Everything is fine if you get output similar to the above.

## Step 2 : Install the Java SDK

Change to the protobuf directory and locate the java subdirectory.

Our goal here is to make a tar file containing the Java API files, we
will then untar these files in our working directory where they can be
found easily.

<note tip>

You may also use JAR files or CLASSPATH this directory directly.

</note>

```
$ cd /opt/sware/protobuf-2.3.0/java
$ protoc --java_out=src/main/java -I../src ../src/google/protobuf/descriptor.proto
$ cd src/main/java
$ tar cvfz protobuf_java.tar.gz com/
```

Next untar the protobuf_java.tar.gz in our working directory (where we
will be writing the TRP program).

## Step 3 : Process the trp.proto file

<code>  
protoc trp.proto —java_out .  
</code>

This will create a TRP/trp.java file which contains all the Java
bindings necessary.

## Step 4 : Save and run this program

Lets directly run the sample program, then explain the code.

Download and save this in your working directory.

```java
// Trisul Remote Protocol TRP Demo Java script  
//  
//dependency = javaprotobuf  
//

import TRP.Trp;  
import java.util.\*;  
import java.io.\*;  
import java.net.\*;  
import java.text.DateFormat;  
import java.text.SimpleDateFormat;

class TestTRP {

// Hello Request/Response on the given socket  
public static void SayHello(Socket s) throws IOException {

// Build a Hello Request message  
TRP.Trp.Message req = TRP.Trp.Message.newBuilder()  
.setTrpCommand(TRP.Trp.Message.Command.HELLO_REQUEST)  
.setHelloRequest( TRP.Trp.HelloRequest.newBuilder()  
.setStationId(”TESTTRP1”)  
)  
.build();

// Write to data to socket  
// Note that we do a writeInt() first containing the length of the
serialized message  
byte \[\] outdata = req.toByteArray();  
DataOutputStream os = new DataOutputStream(s.getOutputStream());  
os.writeInt(outdata.length);  
os.write(outdata,0,outdata.length);

// Read data from socket  
// Note that we first readInt() the number of bytes, then read the exact
number  
DataInputStream is = new DataInputStream(s.getInputStream());  
int resplen = is.readInt();  
byte indata\[\] = new byte\[resplen\];  
is.read(indata,0,resplen);

// Make the response TRP message  
TRP.Trp.Message resp = TRP.Trp.Message.parseFrom(indata);

// Print response fields  
System.out.println(”“);  
System.out.println(”Trisul ID = ” +
resp.getHelloResponse().getTrisulId());  
System.out.println(”Connection ID = ” +
resp.getHelloResponse().getConnectionId());  
System.out.println(”Version String = ” +
resp.getHelloResponse().getVersionString());  
System.out.println(”Connection Timings(in secs) = ” +
resp.getHelloResponse().getConnectionStartTime().getTvSec());  
System.out.println(”Connection Timings(in usecs) = ” +
resp.getHelloResponse().getConnectionStartTime().getTvUsec());  
System.out.println(”Active Connection Timings(in secs) = ” +
resp.getHelloResponse().getConnectionUpTime().getTvSec());  
System.out.println(”Active Connection Timings(in usecs) = ” +
resp.getHelloResponse().getConnectionUpTime().getTvUsec());  
DateFormat dateFormat = new SimpleDateFormat(”yyyy/MM/dd HH:mm:ss”);  
Date date = new
Date(resp.getHelloResponse().getConnectionStartTime().getTvUsec());  
System.out.println (date);  
System.out.println(”“);  
}

public static void main(String\[\] args) {  
try  
{  
Socket s = new Socket(args\[0\],12001);  
SayHello(s);  
}  
catch (IOException ex)  
{  
}  
}  
}
```

Lets compile and run the program. The usage is  
``` *java TestTRP <IP/hostname of Trisul> <port number>* ```

    [akhil@localhost s4]$ javac TestTRP.java
    [akhil@localhost s4]$ java TestTRP 192.168.1.7 12001
    [akhil@localhost s4]$ java TestTRP 192.168.1.7 12001
    Response length = 51
    **************************************************
    Trisul ID = Trisul
    Connection ID = Conn-X
    Version String = 1.0.535
    Connection Timings(in secs) = 1282826314
    Connection Timings(in usecs) = 749222
    Active Connection Timings(in secs) = 0
    Active Connection Timings(in usecs) = 193025
    Thu Jan 01 05:42:29 IST 1970
    **************************************************
    [akhil@localhost s4]$
