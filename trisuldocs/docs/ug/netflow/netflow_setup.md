---
title: Configure Netflow
sidebar_position: 2
---

# Configure Netflow

Trisul has the capability to use Netflow like telemetry to gain deep
visibility into your traffic performance, monitor traffic flows, and
scan for security threats. Trisul features **comprehensive support** for
Netflow v5/v9/JFlow/IPFIX/and SFlow metering. This document describes
*step-by-step* on how you can setup Trisul to process Netflow and
*Netflow-like* metering.

## Steps

### Step 1: Configure your routers

Configure your routers/switches to send Netflow to the Trisul-Probe’s IP
address and note down the following

- What interfaces on the Trisul server is getting the Netflow records
  (eth0,eth1,eth2, etc) ? What UDP ports are getting Netflow records ?

#### Default ports

The following ports are configured by default for Netflow and SFlow
processing. The versions and flavors are automatically detected. To view
or change these, use the [Netflow Wizard](netflow_wizard#netflow_wizard) from Context: default -\>profile0 -\> Netflow Wizard

- Traffic on UDP ports 2055,2056,2057,9500,9993 is interpreted as
  Netflow/IPFIX/JFlow.
- UDP Port 6343 is treated as SFlow.

### Step 2: Confirm if Netflow records are being received

This is an optional step. Use `tcpdump` to check whether Netflow records
are indeed coming in on the Trisul interface using tcpdump.

    sudo tcpdump  -i eth0 -nnn "udp port 2055"

You should be seeing some data within a minute or so. If not, check on
other interfaces *eth1, eth2*. We recommend you ensure Netflow is
reaching your server on the correct port before proceeding.

### Step 3: Change probe NETFLOW_TAP mode

Use the UI to change the mode from the default “Packet capture” to
“Netflow”

- Login as Admin. Then go to *Context: Default —\> Start/Stop Tasks*
- For probe0 on the “Packets or Netflow” column, change the drop down
  from **TAP** to **NETFLOW_TAP**

### Step 4: Make further tweaks using the Netflow Setup Wizard

- Login as Admin and open the [Netflow Wizard](netflow_wizard#netflow_wizard) by selecting *Context:default -\> profile0 -\> Netflow Wizard*

- Specify the interfaces and ports receiving Netflow that you noted down
  in *Step 1*

- Specify your organizations Home Networks

- Adjust the sampling rate. If some of your devices uses *flow sampling*
  then you may have to manually configure that in Trisul. To do that you
  have to edit the Netflow configuration file and add the [Device-IP to
  Sampling Rate mapping](/docs/ref/netflow-config#sampling-rates)

### Step 5: Restart trisul-probe and finish

- Login as Admin. Then select *Context:default -\> Admin Tasks -\>
  Start/Stop Tasks*
- Start the probe
- Logout and log back in a “user” to see the dashboards.

Congratulations!! Now wait for about 10 minutes for Netflow data to
start showing up.

## Netflow wizard

Use the [Netflow Wizard](netflow_wizard#netflow_wizard) to

1. Change interface eth0 on which we are getting Netflow
2. Change the Home Networks
3. Change the UDP Ports that are mapped to Netflow

## Verify Templates

Netflow v9, IPFIX, JFlow, Netstream are technologies that use a concept
of Template records. These are special records sent by the router which
describe the metrics contained in normal data flow records. Viewing
these template records are a great way to troubleshoot Netflow.

**To show templates** 

:::note navigation

Login as admin, then select Context:default \>
Admin Tasks \> Netflow Template DB

:::

You can see the template database on each probe. This is updated every
10 minutes or when a new template is received.

### Advanced configuration

You can tweak the [netflow configuration file](/docs/ref/netflow-config) for more advanced settings.

Typically, you dont need to do this because the defaults have been
carefully selected for you.
