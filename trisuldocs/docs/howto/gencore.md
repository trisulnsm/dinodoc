# Make trisul core dump upon crash

If you need to debug a trisul crash, a core dump is a valuable tool.

## Request a checked build

The trisul executable that comes with the RPM or DEB package is stripped
of debugging symbols. You can request Unleash Networks for a checked
build, with all symbols intact. We will give you a file called
*trisul\_checked* built specifically for your platform.

Place the checked build in */usr/local/bin*

## Core file

Trisul is a setuid program. It starts up as root, but after completing
privileged work, drops down to the user specified in the `<SetUID>`
parameter in trisulConfig.xml. The default user is *trisul.trisul*.

### Enable core dumping of setuid programs

Set the value of */proc/sys/fs/suid\_dumpable* to *2*

```
[root@localhost ]# cat /proc/sys/fs/suid_dumpable  
0  
[root@localhost ]# echo 2 > /proc/sys/fs/suid_dumpable  
[root@localhost ]#  
[root@localhost ]# cat /proc/sys/fs/suid_dumpable  
2  

```

### Where is the core file ?

By default The core file will be placed in */tmp* and will be called
 `core.xxxx` where //xxxx// is the PID of the trisul process that
crashed. You can change this filename by modifying the
`/etc/sysctl.conf` file.

Add the following lines to `/etc/sysctl.conf`
```

pre..

1.  core file will be called core.trisul.2239  
    kernel.core\_pattern=/tmp/core.%e.%p

Reload config

pre..  
\[root@localhost \~\]\# sysctl -p  
net.ipv4.ip\_forward = 0  
…  
…  
kernel.core\_pattern = /tmp/core.%e.%p  
\[root@localhost \~\]\#
```

### When it crashes

Once Trisul crashes and you have located the core dump in /tmp, it is
time to fire up gdb and determine the cause of the crash.

You must do this as root, because the saved core file is only readable
by root.

```
pre..  
gdb /usr/local/bin/trisul\_checked /tmp/core.trisul.3297  
(gdb) bt  
.. prints the stack…
```

You may then send the stack trace to us so we can help fix the cause of
the crash.
