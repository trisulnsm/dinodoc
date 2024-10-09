# Viewing Log Files

This section explains

- Types of logs
- Directories where they can be found
- Utilities for viewing log files

## Log File Types

Log file types 

1. Application logs – the actual trisul probe and hub logs
2. Web server logs – web apps
3. Security audit logs 
4. Domain logs – related to the domain processes that co-ordinate distributed nodes

The locations of these files are :


## Log File Locations


## Application logs 

### Probe 

| Type        | What it is   | Default location   | Files   |
| ----------- | ---- |- | ---
| Application | Main trisul probe process      | `/usr/local/var/log/trisul-probe/domain0/probe0/context0` replace the domain, probe, and context with the actual fields if you have created your own contexts                     | ns-.log – trisul probe logs, xLuaX.log redirected print() statements from LUA script instances |

### Hub 

| Type        | What it is    | Default location   | Files  |
| ----------- | ---------------------------- |-----| ---- |
| Application | trisul-hub Flush process    | `/usr/local/var/log/trisul-hub/domain0/hub0/context0`replace the domain, hub, and context with the actual values | fs-.log – trisul_flushd database writer logs , qs_.log – trisul_trpd TRP database query logs |

## Web Server logs

| Type        | What it is | Default location | Files   |
| ----------- | ------------------------ | ----------------------------------------- | -- |
| Web  | Web Trisul webserver log | `/usr/local/var/log/trisul-hub/webtrisul` | production.log – the main webserver log |

----


## Audit logs 


### Purpose

Contains Web Server user activity logs. Logins, start/stops, changing of databases, modifying users and permissions and so on.
You can use this log to integrate with SIEM platforms.  

### Location 

Filename `audit.log`

````bash
/usr/local/var/log/trisul-hub/webtrisul
````

Change to directory alias 
````bash
source /usr/local/share/trisul-hub/trisbashrc
cd.wl 
````

### Sample


The format is 

```bash
<TIMESTAMP> <SEVERITY> <IPADDRESS1> <IPADDRESS2> <USERNAME> <CONTEXTNAME> - <MESSAGE>
```

Sample

````bash
19-09-2024 18:39:14 INFO 192.168.1.20 127.0.0.1 user default - User successfully logged in 
````

| Name | Sample Value | Description |
|------|--------------|-------------|
| Time Stamp | 19-09-2024 18:39:14 | The timestamp of the logged event. |
| Severity Level | INFO | Event severity classification (eg, INFO, WARNING, ERROR) |
| HTTP Real IP | 192.168.1.20 | Original IP address of the client that retrieves the value from the HTTP header. |
| Request IP | 	127.0.0.1 | IP address of the proxy server requested by the client. |
| Username |user | Username who triggered the event. |
| Context Name | default | Context in which the event occured. |
| Log Message | User successfully logged in | A message on the log activity for more context. |

-----


## Domain process logs
| Type        | What it is   | Default location   | Files   |
| ----------- | -------------------------------| ------------------ | -----------------|
| Domain      | Domain processes that co-ordinate nodes | `/usr/local/var/log/trisul-probe/domain0/probe0` replace with probe ID. Each probe has its own domain processes because they are independent entities even if on the same machine | cp-XX.log probe logs                                                                           |
| Domain      | Domain processes that co-ordinate nodes | `/usr/local/var/log/trisul-hub/domain0/hub0`  | cp-XX.log hub logs  |




## Local Viewing

The most common scenario is to `tail -f` the Trisul Probe logs. You can use the aliases defined in `trisbashrc` to help with this.

- Use `tailf.ns` alias to tail probe logs

- Use `cd.l` to change directory to the log directory
  
  ```bash
  # as root
  source /usr/local/share/trisul-probe trisbashrc
  tailf.ns
  ```

Read about [trisbashrc](/docs/ref/trisbashrc)aliases

Similarly for the Hub Node

- Use `tailf.fs` to tail database flusher logs
- Use `tailf.qs` to tail database query logs
- Use `cd.l` to change directory to the log directory
- Use `tailf.ws` to tail webtrisul logs
- Use `cd.wl` to change directory to webtrisul log directory


