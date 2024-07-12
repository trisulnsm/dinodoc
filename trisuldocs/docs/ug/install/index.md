# About trisul installation

Trisul is a distributed monitoring system with a number of
`trisul-probe` instances all reporting back to one or more `trisul-hub`.
We first explain how you can install all components on a single box and
then slowly expand to explore distributed installation.


**Is this your first install?** Follow the [Steps in the Download
page](https://www.trisul.org/download/) first.

This section covers how to get a *single box* install of Trisul up and
running. For distributed installation see [Distributed
monitoring](/docs/ug/domain/index.md)

import DocCardList from '@theme/DocCardList';

<DocCardList />

## Plug Trisul into your network

There are three major ways to get data into Trisul. Click on each link
for detailed instructions.

| Name                           | Info                                                                                                                                                                               |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Live packet capture            | Configure a Port Mirror (SPAN Port), use a Network Tap, or a Linux Inline Bridge. <br/>Read [Setup packet capture for Trisul](input-packets)                  |
| Netflow from routers, switches | Configure your routers, switch to send Netflow, SFLOW, IPFIX or other similar flow information to Trisul. <br/> Read [Setup Netflow for Trisul](input-netflow) |
| Read PCAP dumps                | Read PCAP files dumped by a third party program like tcpdump <br/> Read [Process PCAP dumps with Trisul](/docs/howto/offline_proc.md)                                              |
