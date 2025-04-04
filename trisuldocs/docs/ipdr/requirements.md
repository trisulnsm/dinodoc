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
		| CPU | 16 vCPU cores | 
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


### System Requirements for > 200Gbps upto 5Tbps

:::tip Sizing large ISP

For large ISP > 500Gbps we recommend running the 200Gbps system requirements for a few days to get an accurate estimate of disk size.

:::

		| Hardware  | System Requirements  |
		| ------- | ------------ |
		| Type | Bare Metal Preferred |
		| CPU | 32-48 vCPU cores | 
		| Memory |  64GB RAM |
		| Network | 1GbE interface for NetFlow , and a separate 1GbE for management access |
		| Disk | Approx 36TB for 200Gbps, add 50GB/day for every 100Gbps |


### Disk sizing considerations

The disk sizing depends on a number of factors 

   - Is the ISP a residential or a commercial ISP ? 
   - If the ISP using CGNAT ?
   - The traffic profile 
   - If the ISP is using Trisul IPDR AAA integration 

So we recommend all ISP start off with 8TB, estimate the peak storage per day using Storage Status tool, then order the appropriate storage. 


## System Requirements for AWS Cloud 200 Gbps 

Trisul IPDR can also run on cloud. We use a mix of storage technologies to optimize storage costs. These storage tiers map to  Trisul Storage Pools, data automatically moves from one pool to another.  Logs in archive would take about 12 hours to get ready from S3.Glacier, this is acceptable because the compliance gives sufficient time to respond to queries. 

Here is an indicative configuration and approx costs (2025) would USD $600-800/month 

		| Type | AWS name | Details |
		| ----  | -------- | -------- | 
		| Compute | c6a.4xlarge | 16 vCPU, 32GB RAM |
		| Storage Tier 1 |  EBS gp3 SSD |  1 TB |
		| Storage Tier 2 |  EBS st1 Hard disk |  8TB |
		| Storage Tier 3 |  S3 Glacier Flexible | 8TB |
		| Storage Tier 4 |  S3 Glacier Deep Archive | 16TB |



## Operating Systems

Trisul IPDR is available on the following Operating Systems 

| OS               | Recommended | Notes |
| ---------------- | ---|---|
| Ubuntu 20.04/22.04/24.04 |  Ubuntu 22.04| |
| RHEL 9/8       | RHEL 9.x| Can also use OracleLinux, RockyLinux, AmazonLinux, RHEL, CentOS versions 9/8|