# Trisul Hub Configuration File

This page documents the **Trisul Hub configuration** file, which controls how the Hub stores data, manages retention, runs background database tasks, and exposes query services.  

At this point, Trisul is already installed and operational.
You are here because you need to **inspect or adjust Hub-level behavior**, typically for storage planning, retention tuning, logging, or large-scale deployment optimization.

## Overview

All Hub configuration parameters are defined in a single XML file named `trisulHubConfig.xml`.

**Configuration File Location**   
The default location of the Hub configuration file is:
```
/usr/local/etc/trisul-hub/domain0/hub0/context0/trisulHubConfig.xml
```

For context named **data1** the path would be 
```
…hub0/context_**data1**/trisulHubConfig.xml*
```

:::caution 

Root privileges are required to edit this file

:::

:::note

Also see [trisulProbeConfig.xml](/docs/ref/trisulconfig)for editing Trisul Probe parameters

:::

### Configuration Sections

The Hub configuration file is organized into logical sections. Each section controls a specific part of the Hub’s behavior.

Click a section below to view the parameters defined within it.

| Section     | What part of trisul does it configure                   |
| ----------- | ------------------------------------------------------- |
| App         | Core Hub process behavior and basic runtime setup                           |
| Logging     | Log generation for Hub services, including rotation, size limits, and log levels                |
| StatsEngine | Database cluster tuning                                 |
| Server      | TRP server settings used for query handling                               |
| Probes      | List of probes allowed to connect and mapping to layers |
| [IPDR](#ipdr) | IPDR flow collection and compliance-related processing        |
| DBTasks     | Background database jobs such as cleanup, archiving, and rollups         |


## App

:::note

Commonly modified parameters are `Setuid`, `TrisulMode`, `LicenseFile`

:::

| Parameters    | Defaults                | Description                                                                                                                                                                                   |
| ------------- | ---------------------- | ------------------------------------------------------------------ |
| User          | trisul.trisul                                                              | Which user/group should trisul run as after dropping root privileges.                                                                                                                         |
| TempFolder    | /tmp                                                                       |                                                                                                                                                                                               |
| DBRoot        | /usr/local/var/lib/trisul-hub/ domain0/hub0/context0                       | The base directory under which Trisul stores all its data.                                                                                                                                    |
| TrafficDBRoot | /usr/local/var/lib/trisul/domain0 /hub0/context0/meters                    | The directory under which Trisul stores traffic and flow statistics.                                                                                                                          |
| ConfigDB      | /usr/local/var/lib/trisul/ domain0/hub0/context0/ config/TRISULCONFIG.SQDB | Location of the configuration database.                                                                                                                                                       |
| BinDirectory  | /usr/local/bin                                                             | Where trisul looks for executable binaries                                                                                                                                                    |
| DataDirectory | /usr/local/share/trisul-hub                                                | Data files                                                                                                                                                                                    |
| LicenseFile   | /usr/local/etc/trisul-hub/LicenseKey.txt                                   | Location of the license file.                                                                                                                                                                 |
| DebugMode     | false                                                                      | Debug mode is used when trying to develop LUA probe scripts. If `DebugMode == True` then all streaming metrics from all probes are just sunk to `/dev/null`. Hence this is used for probe testing |

## Logging

Logs are arranged in a ring of files, with patterns like `fs`, `ns`, `is` etc.

| Parameters           | Defaults                  | Description      |
| ---|---|---|
| Logdir               | /usr/local/var/log/trisul | Where the log files are stored. |
| Logfile              | ns-???.log                | Log file pattern. The default is `ns-001.log`, `ns-002.log`, etc.|
| LogRotateSize        | 5000000                   | Size of each log file is allowed to grow to this size before Trisul moves to the next file.|
| LogRotateCount       | 5                         | The number of files in the log ring.|
| FlusherLogFile       | fs-???.log                | log file pattern.|
| FlusherLogLevel      | DEBUG                     | All messages higher than this level are logged. The available log levels in order of severity (most severe one first is).<br/>**EMERG**<br/>**FATAL**<br/>**ALERT**<br/>**CRIT**<br/>**ERROR**<br/>**WARN**: this level after a few weeks of smooth running<br/>**NOTICE**<br/>**INFO**<br/>**DEBUG**: Recommended default level |
| FlusherLogRotateSize | 5000000                   | Max size of each log file|
| FlusherogRotateCount | 5                         | Number of files in ring|
| TrpLogFile           | qs-???.log                | log file pattern.|
| TrpLoglevel          | DEBUG                     | log level|
| TrpLogRotateSize     | 5000000                   | Max size of each log file|
| TrpLogRotateCount    | 5                         | Number of files in ring|
| IpdrdLogFile         | is-???                    | IPDR log file pattern. These parameters are for the IPDR query service|
| IpdrdLoglevel        | DEBUG                     | IPDR service logging level.|
| IpdrdLogRotateSize   | 5000000                   | Max size of each file in bytes|
| IpdrdLogRotateCount  | 5                         | Number of log files|

## StatsEngine

Controls the database storage and retention policy for Trisul.

| Parameters               | Defaults | Description |
| ------------------------ | -------- | -------- |
| FTSFlushBudget           | 5        | Trisul FTS(Full Text Resources) need to complete the Flush operation within these many seconds. Since Trisul is a Real time system, we have a total about about 60 seconds for the entire snapshot window to flush. |
| JournalMode              | WAL      | Trisul Resources are stored in SQLITE3 leaf nodes.|
| OfflineAnalysisQueueSize | 2000000  | When importing PCAPs or other offline formats, this parameter controls the Hi Water mark of the items on the queue of the Hub. This helps to control memory usage on the Hub Node.|

### SlicePolicy

Controls data location and retention policy.

| Parameters  | Defaults | Description                                                                                                                                                             |
| ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SliceWindow | DAILY    | How much data is contained in a single slice. The available choices are :<br/>`HOURLY`: From 00 Min to 59 Min every hour<br/>`DAILY`: From 12:00 AM to 11:59 PM every day |

### Operational

| Parameters   | Defaults | Description|
| ------------ | -------- | ----------- |
| SliceCount   | 32       | 32 slices are kept in the operational area. Combined with the default Slice Window of DAILY. This means 32 days worth of data in the oper area. Slices older than 32 days will slide over to the reference area. |
| UsageRedMark |          | Generate an alert when the disk usage percent exceeds this value for admin purposes. Leave blank or zero to disable disk usage alerting. Default disabled.|

### Reference

| Parameters   | Defaults | Description                                                                                                                                    |
| ------------ | -------- | -------------- |
| SliceCount   | 32       | Controls how many slices are kept in the reference area. If you set this to 0, the slices will then move straight from operational to archive. |
| UsageRedMark |          | Generate an alert when the disk usage percent exceeds this value for admin purposes. Leave blank or zero to disable disk usage alerting        |

### Archive

For long term storage mostly for compliance purposes.

| Parameters   | Defaults | Description                                                                                                                             |
| ------------ | -------- | -------------- |
| SliceCount   | 32       | Controls how many slices are kept in the archive area. If you set this to 0, slices move directly to `/dev/null` (ie are deleted).        |
| UsageRedMark | 95       | Generate an alert when the disk usage percent exceeds this value for admin purposes. Leave blank or zero to disable disk usage alerting |

### Extra archives

An optional feature for advanced users allows for extra archives. For example to be mounted to slower storage. These are disabled by default. Change the name of the node from `ExtraArchives_Disabled` to `ExtraArchives` to activate this feature.

| Parameters | Defaults | Description|
| ---------- | -------- | --------------- |
| ID         | 1        | This ID is used to access the archive mount point. ID of 1 would lead to mount point `xarchive_1` |
| SliceCount | 32       | Number of days data in this extra archive|


### Advanced Archiving

Controls archiving process

|Parameter| Defaults | Description |
| ---------- | -------- | --------------- |
|DeleteIfTargetDirMissing| False | - Used in `HA-Master-Slave` configuration with shared SAN mount point where the cold archive is stored   . In this architecture, both the `HA-Master` and `HA-Slave` store the hot and or warm data but the archive for cold data is mounted in only the current `HA-Master`. <br/>- Set this paramter to true on the `HA-Slave` node, so that if the archive SAN mount point is not available then the slice is deleted. This is correct behavior because the `HA-Master` which has the SAN mounted will use its normal archiving procedure to move data from hot to cold archive|
|OfflineArchiveTag||- Enables offline archives.<br/>- The Trisul Archiver process does not delete entries from its database mapping slices to dates and storage pools. Instead it simply tags them with this label. Set this to `tape` if you want to enable Tape archives. This maps to a `tape` subdirectory in the meters area. |



## Flushers

This section controls how many backend flushers are used. The default number of flushers used by Trisul is TWO. This is an advanced tuning parameter. You can increase the number of flushers up to eight for large to very large deployments of Trisul.

| Parameters     | Defaults | Description        |
| -------------- | -------- | ----------------------------------------- |
| ServerImage    |          | Path to `trisul_flushd`                            |
| PIDFile        |          | Where the PID for the running `trisul_flushd` process is stored        |
| AutoStart      | true     | Automatically start flushd process        
| ControlChannel |          | Internal IPC channel      |
| Flushers       |          | For each flusher instance specify the connection and DB instance number. Sequentially from 0...8 (MAX). See below |

### Flusher Instances

Each `<Flusher>` entry defines **one backend flusher process**. Flushers store data snapshots received from probes into database slices.

The total number of flusher instances must be a multiple of 2. Valid values are **1, 2, 4, or 8**.

A typical flusher configuration looks like this:  

```xml
<Flushers>
    <Flusher>
        <Connection>tcp://192.168.10.12:12001</Connection>
        <DBInstance>0</DBInstance>
    </Flusher>
    <Flusher>
        <Connection>tcp://192.168.10.12:12002</Connection>
        <DBInstance>1</DBInstance>
    </Flusher>
</Flushers>
```

- Connection : A network endpoint, the default single machine endpoint uses IPC, the form of socket is `ipc://` , there is an attribute `dedicated` that can be used to dedicate a flusher to a single probe and a single instance. See next section. 
- DBInstance : 0, 1, 2, etc. 


#### Dedicated to probe connection flusher

In multi probe very high volume environments consider using the `dedicated="probe0"` probe flusher format.

```xml
<Flusher>
    <Connection dedicated="probe0">tcp://192.168.1.2:12003</Connection>
    <Connection dedicated="probe1">tcp://192.168.1.2:12023</Connection>
    <Connection dedicated="probe2">tcp://192.168.1.2:12043</Connection>
    <DBInstance>
        0
    </DBInstance>
</Flusher>
```

The `<Conenection dedicated="probe0">` format sets up a dedicated endpoint for a probe and an instance. Without it, all probes would use the same endpoint and the messaging framework would demultiplex it.  A performance setting. 

## Server

Controls the TRP Server Process used for database querying functionality. The process that provides the query API is called `trisul_trpd@`

| Parameters      | Defaults | Description          |
| --------------- | -------- | -------------------- |
| ZmqConnection   |          | The port running the TRP Protocol where you can connect and query the trisul database. By default, this is an IPC socket <br/>```ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/context0/run/trp_0```. You can change this parameter to allow a remote TCP connection. Example: To allow queries using TCP Port 12004<br/><br/>1. Change this parameter to `tcp://10.0.0.23:12004` where `10.0.0.23`is the IP address of the HUB node <br/><br/>2. Then restart the context like so `trisulctl_hub restart context default@hub0` <br/><br/> |
| PIDFile         |          | Where thePIDof the running trisul_trpd process is stored     |
| NumServers      | 6        | Number of backend servers to start. |
| ParallelQueries | false    | Whether parallel queries must be turned on for all queries. The default is false, use this only when you have the database stored on different spindles.   |

## Probes

Add probes that are allowed to connect to this context.

Each probe is a line with the following details.

| Parameters | Defaults | Description                                             |
| ---------- | -------- | ------------------------------------------------------- |
| Layer      |          | Layer number allocated to the probe.                    |
| ProbeID    |          | Probe ID eg, `probe0` this probe must be authenticated by a CURVE certificate earlier for the domain this hub belongs to. See *trisulctl_hub install probe* |

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
- In Packet Capture mode , all IP address to hostnames are harvested from DNS packets automatically
- In Netflow mode , the most important IP addresses that appears in “topper lists” are resolved using DNS lookup.

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

| Parameters            | Defaults | Description  |
| --------------------- | -------- | -------------- |
| Enable                | TRUE     | Most important / visible IPs are resolved |
| Debug                 | TRUE     | Prints resolved IPs for debugging purposes in `t_resolveip.log` file    |
| Candidates            |          | Number of Top-K items per meter for Internal IPs vs External IPs. Internal IPs are those which fall into your Home |
| AlwaysRefreshExternal | false    | Do a full refresh of External IPs. Normally, the resolver does not keep trying to resolve IPs that fail to resolve or those IPs which have already been recently resolved. |
| AlwaysRefreshInternal | false    | Do a full refresh of Internal IPs. Use this option if you have an enterprise with dynamically changing IP → User names. |

### CleanPersist

The persist storage area collects key related information such as IP to host name mappings etc. Over a long period of time this can grow to huge proportions. The **CleanPersist** process prunes this storage area by randomly deleting 2% of keys each run.

| Parameters | Defaults | Description          |
| ---------- | -------- | -------------------- |
| Enable     | TRUE     | Archiving is enabled |

### CatTrf

A database packer algorithm to speed up database reads and to defragement files.

| Parameters | Defaults | Description          |
| ---------- | -------- | -------------------- |
| Enable     | TRUE     | Archiving is enabled |

### Rebucketizer

When Rebucketizer is enabled, additional shadow timeseries resolutions are added to allow fast retrieval of very long time window data.  In this section, you should specify the resolutions you want added.  

```
<Rebucketizer>
          <Enable>
                False
          </Enable>
          <Resolutions><Resolution>
                      <ID>
                                1
                      </ID>
                      <BucketSize>
                                300
                      </BucketSize>
                      <TopperBucketSize>
                                900
                      </TopperBucketSize>
                      <ThresholdDays>
                                30
                      </ThresholdDays>
                      <TopperClipBelow>0</TopperClipBelow>
                </Resolution>
            <Resolution>
                      <ID>
                                2
                      </ID>
                      <BucketSize>
                                1200
                      </BucketSize>
                      <TopperBucketSize>
                                3600
                      </TopperBucketSize>
                      <ThresholdDays>
                                30
                      </ThresholdDays>
                      <TopperClipBelow>0</TopperClipBelow>
                </Resolution>
            <Resolution>
                      <ID>
                                3
                      </ID>
                      <BucketSize>
                                4800
                      </BucketSize>
                      <TopperBucketSize>
                                14400
                      </TopperBucketSize>
                      <ThresholdDays>
                                30
                      </ThresholdDays>
                      <TopperClipBelow>
                                0
                      </TopperClipBelow>
                </Resolution>
            <Resolution>
                      <ID>
                                4
                      </ID>
                      <BucketSize>
                                28800
                      </BucketSize>
                      <TopperBucketSize>
                                86400
                      </TopperBucketSize>
                      <ThresholdDays>
                                30
                      </ThresholdDays>
                      <TopperClipBelow>0</TopperClipBelow>
                </Resolution>
            </Resolutions>
</Rebucketizer>
```

| Parameters | Defaults | Description          |
| ---------- | -------- | -------------------- |
| Enable     | TRUE     | Rebucketizer is enabled |
| ID         | 1        | Unique identifier for each configuration or bucket. The resolution is stored under `resol.1`  and `resol.2` etc|
| BucketSize | 300      | The size of the bucket in seconds   |
| TopperBucketSize | 900 | The size of the topper bucket in seconds  |
| ThresholdDays | 10 | Use this resolution if the query time window is greater than this number of days |
| TopperClipBelow | 0 | Remove items in topper table if metric value is below this number. The default is 0 , to not clip anything. |

So here by default, for ID=1, the bucket size for 1 day is partitioned into 5 minutes(300 seconds) interval and the topper bucket size for 1 day is partitioned into 15 minutes (900 seconds) interval and so on.


## IPDR

These parameters are for the IPDR Service. IPDR is the IP Detailed Record logging service. This is a mode of storing very large number of raw flows for compliance and query purposes.


:::tip Set automatically
These parameters are typically set automatically when you put Trisul in the IPDR mode. 
:::


| Parameters | Defaults | Description |
| ---------- | -------- | -------------------- |
| OutputDirectory | CONTEXTROOT/run | Directory where the IPDR record query result is dumped|
| ControlDB       | CONTEXTROOT/config/IPDRCONTROL.SQDB | The control database location|
| ReportFormat    | full | The format of the IPDR records. Available values are<br/><br/> `full` – The full record in columnar report format<br/> `fullcsv` – Full report in CSV format<br/> `trai` – Format for DoT |
| AddCustomerInfo | true | Add the information from the IPDR Static IP customer mapping |
| AAADumpFilePath | CONTEXTROOT/run/aaadumpfiles | The place where the RADIUS AAA server dumps the currently active sessions |
| SubscriberOption | | Add Subscriber ID or other ISP specific tag , this is taken from the RADIUS AAA log files |
| MaxRecords | 250,000 | When using the *Request Full Database Dump* this parameter controls the maximum number of records dumped.  | 
| QueryThreadCount |1 | Number of worker query threads to use for IPDR queries, ideal value is the same  _numflushers*numprobes_  This maps to `--threads,-j` parameter in trisul_queryflowstream tool  |
| MACInDeviceID | false| Put the MAC Address in the device ID field which normally contain the router IP |
| BackupSlicesDBRoot || Set this to the root directory of the backup slices area. This is used for querying AAA RADIUS logs which may be kept in the `BackupSlicesDBRoot` area for a duration longer than the normal flow database. 

## Advanced DB Parameters

Database parameters to optimize. Generally these need to be only changed for very large deployments which are facing significant performance issues. The following table lists some parameters that might be useful.

Under the node : `DBParameters > FlowStream`


:::tip Tuning Notes
 * The tuning for FlowStream shown below consists essentially of tweaking the size of the underlying Bloom Filters and Bitmap Index datastructures for hosts, applications, tags etc.
 * All values must be powers of two.  Enter 32768 instead of 32K
 * To disable a particular index enter `0` for the corresponding value
 * To use default just leave the value blank
 * The hash used is Murmur-3 
 * These values can be changed at any time, they are stored on a per-block basis
:::

| Parameter                  | Default  | Type | Description   |
| -------------------------- | -------- | ---  | ---------------------|
| MicroSecondTimestamps      | TRUE     | |Does the flow database need microsecond timestamps. Use case : Compliance for large flow stores. Disabling microsecond timestamps for start and end time can save about 8 bytes / per flow | 
| ZFLOWBLOCK_COMPRESSOR_CODE | lz4      | |The compressor type for the flow database. Available parameter values are<ul> <li>`lz4`</li><li>`lz4-ip-call-log-with-nat-pro-max` : For both IPv4 and IPv6 withNATIP, Port, userid for full log</li><li>`lz4-ip-call-log-with-nat-pro-max-mac` : With MAC ID collection, use only when you are sure MAC ID represent end user terminals</li></ul> |
| kFLOWS_PER_BLOCK           | 4096     | |The number of flows per block. Default 4096                          |
| kBLOOM_AGG_SIZE            | 100      |Bloom Filter |The number of flow blocks per bloom filter.                          |
| kBUMPX_AGG_SIZE            | 500      |Bitmap Index |The number of flow blocks per full bitmap filter index.              |
| kHOST_BUMPX_BUCKETS        | 128K     |Bitmap Index |buckets for IP (hosts)  |
| kHOST_A_BUMPX_BUCKETS      | 128K     |Bitmap Index |buckets for source IP  |
| kHOST_Z_BUMPX_BUCKETS      | 128K		|Bitmap Index |buckets for destination IP |	
| kAPP_BUMPX_BUCKETS         | 4K	 	|Bitmap Index |buckets for port | 
| kAPP_A_BUMPX_BUCKETS       | 4K	    |Bitmap Index |buckets for source port |
| kAPP_Z_BUMPX_BUCKETS       | 4K    	|Bitmap Index |buckets for destination port |
| kPROTO_BUMPX_BUCKETS       | 256		|Bitmap Index |buckets for IP protocols |
| kGEN1_BUMPX_BUCKETS        | 1K		|Bitmap Index |buckets for routers |	
| kGEN2_BUMPX_BUCKETS        | 1K		|Bitmap Index |buckets for ingress router interface  |
| kGEN3_BUMPX_BUCKETS        | 1K		|Bitmap Index |buckets for egress router interface |
| kHOST24_BUMPX_BUCKETS      | 64K		|Bitmap Index |buckets for 255.255.255.0 or /24 prefixes  |
| kHOST16_BUMPX_BUCKETS      | 32K		|Bitmap Index |buckets for /16 prefixes |
| kHOST_BLOOM_BITS           | 128K		|Bloom Filter |num bits for Host IP index |
| kHOST_A_BLOOM_BITS         | 128K		|Bloom Filter |num bits for Source IP |
| kHOST_Z_BLOOM_BITS         | 128K		|Bloom Filter |num bits for Destination IP  |
| kHOST_BLOOM_HASHES         | 3		|Bloom Filter |num hashes for Host IP |
| kHOST_A_BLOOM_HASHES       | 3		|Bloom Filter |num hashes for Source IP|
| kHOST_Z_BLOOM_HASHES       | 3        |Bloom Filter |num hashes for Destination IP  |
| kAPP_BLOOM_BITS            | 64K		|Bloom Filter |bits for port index|
| kAPP_A_BLOOM_BITS          | 64K      |Bloom Filter |bits for source port |	
| kAPP_Z_BLOOM_BITS          | 64K      |Bloom Filter |bits for destination port|	
| kAPP_BLOOM_HASHES          | 1        |Bloom Filter |hashes for ports |
| kPROTO_BLOOM_BITS          | 256      |Bloom Filter |bits for IP protocol-based index |
| kPROTO_BLOOM_HASHES        | 1        |Bloom Filter |hashes for IP Protocol |	
| kGEN1_BLOOM_BITS           | 4096     |Bloom Filter|bits for router indexing|
| kGEN1_BLOOM_HASHES         | 1        |Bloom Filter|hashes for routers 
| kGEN2_BLOOM_BITS           | 4096     |Bloom Filter|bits for ingres interface|
| kGEN2_BLOOM_HASHES		 | 1        |Bloom Filter|hashes for ingress interface |
| kGEN3_BLOOM_BITS           | 4096     |Bloom Filter|bits for egress interface |
| kGEN3_BLOOM_HASHES         | 1        |Bloom Filter|hashes for egress inteface |
| kAUX_BLOOM_BITS            | 32K      |Bloom Filter|bits for flow tags , each tag of a composite tag is indexed|
| kAUX_BLOOM_HASHES          | 3        |Bloom Filter|hashes for flow tags|
| kHOST16_BLOOM_BITS         | 32K      |Bloom Filter|bits for `/16` IP   |
| kHOST16_BLOOM_HASHES       | 3        |Bloom Filter|hashes for `16` IP |
| kHOST24_BLOOM_BITS         | 64K      |Bloom Filter|bits for `/24` IP |
| kHOST24_BLOOM_HASHES       | 3        |Bloom Filter|hashes for `24` IP|
