---
sidebar_position: 2
---

# Install trisul

This page contains install information about Trisul Network Analytics.


:::info[Quick install]
Follow the steps in the [Download page](https://trisul.org/download) to quickly get started.
The rest of this page provides more information about the packages, applications, and modes.
:::


For more information about the packages and modes, read the rest of this page. 


## Packages

The Trisul Network Analytics system consists of 3 Core and 2 Optional Plugin packages.

### Core packages

:::warning required
These three core packages are required.
:::

- :ticket: **trisul-probe**
  - The probe package provides the network capture, and stream processing functionality. 
- :ticket: **trisul-hub**
  - The hub package provides the database storing and querying functionality.
- :ticket: **webtrisul**
  - The webserver package 

### Plugin packages

Optional packages to provide extra functionality.

- :electric_plug: **trisul-badfellas** 
  - Badfellas plugin – compares traffic with public threat intelligence indicators
- :electric_plug: **trisul-geo**
  -  Geo plugin – adds country, ASN, city metering

----

## Ubuntu Installation

You can use**apt-get** or download and install the individual DEB packages manually.

### Adding the APT repository

If you plan on using *apt-get* you need to add the `trisul.org` repository to your sources.

```bash
sudo add-apt-repository https://trisul.org/repos/apt/debian 
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys A6CC1B18
sudo apt-get update
```

Next you can install the packages. The following command installs the three core packages

```bash
sudo apt-get install trisul-hub trisul-probe webtrisul
```

to install the plugins

```bash
sudo apt-get install trisul-badfellas trisul-geo
```

### Installing the DEB packages manually

The DEB packages can be found on the Downloads page.

Download each DEB package and install them manually using the normal debian package installer `dpkg -i trisul-probe-7.0_xxx.deb` etc.


----


## CentOS/RHEL Installation

You can use rpm or yum to install the packages.

### Adding the YUM repository

You only have to do this once to add the Trisul repository to `yum.repos.d`


Repo locations 

- RHEL9/Oracle9 `curl -LO https://www.trisul.org/trisulfull-rhel9.repo`
- RHEL8/Oracle8 `curl -LO https://www.trisul.org/trisulfull-rhel8.repo`
- RHEL7/CentOS7 `curl -LO https://www.trisul.org/trisulfull.repo`


```bash
cd /etc/yum.repos.d
curl -LO https://www.trisul.org/trisulfull.repo


# check if Trisul Full is available now
yum group list
```

then install the packages normally. The following example installs the Trisul core packages

```bash
yum install trisul-hub trisul-probe webtrisul
```

the following installs the plugin packages

```bash
yum install trisul-badfellastrisul-geo
```

### Installing the RPM packages manually

Download each RPM file and use the usual RPM tool `rpm -Uvh`to install them `rpm -Uvh trisul-probe-7.0xyz.rpm`etc.


----


## Distributed install

The default installation and the free license allows you to put all componments on a single server. Once you wish to scale up, you can deploy a number of trisul-probe’s reporting to one of more trisul-hub nodes. The rules are :

1. trisul-hub and webtrisul should be installed on one machine
2. multiple trisul-probes can be installed
3. the optional plugins packages must be installed along with trisul-probe

See [Distributed Domain](/docs/ug/domain/)
