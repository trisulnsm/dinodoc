# Troubleshooting Trisul Remote Protocol

## How to disable the Access Control List (ACL) ?

If you want to accept connections to your server from any IP, add this
line to the ACLItem in the
[trisulConfig.xml](/docs/ref/trisulconfig) file.

## Getting Protocol Buffers error

Currently a maximum of 64MB of PCAP can be retrieved via TRP. If you
wish to get a bigger PCAP logon to the server directly and use the
*trisul_dpitool* command.
