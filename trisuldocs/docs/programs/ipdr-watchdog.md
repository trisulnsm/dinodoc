# Watch-dog

![IPDR-Watchdog](./images/watch_dog.png)

Real time monitoring of trisul-hub and trisul-probe and alert if they down.

## Consists of 3-scripts

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="HUB-FLUSHER-WATCHDOG" default >
   1. Detect the status of the trisul-system by analyzing the logs
   2. Send alert to syslog of the status of the trisul-system is down
   3. When the system is up after the certain interval then it send alert 
   4. Accept max of 1 context at a time
   :::tip
   Configure mail in trisul to receive alert
   :bell:
   :::
</TabItem>
<TabItem value="RUN-HUB-FLUSHER" >
   1. Detect multiple context status of the trisul-system
   2. Send alert for all the non-running context to syslog
   3. Depends on hub_flusher_watchdog.sh script
</TabItem>
</Tabs>

### Two Modes
   - FLOW MODE ( IPDR Customer )
   - COUNTER GROUP MODE ( Analytics Customer )
     - In this mode , the GUUID key need to be provied 

## How it works ?
- ### Preliminary check
   - Check the config file is availabe for the given context
   - Extract log file location from given context config file
   - Checks the log file is accessbile by the script owner
   - #### If above condition is not met then it stops
- ### Gather information from log
  - Access the latest log file & get the timestamp of last log
  - For Flow Mode  - latest log with END-IPFLOW-FLUSH is fetched
  - For GUUID Mode - latest log with user given GUUID-KEY and END-CG-FLUSH
  - From the above logs you can get flushed value,timestamp,no.of.dropped packets. 
- ### Processing the gathering information
  - Check the fetched log file is empty or not.
  - Check the flushed value not zero.
  - Check the difference between the timestamp of log and system should not be more than fixed-sec
  - #### If the above condition is not met the alert is generated

## Requirements
- Run this script as root
- Check cronjob is installed
- Configure email in trisul ( If you need email alert )

## Options

| Option             | Default value   | Description                           | Usage                                                       |
| -------------------| ----------------| ------------------------------------- | ------------------------------------------------------------|
| -c CONTEXT-NAME    | context0        | Context name                          | -c all [prints the flusher for all context]  or -c rack245' |
| -e CONTEXT-NAME    |     -           | Ignore context for checking           | -e netflow -e headoffice                                    |
| -s HOST-NAME       | hostname        | Host name                             | -s Trisul-Server                                            |
| -i INTERVAL        |     -           | Check flushed item count for last n minutes | -i 2                                                  |
| -g COUNTER_GROUP   |     -           | Check this counter group in log       | -g `{2314BB8E-2BCC-4B86-8AA2-677E5554C0FE}`                 |
| -f CHECK_FLOW_COUNT|     -           | Check flushed flow count              | -f                                                          |
| -v VERBOSE         |     -           | Print inforamtion like fluhsed flows  | -v                                                          |
| -m MATCH_ANY_ENIGINE|    -           | Check if any 1 engine is flushed      | -m                                                          |
| -r RESTART         |     -           | Restart context if down               | -r                                                          |


## How to run this script
<Tabs>
   <TabItem value="FLOW-MODE" default >
   ```bash
   /usr/local/share/trisul-hub/run_hub_watchdog.sh -c context0 -f -i
   ```
   ### Example
   ![ipdr_watchdog](./images/ipdr_watchdog_flowmode.png)
   </TabItem>
   <TabItem value="COUNTER_GROUP-MODE">
   ```bash
   /usr/local/share/trisul-hub/run_hub_watchdog.sh -c context0 -g {2314BB8E-2BCC-4B86-8AA2-677E5554C0FE} -v
   ```
   ![ipdr_watchdog](./images/ipdr_watchdog_guuidmode.png)
   </TabItem>
</Tabs>

When you see the example the above script is executed with argument -i
- This is the verbose option where it prints the values in terminal
- When you run without -i then it only print the values if the context is not running

### Example - How alert generated when the conditions not met
```bash
   /usr/local/share/trisul-hub/run_hub_watchdog.sh -c rack265
```
![error_log](./images/log_message.png)

- In above example you can see that the flush value is 0. So that it generated the alert to syslog.
- For both flow mode & GUUID mode the alert will be same


