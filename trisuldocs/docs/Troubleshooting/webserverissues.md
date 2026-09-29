# Web Server issues

This page covers web server problems and how to fix them.


## Getting a Timeout Error for long requests

The default timeout for requests is 5 minutes.

If you are getting timeout error for long running reports, queries, uploads or other long requests. Try adjusting the timeouts as shown below.

These files are located in `/usr/local/share/webtrisul/build` directory

Change the proxy_read_timeout to 900 for 15 minutes timeout

```nginx title="nginx.conf"
    
    proxy_read_timeout 900;
    proxy_next_upstream  error;
    proxy_busy_buffers_size   512k;
```

and the backend

Change the timeout to 900 for 15 minutes timeout

```yaml title="thin-config.yml"
---
chdir: /usr/local/share/webtrisul
environment: production
timeout: 300
log: log/thin.log
pid: tmp/pids/thin.pid


```

The file ships with `timeout: 300`. Change it to `timeout: 900`.

Then restart WebTrisul so both changes take effect. See [Start and Stop WebTrisul](/docs/guide/ag/admintasks/startstop#start-and-stop-webtrisul).
