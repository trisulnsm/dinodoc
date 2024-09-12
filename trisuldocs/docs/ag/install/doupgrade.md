---
sidebar_position: 4
---

# Upgrading Trisul

An upgrade is simply an uninstall followed by a new install.

Upgrading Trisul preserves all installation, application settings, and traffic data.

Typically it will look like the following

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

<Tabs>
  <TabItem value="deb" label="Ubuntu" default>
  ```bash
  sudo apt-get update 
  sudo apt-get remove --auto-remove trisul-full
  sudo apt-get install trisul-full
  ```
  or you can upgrade individual packages
  ```bash
  sudo apt-get update 
  sudo apt-get remove trisul-hub 
  sudo apt-get install trisul-hub
  ```
  </TabItem>
  <TabItem value="rpm" label="CentOS/RHEL Uninstall">
  ```bash
  yum group remove 'Trisul Full'
  yum group install 'Trisul Full'`
  ```
  If you are getting an error with using the Group commands, try upgrading individual packages. You can even put them all on a single line
  ``` bash
  yum  remove trisul-hub trisul-probe webtrisul yum  install trisul-hub trisul-probe webtrisul
  ```
  ```bash
  yum  remove trisul-hub trisul-probe webtrisul
  yum  install trisul-hub trisul-probe webtrisul
  ```
  </TabItem>
</Tabs>