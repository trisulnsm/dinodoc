---
sidebar_position: 2
---

# Install trisul

Trisul is a distributed network analytics system that can be installed on off the shelf hardware. Beginners and users of the Free License will want to install all the packages on a single server. Advanced users can split the Hub and Probe nodes and roll out a distributed deployment.

**Is this your first install?** Follow the [Steps in the Download page](https://trisul.org/download) first.

## Packages

Trisul Network Analytics uses the normal APT (Ubuntu) and YUM (Redhat) tools for releasing packages. There are two custom repositories

- CentOS/RHEL : https://trisul.org/download/trisulfull.rhttps://www.trisul.org/download/trisulfull.repo/epo
- Ubuntu : https://trisul.org/repos/apt/debian

The Trisul Network Analytics system consists of 3 Core and 3 Optional Plugin packages.

#### Core packages

These three packages are required.

1. **trisul-probe** | the probe node
2. **trisul-hub** | the hub node
3. **webtrisul** | the webserver

#### Plugin packages

Optional packages to provide extra functionality.

1. **trisul-badfellas** | Badfellas plugin – compares traffic with public intel sources
2. **trisul-geo** | Geo plugin – adds country and ASN metering
3. **trisul-urlfilter** | Urlfilter – classifies web traffic

## Docker

You can also install our new TrisulNSM Docker image which contains a fully functional NSM (Network Security Monitoring) system including an integrated IDS. This is an alternative to the package installation.

## Ubuntu Installation

You can use **apt-get** or download and install the individual DEB packages manually.

### Adding the APT repository

If you plan on using *apt-get* you need to add the Trisul.org repository to your sources.

```bash
sudo add-apt-repository http://trisul.org/repos/apt/debian 
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys A6CC1B18
sudo apt-get update
```

Next you can install the packages. The following command installs the three core packages

```bash
sudo apt-get install trisul-hub trisul-probe webtrisul
```

to install the plugins

```bash
sudo apt-get install trisul-badfellas trisul-urlfilter trisul-geo
```

### Installing the DEB packages manually

The DEB packages can be found on the Downloads page.

1. Download each DEB package and install them manually using `dpkg -i trisul-probe-6.0_xxx.deb` etc.

## CentOS/RHEL Installation

You can use rpm or yum to install the packages.

### Adding the YUM repository

You only have to do this once to add the Trisul repository to yum.repos.d

```bash
cd /etc/yum.repos.d
wget http://trisul.org/download/trisulfull.repo

# check if Trisul Full is available now
yum group list
```

then install the packages normally. The following example installs the Trisul core packages

```bash
yum install trisul-hub trisul-probe webtrisul
```

the following installs the three plugin packages

```bash
yum install trisul-badfellas trisul-urlfilter trisul-geo
```

### Installing the RPM packages manually

1. Download each RPM file and use `rpm -Uvh` to install them : `rpm -Uvh trisul-probe-6.0xyz.rpm` etc.

## Customize initial configuration

By default, all Trisul Probes will listen on `PCAP` mode on interface `eth0` using the `online_rxring` mode. If this is good for you, then you can just start the probe and skip this section for now. You rarely need to tweak the hub configuration , here are some changes you may want to make to the probe.

### Customizing the probe

The trisul configuration file is created in [/usr/local/etc/trisul-probe/domain0/probe0/context0/trisulProbeConfig.xml](https://trisul.org/docs/ref/trisulconfig)

Some of the things you may want to change are :

| [TrisulMode](https://trisul.org/docs/ref/trisulconfig#app) | Default is *TAP*, if you are feeding Netflow change this to *NETFLOW_TAP*        |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [Ring](/docs/ref/trisulProbe-config#ring)                      | Default is enabled, disable if you do not want to store packets                  |
| [User](/docs/ref/trisulProbe-config#app)                       | Default is *trisul.trisul*. Change if you want trisul to run as an existing user |

### Tweaking application parameters from the web interface

Login to the web interface as admin/admin and you may want to change the following two parameters.

| Interface     | Listens for traffic on *eth0*                 | Go to *Context Default → Profile0 → Capture Adapter* to change |
| ------------- | --------------------------------------------- | -------------------------------------------------------------- |
| Home Networks | Only private IP space treated as home network | Goto *Context Default → Profile0 → Home Networks* to change    |

## Distributed install

The default installation and the free license allows you to put all componments on a single server. Once you wish to scale up, you can deploy a number of trisul-probe’s reporting to one of more trisul-hub nodes. The rules are :

1. trisul-hub and webtrisul should be installed on one machine
2. multiple trisul-probes can be installed
3. the optional plugins packages must be installed along with trisul-probe

## Next. Starting and stopping Trisul

The next section you want to read is [Starting and Stopping Trisul](/docs/ug/install/startstop)
