# Traffic Monitoring with Trisul

Traffic monitoring is the central task of Trisul. Out of the box, Trisul
 measures over 120 parameters about 16 different "things" such as 
Applications, Hosts, VLAN, MAC, etc. A "Counter Group": [Traffic metering concepts](/docs/ug/cg/intro) is 
the key concept you need to know about in Traffic Monitoring with 
Trisul.

import DocCardList from '@theme/DocCardList';

<DocCardList />

### Traffic analysis features

##### Real Time

You can monitor any metric in real time using [Real time stabbers](/docs/ug/cg/stabber). This helps with troubleshooting and real time tracking of developing situations.

##### Historical analysis

Use [retro analysis](/docs/ug/cg/retro) tools, long term traffic charts, monthly usage reports and other tools 
for historical analysis. Trisul does not summarize or roll up any old 
data.

### Data acquisition methods

##### Packet capture

The default mode. Trisul does all its analytics by directly capturing packets from the network. Learn how to [capture packets](/docs/ug/install/input_packets) for Trisul NSM.

##### Netflow

Can also accept [Netflow](/docs/ug/netflow/netflow_setup) v5, v9, SFLOW, and IPFIX instead of packets. This is a powerful 
low-cost way to gain total visibility into your internal network traffic
 without a TAP and Probe rollout with packet capture techniques.

### Task list

Jump to common network analysis tasks

- Find out which flows caused a traffic pattern
- View flow activity of a particular host or port in real time
- Jump from alerts to flows that caused them
- Set up **flow trackers** to analyze specific activity
- Investigate past activity
- Enable metering which depend on flows not packets
- Optimize full content storage (eg, store only first 1M of each flow)

[View all tasks](/docs/ug/cg/tasks)

### Related features

[Real Time stabbbers](/docs/ug/cg/stabber)

Chart usage of any item or view toppers in any counter group in real time.

Example : View in real time top Internal Hosts, or view Total Bps for Port 443

[Retro Analysis](/docs/ug/cg/retro)

Select a time interval and drill down over 100 ways.

[Retro FAQ](/docs/ug/cg/retrofaq)

Select a time interval and click on pre-defined analysis in Q&A style

[Custom metering](/docs/ug/cg/custom)

Create your own custom counter policies.
