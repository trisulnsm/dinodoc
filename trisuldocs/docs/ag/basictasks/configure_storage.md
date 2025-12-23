# Configure Retention Policy
Now that you understand how Trisul stores data on disk, the next step is to decide **how long that data should be kept**.

A retention policy defines the balance between **storage usage** and **historical visibility**. In Trisul, this is handled separately for packet capture data and for processed metrics.

## What Retention Means in Trisul
Retention is defined in two places, depending on the type of data:

1) **Raw packet data (Probe nodes)**:  
        - Controlled by total disk space in **GB**  
        - Default: **10 GB**  

2) **Metrics, flows, alerts, and records (Hub nodes)**:  
        - Controlled by retention duration in **days**  
        - Default: **96 days**  

These settings are independent and should be sized based on how much traffic you observe and how far back you need to investigate.


## Check Current Per-Day Disk Usage 

Before changing any retention values, it’s important to understand how much data Trisul generates per day in your environment.

This helps you estimate disk requirements accurately instead of guessing.


:::info Navigation

:point_right: Login as Admin &rarr; Context:default &rarr; Admin Tasks &rarr; Storage Status
:::

![per day storage](images/storage_per_day.png)
*Figure: Storage Status Showing Per Day Disk Storage*



Here we can see  we are using **6.2 MegaBytes** of disk per day using the [Storage Status](/docs/ag/admintasks/storage_status) tool

## Retention Period on the Hub 

The Hub controls how long processed data is retained.
 
By default, Trisul retains **96 days** of data.


:::info Hub Config File
The retention period in number of days is specified in the [:memo: Trisul Hub Configuration](/docs/ref/trisulhubconfig) file. 
:::

The default configuration stores:

- 32 days in **Operational**
- 32 days in **Reference**
- 32 days in **Archive**

For a total of **96 days**.

```xml {7,13,19}
 <SlicePolicy>
            <SliceWindow>
                    DAILY
            </SliceWindow>
            <Operational>
                    <SliceCount>
                            32
                    </SliceCount>
                    <UsageRedMark/>
            </Operational>
            <Reference>
                    <SliceCount>
                            32
                    </SliceCount>
                    <UsageRedMark/>
            </Reference>
            <Archive>
                    <SliceCount>
                            32
                    </SliceCount>
                    <UsageRedMark/>
            </Archive>
```

### Increasing the Retention Period

Simply change the Archive Slice Count from 32 to the desired number.  

Say if you wanted to store 1 year of data, set the Archive Count to 301 

```xml {3}
            <Archive>
                    <SliceCount>
                            301
                    </SliceCount>
                    <UsageRedMark/>
            </Archive>
```

You can also adjust the Oper and Ref , refer to the [Storage Architecture](/docs/ag/domain/storage_arch) document for details.

:::tip For IPDR
To ensure 2-year IPDR logging, set the Hub retention period to **730 days** and make sure the storage directory has enough capacity for two years of IPDR data.
:::

## Packet Capture Retention on the Probe 

On the Probe, retention is controlled by **total disk space**, not days. Trisul uses a **sliding window** mechanism, automatically overwriting older packet data as space fills up.


The default maximum Packet Capture PCAP storage is **10GB**


:::tip Max PCAP Storage 
The packet capture storage limits are defined in the [:memo: Trisul Probe Configuration](/docs/ref/trisulconfig) file in two parameters

- `FileSizeMB` - size of each PCAP file 
- `SliceCount` - How many such files 
:::


In the example below we have a 
- `FileSizeMB` set to  `1000MB` or 1GB and 
- number of such files in each pool `8 + 8 + 0 = 16GB` of packet data. 

```xml {3,12,20,28}
              </FilePrefix>
                <FileSizeMB>
                        1000
                </FileSizeMB>
                <EnableDDosNetflowTapTrail/>
 <SlicePolicy>
                       <Rule mode="IGNORE"/>
                </RuleChain>
                <SlicePolicy>
                        <Operational>
                                <SliceCount>
                                        8
                                </SliceCount>
                                <UsageRedMark>
                                        90
                                </UsageRedMark>
                        </Operational>
                        <Reference>
                                <SliceCount>
                                        8
                                </SliceCount>
                                <UsageRedMark>
                                        90
                                </UsageRedMark>
                        </Reference>
                        <Archive>
                                <SliceCount>
                                        0
                                </SliceCount>
                                <UsageRedMark>
                                        90
                                </UsageRedMark>
                        </Archive>
                </SlicePolicy>
        </Ring>



```




### Moving Packet Storage to a Different Volume
If packet capture data needs to live on a different disk or mount point, relocate it using: [`trisulctl_probe relocate context`](/docs/ag/basictasks/reloc). This is commonly done when packet capture volumes grow large.

### Increasing Packet Capture Storage

If the default 10 GB is insufficient, increase storage by:  

- Increasing `FileSizeMB`  
- Increasing `SliceCount` (especially in Archive)  

Example: Store **500 GB** using **100 files of 5 GB each**:  

```xml {3,10}
              </FilePrefix>
                <FileSizeMB>
                        5000
                </FileSizeMB>
                ..
                ..
                <SlicePolicy>
                        <Archive>
                                <SliceCount>
                                        100
                                </SliceCount>
                ..

```