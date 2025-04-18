#  	Install Monit

## Overview

The `install_monit.sh` script is designed to monitor and start critical processes, including Hub and Probein the event of unexpected termination. This ensures continuous data collection and processing, minimizing downtime and data loss.

## Requirements

- Ensure Monit is installed in your system

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

- The script adds the specified processes (Hub and Probe to the Monit configuration file (/etc/monit.rc).
- Monit checks the status of these processes every minute.
- If a process is found to be not running, Monit automatically restarts it.

>**Important Notes: The script assumes that the Monit service is already installed and configured on the system. The -d option is specific to IPDR customers and should not be used for NetFlow customers.**

## Options

| Option             | Default value   | Description                           | 
| -------------------| ----------------| ------------------------------------- |
| `-d`               |                 | Monit IPDR process                    |           
| `-x-`              |                 | Exclude a context from from being monited |
| `-n`               |hub0             | Hub node |
| `-p`               |probe0           | Probe node|
| `-h`               |                 | Shows Help |

**Example**: `./install_monit.sh -n hub0 -p probe0 -x netflow -x context0 -d`   
**For Help**: `./install_monit.sh -h`  