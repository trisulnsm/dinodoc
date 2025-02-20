# Hub-Flusher-Watchdog

The `hub_flusher_watchdog.sh` script monitors the status of the Trisul System by analyzing logs. Here's a detailed 
explanation of its functionality:

## Key Functionality

**Log Analysis**: The script analyzes Trisul System logs to determine its current status.  
**Down Alerts**: If the system is down, the script sends an alert to the syslog, notifying administrators of the issue.  
**Up Alerts**: Once the system is up after a certain interval, the script sends another alert to the syslog, confirming the system's recovery.  
**Context Management**: The script is designed to handle a maximum of **one context at a time**, ensuring focused monitoring and alerting.  

:::tip
   Configure mail in trisul to receive alert
   :bell:
   :::

## Requirements
- Run this script as root
- Ensure cronjob is installed.
- Configure email in Trisul (if email alerts are required).

## Options

| Option             | Default value   | Description                           | Usage            |
| -------------------| ----------------| ------------------------------------- | -----------------|
| -c CONTEXT-NAME    | context0        | Context name                          | -c context name [prints the flusher for the context] |
| -s HOST-NAME       | hostname        | Host name                             | -s Trisul-Server                                            |
| -i INTERVAL        |     -           | Check flushed item count for last n minutes | -i 2                                                  |
| -g COUNTER_GROUP   |     -           | Check this counter group in log       | -g `{2314BB8E-2BCC-4B86-8AA2-677E5554C0FE}`                 |
| -f CHECK_FLOW_COUNT|     -           | Check flushed flow count              | -f                                                          |
| -v VERBOSE         |     -           | Print information like flushed flows  | -v                                                          |
| -m MATCH_ANY_ENGINE|    -           | Check if any 1 engine is flushed      | -m                                                          |
| -r RESTART         |     -           | Restart context if down               | -r                                                          |
| -a filepath        |     -          | Eg -a/home/trisul/filepath.text        | AAA file process interval |
| -j interval        |    3600        | Eg - j 3600             | AAA file process interval |



