Using HTTPS
===========

Trisul comes built in with support for secure access via HTTPS.

To start the HTTPS version use the `webtrisulssld` service instead of
`webtrisuld`

``` {.language-bash}

# stop the HTTP server 
systemctl stop webtrisuld 

# start the HTTPS (SSL) server 
systemctl start webtrisulssld
```

Now you can access the web interface via **https://my.trisulhost.com**

**Replace demo certificate/key pair**\
Ensure you replace the demo certificate and key with new ones specific
for your organization as described below

Using your own certificate + private key
----------------------------------------

The SSL/TLS setup uses the demo certificate and private key that ships
with Trisul.\
They are found in:

  --------------------------- -------------------------------------------
  Certificate                 /usr/local/etc/trisul-hub/trisul.ssl.cert
  Private Key (unencrypted)   /usr/local/etc/trisul-hub/trisul.ssl.key
  --------------------------- -------------------------------------------

**Simply replace the certificate/key pair above with your key-pairs.**

Using a different name for the Certificate / Key
------------------------------------------------

If, for some reason you wish you use cert/key in a different file name.
Then you need to change the Trisul NGINX file as shown below to point to
your new certificate/key files.

The following changes has to be made in the nginx.conf file

1.  nginx.conf file is located in the /usr/local/share/webtrisul/build
    directory
2.  Do the following changes to under the server section

``` {.language-nginx}
server {
    listen 443;
    ssl                  on;
    ssl_certificate      /usr/local/etc/trisul-hub/trisul.ssl.cert;
    ssl_certificate_key  /usr/local/etc/trisul-hub/trisul.ssl.key ;
    }
```

Set SSL as default service
--------------------------

You can set the SSL service as the default service , which is
automatically started on each reboot.

``` {.language-bash}

# disable the HTTP service 
systemctl disable webtrisuld


# enable the HTTPS  service 
systemctl enable webtrisulssld
```
