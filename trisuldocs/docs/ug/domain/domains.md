---
sidebar_position: 04
sidebar_label: Domains
---

# Domains

A domain is the top level group to which probes and hubs are members.
This section describes the concepts and operations on the domain.

> The central concept to a Trisul Network Analytics domain is the [CURVE](http://curvezmq.org/) “certificate” key pair. The nodes that
> connect to the domain must authenticate using this certificate. The
> steps in this section therefore mostly deal with creating this
> certificate and installing them.

## Domain Certificate

The domain is identified by a file called the “Domain Certificate” and
an associated private key. The cert works as follows:

1. contains the 2 Network Endpoints called “frontend” and “backend”
   that probes and hubs connect to
2. contains the public key
3. along with the domain certificate there is a *private key* file
   called `domain0.cert_secret` that is only installed on the Hub node
   and not visible to other nodes

The default domain called `domain0` is a local domain. If you open up
the file `/usr/local/etc/trisul-hub/domain0/domain0.cert` you will find
that the endpoints are of the form `ipc://..` This is a local IPC socket
because by default Trisul Probe and Trisul Hub reside on the same box.
If you want to move to a TCP socket you need to create a new certificate
as shown below with the new network ports.

### Creating a new domain certificate

It is recommended that you create and use a fresh domain0.cert file
after playing with Trisul for a while. This is because the Trisul
packages all include the same file so you can get started.

#### Create a new domain certificate

1. Type `trisulctl_hub`
2. Enter command `create domain`
3. Enter a domain name : must start with “domain” - eg “domainEAST”
4. Enter 2 network endpoints : for example tcp://192.168.2.80:7000 and
   7001 for ports 7000 and 7001

Check if the certificate is created successfully in `/usr/local/share/trisul-hub/domain0.cert`

It should look something like this

```language-bash
root@trisulorg-ubuntu-1gb-sfo2-01:/usr/local/etc/trisul-probe/domain0# cat domain0.cert 
#   ****  Generated on 2016-07-27 20:52:08 by CZMQ  ****
#   ZeroMQ CURVE Public Certificate
#   Exchange securely, or use a secure mechanism to verify the contents
#   of this file after exchange. Store public certificates in your home
#   directory, in the .curve subdirectory.

metadata
    domain-id = "domain0"
    domain-backend = "tcp://10.10.234.90:12000"
    domain-frontend = "tcp://10.10.234.90:12001"
    domain-description = "Default Trisul Demo Domain"
curve
    public-key = "?$*:Ze]{UxMgkRM[K[{FmmEc@wq:P4p)+#qT0c5d"
```

#### Install the new domain certificate

Now you need to install the new certificate on the hub and then
redistribute it to all the other nodes.

1. first check if `create domain` worked. There should be a
   domain0.cert and domain0.cert_secret in /usr/local/share/trisul-hub.
   Replace domain0 with domainXX if you have named it differently
2. Type `trisulctl_hub`
3. Stop running domain `stop domain domain0`
4. Type `install domain /usr/local/share/trisul-hub/domain0.cert`
5. Confirm - if domain already exists, say “YES ” to replace the
   certificate file.
6. Restart domain `start domain`

Now you need to distribute the new `domain0.cert` file to all probes and
hub nodes.

#### Install domain certificate on probe and hub

Say you got the new domain0.cert file in /home/mydir on a probe node. To
update the certificate do :

1. Type `trisulctl_probe`
2. Stop the domain `stop domain domain0`
3. Install the new certificate `install domain /home/mydir/domain0.cert`
4. Start the domain

Follow the same process to update the new domain certificate extra hub
nodes.

## Probe Authentication

Probe certificate. The only details in the probe certificate are its
name and description.

```language-bash
root@trisulorg-ubuntu-1gb-sfo2-01:/usr/local/etc/trisul-probe/domain0# cat probeTRISUL.cert
#   ****  Generated on 2017-02-01 17:59:25 by CZMQ  ****
#   ZeroMQ CURVE Public Certificate
#   Exchange securely, or use a secure mechanism to verify the contents
#   of this file after exchange. Store public certificates in your home
#   directory, in the .curve subdirectory.

metadata
    node-id = "probeTRISUL"
    node-description = "TRISUL.ORG site "
curve
    public-key = "OhxF2Vk)Negg(Z=&pPxI7Vi*e84o$Ty<vyTKpNd+"
```
