# Installing

This page contains install information about Trisul Network Analytics.


## Installing All Packages


Select the instructions as per the platform of your choice to install the "Trisul-Full" meta package consisting of all packages. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="jammy" label="Ubunty Jammy 22.04" default>
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
  <TabItem value="bionic" label="Ubuntu Bionic 18.04">
    ```bash
    # login as root
    sudo -i
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
  <TabItem value="Cent7" label="RHEL/ CentOS7">
    ```bash
    # adding trisul YUM repository
    cd /etc/yum.repos.d
    curl -LO https://www.trisul.org/trisulfull.repo
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


### Via the Repository 

Follow the steps above to add the repository, in the final step instead of 'Trisul-Full' specify the individual packages to install.


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

The DEB packages can be found on the Downloads page.

Download each DEB package and install them manually using the normal debian package installer `dpkg -i trisul-probe-7.0_xxx.deb` etc.


----


## CentOS/RHEL Installation

You can use rpm or yum to install the packages.

### Adding the YUM Repository

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



### Installing the RPM Packages Manually

Download each RPM file and use the usual RPM tool `rpm -Uvh`to install them `rpm -Uvh trisul-probe-7.0xyz.rpm`etc.


----


## Distributed Install

The default installation and the free license allows you to put all componments on a single server. Once you wish to scale up, you can deploy a number of trisul-probe’s reporting to one of more trisul-hub nodes. The rules are :

1. trisul-hub and webtrisul should be installed on one machine
2. multiple trisul-probes can be installed
3. the optional plugins packages must be installed along with trisul-probe

See [Distributed Domain](/docs/ag/domain/)
