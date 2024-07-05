# About trisul installation

Trisul is a distributed monitoring system with a number of
`trisul-probe` instances all reporting back to one or more `trisul-hub`.
We first explain how you can install all components on a single box and
then slowly expand to explore distributed installation.

<div class="info info-circle autohint">

**Is this your first install?** Follow the [Steps in the Download
page](/download) first.

</div>

<div class="danger info-circle autohint">

This section covers how to get a *single box* install of Trisul up and
running. For distributed installation see [Distributed
monitoring](/docs/ug/domain/index.html)

</div>

## Plug Trisul into your network

There are three major ways to get data into Trisul. Click on each link
for detailed instructions.

|                                |                                |                                                                                                                                                                                      |
| ------------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <i class="fa fa-th"/>          | Live packet capture            | Configure a Port Mirror (SPAN Port), use a Network Tap, or a Linux Inline Bridge. <br/>Read [Setup packet capture for Trisul](/docs/ug/install/input_packets.html)                   |
| <i class="fa fa-sitemap"/>     | Netflow from routers, switches | Configure your routers, switch to send Netflow, SFLOW, IPFIX or other similar flow information to Trisul. <br/> Read [Setup Netflow for Trisul](/docs/ug/install/input_netflow.html) |
| <i class="fa fa-file-text-o"/> | Read PCAP dumps                | Read PCAP files dumped by a third party program like tcpdump <br/> Read [Process PCAP dumps with Trisul](/docs/howto/offline_proc.html)                                              |
