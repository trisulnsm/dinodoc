# Installing

Trisul supports many ways to install either by pulling from repositories or by manually installing package files. This page guides you through both approaches so you can choose the method that suits your system and preferences.

Use this page when:

:point_right: You’re doing a fresh install using packages (recommended for most users).  
:point_right: You want to ensure everything (core + optional tools) installs cleanly.  
:point_right: You need instructions tailored to your Linux distribution (Ubuntu / Debian, RHEL/Oracle / CentOS, etc.).  

Following the steps here ensures you get a working Trisul setup quickly, with all required components configured properly.

The first step is to login and register at the Trisul [**Getting Started**](https://www.trisul.org/get-started/) setup portal. 


## Installing All Packages


Select the instructions as per the platform of your choice to install the **`Trisul-Full`** meta package consisting of all packages. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="jammy" label="Ubuntu Jammy 22.04" default>
    ```bash
    # login as root
    sudo -i
    apt install ca-certificates software-properties-common curl gnupg2 -y 
    curl -sS https://trisul.org/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/trisul.gpg > /dev/null 2>&1
    echo "deb [signed-by=/usr/share/keyrings/trisul.gpg] https://trisul.org/repos/apt/debian jammy main" | sudo tee /etc/apt/sources.list.d/trisul.list
    apt update 
    apt install trisul-full
    ```
  </TabItem>
  <TabItem value="focal" label="Ubuntu Focal 20.04">
    ```bash
    # login as root
    sudo -i
    apt install ca-certificates software-properties-common curl gnupg2 -y 
    curl -o - https://trisul.org/pubkey.gpg | apt-key add -
    add-apt-repository https://trisul.org/repos/apt/debian
    apt update
    apt install trisul-full
    ```
  </TabItem>

  <TabItem value="or9" label="RHEL/ Oracle 9">
    ```bash
    #Installing dependencies 
    yum install yum-utils
    yum install epel-release
    yum-config-manager --add-repo http://yum.oracle.com/repo/OracleLinux/OL9/distro/builder/x86_64
    yum install redhat-lsb-core
    
    #adding trisul YUM repository 
    cd /etc/yum.repos.d 
    curl -LO https://www.trisul.org/trisulfull-rhel9.repo 
    # check if Trisul Full is available now
    yum group list
    # install
    yum groupinstall "Trisul Full"
    # open port 3000/3003 for web access 
    firewall-cmd --zone=public --add-port=3000/tcp
    firewall-cmd --zone=public --add-port=3003/tcp
    ```
  </TabItem>
  <TabItem value="ora8" label="RHEL/ Oracle 8">
    ```bash
    # adding trisul YUM repository
    cd /etc/yum.repos.d
    curl -LO https://trisul.org//trisulfull-rhel8.repo
    # check if Trisul Full is available now
    yum group list
    # install
    yum groupinstall "Trisul Full"
    # open port 3000/3003 for web access 
    firewall-cmd --zone=public --add-port=3000/tcp
    firewall-cmd --zone=public --add-port=3003/tcp
    ```
  </TabItem>
</Tabs>


:::tip Congrats ! next step

:point_right: After installation, you should login as admin and select the ["Product Mode"](selectmode)
:::


## Installing Each Package 

If you prefer installing only specific Trisul components instead of the full bundle, you can install individual packages using one of the methods below.


### Via the Repository 

If you want to install individual packages, you follow the same commands as above, but make just one change: in the final install command, **replace** `trisul-full` with the packages you want to install.


<Tabs>
  <TabItem value="ubuntu" label="Ubuntu Based" default>

    ```bash
    sudo apt  install trisul-hub trisul-probe webtrisul
    ```
    To install plugins

    ```bash
    sudo apt install trisul-badfellas trisul-geo
    ```
  </TabItem>


  <TabItem value="redhat" label="Redhat Based" default>
    ```bash
    yum install trisul-hub trisul-probe webtrisul
    ```

    To install plugins
    ```bash
    yum install trisul-badfellastrisul-geo
    ```

  </TabItem>

</Tabs>



### Via the DEB Files 

If you want to install the packages manually, you can use the DEB files. The DEB packages can be found on the Downloads page.

Download each DEB package and install and install each file with: `dpkg -i trisul-probe-7.0_xxx.deb` etc.


----


## CentOS/RHEL Installation

You can install Trisul on CentOS or RHEL using either yum or rpm, depending on how you prefer to manage packages.

### Adding the YUM Repository

If you want to install Trisul through **yum**, you only have to do this once to add the Trisul repository to `yum.repos.d`


#### Repo locations 

Use the file that matches your distribution:

- **RHEL9/Oracle9**   
```
curl -LO https://www.trisul.org/trisulfull-rhel9.repo
```
- **RHEL8/Oracle8** 
```
curl -LO https://www.trisul.org/trisulfull-rhel8.repo
```
- **RHEL7/CentOS7** 
```
curl -LO https://www.trisul.org/trisulfull.repo
```

Then move into the repo directory and download the repo file:

```bash
cd /etc/yum.repos.d
curl -LO https://www.trisul.org/trisulfull.repo


# check if Trisul Full is available now
yum group list
```

Once the group appears, you can install Trisul packages normally using yum.  

The following example installs the Trisul core packages

### Installing the RPM Packages Manually

If you prefer manual installation, download each RPM file and install them with the standard RPM command:

```
rpm -Uvh trisul-probe-7.0xyz.rpm
rpm -Uvh trisul-hub-7.0xyz.rpm
rpm -Uvh webtrisul-7.0xyz.rpm
```


## Installing behind a proxy server

If you need to install Trisul from behind a proxy server, set your proxy details first. Replace the example IP address and port with your own, then continue with the installation steps as usual.


```bash 
# login as root
sudo -i  
export http_proxy=http://192.168.2.11:3128
export https_proxy=http://192.168.2.11:3128

#.. then continue the steps above
```



----


## Distributed Install

By default, Trisul (and the free license) lets you run all components on a single server. That setup is enough for most initial deployments. You can return to this section later if you decide to scale up.

When you’re ready to expand, Trisul supports a distributed layout where multiple trisul-probe instances report to one or more trisul-hub nodes.

Keep these rules in mind for a distributed deployment:

- `trisul-hub` and webtrisul must run on the same machine
- You can deploy multiple `trisul-probe` instances as needed
- Optional plugin packages should be installed on each `trisul-probe` where you want those features.

This approach allows Trisul to grow with your network while still giving you a central point for analysis and dashboards.

See [Distributed Domain](/docs/ag/domain/)
