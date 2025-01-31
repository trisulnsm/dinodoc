
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

# System Requirements


This page specifies system requirements for Trisul ISP.

:::note Also see
The :memo: [System Requirements](/docs/ag/install/requirements) page in the Admin Guide for general guidelines.
:::

## Operating Systems

Packages are available for the following operating systems. 


| OS               | Recommended | Notes |
| ---------------- | ---|---|
| Ubuntu 20.04/22.04 |  Ubuntu 22.04| |
| RHEL 9/8/7       | RHEL 9.x| Can also use OracleLinux, AmazonLinux, RHEL, CentOS versions 9/8/7|


See below for typical requirements. 


## Trisul ISP Requirements 

NetFlow sizing is based on number of devices and interfaces.  Click a tab that is matches your network.

<Tabs>

<TabItem value="poc" label="Proof of Concept" default>

		| Hardware  | System Requirements                                                                                                            
		| ------- | ------------ |
		| Type | VM preferred |
		| OS | RHEL9/OracleLinux9 (or Ubuntu 22) |
		| CPU | 16 vCPU cores | 
		| Memory |  16GB RAM |
		| Network | 1GbE interface that can be used for both NetFlow and Management access |
		| Disk | 1TB SAS, or NVme SSD  |


</TabItem>


<TabItem value="small" label="Small ISP < 10Gbps uplink" >

		| Hardware  | System Requirements                                                                                                            
		| ------- | ------------ |
		| Type | VM preferred |
		| CPU | 8 vCPU cores | 
		| Memory |  16GB RAM |
		| Network | 1GbE interface that can be used for both NetFlow and Management access |
		| Disk | 1TB SAS, this can store upto 6 months data, proportionately add more based on retention|


</TabItem>

<TabItem value="giant" label="Large ISP 500Gbps">

		| Hardware  | System Requirements                                                                                                            
		| ------- | ------------ |
		| Type | VM preferred |
		| CPU | 32 vCPU cores | 
		| Memory |  64GB RAM |
		| Network | 1GbE interface that can be used for both NetFlow and Management access |
		| Disk | 16TB Storage for 3 months,  proportionately add more based on retention|


</TabItem>

</Tabs>


These are minimum system requirements. 