# Web Server issues

Related to web server


## Getting a Timeout Error for long requests

The default timeout for requests is 5 minutes.

If you are getting timeout error for long running reports, queries, uploads or other long requests. Try adjusting the timeouts as shown below.

These files are located in `/usr/local/share/webtrisul/build` directory

Change the proxy_read_timeout to 900 for 15 minutes timeout

```  nginx.conf
    
    proxy_read_timeout 900;
    proxy_next_upstream  error;
    proxy_busy_buffers_size   512k;
```

and the backend

Change the timeout to 900 for 15 minutes timeout

``` thin-config.yml
---
chdir: /usr/local/share/webtrisul
environment: production
timeout: 300
log: log/thin.log
pid: tmp/pids/thin.pid


```
