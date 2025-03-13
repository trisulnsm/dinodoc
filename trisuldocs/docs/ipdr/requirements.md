# System Requirements

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