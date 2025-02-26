# Trisul- AAAING

The Trisul AAAing tool is a scheduled utility that monitors a directory for AAA CSV log dumps, extracts them, and imports the data into a database, enabling the correlation of AAA user IDs and broadband service IDs with IPDR logs for comprehensive tracking and analysis.

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


## Options

| Option             | Default value   | Description                           | 
| -c --config-file=FILENAME | /usr/local/etc/trisul-hub/domain0/hub0/context0/trisulHubConfig.xml | Specify the Trisul hub configuration file for the desired context. If omitted, the default context will be used, which is the typical configuration for most installations. |
| -F --in-format=ELITE |                              | The input log file must be in CSV format. Currently, only a limited set of vendor codes are supported. For additional vendor code support or customization, please contact Unleash Networks. |
| -i --in-file= Filename |                             | Process a single, specified AAA Log file in CSV format. |
| -d --in-directory=Directoryname |                   | Specify the directory containing the AAA Log CSV files to be processed. The tool will automatically skip files that have already been processed, based on their timestamp. |
| --store-original |                                | Optionally store the original log lines in the database, which can be useful for reconciliation and auditing purposes. |
| -s --store-hath-bb |                                 | Store an additional broadband subscriber ID extracted from the AAA log, which will be recorded as an extra column in the database, supplementing the existing user ID field. |
| -m --move-out |                                      | Store raw logs in the database for reconciliation and investigation, with optional archiving and removal of processed files. |
| --lua-parser |                                       | Utilize a LUA script to parse AAA CDR CSV files and extract custom attributes. A sample script, radiusparser.lua, is provided in /usr/local/share/trisul-hub/ for reference. |
| --skip-index |                                       | Skip creating the IP_AAA_INDEX during file creation to significantly speed up IPDR RADIUS CDR processing. Note that the index can be manually added later if needed. |
| --dry-run |                                          | Perform a simulated run that displays the processing order of CDR records without actually moving or modifying them. |
| --staging-dir=Directoryname |                        | Specify a staging directory on a high-performance NVMe disk to facilitate bulk retroactive uploads of AAA records. This allows for efficient processing and subsequent transfer of records to slower archive disks. |
