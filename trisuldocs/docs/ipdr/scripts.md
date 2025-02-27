# Programs and Scripts

This page describes the executables and scripts that allow you to use IPDR more effectively.


| Programs |  |
| ------| ---|
| [trisul-ipdr](/docs/ipdr/scripts#trisul-ipdr-service) | The `trisul-ipdr` service is responsible for executing requests |
| [tool_qstreamflow](/docs/ipdr/scripts#tool_qstreamflow) | The program that actually queries and builds the IPDR response |
| [trisul_aaaing](/docs/ipdr/trisul_aaaing) | The RADIUS AAA log ingestor. Usually run in cron |

| Scripts |  |
| ------| ---|
| [ipdr-userquery.sh](/docs/ipdr/ipdruserquery) | Query by RADIUS userid |
| [ipdr-bulkquery.sh](/docs/ipdr/ipdr_bulkquery)| Query all the IPs in a file for the same timeframe |


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