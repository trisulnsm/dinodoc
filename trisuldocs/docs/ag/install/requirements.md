
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

# System Requirements


Trisul Network Analytics runs on off the shelf servers - either bare metal or VM, under a Linux operating system. 


## Operating Systems

Trisul Network Analytics packages are available on the following platforms.


| OS               | Recommended   | Notes |
| ---------------- | ----------|---|
| Ubuntu LTS 22.04/24.04 |  Ubuntu 24.04| |
| RHEL 9/8         | RHEL 9.x| Can also use OracleLinux, AmazonLinux, RHEL, CentOS versions 9/8|


## Modes 

Trisul products can run in two major modes, each with distinct resource requirements:

- **_NetFlow Analyzer Mode_** (Trisul NetFlow Analyzer, Trisul ISP, Trisul IPDR)- needs lower CPU, Memory and resources. And, in the case of Trisul IPDR, additional storage.
- **_Packet Capture Mode_** (Trisul NSM) - needs more CPU, Memory resources 

See below for typical requirements. 


## NetFlow Analyzer Mode Requirements

NetFlow sizing is based on number of devices and interfaces.  Click a tab that is matches your network.

<Tabs>
  	<TabItem value="small" label="Small 500 Endpoints/20 Routers" default>
:::info Trying it out

If you are just trying out Trisul, it is recommended to start with a small version as below. 
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

>**NOTE: For Trisul ISP that runs on NetFlow Analyzer Mode, the system requirements slighly vary. See: [Trisul ISP System Requirements](/docs/isp/requirements)**		



## Packet Capture Mode Requirements

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

## IPDR Requirements

IPDR sizing is based on the network's throughput capacity. To determine the appropriate IPDR size for your network, select the tab that corresponds to your network's throughput rate.

<Tabs>
  	<TabItem value="small" label="SMALL LICENSE <10Gbps" default>


		| Hardware  | System Requirements                                                                                                            
		| ------- | ------------ |
		| Type | VM preferred |
		| CPU | 8 vCPU cores | 
		| Memory |  16GB RAM |
		| Network | 1GbE interface that can be used for both NetFlow and Management access |
		| Disk | |



</TabItem>

<TabItem value="medium" label="MEDIUM LICENSE 10-100 Gbps">


| Hardware  | System Requirements                                                                                                            
| ------- | ------------ |
| Type | Bare metal preferred |
| CPU | 16 vCPU codes | 
| Memory |  16GB RAM |
| Mechanism | SPAN Port |
| Network | 1 GbE for receiving the packets via SPAN port and another for management access |
| Disk | |
| OS | Oracle 22.04 Jammy or RHEL 9|

</TabItem>

<TabItem value="large" label="LARGE LICENSE >100 Gbps">


		| Hardware  | System Requirements                                                                                                            
		| ------- | ------------ |
		| Type | VM preferred |
		| CPU | 24 vCPU cores | 
		| Memory |  32GB RAM |
		| Network | 1GbE interface that can be used for both NetFlow and Management access |
		| Disk | |
</TabItem>
</Tabs>



------------------------------------------------------------------------

## Advanced Scaling

This section contains more detailed information about the workloads. Read this to understand incremental scaling needs.

### Load Profile 

The load profile of the Probe and Hub components.

| Node Type | Description | Load Profile  | 
| -------- | ------- | -------- | 
| Trisul Hub   | Database node  | Disk bound I/O, number of probes matter |
| Trisul Probe | PCAP storage and streaming analytics | CPU bound|  


### Trisul Hub Scaling Rules 

The Trisul hub is a data storage and query node with a high bandwidth and low latency I/O to the Trisul Probes.
Disk sizing is a key concern of the hub.

| Mode | Scaling Metric                                           | Additional Resource Needed |
| ---- | -------------------------------------------------------- | -------------------------- |
| Hub  | For every medium volume probe + Every 5 concurrent users | 1CPU + 2GB      |



### Trisul Probe Scaling Rules 

Some guidelines in table below for sizing the Trisul Probe node.

| Mode        | Scaling Metric   | Additional Resource Needed |
| ----------- | ----------------- | -------------------------- |
| Raw Packets | For every 200Mbps | 1 3Ghz Core + 4GB DDR4     |

### Scaling NetFlow Mode

The relevant scaling metric is NetFlow bandwidth, this represents the total bandwidth taken by NetFlow packets. The mapping typically is

- **Estimating  NetFlow Bandwidth** : NetFlow traffic is 0.5-1% of total bandwidth. Therefore 1Gbps of total bandwidth would generate about  500Kbps-1Mbps of NetFlow data


| Mode               | Scaling Metric                   | Additional Resource Needed   |
| ------------------ | -------------------------------- | ---------------------------- |
| NetFlow | for every 10Mbps NETFLOW traffic | + 1 CPU Core + 2GB RAM     |

