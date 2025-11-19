
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

# System Requirements

Below are the recommended system requirements for Trisul deployments. Trisul runs on commodity servers, either bare metal or virtual machines. Below you’ll find recommended hardware and resource guidelines based on the two data-processing modes and varying deployment sizes. 

Choose the processing mode and size that match your network’s scale, then proceed to Installation.


## Operating Systems

Trisul Network Analytics packages are available on the following platforms.


| OS               | Recommended   | Notes |
| ---------------- | ----------|---|
| Ubuntu LTS 22.04/24.04 |  Ubuntu 24.04| |
| RHEL 9/8         | RHEL 9.x| Can also use OracleLinux, AmazonLinux, RHEL, CentOS versions 9/8|


## Processing Modes 

Trisul’s four products fall into two technical categories based on how they process data.

- **_Flow-Based Mode_** (For Trisul NetFlow Analyzer, Trisul ISP, Trisul IPDR)- needs lower CPU, Memory and resources. And, in the case of Trisul IPDR, additional storage.
- **_Packet Capture Mode_** (For Trisul NSM) - needs more CPU, Memory resources 

See below for typical requirements. 


## Flow-Based Mode Requirements

Flow-Based analytics sizing is based on number of devices and interfaces. Choose the sizing block that most closely matches your network’s scale.

<Tabs>
  	<TabItem value="small" label="Small (≈500 Endpoints/20 Routers) " default>
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

<TabItem value="medium" label="Medium (≈3000 endpoints/50 Routers) ">

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

<TabItem value="large" label="Large (≈20K endpoints/500 Routers) ">

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



<TabItem value="giant" label="SD-WAN (≈5000+ Branch) ">

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

>**NOTE: For Trisul ISP that runs on Flow-Based Mode, the system requirements slighly vary. See: [Trisul ISP System Requirements](/docs/isp/requirements)**		



## Packet Capture Mode Requirements

Packet capture analytics sizing is based on total packet bandwidth.  This is not the link speed but rather the actual utilization of the link. Choose the sizing block that most closely matches your network’s traffic volume.



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

IPDR sizing is based on your network’s throughput. Select the tab that matches your expected throughput rate.

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

This section goes deeper into how Trisul handles heavier workloads. Read it when you need to plan for scaling beyond the standard sizing levels.

### Load Profile 

The table below gives a quick view of how the two main Trisul components use system resources. This helps you understand which parts of the system grow with traffic volume and which grow with the number of probes you deploy.

| Node Type | Description | Load Profile  | 
| -------- | ------- | -------- | 
| Trisul Hub   | Stores all analytics data and handles searches, reports, and long-term storage(Database node).  | Mostly disk I/O–intensive. Load increases as more probes send data. |
| Trisul Probe | Collects network traffic (flows or packets) and processes it in real time (streaming analytics) before sending the results to the Hub| Mostly CPU-intensive. Load increases with traffic volume.|  


### Trisul Hub Scaling Rules 

The Trisul Hub stores all analytics data and serves queries from users and probes. Because the Hub handles long-term data and high-frequency lookups, disk performance and capacity are the main factors that affect its scaling.

| Mode | Scaling Metric When Hub Load Increases                   | Additional Resources Needed |
| ---- | -------------------------------------------------------- | -------------------------- |
| Hub  | For every medium volume probe + Every 5 concurrent users | +1CPU core and +2GB RAM      |



### Trisul Probe Scaling Rules 

The Trisul Probe handles live traffic capture and real-time analysis. As traffic volume increases, the Probe needs more CPU and memory to keep up. The table below gives a simple guideline for scaling a Probe based on packet capture load.

| Mode        | Scaling Metric When Probe Load Increases | Additional Resource Needed |
| ----------- | ----------------- | -------------------------- |
| Raw Packets | For every 200Mbps of traffic | +1 CPU core(3Ghz) and +4GB DDR4 (RAM)  |

### Scaling Flow-Based Mode

In Flow-Based Mode, the key scaling factor is the amount of flow data being sent to Trisul. Flow records (NetFlow, sFlow, IPFIX, etc.) usually represent a small fraction of actual link bandwidth.

A simple way to estimate flow traffic is:

- **Estimating Flow Traffic** : Flow data is typically 0.5–1% of your total network bandwidth.  
For example, a 1 Gbps link usually produces 0.5–1 Mbps of flow data. 

The table below gives a guideline for scaling Trisul in this mode:


| Mode               | Scaling Metric When Load Increases     | Additional Resources Needed   |
| ------------------ | -------------------------------- | ---------------------------- |
| Flow Mode | For every 10Mbps flow traffic | +1 CPU Core and +2GB RAM     |

