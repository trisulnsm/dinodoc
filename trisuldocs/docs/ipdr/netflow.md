# NetFlow

The primary method of recording flow data for IPDR Compliance. 


Here are some tips.

- Enable NetFlow only on Gateway Routers 
- Enable NetFlow on the uplink interfaces 
- Use the lowest acceptable sampling rate 
- Skip interfaces in,out, byte and packet counts, TCP flags, prefixes, AS Number and other unnecessary fields
- IPFIX can also be used 

## Sample configuration 


Here are some links to help you with certain models of routers

- [Cisco ASR NetFlow](https://www.trisul.org/devzone/doku.php/netflow:asr)
- [Cisco ASR NAT Logging](https://www.trisul.org/devzone/doku.php/netflow:asrnatlog)


