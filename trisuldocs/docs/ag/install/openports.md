# Ports used


The following ports are required to be open for the default install of Trisul 

- TCP Port 3000



## Firewall  Open ports 3000 

By default Webtrisul uses port 3000 – you need to either disable the host firewall or open these two ports. 


Some examples

```bash
# open the ports 
firewall-cmd --zone=public --add-port=3000/tcp
```

Also see :

1. [Using HTTPS for the webserver](/docs/howto/sslforwebtr)
2. [Changing the webserver port](/docs/howto/change_web_port )

