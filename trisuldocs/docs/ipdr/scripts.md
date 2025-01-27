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

This program ingests AAA dumps from a particular directory into a database. This database will be used to correlate AAA and NAT along with flow logs.


:::tip
AAAING is typically run from a CRON, the RADIUS system must dump logs every 30 mins or 1 hour. 
::: 


To see its capabilities and sample CRONTAB entry check the man page.

```bash
man trisul_aaaing 	
```



### How to process a directory of RADIUS logs 


Consider the following situation.


* RADIUS CSV logs are dumped in a directory `/ipdrdata/cdrlogs`


The directory will look like this. Each of the csv files contains a RADIUS AAA record. 

```
Precision-3260:$ ls -l /ipdrdata/cdrlogs
total 627552
-rw-r--r-- 1 tris tris 55740696 Sep 28  2023 radiusaaa0_CDRs2023-09-27_133000.csv
-rw-r--r-- 1 tris tris 55400240 Sep 28  2023 radiusaaa0_CDRs2023-09-27_140000.csv
-rw-r--r-- 1 tris tris 56023402 Sep 28  2023 radiusaaa0_CDRs2023-09-27_143000.csv
-rw-r--r-- 1 tris tris 56893219 Sep 28  2023 radiusaaa0_CDRs2023-09-27_150000.csv
-rw-r--r-- 1 tris tris 56420276 Sep 28  2023 radiusaaa0_CDRs2023-09-27_180000.csv
-rw-r--r-- 1 tris tris 55133652 Sep 28  2023 radiusaaa0_CDRs2023-09-27_200000.csv

```


To ingest these files into the Trisul IPDR AAA database you can use the following command


```bash
trisul_aaaing -c /usr/local/etc/trisul-hub/domain0/hub0/context0/trisulHubConfig.xml
      -d /ipdrdata/cdrlogs 
```

The data inside of the CDR are then integrated into the IPDR Flow data. The corresponding flow must exist for every AAA record in the csv files. 


There are other options you may want to add 

 - --move-out : after processing the file remove it from the directory
 - --store-original : move the CSV files into the IPDR/ data directory inside the Trisul database slices. 

 See `man trisul_aaaing` for full description.





## ipdr_userquery.sh 

This script allows you to query the flow records by RADIUS AAA userid.  

:::note Userid 

The AAA userid can be stored by two means 
 - Real Time - example via SYSLOG records
 - Logs - from RADIUS LOG dumps processedby `trisul_aaaing`   

For RealTime user id use the User ID field in the [Submit Query form](submit-queries)

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

