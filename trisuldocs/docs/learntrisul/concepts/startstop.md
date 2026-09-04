---
sidebar_position: 1
---

# Domain Services 

There are three groups of services in Trisul 

1. Service :  **domain**— The control plane for Trisul probes and hubs
2. Service :  **context** — Probes and Hubs,  the actual analysis process
3. Service :  **webserver** — The user interface

### Example to Start All Processes

The following example shows how to get the default Trisul context up and
running from scratch.

```language-bash
# start the domain processes on hub
trisulctl_hub start domain

# start the domain processes on each probe
trisulctl_probe start domain

# start actual Trisul processes 
trisulctl_hub start context default

# start web server
systemctl start webtrisuld 
```

The following sections go a bit deeper into each startup process.

## Start and Stop the Domain Process

Each probe and hub node needs a *domain* process to be up and running.
This enables the node to communicate with the other nodes in the domain.
This is done automatically only once at system startup time.

:::note **CLI tools trisulctl_hub and trisulctl_probe**  
Domain tasks cannot be performed by the Web Interface. Use the CLI app
[trisulctl_probe](/docs/ref/trisul_probe) on the probes and [trisulctl_hub](/docs/ref/trisul_hub) on the hubs.

:::

### Starting the Domain Processes on the Hub Node

The domain processes on the hub node control the following
functionalities

1. **router** - a node that routes messages (we use 0MQ )
2. **hub** - the DB and query node
3. **config** - holds the configuration parameters

To start the domain

```language-bash
trisulctl_hub start domain 
```

or use the interactive CLI mode

```language-bash
ubuntu@ip-172-31-15-106:~$ sudo trisulctl_hub
Connecting to domain0 
Trisul Network Analytics version 6.0.2697
Hub Node Management tool
   * found  trisul-hub    /usr/local/etc/trisul-hub/domain0/domain.xml
   * connecting to domain0 at ipc:///usr/local/var/lib/trisul-hub/domain0/run/ctl_local_req
trisul_hub(domain0)> start domain
   * trisul_cp_hub        started with new pid=4117     public-key=/usr/local/etc/trisul-hub/domain0/hub0.cert
   * trisul_cp_config     started with new pid=4129     public-key=/usr/local/etc/trisul-hub/domain0/config0.cert
   * trisul_cp_router     started with new pid=4141     public-key=/usr/local/etc/trisul-hub/domain0/router0.cert
```

- From the output you can see the domain processes trisul_cp_hub,
  trisul_cp_config, and trisul_cp_router are being started.
- If you run `start domain` on a domain that is already running it will
  be safely ignored.
- To stop the domain use `stop domain`.
- Use `list nodes` command to see the status of the domain.

### Starting the Domain on the Probe Node(s)

Now you need to start the domain on *each* probe node. By default you
only have one probe called `probe0`.

The domain processes on the probe node control the following nodes

1. **probe** - the trisul probe

To start the domain

```language-bash
trisulctl_probe start domain 
```

### Stop the Domain

You typically do not have to stop the domain process on each node. You
only need to do this if you are updating the certificates for the nodes
or when you want a clean shutdown.

To stop the domain , log on to each probe node and enter

```language-bash
trisulctl_probe stop domain 
```

and then log on to each hub node and enter

```language-bash
trisulctl_hub  stop domain 
```

## Start and Stop Contexts

A [context is an independent instance](/docs/ag/domain/contexts) of Trisul. Initially you
only have a single context named `default` you may create additional
contexts to create a multi-tenant setup. You can start/stop contexts on
each probe or hub independently.

### View Contexts

To view all contexts and their running states use the `info context`
command on *trisulctl_hub* or *trisulctl_probe* tool.

To view all contexts

```language-bash
trisulctl_hub
info context
```

To view specific context

```language-bash
trisulctl_hub (or trisulctl_probe)
info context default
```

### Start Context Using CLI

To start a context from a CLI

```language-bash
trisulctl_hub start context default
```

The output could be something like  

```language-bash
trisul_hub(domain0)> start context default
   + config0              started success.default
   + hub0                 started Successfully started context processes default@hub0
   + probe0               started Successfully started context processes default@probe0
Log from default@hub0 context default
Log from default@probe0 context default
trisul_hub(domain0)> 
```

You can see that the context processes are automatically started on all
domain nodes, even if they are on different physical machines.

To start a context only on a particular node - say `probeEAST`

```
start context default@probeEAST
```

Similarly you can use the `stop context` command.

### Start Context Using Web UI

You can also do the same thing from the Web UI.

- Login as admin
- On the left menu - select the context you wish to work with. If you
  want to work with the *default* context - select *Context: default*
- Select *Start/Stop Tasks*

You can then just click on the Start and Stop buttons against the hub
and probe nodes.

### Stop Context Using CLI

To stop a context from a CLI use the `stop context` command.

> If you stop a hub context and if the probes are still running, you may
> experience some gaps in your data.

You can run this command from either the trisulctl_probe or
trisulctl_hub tool, it will be executed on all domain nodes.

To stop context *default*

```language-bash
trisulctl_hub stop context default
```

To stop context *default* only on *probeEAST*

```language-bash
trisulctl_hub 
stop context default@probeEAST
```

You can also use `stop context all` to stop/start all contexts

## Start and Stop Webtrisul

The web interface can simply be managed by the usual *systemctl* tool.

The service names for the webinterface are

1. `webtrisuld` - for normal HTTP based access
2. `webtrisulssld` - for HTTPS (SSL) access

### Starting Webtrisul

```language-bash
sudo systemctl start webtrisuld
```

### Stopping Webtrisul

```language-bash
sudo systemctl stop webtrisuld
```

To check errors with systemctl use `journalctl -u webtrisuld`

### Starting Webtrisul SSL Server

The service name for the SSL webserver is *webtrisulssld*

See : [How to switch to SSL Web Server](/docs/howto/sslforwebtr)

```language-bash
sudo systemctl start webtrisulssld
```

## Automatically Starting on Boot

Trisul startup scripts make it easy to automatically start the system on
every boot.

By default the following services automatically restart

1. **webtrisuld.service** \| webtrisul
2. **trisul-hub.service and trisul-probe.service** \| the domain
   processes

The following service is NOT automatically started

1. **trisul-probe0-context0.service** \| the probe server

To start the Trisul probe as well , do the following

```language-bash
sudo systemctl enable   trisul-probe0-context0 
```

### Starting the SSL Server Instead of the HTTP Server

To start the SSL web server, you have to disable the HTTP service. See
below.  
If you enable both , neither of them may start properly.

```language-bash
sudo systemctl disable  webtrisuld

sudo systemctl enable   webtrisulssld
```
