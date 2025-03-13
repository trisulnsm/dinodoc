
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

# System Requirements

Trisul Network Analytics runs on off the shelf servers - either bare metal or VM, under a Linux operating system. 

## Operating Systems

Trisul's products say Trisul NetFlow Analyzer, Trisul NSM, Trisul IPDR, Trisul NSM are available on the following operating systems:


| OS               | Recommended | Notes |
| ---------------- | ---|---|
| Ubuntu 20.04/22.04 |  Ubuntu 22.04| |
| RHEL 9/8       | RHEL 9.x| Can also use OracleLinux, AmazonLinux, RHEL, CentOS versions 9/8/7|


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