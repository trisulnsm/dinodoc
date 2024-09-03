
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

# System requirements


Trisul Network Analytics runs on off the shelf servers - either bare metal or VM, under a Linux operating system. 


## Operating systems

Packages are available for the following operating systems. 


| OS               | Recommended | Notes |
| ---------------- | ---|---|
| Ubuntu 20.04/22.04 |  Ubuntu 22.04| |
| RHEL 9/8/7       | RHEL 9.x| Can also use OracleLinux, AmazonLinux, RHEL, CentOS versions 9/8/7|



## Modes 

The two major modes of running Trisul are:

- **_NetFlow Analyzer Mode_** - needs lower CPU, Memory and resources.
- **_Packet Capture Mode_** - needs more CPU, Memory resources 

See below for typical requirements. 


## NetFlow Analyzer requirements

NetFlow sizing is based on number of devices and interfaces.  Click a tab that is matches your network.

<Tabs>
  	<TabItem value="small" label="Small 500 Endpoints/20 Routers" default>
:::info Trying it out

If you just trying out Trisul start with the Small version below. 
:::


		| Hardware  | System Requirements                                                                                                            
		| ------- | ------------ |
		| Type | VM preferred |
		| CPU | 8 vCPU cores | 
		| Memory |  16GB RAM |
		| Network | 1GbE interface that can be used for both NetFlow and Management access |
		| Disk | 1TB SAS, this can store upto 6 months data, proportionately add more based on retention|

		*Table: Minimum System Requirements for Small Enterprise* 

</TabItem>

<TabItem value="medium" label="Medium 3000 endpoints/50 Routers ">

:::info Medium 3000
For Medium enterprises with about 2000 employees
:::

		| Hardware  | System Requirements                                                                                                            
		| ------- | ------------ |
		| Type | VM preferred |
		| CPU | 16 vCPU cores | 
		| Memory |  16GB RAM |
		| Network | 1GbE interface that can be used for both NetFlow and Management access |
		| Disk | 4TB SAS/SATA, this can store upto 6 months data,  proportionately add more based on retention|
		
		*Table: Minimum System Requirements for 3000 IPs Enterprise* 


</TabItem>

<TabItem value="large" label="Large 20K endpoints/500 Routers">

:::info Unlimited 
Large enterprises with > 20,000 endpoints. 
:::

		| Hardware  | System Requirements                                                                                                            
		| ------- | ------------ |
		| Type | VM preferred |
		| CPU | 24 vCPU cores | 
		| Memory |  32GB RAM |
		| Network | 1GbE interface that can be used for both NetFlow and Management access |
		| Disk | 8TB SAS/SATA, this can store upto 6 months data, proportionately add more based on retention|

		*Table: Large Enterprise or multi-hundred site SD-WAN* 

</TabItem>



<TabItem value="giant" label="SD-WAN 5000+ Branch ">

:::info SD-WAN
	SD-WAN networks are characterized by very large number of branches and routers. This leads to a high NetFlow and SNMP load.
:::

		| Hardware  | System Requirements                                                                                                            
		| ------- | ------------ |
		| Type | VM preferred |
		| CPU | 32 vCPU cores | 
		| Memory |  64GB RAM |
		| Network | 1GbE interface that can be used for both NetFlow and Management access |
		| Disk | 8TB Storage for 3 months,  proportionately add more based on retention|

		*Table: Large Enterprise or multi-hundred site SD-WAN* 

</TabItem>
</Tabs>



## Packet Capture requirements

Packet capture sizing is based on total packet bandwidth.  This is not the link speed but rather the actual utilization of the link. Click a tab that is matches your network.



<Tabs>
  	<TabItem value="small" label="500Mbps" default>

| Hardware  | System Requirements                                                                                                            
| ------- | ------------ |
| Type | Bare metal preferred |
| CPU | 8 vCPU codes | 
| Memory |  16GB RAM |
| Mechanism | SPAN Port |
| Network | 1 GbE for receiving the packets via SPAN port and another for management access |
| Disk | 1TB high speed SAS or NVMe  for PCAP and 1TB SAS/SATA for database|
| OS | Oracle 22.04 Jammy or RHEL 9|

</TabItem>


<TabItem value="med" label="1Gbps" default>

| Hardware  | System Requirements                                                                                                            
| ------- | ------------ |
| Type | Bare metal preferred |
| CPU | 16 vCPU codes | 
| Memory |  16GB RAM |
| Mechanism | SPAN Port |
| Network | 1 GbE for receiving the packets via SPAN port and another for management access |
| Disk | 1TB high speed SAS or NVMe  for PCAP and 1TB SAS/SATA for database|
| OS | Oracle 22.04 Jammy or RHEL 9|

</TabItem>


<TabItem value="large10" label="10Gbps" default>

| Hardware  | System Requirements                                                                                                            
| ------- | ------------ |
| Type | Bare metal preferred |
| CPU | 24 vCPU codes | 
| Memory |  16GB RAM |
| Mechanism | Tap Device |
| Network | 2x10 GbE for receiving the packets and another for management access |
| Disk | 2TB high speed SAS or NVMe  for PCAP and 8TB SAS/SATA for database|
| OS | Oracle 22.04 Jammy or RHEL 9|

</TabItem>

<TabItem value="large40" label="40Gbps" default>

:::danger Large configuration
This is a typical configuration for 40Gbps packet capture used in ISP settings. Please contact us to discuss the details.  We like to aggregate using TAP/AGG architecture and feed into dedicated FPGA cards for best performance. 
:::


| Hardware  | System Requirements                                                                                                            
| ------- | ------------ |
| Type | Bare metal preferred |
| CPU | 48 vCPU codes | 
| Memory |  64GB RAM |
| Mechanism | Tap Device + Tap Aggregator |
| Network | 2x40GbE for Tap connector + Intel XL710/XL810 or FPGA Capture cards|
| Disk | 4x2TB high speed SAS or NVMe  for PCAP and 20TB SAS/SATA for database|
| OS | Oracle 22.04 Jammy or RHEL 9|

*Table: ISP Configuration* 

</TabItem>



</Tabs>


------------------------------------------------------------------------

## Advanced Scaling

This section contains more detailed information about the workloads. Read this to understand incremental scaling needs.

### Load profile 

The load profile of the Probe and Hub components.

| Node type | Description | Load profile  | 
| -------- | ------- | -------- | 
| Trisul Hub   | Database node  | Disk bound I/O, number of probes matter |
| Trisul Probe | PCAP storage and streaming analytics | CPU bound|  


### Trisul Hub scaling rules 

The Trisul hub is a data storage and query node with a high bandwidth and low latency I/O to the Trisul Probes.
Disk sizing is a key concern of the hub.

| Mode | scaling metric                                           | additional resource needed |
| ---- | -------------------------------------------------------- | -------------------------- |
| Hub  | For every medium volume probe + every 5 concurrent users | 1CPU + 2GB      |



### Trisul Probe scaling rules 

Some guidelines in table below for sizing the Trisul Probe node.

| Mode        | scaling metric   | additional resource needed |
| ----------- | ----------------- | -------------------------- |
| Raw Packets | For every 200Mbps | 1 3Ghz Core + 4GB DDR4     |

### Scaling NetFlow mode

The relevant scaling metric is NetFlow bandwidth, this represents the total bandwidth taken by NetFlow packets. The mapping typically is

- **Estimating  NetFlow bandwidth** : Netflow traffic is 0.5-1% of total bandwidth. Therefore 1Gbps of total bandwidth would generate about  500Kbps-1Mbps of NetFlow data


| Mode               | scaling metric                   | additional resource needed   |
| ------------------ | -------------------------------- | ---------------------------- |
| Netflow | for every 10Mbps NETFLOW traffic | + 1 CPU Core + 2GB RAM     |

