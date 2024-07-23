---
sidebar_position: 1
---

# Domain Management Tools

Trisul includes two command line tools for managing domain nodes. These
form the centre piece of Trisul 7.0 distributed environment.

1. **trisulctl_hub** — used to manage a domain from a admin perspective
2. **trisulctl_probe** — manage a domain from a probe

This section explains the various operations you can perform with these
tools. For more details : see [trisulctlhub Reference](/docs/ref/trisul_hub) and [trisulctl_probe Reference](/docs/ref/trisul_probe)

## Frequently used commands

Here are a few quick trisulctl\_ commands to get you start using the
domain tools. You can read the sections below for a more thorough
explanation.

### Common commands for Probe

```
    unpl@unplu14:~$ trisulctl_probe                                 
    start domain                                      // start domain process (only once )
    list nodes                                        // show nodes active in domain 
    info context                                      // show all contexts on all nodes 
    info context default                              // show context "default"
    start context default                             // start context named "default" - on all probes/hub
    stop context default                              // stop context named "default"
    start context default@hub0                        // start context "default" only on hub0 
    reset context default                             // delete data on context "default" and start over
    importpcap /pcaps/pcapdump00.pcap                 // start context 'default' over pcap file
    importpcap /pcaps/pcapdump00.pcap context="dat1"  // import pcap into new context 'dat1'
    testbench run /pcaps/pcapdump00.pcap              // dev tool to test lua script over a pcap file 
```

*Quick commands for running on trisul-probe using trisulctl_probe*

### Common commands for Hub

Many commands that work on trisulctl_probe also work from the hub. In
addition, the hub CLI tool has commands to authenticate new probes,
create a new domain certificate, etc that are not available in the probe
node.

```
    unpl@unplu14:~$ trisulctl_hub                                 
    start domain                                      // start domain process (only once )
    list nodes                                        // show nodes active in domain 
    info context                                      // show all contexts on all nodes 
    start context default                             // stop context named "default"
    reset context default                             // delete data on context "default" and start over
    install probe /tmp/probeEAST.cert                 // install a new probe cert 
    create context newcontext1                        // create a new context called 'newcontext1'
```

*Common commands you will want to run on trisulctl_hub*

## Uses of trisulctl_probe/hub

The trisulctl_hub and trisulctl_probe allow you to co-ordinate , manage,
and run commands across all the nodes in the domain. Without these tools
you would have to log in to each node and run the command manually. For
example, you can just run a command like `start context default` using
*trisulctl_hub* - this command will be executed on all nodes.

A short list of things you can do

1. check status of Trisul Probes if they are running
2. check database sizes on all nodes
3. view log files from any node
4. start and stop all nodes or only particular nodes
5. install or delete new probes, hubs, or contexts
6. LUA Workbench : A development environment to test your scripts
7. importpcap tools

Many of these operations can also be performed using the web interface.
However a familiarity with these tools is needed to manage a medium to
large multi probe distributed Trisul. In fact, when you use operations
like “Start Trisul Probe” from the web interface, behind the scenes the
trisulctl_hub command “start context” is executed.

## Invoking the tools

The trisulctl\_ tools are placed in `/usr/local/bin` when the probe/hub
packages are installed. The default install of Trisul puts the Probe and
Hub on a single machine, so both the trisulctl_hub and trisulctl_probe
are available.    

To invoke the tools

```language-bash
root@ubuntu1604:~# trisulctl_probe 
```

The trisulctl\_ tools then connect to the Trisul domain using the
following process.

1. check if there is a valid domain certificate file at
   /usr/local/etc/trisul-probe/domain0/domain0.cert.
2. read the domain-backend and domain-frontend connection end points
   from the certificate
3. use the certificate to establish a ZMQ CURVE authenticated
   connection to the domain endpoints
4. read and execute commands from CLI

In the following listing we type the `list nodes` command to query all
the nodes in the domain. If you had 3 probes you can see their details
here.

```language-bash
root@ubuntu1604:~# trisulctl_probe 
Connecting to domain0
Trisul Network Analytics version 6.0.2762
Probe management tool
   * found  trisul-probe  /usr/local/etc/trisul-probe/domain0/domain.xml
   * connecting to domain0 at ipc:///usr/local/var/lib/trisul-probe/domain0/run/ctl_local_req
trisul_probe:ubuntu1604(domain0)> 
trisul_probe:ubuntu1604(domain0)> list nodes
     node-id             name                type      register_time                 heartbeat_time 
   * config0             config0             CONFIG    Mon Feb  6 11:36:01 2017      Mon Feb  6 11:36:01 2017      
   * hub0                hub0                HUB       Mon Feb  6 11:36:01 2017      Mon Feb  6 11:36:01 2017      
   * probe0              probe0              PROBE     Mon Feb  6 18:55:27 2017      Mon Feb  6 18:55:27 2017      
   * router0             router0             ROUTER    Mon Feb  6 11:35:59 2017      Mon Feb  6 11:35:59 2017      
trisul_probe:ubuntu1604(domain0)> quit
Closing socket
Terminating 0MQ 
root@ubuntu1604:~# 
```

## CLI features

The trisulctl_probe/hub tools have a powerful CLI. Some features are

1. Single line commands can be entered on one line directly ; eg
   `trisulctl_probe start domain` instead of dropping into the CLI and
   then entering `start domain`
2. Tab completion
3. Alias command to shortcut
4. Unlimited history

### Useful trisbashrc bash aliases

There is a very nifty set of bash aliases called `trisbashrc` on the
`/usr/local/share/trisul-probe` and `trisul-hub` directories. To add
these macros to your shell environment. See [trisbashrc
Reference](/docs/ref/trisbashrc) for a complete list of useful shortcuts.

## Start and stop domain

On each node the domain processes need to be running at all times. The
default trisul installation packages automatically add a *systemd*
script to start and stop the domains. You can also manually start and
stop the domain as shown below.

### Start domain

The command to start a domain are.

| Command          | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| `start domain`   | Start domain processes on local node, no effect if domain is already running |
| `stop domain`    | Stop domain processes on local node.                                         |
| `restart domain` | Restart is an alias for stop + start                                         |

> Starting a domain results in processes like `trisul_cp_XXX` running on
> the node. Try `ps -ef | grep trisul_cp` to see

### Checking successful join

You can check if you have successfully joined a domain using a couple of
commands

| Command        | Description                                |
| -------------- | ------------------------------------------ |
| `list nodes`   | print all nodes currently joined to domain |
| `info context` | print all contexts on all nodes            |

### Stop the domain

On `quit` the CLI tool exits but the domain processes still run in the
backgruound. To stop it :

| Command       | Description |
| ------------- | ----------- |
| `stop domain` | stop domain |

------------------------------------------------------------------------

## Start and stop contexts

A context is a separate instance of Trisul. The default installation of
Trisul installs a context named `default` or `context0`

### Start context

> trisulctl_probe Start/Stop context is the way you start and stop Trisul

The commands

| Command                                   | Description                                            |
| ----------------------------------------- | ------------------------------------------------------ |
| `start context default`                   | Start the default context on all nodes                 |
| `start context context0`                  | Start the context named `context0` - same as `default` |
| <code>start context default@hub0</code>   | Start the context named `default` only on node hub0    |
| <code>start context default@probe0</code> | Start the context named `default` only on node probe0  |

The domain runs the command on all the relevant nodes and if any errors
are seen, it is printed on screen. This has the same effect as if you
login to Web Trisul as *admin* and then executed *Context -\> Start/Stop
Tasks -\> Start Probe/Hubs*

#### Check logs

You can check or tailf any log on any node by using the `log` command.
Type `help log` for examples.

### Stop context

The commands

| Command                                  | Description                                                                                                                                                                                                                                                                           |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stop context default`                   | Stops the default context on all nodes                                                                                                                                                                                                                                                |
| <code>stop context default@hub0</code>   | Stop only the context on `hub0` node. The context will still be running on other nodes.                                                                                                                                                                                               |
| <code>stop context default@probe0</code> | Stop only the context on `probe0` node. The data collection and processing on probe0 alone will stop. A subsequent start context will resume the data processing. This is useful if you just want to restart a particular probe without touching the other nodes in the Trisul domain |

### Info context

You can check if you have successfully joined a domain using a couple of
commands

| Command                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `info context default` | Print context information for the default context |
| `info context`         | Print info about all contexts                     |

An example output of `info context default` is shown below, you can see
the two probeXX nodes and other details.

```language-bash
trisul_probe:trisulorg-ubuntu-1gb-sfo2-01(domain0)> info context default
node           context_name   version      init    state    size_disk   data_window         #runs   profile        runmode
-----------------------------------------------------------------------------------------------------------------------------------
config0        default        6.0.2750     INIT    RUNNING  180.0 kB    00h 00m 00s         0       profile0                      
hub0           default        6.0.2750     INIT    RUNNING  61.751 GB   665h 45m 00s        0                                     
probe0         default        6.0.2766     INIT    RUNNING  5.071 GB    1343h 29m 44s       31      profile0       online_rxring  
probeTRISUL    default        6.0.2766     INIT    RUNNING  169.15 MB   23h 33m 24s         2       profile0       online_rxring  
probeUNLEASH   default        6.0.2766     INIT    RUNNING  12.478 GB   1041h 07m 24s       42      profile0       online_rxring  
```

### Delete vs Reset context

There are two commands `reset context` and `delete context` - Both of
them ask for confirmation

- reset context —\> delete the data from the context but keep the
  configuration. This is used if you want to purge all data and start
  over
- delete context —\> delete the context itself. the data and the
  configuration are removed. **Note** you cannot delete the default
  context so that is treated as a reset

| Command                  | Description                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| `reset context default`  | clear data but keep the configuration                                                                |
| `delete context default` | remove the entire context, data and config. You can create a new context with that name if you want. |

------------------------------------------------------------------------

## trisulctl_hub

The `trisulctl_hub` is the CLI tool for domain hub management. Think of
trisulctl_hub as a administrator tool.

For a complete list of commands check out the [trisulctl_hub
Reference](/docs/ref/trisul_hub)

## trisulctl_probe

The `trisulctl_probe` is the CLI tool for manage probes.

For a complete list of commands check out the [trisulctl_probe
Reference](/docs/ref/trisul_probe)
