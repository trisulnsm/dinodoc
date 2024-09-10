import Highlight from '/src/components/Highlighter/Highlight';

# Deploy a New Probe

This section describes how you can add a new Probe to a Trisul domain.
We will illustrate the steps involved by adding a new probe named
**probeWEST** to an existing Trisul domain **domain0**

## Overview of the Process

Adding a new probe to a Trisul domain simply involves two high level
operations

1. Generate a certificate/key-pair on the PROBE node and
2. Authorizing it on the HUB node.

In the following steps, commands labeled
<span class="badge badge--info">RUN ON PROBE</span> must be run on the
probe node using the CLI tool `trisulctl_probe` or
<span class="badge badge--danger">RUN ON HUB</span> using the CLI tool
`trisulctl_hub`

## Steps to Add a New probeWEST to a Trisul Domain

### 1. Install Package trisul-probe on the New System

<span class="badge badge--info">RUN ON PROBE</span>

On the new machine, install the `trisul-probe` package.
```language-bash
sudo apt-get install trisul-probe
```

### 2. Obtain and Install Domain Certificate

<span class="badge badge--info">RUN ON PROBE</span>

:::note **First time?** Switch domain0 to distributed network TCP mode. 

Make sure you have followed the steps in [Switching to a distributed domain](/docs/ag/domain/change_domain#switching-to-a-distributed-domain) from the default single machine domain.

:::

The domain certificate file can be found on the hub node at
`/usr/local/etc/trisul-hub/domain0/domain0.cert` Get this file and put
it in a local directory and then install it.

```language-bash
sudo trisulctl_probe install domain /home/unpl/domain0.cert
```

### 3. Create and Install a New Probe Certificate

<span class="badge badge--info">RUN ON PROBE</span>

Create a new certificate/key pair for your new probe , lets call it
`probeWEST`

```language-bash
sudo trisulctl_probe
create probe
.. enter probeWEST  # probe names must begin with probeXXXXX
.. enter description
install probe /usr/local/share/trisul-probe/probeWEST.cert
```

> You can see that a new probeWEST certificate + key pair is created, this certificate will be sent to the Hub node to authenticate in Step-5.

### Install Context on New Probe

<span class="badge badge--info">RUN ON PROBE</span>

Since the new probe you are about to deploy will send data to a Trisul
context called ‘default’ you need to install that context on the new
probe. Do the following

```language-bash
sudo trisulctl_probe
install context probeWEST default

# output below - dont copy
Wrote new config file /usr/local/etc/trisul-probe/domain0/probeWEST/context0/trisulProbeConfig.xml
Wrote ringpass file   /usr/local/etc/trisul-probe/domain0/probeWEST/context0/ringpass.txt
```

### 5.Add the New Probe Certificate on the Hub Server

<span class="badge badge--danger">RUN ON HUB</span>

Send the probe certificate file from Step-3 to hub server administrator.

Assuming you have placed the new probe0.cert on the hub node under
`/home/unpl/server`

```language-bash
sudo trisulctl_hub
install probe /home/unpl/server/probeWEST.cert
.. output below dont copy
Installing probe id probeWEST
Copied probe certificate        /usr/local/etc/trisul-hub/domain0/probeWEST.cert
Added client certificate        /usr/local/etc/trisul-hub/domain0/client_certs/probeWEST.cert
```

Now the probe can authenticate with the domain.

### 6.Add the New Probe to Contexts

<span class="badge badge--danger">RUN ON HUB</span>

Authorize and add the new probe to the contexts you want from the hub
side. Use the `trisulctl_hub set config` command

To add the new probeWEST to the default context use :

```language-xml
trisulctl_hub set config default@hub0 addlayer=probeWEST 
```

To check the probes allowed on this context

```language-xml
trisul_hub:unpl-seco-16-prod(domain0)> show config default@hub0
Node info
node                   hub0
context_name           default

Network endpoints
Type                   Endpoint
endpoints_flush        tcp://192.168.2.99:13000
endpoints_flush        tcp://192.168.2.99:13001
endpoints_query        tcp://192.168.2.99:13004
endpoints_pub          tcp://192.168.2.99:13002
endpoints_pub          tcp://192.168.2.99:13003

Probes allowed on context
Layer                  ProbeID
0                      probe0              
1                      probeMAA8
2                      probeWEST           
```

See the [Probe to Context Layer mapping reference ](/docs/ref/trisulhubconfig#probes)

### 7.Run change_endpoints for Hub Context (For First Probe Only)

<span class="badge badge--danger">RUN ON HUB</span><span class="badge badge--info">ONLY FOR FIRST PROBE</span>

By default , Trisul uses an IPC connection for each Hub node. If this is
the first remote probe you are adding. You  
need to switch the Hub to a TCP connection mode. Follow these steps.

```language-bash
/usr/local/share/trisul-hub/change_endpoints

.. enter domain [default = domain0]
.. enter hub [default = hub0]
.. enter context [default = context0]

.. next enter a local Hub IP to bind to - the probes will connect to this
.. next enter a starting port number
```

### Finishing Up

Now `trisulctl_hub restart domain` and `trisulctl_probe restart domain`
on all the hub and probe nodes respectively. Then use `list nodes` to
see if they have connected. Finally `start context default` to start
Trisul.

Congrats your new probe is now live !

—end task

## Uninstall a Probe

<span class="badge badge--danger">RUN ON HUB</span>

Simply remove the probe certificate file from
`/usr/local/etc/trisul-hub/domain0` . Then restart the domain. The probe
will no longer be allowed to connect to the domain.

Note that all the data collected by the probe will still be available
for viewing. There is no way to delete data collected by a probe because
it is merged with the overall data. If you wish to not see the probe
dropdown or options in the Web interface. Delete the probe from the
`trisulHubConfig.xml` hub config files. See above section for the
location of the file.

<span class="badge badge--info">RUN ON PROBE</span>

On the probe node, you can uninstall the probe using

```language-bash
sudo trisulctl_probe
trisul_probe:kku3(domain0)> uninstall probe domain0 probeWEST
Confirm stop local domain processes and uninstall probe [probeWEST] ? Enter YES to continue : 
..
```

This deletes the probe and all the data under it.
