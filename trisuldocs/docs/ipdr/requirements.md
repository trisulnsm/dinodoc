
# System Requirements

IPDR sizing is based on the ISP's peak throughput rate which is the sum of uplinks and peering peak bandwidth usage.  Select the appropriate size below.

### System Requirements for ISP Peak < 10Gbps


		| Hardware  | Minimum Requirements |                   
		| ------- | ------------ |
		| Type | VM preferred |
		| CPU | 8 vCPU cores | 
		| Memory |  16GB RAM |
		| Network | 1GbE interface that can be used for both NetFlow and Management access |
		| Disk | 8TB for 2 Years  |

### System Requirements for 10-100 Gbps


		| Hardware  | System Requirements |
		| ------- | ------------ |
		| Type | Bare metal preferred |
		| CPU | 16 vCPU codes | 
		| Memory |  16GB RAM |
		| Network | 1 GbE for receiving the packets via SPAN port and another for management access |
		| Disk | 36TB for 2 years near the 100Gbps end, see [Disk Sizing](#disk-sizing-notes)  |

### System Requirements for 100 to 200 Gbps


		| Hardware  | System Requirements  |
		| ------- | ------------ |
		| Type | VM preferred |
		| CPU | 24 vCPU cores | 
		| Memory |  32GB RAM |
		| Network | 1GbE interface for NetFlow , and a separate 1GbE for management access |
		| Disk | 36TB for 2 years near the 200Gbps end, see [Disk Sizing](#disk-sizing-notes) |


### Disk sizing notes

The disk sizing depends on a number of factors 

   - Is the ISP a residential or a commerical ISP ? 
   - If the ISP using CGNAT ?
   - The traffic profile 
   - If the ISP is using Trisul IPDR AAA integration 

So we recommend all ISP start off with 8TB, estimate the peak storage per day using Storage Status tool, then order the appopriate storage. 

## Operating Systems

Trisul IPDR is available on the following Operating Systems 

| OS               | Recommended | Notes |
| ---------------- | ---|---|
| Ubuntu 20.04/22.04/24.04 |  Ubuntu 22.04| |
| RHEL 9/8       | RHEL 9.x| Can also use OracleLinux, RockyLinux, AmazonLinux, RHEL, CentOS versions 9/8|