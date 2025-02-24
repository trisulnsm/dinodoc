#  	INSTALL MONIT

root@it2-test:/usr/local/share/trisul-hub# ./install_monit.sh -h  
**Usage**: ./install_monit.sh [ -n HUBNODE(default hub0) ] [ -p PROBENODE(default probe0) ] [ -d MONIT_IPDR ] [ -x CONTEXT(default context0) ]   
**Detail**: -d monit ipdr process, -x exclude a context from being monited (can use it multiple times)  
**Example**: ./install_monit.sh -n hub0 -p probe0 -x netflow -x context0 -d   
**For Help**: ./install_monit.sh -h  


## Overview

The `install_monit.sh` script is designed to monitor and recover critical processes, including Hub, Probe, and WebTrisul, in the event of unexpected termination. This ensures continuous data collection and processing, minimizing downtime and data loss.

## Usage

### NetFlow Customers

To configure process monitoring for NetFlow customers, run the script with the following arguments:

```bash
./install_monit.sh -n hub0 -p probe0 -x netflow -x context0
```

### IPDR Customers
For IPDR customers, add the -d option to the command:

```bash
./install_monit.sh -n hub0 -p probe0 -x netflow -x context0 -d
```
## How it Works

- The script adds the specified processes (Hub, Probe, and WebTrisul) to the Monit configuration file (/etc/monit.rc).
- Monit checks the status of these processes every minute.
- If a process is found to be not running, Monit automatically restarts it.

>**Important Notes: The script assumes that the Monit service is already installed and configured on the system. The -d option is specific to IPDR customers and should not be used for NetFlow customers.**