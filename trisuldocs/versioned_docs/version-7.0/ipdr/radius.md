# AAA and RADIUS 


For Dynamic NAT and CGNAT IPs we need to integrate the flow and NAT logs with the AAA information. This allows the IPDR Service to accurately add the `userid` information to the output records as stipulated. 

There are two ways Trisul IPDR integrates AAA RADIUS logs.

- real time via SYSLOG
- by processing RADIUS AAA Dumps 



## Real time AAA Events via SYSLOG


To use this feature, install the Trisul App called **NAT Syslog**
This consumes AAA Events and tags flows with USER ID as they occur. 


## AAA RADIUS Dump file


Arrange for the RADIUS server to deposit a file every hour containing a list of all active and closed session in that interval. You can FTP this file to a directory say `/opt/ipdr/aaadump` This file will be consumed by the `trisul_aaaing` program which will be used to add userid information to the output IPDR Report.  See [trisul_aaaing](scripts#trisul_aaaing)

### Fields 


Since many RADIUS/AAA servers are based on FreeRADIUS you will easily recognize these fields. Every hour export these fields from the SQL Database and FTP it to the location described above.

```csv 
radacctid,acctsessionid,acctuniqueid,customer_id,nasipaddress,nasportid,acctstarttime,acctupdatetime,acctstoptime,acctsessiontime,callingstationid,framed_ipv_4_address,framed_ipv_6_address,delegated_ipv6_prefix

```


