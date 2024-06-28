# IPDR-Watchdog

![IPDR-Watchdog](./images/watch_dog.png)

Real time monitoring of trisul-IPDR system which send email alerts when IPDR is down.

## How it works ?

1. First , it will check for the follwing error conditions before proceding into watchdog
   
   - Checks the Hub config file is present in given location.
   
   - Checks the Log file is accessible or not
     
     If above conditions fails it exit from the script

2. Location of log file is fetched from trisulHubconfig.

3. To check whether the trisul is flushing  or not it fetched the latest log entry from log file is compared with current time.The difference between them should be not greater than 10 min.If so , it triggers the syslog to send mail . 
   
   :::note[Tip]
   
   Trisul will flush every one minute 
   
   :::

4. The IPDR system is sends email alert along with the log entry.  And the log file which triggers alerts is stored in tmp/IPDR_WATCHDOG_CONTEXT_STATUS/ for each context seprately until the system is up.

5. You can make the script to start the hub & probe context automatically.If doesn't flush then it sends the email .

## Requirement

1. Install cronjob on the IPDR system . 
   
   :::note
   
   For every user in system the crontab will be different . 

2. Assign default editor 
   
   :::caution[check before running]
   
   Running crontab -e command in terminal should not ask for editor. If so , the script stops automatically
   
   :::

3. Configure the email email along with receiptients you want to send mail.

4. Go to profile0 → All groups alert → and click edit option → change Send to Syslog/Email to Alert

:::note

Run this script as root user

:::

| Option | Default value    | Info                                     | Example |
| ------ | ---------------- | ---------------------------------------- | ------- |
| -c     | context0         |                                          |         |
| -n     | 2                |                                          |         |
| -s     | Your system name |                                          |         |
| -k     | 0                |                                          |         |
| -t     | 70               |                                          |         |
| -g     | No default value |                                          |         |
| -f     | 0                |                                          |         |
| -j     | /10* * * * *     |                                          |         |
| -i     | 0                |                                          |         |
| -e     | -                | If you need to ignore particular context |         |
| -r     | -                |                                          |         |
| -h     | -                |                                          |         |
