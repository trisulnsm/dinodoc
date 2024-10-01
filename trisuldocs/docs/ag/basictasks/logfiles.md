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
<TIMESTAMP> <SEVERITY> <IPADDRESS> <USERNAME> <CONTEXTNAME> - <MESSAGE>
```

Sample

````bash
25-09-2024 13:43:58 ERROR 100.74.2.2 admin default - Login failed
25-09-2024 13:44:04 INFO 100.74.2.2 admin default - User successfully logged in
25-09-2024 13:44:58 INFO 100.74.2.2 admin default - probe0 started successfully
25-09-2024 13:45:10 INFO 100.74.2.2 admin default - Logout Successful : duration 1 m 6 s
25-09-2024 13:45:18 ERROR 100.74.2.2 wh default - Failed login attempt with invalid user
25-09-2024 13:45:27 ERROR 100.74.2.2 user default - Login failed
````

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


