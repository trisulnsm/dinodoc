# Trisul AAA ingestor 


The `trisul_aaaing` is the RADIUS AAA log ingestor utility. This is used to add user-id and other details to flow records. 

The `trisul_aaaing` can be run manually but is typically run as a cron job. This monitors a directory for AAA CSV log dumps, extracts them, and imports the data into a database, enabling the correlation of AAA user IDs and broadband service IDs with IPDR logs.

:::tip
AAAING is typically run from a CRON, the RADIUS system must FTP logs files periodically to a specific directory. 
::: 


## man page 

To see its capabilities and sample CRONTAB entry check the man page.

```bash
man trisul_aaaing 	
```

## Dumping the AAA logs 

This depends on the AAA vendor you are using. The process is.


  - Create a directory on the Trisul IPDR Server where you want to receive AAA dump files. Say this is is `/opt/ipdr/cdrlogs`  This will be passed as the argument `-d /opt/ipdr/cdrlogs` to the trisul_aaaing process
  - Write a script on the RADIUS system to periodically export the active and closed flows say every 1 hour.  Typically each NAS will have its own file. 
  - The filename MUST include the timestamp in some manner. Ex - the file name can be `radiusaaa0_CDRs2023-09-27_133000.csv` where the timestamp is `2023-09-27_133000` or it can be 'netxstream-nas1-1740587653.csv where the number `1740587653` is a unix epoch timestamp. 
  - SFTP (Secure FTP) from the RADIUS server to the Trisul IPDR server every 1 hour (say)


:::tip

See a PYTHON example that shows how to export the radacct table from FREERADIUS

:::  

## File format 

Out of the box Trisul IPDR supports the following file format

- File names of the form `elite*YYYY-MM-DD_HHMMSS.csv`   - example `elite-nas1-CDRs-2024-07-27_143000.csv`  
- Each record in the file contains this format 

```csv
logTimestamp,acctStatusType,accountNumber,userName,framedIp,nasIp,nasId,sessionId,terminationCause,sessionTime,inputGigaWords,outputGigaWords,inputOctets,outputOctets,serviceName,RemoteID,serviceInfo
Wed Sep 27 16:59:59 IST 2023,3,HV-1697634786,bobdylanuserid,100.90.2.38,103.112.14.192,BCHN_ISG,0F7A3668,0,32403,0,0,368334781,2408436599,NFUP-D60M-U60M,bobdylanuserid,NFUP-D60M-U60M
```

|field| position | notes |
|--- | ---  |--- |
|logTimeStamp| 1 | note format 'Wed Sep 27 16:59:59 IST 2023' |
|accountNumber| 3 | optional. for ISP who have a separate account number or subscriberid - added to IPDR output with `--show-hath-bb` |
|userid | 4| the userid |
|framedIp| 5 | the IPv4 address here it is the CGNAT 100.90.2.38 |
|nasIp| 6 | the NAS IP address |
|sessionTime| 9 | the number of seconds this session is active starting from the logTimestamp |


### Other formats

Trisul AAAING uses a powerful LUA parser to support any file format that is different to the default one shown above. 

You have to use the `--lua-parser` option to use a LUA script. 


:::info sample formats
The GitHub repository trisulnsm has a number of sample LUA scripts you can download modify and use https://github.com/trisulnsm/trisul-scripts/tree/master/lua/hub_scripts/radius-aaa
:::


## Using trisul_aaaing to ingest 



Lets say the RADIUS CSV logs are dumped in a directory `/ipdrdata/cdrlogs` in the default elite format.


The directory will look like this. Each of the csv files contains a RADIUS AAA record.

```
Precision-3260:$ ls -l /ipdrdata/cdrlogs
total 627552
-rw-r--r-- 1 tris tris 55740696 Sep 28  2023 elite0_CDRs2023-09-27_133000.csv
-rw-r--r-- 1 tris tris 55400240 Sep 28  2023 elite0_CDRs2023-09-27_140000.csv
-rw-r--r-- 1 tris tris 56023402 Sep 28  2023 elite0_CDRs2023-09-27_143000.csv
-rw-r--r-- 1 tris tris 56893219 Sep 28  2023 elite0_CDRs2023-09-27_150000.csv
-rw-r--r-- 1 tris tris 56420276 Sep 28  2023 elite0_CDRs2023-09-27_180000.csv
-rw-r--r-- 1 tris tris 55133652 Sep 28  2023 elite0_CDRs2023-09-27_200000.csv

```


To ingest these files into the Trisul IPDR AAA database you can use the following command


```bash
trisul_aaaing -c /usr/local/etc/trisul-hub/domain0/hub0/context0/trisulHubConfig.xml
      -d /ipdrdata/cdrlogs 
```


### Ingesting custom format




Lets say the RADIUS CSV logs are dumped in a directory `/ipdrdata/cdrlogs` in the a custom format say the Alepo vendor. 

The directory will look like this. Each of the csv files contains a RADIUS AAA record.

```
Precision-3260:$ ls -l /ipdrdata/cdrlogs
total 20
-rw-rw-r-- 1 trisul trisul 6679 Feb 21 10:50 alepoaaa1_XISP_CDRs_2025-02-17_100001_34_004104.csv
-rw-rw-r-- 1 trisul trisul 3766 Feb 21 10:51 alepoaaa2_XISP_CDRs_2025-02-17_100002_35_002247.csv
-rw-rw-r-- 1 trisul trisul 3979 Feb 21 10:51 alepoaaa3_XISP_CDRs_2025-02-17_100001_36_002232.csv
-rw-rw-r-- 1 trisul trisul 2766 Feb 21 10:51 alepoaaa4_XISP_CDRs_2025-02-17_100001_37_002300.csv


```

Since they are not in default format you need a LUA parser. You can download the LUA parser [radiusparse_alepo.lua from GitHub](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/hub_scripts/radius-aaa/radiusparse_alepo.lua) and save it to a directory say `/root`

To ingest these files into the Trisul IPDR AAA database you can use the following command


```bash
trisul_aaaing -c /usr/local/etc/trisul-hub/domain0/hub0/context0/trisulHubConfig.xml
      -d /ipdrdata/cdrlogs --lua-parser /root/radiusparse_alepo.lua 
```



## Output 

The trisul_aaaing takes the  data inside of the CDR and are then integrated into the IPDR Flow data at query time. 

There are other options you may want to add 

 - --move-out : after processing the file remove it from the directory
 - --store-original : move the CSV files into the IPDR/ data directory inside the Trisul database slices. 

 See `man trisul_aaaing` for full description.

 The log files are stored in the file `t_aaaing.log` . So see them

 ```bash
source /usr/local/share/trisul-hub/trisbashrc
cd.l 

 ```


## Running via CRON

The command can be run from cron, 

Install as the root user

```bash
0,30 1,2,3 * * * /usr/local/bin/trisul_aaaing -c /usr/local/etc/trisul-hub/domain0/hub0/context0/trisulHubConfig.xml -d /opt/ipdr/aaadumpfiles/ --lua-parser /root/radiusparse_alepo.lua 

``` 


## Command line Options

:::tip
Also see `man trisul_aaaing` for a full list with examples.
:::

| Option             | Default value   | Description                          | 
|---------------------|---------------|---------------------------------------|
| -c --config-file=FILENAME | /usr/local/etc/trisul-hub/domain0/hub0/context0/trisulHubConfig.xml | Specify the Trisul hub configuration file for the desired context. If omitted, the default context will be used, which is the typical configuration for most installations. |
| -F --in-format=ELITE |  -                            | The input log file must be in CSV format. Currently, only a limited set of vendor codes are supported. For additional vendor code support or customization, please contact Unleash Networks. |
| -i --in-file= Filename |    -       | Process a single, specified AAA Log file in CSV format. |
| -d --in-directory=Directoryname |      -             | Specify the directory containing the AAA Log CSV files to be processed. The tool will automatically skip files that have already been processed, based on their timestamp. |
| --store-original |               | Optionally store the original log lines in the database, which can be useful for reconciliation and auditing purposes. |
| -s --store-hath-bb |       | Store an additional broadband subscriber ID extracted from the AAA log, which will be recorded as an extra column in the database, supplementing the existing user ID field. |
| -m --move-out |           | Store raw logs in the database for reconciliation and investigation, with optional archiving and removal of processed files. |
| --lua-parser |  | Utilize a LUA script to parse AAA CDR CSV files and extract custom attributes. A sample script, radiusparser.lua, is provided in /usr/local/share/trisul-hub/ for reference. |
| --skip-index |  | Skip creating the IP_AAA_INDEX during file creation to significantly speed up IPDR RADIUS CDR processing. Note that the index can be manually added later if needed. |
| --dry-run |    | Perform a simulated run that displays the processing order of CDR records without actually moving or modifying them. |
| --staging-dir=Directoryname |      | Specify a staging directory on a high-performance NVMe disk to facilitate bulk retroactive uploads of AAA records. This allows for efficient processing and subsequent transfer of records to slower archive disks. |
| --nas-scope | | use this if the private IP Addresses are local to the NAS. Example if an ISP has several NAS devices each allocating the same private IP pool | 

