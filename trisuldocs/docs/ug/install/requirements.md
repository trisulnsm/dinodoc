---
sidebar_position: 1
---
# System requirements

This page describes the hardware and operating system requirements needed to run Trisul Network Analytics. 


The two major modes of running Trisul are:

- **_NetFlow Analyzer Mode_** - needs lower CPU, Memory and resources.
- **_Packet Capture Mode_** - needs more CPU, Memory resources 

See below for typical requirements. 

## NetFlow Analyzer requirements

:::important[Typical Workload start with this]
The table below is for a medium to large Enterprise with 5000 endpoints. This should suit most customers.
:::

| Hardware  | System Requirements                                                                                                            
| ------- | ------------ |
| Type | VM preferred |
| CPU | 8 vCPU cores | 
| Memory |  16GB RAM |
| Network | 1GbE interface that can be used for both NetFlow and Management access |
| Disk | 1TB SAS, this can store upto 6 months data|
| OS | Oracle 22.04 Jammy or RHEL 9|


## Packet Capture requirements

:::important[Typical workload start with this]
The table below is for a medium enterprise workload of **500Mbps** sustained bandwidth. This should suit most customers.
:::


| Hardware  | System Requirements                                                                                                            
| ------- | ------------ |
| Type | Bare metal preferred |
| CPU | 16 vCPU codes | 
| Memory |  16GB RAM |
| Network | 1 GbE for receiving the packets via SPAN port and another for management access |
| Disk | 1TB high speed SAS or NVMe  for PCAP and 1TB SATA for database|
| OS | Oracle 22.04 Jammy or RHEL 9|



## Operating system


Trisul Network Analytics packages are available for the following Linux operating systems. 

| OS               | Notes |
| ---------------- | ---|
| Ubuntu 20.04/22.04 | |
| RHEL 9/8/7       | Can also use OracleLinux, AmazonLinux, RHEL, CentOS versions 9/8/7|


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

