# Trisul Probe Configuration File

All configuration parameters for each Trisul Probe is stored in a single XML main configuration file called `trisulProbeConfig.xml`. 

This file exists on **every Trisul Probe node** and controls how packet data is captured, processed, and stored.

At this point, Trisul is already installed and the probe is operational. You are here to review or adjust **probe-side behavior**, typically related to packet capture, retention, reassembly, IDS inputs, or performance tuning.

### Configuration File Location  
The default location of the Probe configuration file is:

```
/usr/local/etc/trisul-probe/domain0/probe0/context0/trisulProbeConfig.xml
```

For context named `data1` the path would be:  
```
…probe0/context_data1/trisulProbeConfig.xml
```

:::caution

Root privileges are required to edit this file

:::

:::note

Also see [trisulHubConfig.xml](/docs/ref/trisulhubconfig) for editing Hub node parameters 

:::

## Configuration Sections

The Probe configuration file is organized into logical sections.
Each section controls a specific part of the probe’s packet processing and analytics pipeline.

Click on a section to view the parameters defined within it.

| Section         | What part of trisul does it configure                   |
| --------------- | ------------------------------------------------------- |
| App             | The trisul running process                              |
| Logging         | Logging policy – file sizes and rotation                |
| Ring            | Full content storage and retention policy               |
| Reassebly       | TCPreassembly and advanced metering                    |
| File Extraction | Configure File Extraction                               |
| IDS Alerts      | Unix sockets for accepting Unified and Unified2 alerts  |
| Offline Import  | For importing large pcap dumps (mostly used for testing |
| Tuning          | Tuning packet processing pipeline                       |
| Edges           | Options related to the Graph Analytics                  |

## App

Settings for the Trisul daemon process

:::note

Commonly modified parameters are `Setuid`, `TrisulMode`, `LicenseFile`

:::

| Parameters           | Defaults                                                   | Description     |
| -------------------- | ----------------------------------------------------------------------- | ---------------------- |
| user                 | trisul.trisul                                                                     | Which user/group should Trisul run as after dropping root privileges.   |
| TempFolder           | /tmp                                                                              |  Temporary directory used by Trisul for intermediate and temporary files during processing. |
| DBRoot               | /usr/local/var/lib/trisul-probe/domain0/probe0/context0                           | The base directory under which Trisul stores all its data.   |
| UsageRedMark         |                                                                                   | Generate an alert when disk usage on this probe node cross this percent value. Leave blank or set to 0 to disable disk usage alerts     |
| ConfigDB             | /usr/local/var/lib/trisul-probe/domain0/probe0/context0/ config/TRISULCONFIG.SQDB | Location of the configuration database.  |
| PluginsLibDirectory  | /usr/local/lib/trisul-probe/plugins                                                     | Where Trisul looks for dynamic (called so) plugins   |
| PluginsConfDirectory | /usr/local/etc/trisul-probe/domain0/probe0/context0                              | Where Trisul looks for additional configuration files and server certificates (for TRP).     |
| BinDirectory | /usr/local/bin | Directory where Trisul looks for executable binaries.  |
| DataDirectory | /usr/local/share/trisul-probe      |  Directory where Trisul stores shared application data and supporting data files.        |
| ProbeID              | SE-LINK                                                                           | A mnemonic to identify this instance of Trisul, this string is reported via TRP.              |
| ProbeDesc            | Trisul Probe monitors the S-E link traffic only                                   | A short description of this instance of Trisul.     |
| PidFile              | /usr/local/var/lib/trisul-probe/domain0/probe0/context0/run/trisul-probe.pid                                                     | File where Trisul stores the process id of the current running instance.      |
| RunStateDirectory    | /usr/local/var/lib/trisul-probe/domain0/probe0/context0/run                       | Volatile data for current run stored here      |
| PluginsDataDirectory |/usr/local/share/trisul-probe/plugins                                                 | Where Trisul looks for plugin configuration data.      |
| TrisulMode           | NETFLOW_TAP                                                                              | This determines whether you run Trisul in raw packets mode or Netflow mode. TAP Processes all raw packets from the selected network adapters. NETFLOW_TAP Processes Netflow packets |
| ValidTrisulModes     | TAP,NETFLOW_TAP                                                                   | Unused – just a hint for the previous parameter.        |
| LicenseFile          | /usr/local/etc/trisul-probe/LicenseKey.txt                                        | Location of the license file.  |
| ReportsDirectory     | /usr/local/var/lib/trisul-probe/domain0/probe0/context0/reports                                                                       | The directory where DDoS reports are stored in Netflow mode                |

## Domain

| Parameters     | Defaults                  | Description     |
| -------------- | ------------------------- | ----------------------- |
| Hub | hub0 | Specifies the Hub instance to which this Probe context connects.                          |
| Config | config0            | Specifies the configuration instance used by this Probe context.          |
| Hub (HAPair) |             | Specifies the Hub HA pair configuration used when the Probe is connected to a high-availability Hub pair.           |
| HealthCheckSeconds | 300 |  Interval, in seconds, between Hub health checks.            |
| FlushTimeoutUsecs | 100000 | Maximum time, in microseconds, that the Probe waits for a flush operation to complete.           |
| FlushRetries | 40     | Number of times the Probe retries a failed or timed-out flush operation.                |

## Logging

Configures logging and rotation of the probe process`trisul`

| Parameters     | Defaults                  | Description     |
| -------------- | ------------------------- | ----------------------- |
| Logdir         | /usr/local/var/log/trisul-probe/domain0/probe0/context0 | Where the log files are stored.  |
| Logfile        | ns-???.log                | Log file pattern. The default is `ns-001.log`, `ns-002.log`, etc.   |
| Loglevel       | DEBUG                     | All messages higher than this level are logged. The available log levels in order of severity (most severe one first is).<br/>**EMERG<br/>FATAL<br/>ALERT<br/>CRIT<br/>ERROR<br/>WARN<br/>NOTICE<br/>INFO<br/>DEBUG**: Recommended default level |
| LogRotateSize  | 5000000                   | Size of each log file is allowed to grow to this size before Trisul moves to the next file. |
| LogRotateCount | 5                         | The number of files in the log ring, oldest files will be rotated.     |
|PacketTrailMB | 0  | Size limit, in megabytes, for the packet trail used for diagnostic packet tracing. Set to 0 to disable packet trail storage.                       |

## Ring

Full content storage policy.

The Ring section allows you to control.

- How big each full content file gets

- How many such full content files are in a slice

- How many slices in operational, reference, and archive areas

- Passphrase file (the content files are AES-128CTR mode encrypted)

- Flow rules for content trimming 

| Parameters                | Defaults                                      | Description   |
| ------------------------- | --------------------------------------------- | ----|
| Enabled                   | False                                         | Setting this to False will disable all options below, full content will not be saved. |
| BaseDir                   | /usr/local/var/lib/trisul-probe/domain0/probe0/context0/caps  | Parent directory under which full content files are saved. |
| BaseDiskname              |               | Base disk or storage location used for full-content packet capture files.                              |
| Encryption                | AES-128-CTR                                   | The encryption cipher. Currently supported modes are AES-128-CTR and NONE. Specify NONE to disable encryption of raw packet storage.  |
| PassphraseFile            | /usr/local/etc/trisul-probe/domain0/probe0/context0/ringpass.txt| The encryption passphrase for the full content files.|
| FilePrefix                | RCF_                                          | Content files are called RCF_001.triscap, RCF_001.triscap, etc.. This options allows you to change the RCF_ part.    |
| FileSizeMB                | 1000                                           | Size of each full content file in megabytes.<br/>Maximum allowed value = 8000 (8GB). If you specify a size greater than this limit, Trisul will ignore it and use 8GB as the value.  |
| EnableDDosNetflowTapTrail |                                               | Set this to TRUE to enable the DDoS Ring mechanism. Enables the DDoS NetFlow/TAP trail mechanism for storing packet or flow trail data associated with DDoS analysis. |
| SyncSeconds               | 60                                            | Diagnostic use only.|
| SysStatsUpdateSecs        | 2                                             | Diagnostic use only. |
| DefaultMode               | FULL                                          | To cut down on full content data, Trisul allows you to apply a variety of policies. The supported modes are<br/>FULL Everything is saved This is the default mode<br/>FLOWCAP10M Only first 10MB of each TCP flow is saved.<br/>FLOWCAP1M Only first 1MB of each TCP flow is saved.<br/>FLOWCAP100K Only first 100KB of each TCP flow is saved.<br/>FLOWCAP10K Only first 10KB of each TCP flow is saved.<br/>HEADERS Only headers are saved, typically upto the TCP/UDP layer<br/>IGNORE Nothing is saved |

## Rule Chain

Rule chains are used to control full packet storage policies.

:::note

If you desire even more fine grained control of packet storage policy on a per-flow basis, see the [Packet StorageLUAScript](/docs/lua/packet_storage) type.

:::

- Each rule is an expression in the [Trisul filter format](/docs/ref/trisul_filter_format)

- Treatment of each packet is one of : Store full packet, Store header, or Ignore

- The first rule to match determines the treatment given to the packet

- If no rule matches, the treatment specified in the *DefaultMode* parameter is applied

**Rule mode=“FULL”**

If present, packets which match this rule get stored completely.

**Rule mode=“FLOWCAP10M”**

If present,

- packets which match this rule and
- belong to a flow which has transferred less than 10MB bidirectionally get stored fully.

**Rule mode=“FLOWCAP1M”**

If present,

- packets which match this rule and
- belong to a flow which has transferred less than 1MB bidirectionally get stored fully.

**Rule mode=“FLOWCAP100K”**

If present,

- packets which match this rule and
- belong to a flow which has transferred less than 100KB bidirectionally get stored fully.

**Rule mode=“FLOWCAP10K”**

If present,

- packets which match this rule and
- belong to a flow which has transferred less than 10KB bidirectionally get stored fully.

**Rule mode=“HEADERS”**

If present, packets which match get only their headers stored. The headers include at least the Ethernet/IP/TCP/UDP layers.

**Rule mode=“IGNORE”**

If present, packets which match get ignored (sent to `/dev/null`).


## SlicePolicy

Controls how much of raw packet data is stored. There are three areas `oper`,`ref`, and `archive`. The packet slices are always written in `oper` then slide into `ref`, `archive`, and then deleted as specified by the SlicePolicy below.

**Oper**

|            |     |                                                                                                     |
| ---------- | --- | --------------------------------------------------------------------------------------------------- |
| SliceCount | 8  | Number of operational slices. The size of each slices is fixed as specified by FileSizeKB parameter |
| UsageRedMark | 90 |  Generate an alert when disk usage exceeds this percentage. Leave blank or set to 0 to disable disk usage alerts.               |

**Reference**

|            |     |                                                                                            |
| ---------- | --- | ------------------------------------------------------------------------------------------ |
| SliceCount | 8  | Number of reference slices. Setting this to zero will move slices straight to the archive. |
| UsageRedMark | 90 | Generate an alert when disk usage exceeds this percentage. Leave blank or set to 0 to disable disk usage alerts.                |

**Archive**

|            |     |                                                                                                     |
| ---------- | --- | --------------------------------------------------------------------------------------------------- |
| SLiceCount | 0   | Number of archive slices. If you set this to 0, slices move directly to `/dev/null` (ie are deleted). |
| UsageRedMark | 90 |  Generate an alert when disk usage exceeds this percentage. Leave blank or set to 0 to disable disk usage alerts.               |


## Calculating Slice Counts

`slicePolicy` specifies how many files you want to keep in each of the three areas. The size of each file is capped by the FileSizeKB parameter.

**Example**  
You want this policy :

- Each Slice file is 1GB
- Store 20GB in the operational area (maybe you have limited SSD or RAID5)
- Store 500GB in the reference area
- Store 1TB in the archive

Then the SliceCounts will be 20, 500, 1000 for the `operational`, `ref`, `archive` areas.

## Reassembly

Controls how Trisul handles IP fragmentation and TCPreassembly.

**IPDefrag**

| Parameters | Defaults    | Description   |
| ---------- | ----------- | ------------------------------ |
| Enabled    | False | Reassembles IP fragments. This is disabled by default due to the CPU and Mem load it can place on Trisul on busy links. The values are:<br/>- **True**<br/>    Full IP reassembly is enabled. Use this on light<br/>    links or if you suspect IP fragmentation on busy links<br/>- **MetricsOnly**<br/>   Do not perform reassembly but collect metrics <br/>   about fragmentation in the Aggregates counter<br/>   group under the key ipfrag. This is the default option<br/>- **False**<br/>   Completely disable IP Defragmentation. Simply<br/>   ignore IP fragments. Use this on busy links |

## TCPFlowTrack

Flow tracking keeps track of how much data has been transmitted in either direction in a single TCP flow.

- Required for flow based full content storage policy (like storing first 1M of each flow)
- Required for TCPReassembly
- Required for all reassembly based applications like XFFDeproxy, URILog, Content Type meters, etc

| Parameters | Defaults | Description     |
| ---------- | -------- | ------------------------------------------------ |
| Enabled    | TRUE     | True or False values.       |
| HiWater    | 80000    | Hi water mark for number of simultaneous flows that can be tracked. If the number of simultaneous active flows exceeds the high water mark, Trisul will prune the **oldest** active flows until the number of flows goes one below the low water mark. |
| LoWater    | 60000     | Lo water mark for TCP flow pruning. See explanation for HiWater.      |

## TCPReassembly

Controls TCPReassembly.

- Required for all reassembly based applications like XFFDeproxy, URILog
- Required for reassembly based meters like HTTP Content Types, HTTPHosts, URLFilter, etc

| Parameters   | Defaults | Description                                 |
| ------------ | -------- | -------------------------------------------- |
| Enabled      | True     | True or False values     |
| MaxBytes     | 0        | Maximum amount of TCP payload data, in bytes, that can be reassembled for a flow. Set to 0 to use the default behavior without an explicit byte limit.                              |
| KickoffBytes | 5000     | Some meter within Trisul must express an interest in reassembled data for a given flow before this limit is reached. Otherwise reassembly is stopped at this point for this flow.                                                                     |
| Ports        |          | - Specifies which TCP ports Trisul should explicitly reassemble traffic for.<br/> - By default, this field is left empty. In that case, Trisul uses protocol heuristics to identify applications and perform reassembly without relying on port numbers. <br/>- If you want to restrict reassembly to specific ports, provide a comma-separated list of port numbers (for example: 80, 443, 22, 21, 3000). Only traffic on these ports will then be reassembled. |
| Direction    | INOUT    | Options:<br/>**IN**<br/>  Only the IN direction; direction of first SYN+ACK is reassembled<br/>**OUT**<br/>  Only the OUT direction; direction of initial SYN is reassembled<br/>**INOUT**<br/>  Both directions are reassembled         |

## Applications

Some advanced applications.

Since these applications depend on the TCPReassembly feature, they are resistant to TCPfragmentation evasions.

| Parameters                | Defaults | Description     |
| ------------------------- | -------- | -------------------------- |
| EnableXFFDeproxy          | True     | Useful in a corporate environment with web proxies. If set to true, Trisul can deproxy web traffic by looking at the X-Forwarded-For HTTP header. The actual IP is substituted for all metering and flow analysis instead of the proxy’s IP. |
| EnableURILog              | True     | Logs all HTTP URLs requested. These URLS show up as Resources in Trisul where they are correlated and made searchable.    |
| EnableHostMeter           | True     | Add traffic metering by HTTP Host header. The net effect of enabling this is that the HTTP Host counter group is made active.            |
| EnableContentTypeMeter    | True     | Add traffic metering by HTTP Content-Type header. Activates the HTTP Content Type counter group.  |
| EnableSSLCertLog          | True     | Logs all SSL certificate chains                                       |
| EnableHTTPFTS             | True     | Full Text Search (FTS) enabled for all HTTP Headers seen              |
| EnableSSLFTS              | True     | FTS enabled for all SSL Certificates seen                                         |
| EnableFTPTrack            | True     | Tracks FTP data session by matching the corresponding control flows         |
| EnableSSLRecordExtraction | False    | If you want access to the raw TLS Protocol PDUs. If set to “True” ; Trisul will generate “TLS:RECORD” callbacks you can hook on to in the Reassembly engine. Unless you are working deep with TLS you typically can leave this as False.     |
| LogFullCertChain |    True               | Controls whether the complete SSL/TLS certificate chain is logged when SSL certificate logging is enabled.                |

## File Extraction

Controls the HTTPfile extraction feature.

:::note

Need tempfs partition :  If you enable File Extraction you also need to create a special in-memory **TMPFS** partition (also known as **RAMFS** partition). <br/>Quickest way to create this is to use `trisulctl_probe createramfs probe0 default`. A 100MB partition would suffice for loads < 1Gbps. For more read [File ExtractionLUAAPIin detail](/docs/lua/fileextractoverview) 

:::

| Parameters  | Defaults            | Description            |
| ----------- | ------------------- | ------------------------------------------ |
| Enabled     | False               | Feature is enabled or not  |
| RamFsDir    | /usr/local/var/lib/trisul-probe/domain0/probe0/context0/run/ramfs | The directory mounted on the TMPFS file system         |
| AutoDelete  | True                | The tmpfs file system is automatically cleaned as the files are processed by the LUA script framework. Set this to False for debugging purpose only or if you take control of deleting the filesystem from your LUA scripts |
| ChunkSizeMB | 5                   | For large files your LUA script will be handed chunks of this size. Tweak this based on how much RAM you can allocate to the tmpfs filesystem                |

## IDS Alerts

Controls how security alerts from Snort/Barnyard are handled

| Parameters                     | Defaults         | Description    |
| ------------------------------ | ---------------- | ----------- |
| Enabled                        | True             | Enables this feature   |
| UnixSocket                | /usr/local/var/lib/trisul-probe/domain0/probe0/context0/run/snort_alert | Trisul opens this unix socket and listens for alerts. The default socket name is `snort_alert` for Unified events from Snort, and `barnyard2_alert` for Unified2 events from Barnyard2. <br/> The directory name is passed to snort or barnyard2 via the `-l` parameter <br/> **Multiple sockets :** You can add any number of `<SnortUnixSocket>` elements to listen to multiple sockets at once. |
| SnortVersion | 2.9+ | Specifies the Snort version whose alert format is expected by the Probe.              |
| SnortConfigFile | /etc/snort/snort.conf | Path to the Snort configuration file used by the Snort installation generating alerts.  |
| GenerateDDosReport             |                  | Set this to TRUE to trigger Trisul Probe to generate a DDoS report on certain TCA firing. Enables generation of a DDoS report when the configured TCA condition is triggered.|
| DDosReportTopCount             |             | By default 100 top items are included in the DDoS report. Number of top items to include in the generated DDoS report.  |
| DDosReportWindow>PastSeconds   |            | By default, include in the report 2 minutes prior to the DDoS attack trigger. Number of seconds before the DDoS trigger time to include in the generated report. |
| DDosReportWindow>FutureSeconds |               | By default, include in the report 1 minutes after the DDoS attack trigger. Number of seconds after the DDoS trigger time to include in the generated report. |

## OfflineImport

Controls aspects ofPCAPfile import.

| Parameters          | Defaults | Description   |
| ------------------- | -------- | ---------- |
| LoopCount           | 1        | Used for testing. Runs the same capture file/directory this many time past Trisul. Each run is appended time-wise to the end of the previous run. This is used internally by us to generate months of data from a few days of capture by repeating them over and over.      |
| AppendMode          | FALSE    | Appends the run to the previous runs time-wise. The packet time stamps in the capture file are offset by the last time of the previous run.                         |
| InterfileGapSecs    | 60       | When importing multiple files, this option puts a gap of this many seconds between each file. There is no purpose of this option other than to view a gap in the charts representing the capture files.     |
| AutoSortByCaptime   | TRUE     | When TRUE, the candidate capture files are sorted by time order (earliest to latest), and then imported into Trisul. When FALSE, the files and subdirectories are processed in alphabetical order.     |
| AddEthernetFCS      | FALSE    | If set to true, will add 12 bytes to every ethernet packet to account for FCS               |
| SkipFirst | | Number of packets or records to skip at the beginning of each imported capture file.  |

## TimerJump

| Parameters               | Defaults | Description                                      |
| ------------------------ | -------- | ---------------------------------------------------------------------- |
| MaxJumpForwardSecs | 50 | Maximum forward jump in packet or capture time, in seconds, that Trisul accepts before applying timer-jump handling.                 |
| IgnoreJumpOnStartup | True | Controls whether a time jump detected during startup is ignored.              |

## Edges

Controls the streaming graph analytics part of Trisul

| Parameters      | Defaults | Description                      |
| --------------- | -------- | -------------------------------- |
| Enable        | false     | Enables/Disables this feature             |
| EnableFlowEdges | false     | Do you want edge vertex data to be generated for every flow? For very large networks, consider disabling this option.		   |

## Tuning

Fine tune the packet processing pipeline for peak performance.

| Parameters               | Defaults | Description                                      |
| ------------------------ | -------- | ---------------------------------------------------------------------- |
| AnalysisQueueCapacity    | 1000000  | Queue size for frontend packet stream to backend analytics stream   |
| PcapQueueCapacity        | 5000     | Queue for disk packet storage   |
| FeedbackQueueCapacity    | 1000000  | Queue size of backend to frontend (reverse/feedback) stream   |
| PcapRAIDStripeSize       | 1048576  | Sequential writes of this size.                                               |
| GrainSize                | 256       | Number of packets to process in a batch. You can increase this value if you have a CPU with a large L1/L2 cache. If the entire batch fits in cache memory – it can increase concurrency – and decrease drops.  |
| SpongeWindow             | 1        | A key internal data structure parameter to help with multicore.<br/>Number of seconds a single core must accumulate before synchronizing. In most cases, leave this alone.     |
| InflightTokens           | 2        | Number of work items in parallel. Maps to number of hardware threads you want to give to trisul.    |
| TCPReassFilters          | 2        | Number of TCPFilters – Trisul will hash and load share. Typically matches the number of InflightTokens  |
| CoreAffinityNet          |          | CPUcores you want you pin the packet processing threads to. Use “1,2,4” to pin to CPUCores 1,2,4 |
| CoreAffinityRAID         |          | CPUcores allowed to do disk writes for packet storage                                            |
| CoreAffinityAnalysis     |          | Currently unused                                                                                 |
| FBQDrainChunkSize        | 100      | Controls how fast an internal data structure called the Feedback Queue is drained                |
| BatchBufferBytes | 65536 | Size, in bytes, of the internal buffer used for batching packet-processing work.               |
| BroadcastChannel | inproc://trisul_broadcast | Internal in-process messaging channel used by Trisul components to broadcast events or control messages.                                       |
| FlowMemcapPolicy         | FLEXIBLE | Determines how Trisul copes under severe load. This can happen on a very busy network or under a DDoS attack against Trisul itself or elsewhere on the network. Trisul detects this condition when Hi Water marks are crossed for counters or flows.<br/>The available options are :<br/>`FLEXIBLE`: Trisul is not too rigid about the Hi Water mark, it allows usage to grow beyond the high water mark within the streaming window (1-minute)<br/>`FIXED`: When a Hi Water mark is hit, no*new*counters are flows are accepted. Existing ones are metered as usual. At the next flush interval, the counters or flows are pruned down to the low water mark and things proceed as usual |
| StreamingWindowMSecs     | 60000    | The streaming window in milliseconds. The default value is 1 minute. Do not change this unless you have a very good reason          |
| DisableFlowTupleFeedback | false    | Flow tuple feedback is a feature in Trisul that allows you to measure per-IP and per-APP connection metrics. This can be overkill for some environments like ISP’s who deal with millions of flows/sec. Disable this in those environemts. We also suggest disabling this option when the FeedbackQueue (FBQ) sees pressure leading to spiky IP and App flow connection metrics.         |
| MaxTCARangeAlerts        | 100      | When using TCA range alerts (see [TCA](/docs/ug/alerts/tca#tca-configuration) generate only these many alerts. The reason we need a safety cap on this feature is an incorrect configuration with a TCA range can result in uncontrolled alerts (eg when any IP crosses 1Kbps). For safety we have chosen a cap or 100             |
| EnableHalfNAT |   | Enables Half-NAT tracking and processing for environments where only part of the NAT translation information is available.                         |
| HalfNATDebugTrace |          | Enables debug tracing for Half-NAT processing and mapping operations.              |
| HalfNATMapActiveWindowSeconds |        | Duration, in seconds, for which an inactive Half-NAT mapping remains in the active mapping table.     |
| HalfNATTCPTimeout  |          | Timeout, in seconds, after which an inactive Half-NAT TCP mapping is considered expired.       |
| HalfNATUDPTimeout    |        | Timeout, in seconds, after which an inactive Half-NAT UDP mapping is considered expired.         |                 

