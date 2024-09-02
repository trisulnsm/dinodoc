---
sidebar_position: 3
---

# Uninstall

Trisul packages can be uninstalled like any other linux package.

:::success[Data and config will be retained]
Uninstalling Trisul will not harm the data or configuration. You may reinstall at any time to pick where you left off.
:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="deb" label="Ubuntu Uninstall" default>
  The following example will uninstall the core Trisul packages
  ```bash
  apt-get remove trisul-probe trisul-hub webtrisul
  ```
  Other ways to uninstall

  1. If you have installed using the `trisul-full` meta package.  To remove everything  `apt-get remove 'trisul-full'`  
  2. Uninstall a single package  `apt-get remove trisul-probe` 
  3. Using dpkg manually `dpkg -r trisul-probe` 
  
  </TabItem>
  <TabItem value="rpm" label="CentOS/RHEL Uninstall">
  The following example will uninstall the core Trisul packages
  ```bash
  yum remove trisul-probe trisul-hub webtrisul
  ```
  Other ways to uninstall.

  1. If you installed using the meta package 'Trisul-Full - use `yum group remove 'Trisul Full'` to remove it all
  2. Uninstall each package   `yum remove trisul-probe`
  3. Use RPM to uninstall each package `rpm -e trisul-probe`
  </TabItem>
</Tabs>

## Resetting the database clean


Uninstalling does not change the data or the configuration. If you wish to purge the data.  Do so before uninstall.

See [Cleaning the Database](/docs/ug/basicusage/cleanenv)