# About Trisul Installation

Trisul can be deployed in many types of networks from small branch offices to large ISP and enterprise backbones. Because of this wide range of environments, installation can look different depending on your role and how much networking or Linux experience you have.

## Trisul Components

Trisul is a distributed monitoring system with a number of `trisul-probe` instances all reporting back to one or more `trisul-hub`.   
These two components form the core of every Trisul deployment:

- **`trisul-probe`**

- **`trisul-hub`**

In this architecture, probes can be placed at different points in your network, Trisul does not rely on a single server to capture everything. This allows you to monitor multiple network segments simultaneously and still view all results centrally through the hub.

You can also add more probes as your network grows, without disrupting your existing setup.

## What the Components Do


- `trisul-probe`: Captures live network traffic and performs local analytics. Each probe sits close to the network segment it is monitoring and sends the data to the Hub.

- `trisul-hub`: Receives data from one or more probes, stores it, and provides dashboards, reports, search, and analytics. This is where you log in to see dashboards and charts.


You can run both the `Hub` and `Probe` on the same machine (the simplest way to get started), or run them on separate machines if your network is larger.

Lets first understand how you can install all components on a single box and then slowly expand to explore distributed installation.

This section covers how to get a *single box* installation of Trisul up and running. For distributed installation see [**Distributed monitoring**](/docs/ag/domain/)  

import DocCardList from '@theme/DocCardList';

<DocCardList />

