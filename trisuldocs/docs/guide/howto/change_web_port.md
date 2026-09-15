# Change the Trisul webserver port

The Trisul webserver listens on port 3000 by default. This document explains how you can change this to a different port. 

:::info as root
Run these commands as root or sudo
:::


## Step 1: Change nginx.conf

Open the `/usr/local/share/webtrisul/build/nginx.conf` file as shown

```bash {2,2}
  server {
    listen 3000;
    server_name localhost;
}
```

Change the 3000 to your new port


## Step 2: Change the Web Server settings


:::note navigation
:point_right:  Login as admin and go to Webadmin: Manage &rarr; App Settings &rarr; Web Server
:::


Set the Web Server Port to  your new port.   



## Step 3: Restart Webtrisul

```bash 
systemctl restart webtrisuld
```

:::tip also see 
[How to use SSL/HTTPS for the Web Server](sslforwebtr)
:::
