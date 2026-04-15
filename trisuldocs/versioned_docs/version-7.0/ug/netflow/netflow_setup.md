# Configure NetFlow

Trisul has the capability to use NetFlow like telemetry to gain deep
visibility into your traffic performance, monitor traffic flows, and
scan for security threats. Trisul features **comprehensive support** for
NetFlow v5/v9/JFlow/IPFIX/and SFlow metering. This document describes
*step-by-step* on how you can setup Trisul to process NetFlow and
*NetFlow-like* metering.

## Steps

### Step 1: Configure Your Routers

Configure your routers/switches to send NetFlow to the Trisul-Probe’s IP
address and note down the following

- What interfaces on the Trisul server is getting the NetFlow records
  (eth0,eth1,eth2, etc) ? What UDP ports are getting NetFlow records ?

#### Default Ports

The following ports are configured by default for NetFlow and SFlow
processing. The versions and flavors are automatically detected. 

To view or change these, Login as `admin` and,
:::info navigation
:point_right: Go to Context: Default &rarr;profile0 &rarr; [NetFlow Wizard](/docs/ug/netflow/netflow_wizard)
:::

- Traffic on UDP ports 2055,2056,2057,9500,9993 is interpreted as
  NetFlow/IPFIX/JFlow.
- UDP Port 6343 is treated as SFlow.

### Step 2: Confirm If NetFlow Records Are Being Received

This is an optional step. Use `tcpdump` to check whether NetFlow records
are indeed coming in on the Trisul interface using tcpdump.

    `sudo tcpdump  -i eth0 -nnn "udp port 2055"`

You should be seeing some data within a minute or so. If not, check on
other interfaces *eth1, eth2*. We recommend you ensure NetFlow is
reaching your server on the correct port before proceeding.

### Step 3: Change probe NetFlow_TAP Mode

Use the UI to change the mode from the default “Packet capture” to
“NetFlow”.  
To do that, Login as `admin` and,

:::info navigation
:point_right: Go to *Context: Default &rarr; Start/Stop Tasks*
:::

- For probe0 on the “Packets or NetFlow” column, change the drop down
  from **TAP** to **NetFlow_TAP**

### Step 4: Make Further Tweaks Using the NetFlow Setup Wizard

Login as `admin` and, 
:::info navigation
:point_right: Go to *Context: Default &rarr; profile0* &rarr; [*NetFlow Wizard*](/docs/ug/netflow/netflow_wizard)
:::

- Specify the interfaces and ports receiving NetFlow that you noted down
  in *Step 1*

- Specify your organizations Home Networks

- Adjust the sampling rate. If some of your devices uses *flow sampling*
  then you may have to manually configure that in Trisul. To do that you
  have to edit the NetFlow configuration file and add the [Device-IP to
  Sampling Rate mapping](/docs/ref/netflow-config#sampling-rates)

### Step 5: Restart trisul-probe and Finish

- Login as `admin` and
:::info navigation
:point_right: Go to *Context: Default &rarr; Admin Tasks &rarr; Start/Stop Tasks*
:::

- Start the probe
- Logout and log back in a “user” to see the dashboards.

Congratulations!! Now wait for about 10 minutes for NetFlow data to
start showing up.

## NetFlow Wizard

Use the [NetFlow Wizard](/docs/ug/netflow/netflow_wizard) to

1. Change interface eth0 on which we are getting NetFlow
2. Change the Home Networks
3. Change the UDP Ports that are mapped to NetFlow

## Verify Templates

NetFlow v9, IPFIX, JFlow, Netstream are technologies that use a concept
of Template records. These are special records sent by the router which
describe the metrics contained in normal data flow records. Viewing
these template records are a great way to troubleshoot NetFlow.

**To Show Templates**   
Login as `admin` and,

:::info navigation

:point_right: Go to Context:default &rarr; Admin Tasks &rarr; NetFlow Template DB

:::

You can see the template database on each probe. This is updated every
10 minutes or when a new template is received.

### Advanced Configuration

You can tweak the [NetFlow configuration file](/docs/ref/netflow-config) for more advanced settings.

Typically, you dont need to do this because the defaults have been
carefully selected for you.
