# Viewing log files

Trisul has a rich logging and monitoring framework. This section explains

1. log file locations
2. utilities for viewing log files
3. the ‘rat’ tool used for in depth monitoring of Trisul Probe pipelines

## Log file locations

The three types of log files are

1. domain logs – related to the domain processes that co-ordinate distributed nodes
2. application logs – the actual trisul probe and hub logs
3. web server logs – web apps

The locations of these files are :

### On the Probe nodes

| type        | what it is                              | default location                                                                                                                                                                  | files                                                                                          |
| ----------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Application | main trisul probe process               | `/usr/local/var/log/trisul-probe/domain0/probe0/context0` replace the domain, probe, and context with the actual fields if you have created your own contexts                     | ns-.log – trisul probe logs, xLuaX.log redirected print() statements from LUA script instances |
| Domain      | domain processes that co-ordinate nodes | `/usr/local/var/log/trisul-probe/domain0/probe0` replace with probe ID. each probe has its own domain processes because they are independent entities even if on the same machine | cp-XX.log probe logs                                                                           |

### On the Hub nodes

| type        | what it is                              | default location                                                                                                  | files                                                                                        |
| ----------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Application | trisul-hub Flush process                | `/usr/local/var/log/trisul-hub/domain0/hub0/context0` replace the domain, hub, and context with the actual values | fs-.log – trisul_flushd database writer logs , qs_.log – trisul_trpd TRP database query logs |
| Domain      | domain processes that co-ordinate nodes | `/usr/local/var/log/trisul-hub/domain0/hub0`                                                                      | cp-XX.log hub logs                                                                           |
| Domain      | domain processes that co-ordinate nodes | `/usr/local/var/log/trisul-hub/domain0`                                                                           | rt-XX.log domain router log                                                                  |

### On the database

| type        | what it is               | default location                          | files                                   |
| ----------- | ------------------------ | ----------------------------------------- | --------------------------------------- |
| Application | Web Trisul webserver log | `/usr/local/var/log/trisul-hub/webtrisul` | production.log – the main webserver log |

## Local viewing

The most common scenario is to `tail -f` the Trisul Probe logs. You can use the aliases defined in `trisbashrc` to help with this.

- Use `tailf.ns` alias to tail probe logs

- Use `cd.l` to change directory to the log directory
  
  ```bash
  # as root
  source /usr/local/share/trisul-probe trisbashrc
  tailf.ns
  ```

Read about [trisbashrc](https://trisul.org/docs/ref/trisbashrc.html) aliases

Similarly for the Hub Node

- Use `tailf.fs` to tail database flusher logs
- Use `tailf.qs` to tail database query logs
- Use `cd.l` to change directory to the log directory
- Use `tailf.ws` to tail webtrisul logs
- Use `cd.wl` to change directory to webtrisul log directory

## Remote viewing

Using the trisulctl_ tools you can view log files on any node. This is a really powerful feature that even allows you to `tail` logs on any node. A common use cause is to investigate errors on remote probes from a central hub location.

Say you are on the Hub node and want to view the *ns* log on probe1

```bash
trisulctl_hub
log default@probe1 log=ns       
  # Latest trisul log from probe1 context default


log default@probe1 log=ns tail       
  # Remote tail the log 
```

Type `help log` for various example uses.

## Rat – Trisul Internals Viewer

RAT is an advanced tool used to monitor internal mechanisms of Trisul Probe. It is mostly used by our developers and field engineers to optimize Trisul Probe for high performance uses.

To use it

```bash
rat <config-file> <filter-type>
 where filter-type is rxring, pfring, afpacket, ffpcap, or lpcap corresponding to the various input modesexample
```

```bash
rat /usr/local/etc/trisul-probe/domain0/probe0/context0/trisulProbeConfig.xml afpacket
```

Once rat is up and running you can see the stats of each stage of the filters in the *fast path* of Trisul Stream Analytics. Press q to quit.
