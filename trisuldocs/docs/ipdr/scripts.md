# Programs and Scripts

This page describes the executables and scripts that allow you to use IPDR more effectively.


| Programs |  |
| ------| ---|
| trisul-ipdr | The `trisul-ipdr` service is responsible for executing requests |
| tool_qstreamflow | The program that actually queries and builds the IPDR response |
| trisul_aaaing | The RADIUS AAA log ingestor. Usually run in cron |

| Scripts |  |
| ------| ---|
| ipdr-userquery.sh | Query by RADIUS userid |
| ipdr-bulkquery.sh| Query all the IPs in a file for the same timeframe |


## trisul-ipdr service

This service should always be running 

```bash
systemctl start trisul-ipdr
systemctl enable trisul-ipdr
```

## tool_qstreamflow

This is the main backend executable that performs a database query using command line options.

To see its capabilities 

```bash
man tool_qstreamflow
```

## trisul_aaaing 

This executable is responsible for ingesting RADIUS AAA logfiles.

:::tip
This is typically run from a CRON , the RADIUS system must dump logs every 30 mins or 1 hour. 
::: 


To see its capabilities and sample CRONTAB entry

```bash
man trisul_aaaing 	
```


## ipdr_userquery.sh 

This script allows you to query the flow records by RADIUS AAA userid.  

:::note Userid 

The AAA userid can be stored by two means 
 - Real Time - example via SYSLOG records
 - Logs - from RADIUS LOG dumps processedby `trisul_aaaing`   

For RealTime user id use the User ID field in the [Submit Query form](submit_query)

:::

Example to query user `MarkJenny123` for a timeframe 

```bash
/usr/local/share/trisul-hub/ipdr_userquery.sh -f 25-12-2023 -t 26-12-2023 -u MarkJenny123 
```


## ipdr_bulkquery.sh

This script is included with the Trisul Hub IPDR package. The purpose of this script is to allow our IPDR Customers to enter hundreds of IPs at once. Without this it can be tedious to enter each IP separately into the IPDR Web Form.


This script  works on the following input

* Single Timeframe
* A file containing a list of IP one per line

###  IP List

Create a file called iplist1.txt and put all IPs you wish to query in that list

```
#one per line 
203.43.23.1
22.23.44.55
87.23.55.123
78.178.21.139
```

Say you placed the file `iplist1.txt` in the `/root` directory. You can run it like this


```bash
/usr/local/share/trisul-hub/ipdr_bulkquery.sh  \
       -f 1-8-2024-13:00 -t 1-8-2024-13:30 \
              -i /root/iplist1.txt
```


### Output

The output will be placed by default into a subdirectory in `/tmp` (use the `-o` option to specify a different directory)

The subdirectory will have the format `ipdrresults-1722851578` where the number part is a timestamp.

Inside the subdirectory there will be files containing the IPDR query results. You can copy these files over.

```bash
root@ipdradmin:/usr/local/share/trisul-hub# ls -l /tmp/ipdrresults-1722851578
total 40880
-rw-r--r-- 1 root root      230 Aug  5 15:22 queryresults.103.84.86.10
-rw-r--r-- 1 root root        0 Aug  5 15:22 queryresults.103.84.86.10.csv
-rw-r--r-- 1 root root      230 Aug  5 15:23 queryresults.7.7.7.7
-rw-r--r-- 1 root root        0 Aug  5 15:23 queryresults.7.7.7.7.csv
-rw-r--r-- 1 root root 26485607 Aug  5 15:23 queryresults.8.8.4.4
-rw-r--r-- 1 root root 15360273 Aug  5 15:23 queryresults.8.8.4.4.csv
root@ipdradmin:/usr/local/share/trisul-hub#
```

