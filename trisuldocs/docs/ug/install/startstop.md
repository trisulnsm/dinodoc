---
sidebar_position: 6
---

# Start and stop Trisul

Describes how you can start and stop Trisul components. For a more detailed explanation see [Basic Usage: Start and stop](/docs/ug/install/startstop)

## Running Web Trisul

Web Trisul provides the Web UI and is configured to start automatically.

### Start and Stop Webtrisul

Use the normal Linux tools to start and stop Webtrisul. The service name is `webtrisuld`

```bash
systemctl stop webtrisuld
systemctl start webtrisuld
```

### Open ports 3000 and 3003 for Webtrisul

By default Webtrisul uses port 3000 and 3003 (for WebSockets) – you need to either disable the host firewall or open these two ports. Some examples

```bash
# open the ports 
firewall-cmd --zone=public --add-port=3000/tcp
firewall-cmd --zone=public --add-port=3003/tcp

# if you are using ufw as a firewall 
ufw allow 3000
ufw allow 3003
```

Also see :

1. [Using HTTPS for the webserver](/docs/howto/sslforwebtr)
2. [Changing the webserver port](/docs/howto/change_web_port )

## Running Trisul

You can use the web interface or the trisulctl_probe/hub domain management tools.

### Run via Webtrisul

Logon as admin and then

Select Context → Admin Tasks → Start/Stop Tasks → Click on Start Probe and Hub buttons

### Run via command line

Login as root on the Hub or Probe node and type

```bash
trisulctl_probe 
start context default
```

The trisulctl_probe/hub tools execute commands on all nodes in the domain.

Also see :

1. [CLI tool trisulctl_hub](/docs/ref/trisul_hub)
2. [CLI tool trisulctl_probe](/docs/ref/trisul_probe)
