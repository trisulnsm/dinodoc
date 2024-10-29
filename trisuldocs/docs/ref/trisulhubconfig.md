# Trisul Hub Configuration File

All configuration parameters for the Trisul Hub are stored in a single XML file called  **trisulHubConfig.xml**

Default Location 

```
/usr/local/etc/trisul-hub/domain0/hub0/context0/trisulHubConfig.xml
```

> for context named **data1** the path would be …hub0/context_**data1**/trisulHubConfig.xml*

:::caution 

Root privileges needed to edit

:::

:::note

Also see [trisulProbeConfig.xml](/docs/ref/trisulconfig)for editing Trisul Probe parameters

:::

### Sections

Click on a section to see the config parameters inside that section.

| Section     | What part of trisul does it configure                   |
| ----------- | ------------------------------------------------------- |
| App         | The hub process level params                            |
| Logging     | Logging policy – file sizes and rotation                |
| StatsEngine | Database cluster tuning                                 |
| Server      | ForTRP– server parameters                             |
| Probes      | List of probes allowed to connect and mapping to layers |
| [IPDR](#ipdr) | IP Flow Detail Record (IPDR) application parameters     |
| DBTasks     | Setting for various database maintenance tasks          |

## App

:::note

Commonly modified parameters are Setuid, TrisulMode, LicenseFile

:::

| Parameters    | Defaults                                                                   | Description                                                                                                                                                                                   |
| ------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User          | trisul.trisul                                                              | Which user/group should trisul run as after dropping root privileges.                                                                                                                         |
| TempFolder    | /tmp                                                                       |                                                                                                                                                                                               |
| DBRoot        | /usr/local/var/lib/trisul-hub/ domain0/hub0/context0                       | The base directory under which Trisul stores all its data.                                                                                                                                    |
| TrafficDBRoot | /usr/local/var/lib/trisul/domain0 /hub0/context0/meters                    | The directory under which Trisul stores traffic and flow statistics.                                                                                                                          |
| ConfigDB      | /usr/local/var/lib/trisul/ domain0/hub0/context0/ config/TRISULCONFIG.SQDB | Location of the configuration database.                                                                                                                                                       |
| BinDirectory  | /usr/local/bin                                                             | Where trisul looks for executable binaries                                                                                                                                                    |
| DataDirectory | /usr/local/share/trisul-hub                                                | Data files                                                                                                                                                                                    |
| LicenseFile   | /usr/local/etc/trisul-hub/LicenseKey.txt                                   | Location of the license file.                                                                                                                                                                 |
| DebugMode     | false                                                                      | Debug mode is used when trying to developLUAprobe scripts. If DebugMode == True then all streaming metrics from all probes are just sunk to /dev/null. Hence this is used for probe testing |

## Logging

The two components in a Hub node are*flushers*and*query servers*. This section configures their log files with prefix*fs*and*qs*respectively.

| Parameters           | Defaults                  | Description      |
| ---|---|---|
| Logdir               | /usr/local/var/log/trisul | Where the log files are stored. |
| Logfile              | ns-???.log                | Log file pattern. The default is ns-001.log, ns-002.log, etc.|
| LogRotateSize        | 5000000                   | Size of each log file is allowed to grow to this size before Trisul moves to the next file.|
| LogRotateCount       | 5                         | The number of files in the log ring.|
| FlusherLogFile       | fs-???.log                | log file pattern.|
| FlusherLogLevel      | DEBUG                     | All messages higher than this level are logged. The available log levels in order of severity (most severe one first is).<br/>**EMERG**<br/>**FATAL**<br/>**ALERT**<br/>**CRIT**<br/>**ERROR**<br/>**WARN**— this level after a few weeks of smooth running<br/>**NOTICE**<br/>**INFO**<br/>**DEBUG**— Recommended default level |
| FlusherLogRotateSize | 5000000                   | Max size of each log file|
| FlusherogRotateCount | 5                         | Number of files in ring|
| TrpLogFile           | qs-???.log                | log file pattern.|
| TrpLoglevel          | DEBUG                     | log level|
| TrpLogRotateSize     | 5000000                   | Max size of each log file|
| TrpLogRotateCount     | 5                         | Number of files in ring|
| IpdrdLogFile         | is-???                    | IPDRlog file pattern. These parameters are for the IPDR query service|
| IpdrdLoglevel        | DEBUG                     | IPDRservice logging level.|
| IpdrdLogRotateSize   | 5000000                   | Max size of each file in bytes|
| IpdrdLogRotateCount  | 5                         | Number of log files|

## StatsEngine

Controls the database storage and retention policy for Trisul.

| Parameters               | Defaults | Description                                                                                                                                                                                                          |
| ------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FTSFlushBudget           | 5        | TrisulFTS(Full Text Resources) need to complete the Flush operation within these many seconds. Since Trisul is a Real time system, we have a total about about 60 seconds for the entire snapshot window to flush. |
| JournalMode              | WAL      | Trisul Resources are stored in SQLITE3 leaf nodes.                                                                                                                                                                   |
| OfflineAnalysisQueueSize | 2000000  | When importing PCAPs or other offline formats, this parameter controls the Hi Water mark of the items on the queue of the Hub. This helps to control memory usage on the Hub Node.                                   |

### SlicePolicy

Controls data location and retention policy.

| Parameters  | Defaults | Description                                                                                                                                                             |
| ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SliceWindow | DAILY    | How much data is contained in a single slice. The available choices are :<br/>`HOURLY`From 00 Min to 59 Min every hour<br/>`DAILY`From 12:00 AM to 11:59 PM every day |

### Operational

| Parameters   | Defaults | Description                                                                                                                                                                                                     |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SliceCount   | 32       | 32 slices are kept in the operational area. Combined with the default SliceWindow ofDAILY. This means 32 days worth of data in the oper area. Slices older than 32 days will slide over to the reference area. |
| UsageRedMark |          | Generate an alert when the disk usage percent exceeds this value for admin purposes. Leave blank or zero to disable disk usage alerting. Default disabled.                                                      |

### Reference

| Parameters   | Defaults | Description                                                                                                                                    |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| SliceCount   | 32       | Controls how many slices are kept in the reference area. If you set this to 0, the slices will then move straight from operational to archive. |
| UsageRedMark |          | Generate an alert when the disk usage percent exceeds this value for admin purposes. Leave blank or zero to disable disk usage alerting        |

### Archive

For long term storage mostly for compliance purposes.

| Parameters   | Defaults | Description                                                                                                                             |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SliceCount   | 32       | Controls how many slices are kept in the archive area. If you set this to 0, slices move directly to /dev/null (ie are deleted).        |
| UsageRedMark | 95       | Generate an alert when the disk usage percent exceeds this value for admin purposes. Leave blank or zero to disable disk usage alerting |

### Extra archives

An optional feature for advanced users allows for extra archives for example to be mounted to slower storage. These are disabled by default. Change the name of the node from`ExtraArchives_Disabled`to`ExtraArchives`to activate this feature.

| Parameters | Defaults | Description                                                                                       |
| ---------- | -------- | ------------------------------------------------------------------------------------------------- |
| ID         | 1        | This ID is used to access the archive mount point. ID of 1 would lead to mount point`xarchive_1` |
| SliceCount | 32       | Number of days data in this extra archive                                                         |

## Flushers

This section controls how many backend flushers are used. The default number of flushers used by Trisul isTWO. This is an advanced tuning parameter. You can increase the number of flushers up to eight for large to very large deployments of Trisul.

| Parameters     | Defaults | Description        |
| -------------- | -------- | ----------------------------------------- |
| ServerImage    |          | Path to trisul_flushd                            |
| PIDFile        |          | Where thePIDfor the running trisul_flushd process is stored        |
| AutoStart      | true     | Automatically start flushd process        
| ControlChannel |          | InternalIPCchannel      |
| Flushers       |          | For each flusher instance specify the connection and DB instance number. Sequentially from 0..8 (MAX) |

## Server

Controls theTRPServer Process used for database querying functionality. The process that provides the queryAPIis called trisul_trpd@

| Parameters      | Defaults | Description          |
| --------------- | -------- | -------------------- |
| ZmqConnection   |          | The port running theTRPProtocol where you can connect and query the trisul database. By default, this is anIPCsocket`ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0`. You can change this parameter to allow a remoteTCPconnection.Example: To allow queries usingTCPPort 12004<br/><br/><br/><br/>1. Change this parameter to`tcp://10.0.0.23:12004`where`10.0.0.23`is the IP address of theHUBnode<br/><br/>2. Then restart the context like so`trisulctl_hub restart context default@hub0`<br/><br/> |
| PIDFile         |          | Where thePIDof the running trisul_trpd process is stored     |
| NumServers      | 6        | Number of backend servers to start.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ParallelQueries | false    | Whether parallel queries must be turned on for all queries. The defautl is false, use this only when you have the database stored on different spindles.   |

## Probes

Add probes that are allowed to connect to this context.

Each probe is a line with the following details.

| Parameters | Defaults | Description                                             |
| ---------- | -------- | ------------------------------------------------------- |
| Layer      |          | Layer number allocated to the probe.                    |
| ProbeID    |          | ProbeID eg,`probe0`this probe must be authenticated by aCURVEcertificate earlier for the domain this hub belongs to. See*trisulctl_hub install probe* |

## DBTasks

Control the various database maintenance tasks. These tasks are scheduled internally by Trisul at fixed intervals.

### Archiver

Archiver is responsible for sliding old data.

| Parameters | Defaults | Description           |
| ---------- | -------- | --------------------- |
| Enable     | TRUE     | Archiving is enabled. |

### SummSlice

Slices data is summarized so that reporting on total entities are fast.

| Parameters | Defaults | Description                                                       |
| ---------- | -------- | ----------------------------------------------------------------- |
| Enable     | TRUE     | Fine grained daily summary calculation of per group disk storage. |

### CacheBuild

Database optimizer task to pack frequently used keys to speed up long range time series operations.

| Parameters  | Defaults | Description                                                             |
| ----------- | -------- | ----------------------------------------------------------------------- |
| Enable      | TRUE     | Archiving is enabled                                                    |
| TopKeyCount | 25       | The top 25 keys in each metric can be selected for faster retrieval     |
| InKeyCount  | 100      | In addition to the toppers, these many keys can be selected for caching |

### ResolveIP

This section controls the automatic IP address resolver.

How IP Address resolution works

- Runs at fixed intervals automatically, typically every 15 minutes or so.
- In Packet Capture mode , all IP address to hostnames are harvested fromDNSpackets automatically
- In Netflow mode , the most important IP addresses that appears in “topper lists” are resolved usingDNSlookup.

```xml
<ResolveIP>
        <Enable> True </Enable>
        <Debug> True </Debug>
        <Candidates>
            <Internal>100</Internal>
            <External>25</External>
        </Candidates>
        <AlwaysRefreshInternal>false</AlwaysRefreshInternal>
        <AlwaysRefreshExternal>false</AlwaysRefreshExternal>
 </ResolveIP>
```

| Parameters            | Defaults | Description                                             |
| --------------------- | -------- | ------------------------------------------------------- |
| Enable                | TRUE     | Most important / visible IPs are resolved usingDNSlookup                                                                                                                 |
| Debug                 | TRUE     | Prints resolved IPs for debugging purposes in`t_resolveip.log`file    |
| Candidates            |          | Number of Top-K items per meter for Internal IPs vs External IPs. Internal IPs are those which fall into your Home Network                                                 |
| AlwaysRefreshExternal | false    | Do a full refresh of External IPs. Normally, the resolver does not keep trying to resolve IPs that fail to resolve or those IPs which have already been recently resolved. |
| AlwaysRefreshInternal | false    | Do a full refresh of Internal IPs. Use this option if you have an enterprise with dynamically changing IP → User names.                                                    |

### CleanPersist

The persist storage area collects key related information – such as IP to host name mappings etc. Over a long period of time this can grow to huge proportions. The*CleanPersist*process prunes this storage area by randomly deleting 2% of keys each run.

| Parameters | Defaults | Description          |
| ---------- | -------- | -------------------- |
| Enable     | TRUE     | Archiving is enabled |

### CatTrf

A database packer algorithm to speed up database reads and to defragement files.

| Parameters | Defaults | Description          |
| ---------- | -------- | -------------------- |
| Enable     | TRUE     | Archiving is enabled |

### Rebucketizer

When Rebucketizer is enabled, data is repartitioned into resolutions of optimal sizes to optimize data distribution across large number of data points. Upon repartitioning the average of the repartitioned data are taken for data points. This improves analysis performance and reducing data skew. So you get a rebalanced data by redistributing it into more evenly sized buckets.


```xml
<Rebucketizer>
        <Enable> True </Enable>
		<Resolutions>
			<Resolution>
				<ID>1</ID>
				<BucketSize>300</BucketSize>
				<TopperBucketSize>900</TopperBucketSize>
				<ThresholdDays>1</ThresholdDays>
			</Resolution>
            <Resolution>
				<ID>2</ID>
				<BucketSize>1800</BucketSize>
				<TopperBucketSize>900</TopperBucketSize>
				<ThresholdDays>7</ThresholdDays>
			</Resolution>
            <Resolution>
				<ID>3</ID>
				<BucketSize>7200</BucketSize>
				<TopperBucketSize>900</TopperBucketSize>
				<ThresholdDays>28</ThresholdDays>
			</Resolution>
            <Resolution>
				<ID>4</ID>
				<BucketSize>86400</BucketSize>
				<TopperBucketSize>900</TopperBucketSize>
				<ThresholdDays>360</ThresholdDays>
			</Resolution>
		</Resolutions> 
	</Rebucketizer> 
```

| Parameters | Defaults | Description          |
| ---------- | -------- | -------------------- |
| Enable     | TRUE     | Rebucketizer is enabled |
| ID         | 1        | Unique identifier for each configuration or bucket |
| BucketSize | 300      | The size of the bucket in seconds   |
| TopperBucketSize | 900 | The size of the topper bucket in seconds  |
| ThresholdDays | 1 | The threshold(in days) for moving data between buckets |

So here by default, for ID=1, the bucket size for 1 day is partitioned into 5 minutes(300 seconds) interval and the topper bucket size for 1 day is partitioned into 15 minutes (900 seconds) interval and so on.


## IPDR

These parameters are for the IPDR Service. IPDR is the IP Detailed Record logging service. This is a mode of storing very large number of raw flows for compliance and query purposes.


:::tip Set automatically
These parameters are typically set automatically when you put Trisul in the IPDR mode. 
:::


| Parameters | Defaults | Description |
| ---------- | -------- | -------------------- |
| OutputDirectory | CONTEXTROOT/run | Directory where theIPDRrecord query result is dumped|
| ControlDB       | CONTEXTROOT/config/IPDRCONTROL.SQDB | The control database location|
| ReportFormat    | full | The format of theIPDRrecords. Available values are<br/><br/> `full` – The full record in columnar report format<br/> `fullcsv` – Full report in CSV format<br/> `trai` – Format for TRAI |
| AddCustomerInfo | true | Add the information from the IPDR Static IP customer mapping |
| AAADumpFilePath | CONTEXTROOT/run/aaadumpfiles | The place where the RADIUS AAA server dumps the currently active sessions |
| SubscriberOption | | Add Subscriber ID or other ISP specific tag , this is taken from the RADIUS AAA log files |
| MaxRecords | 250,000 | When using the *Request Full Database Dump* this parameter controls the maximum number of records dumped.  | 

## Advanced DB Parameters

Database parameters to optimize. Generally these need to be only changed for very large deployments which are facing significant performance issues.

The following table lists some parameters that might be useful.

Under the node : DBParameters > FlowStream

| Parameters                 | Defaults | Description                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MicroSecondTimestamps      | TRUE     | Does the flow database need microsecond timestamps. Use case : Compliance for large flow stores. Disabling microsecond timestamps for start and end time can save about 8 bytes / per flow                                                                                                                                                                                                                                                        |
| ZFLOWBLOCK_COMPRESSOR_CODE | lz4      | The compressor type for the flow database. Available parameter values are<br/><br/><br/>- lz4<br/><br/>- lz4-fast16 : Advanced compression use only if necessary. Also supported lz4-fast5, and lz4-fast10<br/><br/>- lz4-ipv4-call-log-with-nat-pro : Use this for IPv4 onlyIPDRapplication withNATIP. Max compression<br/><br/>- lz4-ip-call-log-with-nat-pro-max : For both IPv4 and IPv6 withNATIP, Port, userid for full log<br/><br/> |
| kFLOWS_PER_BLOCK           |          | The number of flows per block. Default 4096                                                                                                                                                                                                                                                                                                                                                                                                       |
| kBLOOM_AGG_SIZE            |          | The number of flow blocks per bloom filter.                                                                                                                                                                                                                                                                                                                                                                                                       |
| kBUMPX_AGG_SIZE            |          | The number of flow blocks per full bitmap filter index.                                                                                                                                                                                                                                                                                                                                                                                           |
