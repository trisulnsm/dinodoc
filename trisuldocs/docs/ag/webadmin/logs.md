---
sidebar_position: 17
---

# View Logs

For troubleshooting you can view various logs from the web interface
itself.

## Viewing Web Server Logs

:::info navigation

:point_right: Login as admin and select *Web Admin &rarr; Manage &rarr; Web Server Logs*

:::

Then you can select to view any of the following types of logs

***Web server Log***
Logs for the Trisul web server.

***Background tasks log***

Logs on scheduled tasks like report mailers, blacklist downloaders etc.
Use this to check status of automatic downloads of threat intel, geo,
and various other lists.

***Web Sockets Log***

Errors related to the real time stabbers

***Auth Log***

View user login including failed attempts

***Email Logs***
View email log sent by trisul

***SNMP Dump Logs***

Download SNMP command and dumps for debugging purposes

## Viewing Probe and Hub Logs

Hub and Probe logs represent the actual Trisul processes running
processing network traffic. They are linked to a particular context. To
view Hub and Probe logs

:::info navigation

:point_right: Login as admin and select Context: default &rarr; Admin Tasks &rarr; Start/Stop
Tasks

:::

This shows the list of hubs and probes. To view Hub and Probe logs click
on the *More Options* link and select the view options link as shown
below.

![](images/startstop_task.png)

*Figure: View Options in Hubs and Probes*

## Log Directory

If you want the raw webserver log it can be found on the Trisul Hub
server at `/usr/local/var/log/trisul-hub/webtrisul`  
The files are named production.log or productionssl.log (if you are
running webtrisul on HTTPS)

Also see `trisbashrc:“/docs/ref/trisbashrc.html` which contains helper
aliases to locate various log files on the probe and hub server systems.
