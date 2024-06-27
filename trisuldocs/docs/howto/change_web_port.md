# Change the Trisul webserver port

The Trisul webserver listens on port 3000 by default.

## Steps to change Web Trisul ports

### Step 1: Shutdown Web Trisul

```language-bash
systemctl stop webtrisuld
```

### Step 2: Change nginx.conf

- Open the `/usr/local/share/webtrisul/build/nginx.conf` file as shown

```
  server {
    listen 3000;
    server_name localhost;
```

Change the 3000 to your new port

### Step 3: Start webtrisul

```
systemctl start webtrisuld
```

### Step 4 : Change the report port option

Login as admin and go to *Webadmin: Manage -\> App Settings* and set the
*Web Server Port* to your new port. This is used by an internal module
of WebTrisul that generates periodic PDF reports.

### Step  5 : Optional : Change the WebSockets 3003 port

For *real time stabbers* Trisul uses Web Sockets on port 3003. To move this to another port

- Open the `/usr/local/share/webtrisul/build/thin-nginxd` and change 3003 to your new port
