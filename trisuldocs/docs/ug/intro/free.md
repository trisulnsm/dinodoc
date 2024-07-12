---
sidebar_position: 2
---
# How to get started

Trisul is incredibly easy to get started on. There is no sign ups or
credit cards - its as easy as ‘apt-get install’ or ‘yum install’.

The following links will get you up and viewing dashboards.

1. prepare a bare metal or VM and install Ubuntu or CentOS \[
   [supported platforms](https://www.trisul.org/download/) \]
2. install Trisul using normal Ubuntu or CentOS methods (apt-get or
   yum) \[ [quick install](https://www.trisul.org/download/) \]
3. arrange for packets or Netflow to reach the Trisul Probe \[ [How to
   feed packets to Trisul](/docs/ug/install/input_packets) , [how
   to send
   Netflow/SFlow/IPFIX/etc](/docs/ug/install/input_netflow)\]
4. login and start viewing \[ [running trisul, opening
   firewall](/docs/ug/install/startstop) \] \| \[[your first
   login](/docs/ug/basicusage/) \]

## Single probe

The easiest way to start is to use our *meta packages* “Trisul Full
(CentOS) or trisul-full (Ubuntu)”. This will install all components on a
single box with secure internal communications. This is the best way to
get started. Later you can create your own data collection topology by
distributing trisul-probes. More details about distributed [Trisul
Domain](/docs/ug/domain)

## The default Free license

The default install of Trisul automatically includes a ‘Free License’.
This lets you run Trisul for free but restricts the database to the most
recent 3 days. This is a great way to get started. The same APIs for
extending Trisul are available for the Free License as well. More
details about the [Free License](https://www.trisul.org/free-license/)

## Easy licensing

At any time of running on the free license, you can upgrade to a paid
license depending on the size of your internal network. The licensing
information is available on the [Pricing](https://www.trisul.org/pricing/) page. Its all
completely transparent and no hidden terms or other tricks.
