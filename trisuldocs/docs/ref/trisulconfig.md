# Trisul Probe Configuration File

All configuration parameters for each Trisul Probe is stored in a singleXMLmain configuration file called**trisulProbeConfig.xml**. This file is found on all Trisul-Probe nodes.

```
Location : /usr/local/etc/trisul-probe/domain0/probe0/context0/trisulProbeConfig.xml
```

*for context named data1 the path would be …probe0/context_data1/trisulProbeConfig.xml*

:::caution

Root privileges needed to edit

:::

:::note

Also see[trisulHubConfig.xml](/docs/ref/trisulhubconfig)for editing Hub node parameters 

:::

## Sections

Click on a section to see the config parameters inside that section.

| Section         | What part of trisul does it configure                   |
| --------------- | ------------------------------------------------------- |
| App             | The trisul running process                              |
| Logging         | Logging policy – file sizes and rotation                |
| Ring            | Full content storage and retention policy               |
| Reassebly       | TCP reassembly and advanced metering                    |
| File Extraction | Configure File Extraction                               |
| IDS Alerts      | Unix sockets for accepting Unified and Unified2 alerts  |
| Offline Import  | For importing large pcap dumps (mostly used for testing |
| Tuning          | Tuning packet processing pipeline                       |
| Edges           | Options related to the Graph Analytics                  |

## App

Settings for the Trisul daemon process

:::note

Commonly modified parameters are Setuid, TrisulMode, LicenseFile

:::

| Parameters           | Defaults                                                                          | Description                                                                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user                 | trisul.trisul                                                                     | Which user/group should trisul run as after dropping root privileges.                                                                                                             |
| TempFolder           | /tmp                                                                              |                                                                                                                                                                                   |
| DBRoot               | /usr/local/var/lib/trisul-probe/domain0/probe0/context0                           | The base directory under which Trisul stores all its data.                                                                                                                        |
| UsageRedMark         |                                                                                   | Generate an alert when disk usage on this probe node cross this percent value. Leave blank or set to 0 to disable disk usage alerts                                               |
| ConfigDB             | /usr/local/var/lib/trisul-probe/domain0/probe0/context0/ config/TRISULCONFIG.SQDB | Location of the configuration database.                                                                                                                                           |
| PluginsLibDirectory  | /usr/local/lib/trisul/plugins                                                     | Where trisul looks for dynamic (called so) plugins                                                                                                                                |
| PluginsConfDirectory | /usr/local/etc/trisul-probe/domain0/probe0/context0                               | Where trisul looks for additional configuration files and server certificates (for TRP).                                                                                          |
| PluginsDataDirectory | /usr/local/share/trisul/plugins                                                   | Where trisul looks for plugin configuration data.                                                                                                                                 |
| ProbeID              | SE-LINK                                                                           | A mnemonic to identify this instance of Trisul, this string is reported via TRP.                                                                                                  |
| ProbeDesc            | Trisul Probe monitors the S-E link traffic only                                   | A short description of this instance of trisul.                                                                                                                                   |
| RunStateDirectory    | /usr/local/var/lib/trisul-probe/domain0/probe0/context0/run                       | Volatile data for current run stored here                                                                                                                                         |
| PluginsDataDirectory | /usr/local/share/trisul-probe/plugins                                             | Plugins store data here; eg from downloaded feeds                                                                                                                                 |
| PidFile              | /usr/local/var/run/trisul.pid                                                     | File where trisul stores the process id of the current running instance.                                                                                                          |
| TrisulMode           | TAP                                                                               | This determines whether you run Trisul in raw packets mode or Netflow mode.TAP Processes all raw packets from the selected network adapters.NETFLOW_TAP Processes Netflow packets |
| ValidTrisulModes     | TAP,NETFLOW_TAP                                                                   | Unused – just a hint for the previous parameter.                                                                                                                                  |
| LicenseFile          | /usr/local/etc/trisul-probe/LicenseKey.txt                                        | Location of the license file.                                                                                                                                                     |
| ReportsDirectory     | ../reports                                                                        | The directory where DDoS reports are stored in Netflow mode                                                                                                                       |

## Logging

Configures logging and rotation of the probe process`trisul`

| Parameters     | Defaults                  | Description                                                                                                                                                                                                                                       |
| -------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logdir         | /usr/local/var/log/trisul | Where the log files are stored.                                                                                                                                                                                                                   |
| Logfile        | ns-???.log                | Log file pattern. The default is ns-001.log, ns-002.log, etc.                                                                                                                                                                                     |
| Loglevel       | DEBUG                     | All messages higher than this level are logged. The available log levels in order of severity (most severe one first is).<br/>**EMERG<br/>FATAL<br/>ALERT<br/>CRIT<br/>ERROR<br/>WARN<br/>NOTICE<br/>INFO<br/>DEBUG** — Recommended default level |
| LogRotateSize  | 5000000                   | Size of each log file is allowed to grow to this size before Trisul moves to the next file.                                                                                                                                                       |
| LogRotateCount | 5                         | The number of files in the log ring, oldest files will be rotated.                                                                                                                                                                                |

## Ring

Full content storage policy.

The Ring section allows you to control.

- How big each full content file gets

- How many such full content files are in a slice

- How many slices in operational, reference, and archive areas

- Passphrase file (the content files areAES-128CTRmode encrypted)

- Flow rules for content trimming 

| Parameters                | Defaults                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled                   | True                                          | Setting this to False will disable all options below, full content will not be saved.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| BaseDir                   | /usr/local/var/lib/<br/>trisul/CONTEXT0/caps  | Parent directory under which full content files are saved.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Encryption                | AES-128-CTR                                   | The encryption cipher. Currently supported modes are AES-128-CTR and NONE. Specify NONE to disable encryption of raw packet storage.                                                                                                                                                                                                                                                                                                                                                                       |
| PassphraseFile            | /usr/local/etc/<br/>trisul/certs/ringpass.txt | The encryption passphrase for the full content files.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| FilePrefix                | RCF_                                          | Content files are called RCF_001.triscap, RCF_001.triscap, etc.. This options allows you to change the RCF_ part.                                                                                                                                                                                                                                                                                                                                                                                          |
| FileSizeMB                | 100                                           | Size of each full content file in megabytes.<br/>Maximum allowed value = 8000 (8GB). If you specify a size greater than this limit, Trisul will ignore it and use 8GB as the value.                                                                                                                                                                                                                                                                                                                        |
| SyncSeconds               | 60                                            | Diagnostic use only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| SysStatsUpdateSecs        | 2                                             | Diagnostic use only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| EnableDDosNetflowTapTrail |                                               | Set this to TRUE to enable the DDoS Ring mechanism.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| DefaultMode               | FULL                                          | To cut down on full content data, Trisul allows you to apply a variety of policies. The supported modes are<br/>FULL Everything is saved This is the default mode<br/>FLOWCAP10M Only first 10MB of each TCP flow is saved.<br/>FLOWCAP1M Only first 1MB of each TCP flow is saved.<br/>FLOWCAP100K Only first 100KB of each TCP flow is saved.<br/>FLOWCAP10K Only first 10KB of each TCP flow is saved.<br/>HEADERS Only headers are saved, typically upto the TCP/UDP layer<br/>IGNORE Nothing is saved |
| RuleChain                 |                                               | Each packet is evaluated against a rule chain, which is a list of rules.                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## SlicePolicy

Controls how much of raw packet data is stored. There are three areas*oper*,*ref*, and*archive*The packet slices are always written in*oper*then slide into*ref*,*archive*, and then deleted as specified by the SlicePolicy below.

**Oper**

|            |     |                                                                                                     |
| ---------- | --- | --------------------------------------------------------------------------------------------------- |
| SliceCount | 32  | Number of operational slices. The size of each slices is fixed as specified by FileSizeKB parameter |

**Reference**

|            |     |                                                                                            |
| ---------- | --- | ------------------------------------------------------------------------------------------ |
| SliceCount | 32  | Number of reference slices. Setting this to zero will move slices straight to the archive. |

**Archive**

|            |     |                                                                                                     |
| ---------- | --- | --------------------------------------------------------------------------------------------------- |
| SLiceCount | 0   | Number of archive slices. If you set this to 0, slices move directly to /dev/null (ie are deleted). |

## Rule Chain

Rule chains are used to control full packet storage policies.

:::note

If you desire even more fine grained control of packet storage policy on a per-flow basis see the[Packet StorageLUAScript type](/docs/lua/packet_storage) 

:::

- Each rule is an expression in the[Trisul filter format](/docs/ref/trisul_filter_format)

- Treatment of each packet is one of : Store full packet, Store header, or Ignore

- The first rule to match determines the treatment given to the packet

- If no rule matches, the treatment specified in the*DefaultMode*parameter is applied

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

If present, packets which match get only their headers stored. The headers include at least the Ethernet/IP/TCP/UDPlayers.

**Rule mode=“IGNORE”**

If present, packets which match get ignored (sent to /dev/null).

## slicePolicy

Specifies how many files you want to keep in each of the three areas. The size of each file is capped by the FileSizeKB parameter.

**Example**  
You want this policy :

- Each Slice file is 1GB
- Store 20GB in the operational area (maybe you have limitedSSDor RAID5)
- Store 500GB in the reference area
- Store 1TB in the archive

Then the SliceCounts will be 20,500,1000 for the operational,ref, archive areas.

## Reassembly

Controls how Trisul handles IP fragmentation andTCPreassembly.

**IPDefrag**

| Parameters | Defaults    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled    | MetricsOnly | Reassembles IP fragments. This is disabled by default due to the CPU and Mem load it can place on Trisul on busy links. The values are<br/>**True**<br/>    Full IP reassembly is enabled. Use this on light<br/>    links or if you suspect IP fragmentation on busy links<br/>**MetricsOnly***<br/>   Do not perform reassembly but collect metrics <br/>   about fragmentation in the Aggregates counter<br/>   group under the key ipfrag. This is the default option<br/>**False**<br/>   Completely disable IP Defragmentation. Simply<br/>   ignore IP fragments. Use this on busy links |
| Hiwater    | 1000        | Hi water mark for number of simultaneous fragment chains to track.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| LoWater    | 500         | Lo water mark for number of simultaneous fragment chains. If the number of fragments crosses the HiWater mark, Trisul gets rid of the LRU least-recently-used items and prunes it to the LoWater mark.                                                                                                                                                                                                                                                                                                                                                                                                                        |

## TCPFlowTrack

Flow tracking keeps track of how much data has been transmitted in either direction in a singleTCPflow.

- Required for flow based full content storage policy (like storing first 1M of each flow)
- Required forTCPReassembly
- Required for all reassembly based applications likeXFFDeproxy,URILog, Content Type meters, etc

| Parameters | Defaults | Description                                                                                                                                                                                                                                            |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enabled    | TRUE     | True or False values.                                                                                                                                                                                                                                  |
| HiWater    | 8000     | Hi water mark for number of simultaneous flows that can be tracked. If the number of simultaneous active flows exceeds the high water mark, Trisul will prune the **oldest** active flows until the number of flows goes one below the low water mark. |
| LoWater    | 6000     | Lo water mark for TCP flow pruning. See explanation for HiWater.                                                                                                                                                                                       |

## TCPReassembly

ControlsTCPReassembly.

- Required for all reassembly based applications likeXFFDeproxy,URILog
- Required for reassembly based meters likeHTTPContent Types,HTTPHosts,URLFilter, etc

| Parameters   | Defaults | Description                                                                                                                                                                                                                                           |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled      | True     | True or False values                                                                                                                                                                                                                                  |
| MaxBytes     | 0        |                                                                                                                                                                                                                                                       |
| KickoffBytes | 5000     | Some meter within Trisul must express an interest in reassembled data for a given flow before this limit is reached. Otherwise reassembly is stopped at this point for this flow.                                                                     |
| Ports        |          | Traffic on these ports are reassembled. By default Trisul this is "" because uses heuristics to detect applications independent of port. You can override this behaviour by setting to a string like 3000,80,443,22,21 to reassemble only these ports |
| Direction    | INOUT    | Options<br/><br/>**IN**<br/>  Only the IN direction; direction of first SYN+ACK is reassembled<br/>**OUT**<br/>  Only the OUT direction; direction of initial SYN is reassembled<br/>**INOUT**<br/>  Both directions are reassembled         |

## Applications

Some advanced applications.

Since these applications depend on theTCPReassembly feature, they are resistant toTCPfragmentation evasions.

| Parameters                | Defaults | Description                                                                                                                                                                                                                                  |
| ------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EnableXFFDeproxy          | True     | Useful in a corporate environment with web proxies. If set to true, Trisul can deproxy web traffic by looking at the X-Forwarded-For HTTP header. The actual IP is substituted for all metering and flow analysis instead of the proxy’s IP. |
| EnableURILog              | True     | Logs all HTTP URLs requested. These URLS show up as Resources in Trisul where they are correlated and made searchable.                                                                                                                       |
| EnableHostMeter           | True     | Add traffic metering by HTTP Host header. The net effect of enabling this is that the HTTP Host counter group is made active.                                                                                                                |
| EnableContentTypeMeter    | True     | Add traffic metering by HTTP Content-Type header. Activates the HTTP Content Type counter group.                                                                                                                                             |
| EnableSSLCertLog          | True     | Logs all SSL certificate chains                                                                                                                                                                                                              |
| EnableHTTPFTS             | True     | Full Text Search (FTS) enabled for all HTTP Headers seen                                                                                                                                                                                     |
| EnableSSLFTS              | True     | FTS enabled for all SSL Certificates seen                                                                                                                                                                                                    |
| MaxHTTPFTSPerFlow         |          | Currently unused                                                                                                                                                                                                                             |
| EnableFTPTrack            | True     | Tracks FTP data session by matching the corresponding control flows                                                                                                                                                                          |
| EnableSSLRecordExtraction | False    | If you want access to the raw TLS Protocol PDUs. If set to “True” ; Trisul will generate “TLS:RECORD” callbacks you can hook on to in the Reassembly engine. Unless you are working deep with TLS you typically can leave this as False.     |

## File Extraction

Controls theHTTPfile extraction feature.

:::note

Need tempfs partition :  If you enable File Extraction you also need to create a special in-memory*TMPFS*partition (also known as*RAMFS*partition). <br/>Quickest way to create this is to use`trisulctl_probe createramfs probe0 default`A 100MB partition would suffice for loads < 1Gbps. For more read[File ExtractionLUAAPIin detail](/docs/lua/fileextractoverview) 

:::

| Parameters  | Defaults            | Description                                                                                                                                                                                                                 |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled     | False               | Feature is enabled or not                                                                                                                                                                                                   |
| RamFsDir    | ProbeRoot/tmp/ramfs | The directory mounted on the TMPFS file system                                                                                                                                                                              |
| AutoDelete  | True                | The tmpfs file system is automatically cleaned as the files are processed by the LUA script framework. Set this to False for debugging purpose only or if you take control of deleting the filesystem from your LUA scripts |
| ChunkSizeMB | 5                   | For large files your LUA script will be handed chunks of this size. Tweak this based on how much RAM you can allocate to the tmpfs filesystem                                                                               |

## IDS Alerts

Controls how security alerts from Snort/Barnyard are handled

| Parameters                     | Defaults         | Description                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled                        | True             | Enables this feature                                                                                                                                                                                                                                                                                                                                                                  |
| SnortUnixSocket                | /tmp/snort_alert | Trisul opens this unix socket and listens for alerts. The default socket name is`snort_alert`for Unified events from Snort, and`barnyard2_alert`for Unified2 events from Barnyard2. The directory name is passed to snort or barnyard2 via the`-l`parameter**Multiple sockets :**You can add any number of`<SnortUnixSocket>`elements to listen to multiple sockets at once. |
| GenerateDDosReport             |                  | Set this toTRUEto trigger Trisul Probe to generate a DDoS report on certainTCAfiring.                                                                                                                                                                                                                                                                                             |
| DDosReportTopCount             | 100              | By default 100 top items are included in the DDoS report                                                                                                                                                                                                                                                                                                                              |
| DDosReportWindow>PastSeconds   | 120              | By default, include in the report 2 minutes prior to the DDoS attack trigger                                                                                                                                                                                                                                                                                                          |
| DDosReportWindow>FutureSeconds | 60               | By default, include in the report 1 minutes after the DDoS attack trigger                                                                                                                                                                                                                                                                                                             |

## OfflineImport

Controls aspects ofPCAPfile import.

| Parameters          | Defaults | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LoopCount           | 1        | Used for testing. Runs the same capture file/directory this many time past Trisul. Each run is appended time-wise to the end of the previous run. This is used internally by us to generate months of data from a few days of capture by repeating them over and over.                                                                                                                                                                                                                                                                                                                                                                                               |
| AppendMode          | TRUE     | Appends the run to the previous runs time-wise. The packet time stamps in the capture file are offset by the last time of the previous run.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| InterfileGapSecs    | 60       | When importing multiple files, this option puts a gap of this many seconds between each file. There is no purpose of this option other than to view a gap in the charts representing the capture files.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| AutoSortByCaptime   | TRUE     | WhenTRUE, the candidate capture files are sorted by time order (earliest to latest), and then imported into Trisul. WhenFALSE, the files and subdirectories are processed in alphabetical order.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ResumeStalledImport | FALSE    | Dependency:AutoSortByCaptime must beTRUE<br/>Treats the import as a resumption of a previously stalled or aborted offline import. WhenTRUE, Trisul will first determine what timestamp was last flushed. Then it will skip all packets earlier than that timestamp and continue importing when newer timestamps are seen.<br/>This feature is used to resume a stopped import without reprocessing everything again.<br/>Use this feature with the following caution :<br/># Due to the discontinuous nature, some packets may be missed or double counted around the timestamp where the earlier import was aborted<br/># Flows may be duplicated around the time |
| AddEthernetFCS      | FALSE    | If set to true, will add 12 bytes to every ethernet packet to account forFCS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## 

## Tuning

Fine tune the packet processing pipeline for peak performance.

| Parameters               | Defaults | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnalysisQueueCapacity    | 1000000  | Queue size for frontend packet stream to backend analytics stream                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| PcapQueueCapacity        | 5000     | Queue for disk packet storage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| FeedbackQueueCapacity    | 1000000  | Queue size of backend to frontend (reverse/feedback) stream                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| PcapRAIDStripeSize       | 1048576  | Sequential writes of this size.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| GrainSize                | 64       | Number of packets to process in a batch. You can increase this value if you have aCPUwith a large L1/L2 cache. If the entire batch fits in cache memory – it can increase concurrency – and decrease drops.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| SpongeWindow             | 1        | A key internal data structure parameter to help with multicore.<br/>Number of seconds a single core must accumulate before synchronizing. In most cases, leave this alone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| InflightTokens           | 2        | Number of work items in parallel. Maps to number of hardware threads you want to give to trisul.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| TCPReassFilters          | 2        | Number ofTCPFilters – Trisul will hash and load share. Typically matches the number of InflightTokens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| CoreAffinityNet          |          | CPUcores you want you pin the packet processing threads to. Use “1,2,4” to pin toCPUCores 1,2,4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| CoreAffinityRAID         |          | CPUcores allowed to do disk writes for packet storage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| CoreAffinityAnalysis     |          | Currently unused                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| FBQDrainChunkSize        | -1       | Controls how fast an internal data structure called the Feedback Queue is drained                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| FlowMemcapPolicy         | FLEXIBLE | Determines how Trisul copes under severe load. This can happen on a very busy network or under a DDoS attack against Trisul itself or elsewhere on the network. Trisul detects this condition when Hi Water marks are crossed for counters or flows.<br/>The available options are :<br/>`FLEXIBLE`Trisul is not too rigid about the Hi Water mark, it allows usage to grow beyond the high water mark within the streaming window (1-minute)<br/>`FIXED`When a Hi Water mark is hit, no*new*counters are flows are accepted. Existing ones are metered as usual. At the next flush interval, the counters or flows are pruned down to the low water mark and things proceed as usual |
| StreamingWindowMSecs     | 60000    | The streaming window in milliseconds. The default value is 1 minute. Do not change this unless you have a very good reason                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| DisableFlowTupleFeedback | false    | Flow tuple feedback is a feature in Trisul that allows you to measure per-IP and per-APPconnection metrics. This can be overkill for some environments like ISP’s who deal with millions of flows/sec. Disable this in those environemts. We also suggest disabling this option when the FeedbackQueue (FBQ) sees pressure leading to spiky IP and App flow connection metrics.                                                                                                                                                                                                                                                                                                          |
| MaxTCARangeAlerts        | 100      | When using TCA range alerts (see[TCA](/docs/ug/alerts/tca#tca-configuration)generate only these many alerts. The reason we need a safety cap on this feature is an incorrect configuration with aTCArange can result in uncontrolled alerts (eg when any IP crosses 1Kbps). For safety we have chosen a cap or 100                                                                                                                                                                                                                                                                                                                                                                          |

## Edges

Controls the streaming graph analytics part of Trisul

| Parameters      | Defaults | Description                                                                                                           |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| Enabled         | True     | Enables this feature                                                                                                  |
| EnableFlowEdges | True     | Do you want edge vertex data to be generated for every flow? For very large networks, consider disabling this option. |
