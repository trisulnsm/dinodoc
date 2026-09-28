# Ports Used


The following ports are required to be open for the default install of Trisul 

- TCP Port 3000



## Firewall  Open Ports 3000 

By default, WebTrisul uses port 3000. Open this port in the host firewall, or disable the firewall.


Some examples

```bash
# open the ports 
firewall-cmd --zone=public --add-port=3000/tcp
```

Also see :

1. [Using HTTPS for the webserver](/docs/guide/howto/sslforwebtr)
2. [Changing the webserver port](/docs/guide/howto/change_web_port )

