---
sidebar_position: 4
---

# Upgrading Trisul

An upgrade is an uninstall followed by a new install.

Upgrading keeps your installation, application settings and traffic data,

To move from Trisul 7.0 to Trisul 8.0, remove the Trisul 7.0 packages and the old repository, then install Trisul 8.0. Trisul 8.0 signs the repository with a 3072-bit public key. Trisul 7.0 used a 2048-bit key. The Trisul 8.0 install steps replace that key.

Read the [Trisul 8.0.3431 release notes](https://forums.trisul.org/d/123-new-release-oct-2026-trisul-803431) before you upgrade.

Typically it will look like the following

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

<Tabs>
  <TabItem value="deb" label="Ubuntu" default>
  If you installed Trisul from the repository:

  1. Remove the Trisul 7.0 packages.
  ```bash
  sudo apt-get remove --auto-remove trisul-full
  ```
  2. Remove the Trisul 7.0 apt source list.
  ```bash
  sudo rm -f /etc/apt/sources.list.d/trisul.list
  ```
  3. Install the Trisul 8.0 packages. Follow [Installing](/docs/guide/starthere/setuptrisul/install/doinstall).

  If you downloaded the packages and installed them manually, remove the old packages and install the 8.0 DEB files. The DEB packages are on the download page. Open the [Getting Started page](https://trisul.org/get-started/); it leads you to the download page.

  ```bash
  sudo dpkg -r trisul-hub trisul-probe trisul-badfellas trisul-geo webtrisul
  sudo dpkg -i trisul-hub_8.0*.deb trisul-probe_8.0*.deb webtrisul_8.0*.deb trisul-badfellas_8.0*.deb trisul-geo_8.0*.deb
  ```
  </TabItem>
  <TabItem value="rpm" label="CentOS/RHEL">
  If you installed Trisul from the repository:

  1. Remove the Trisul 7.0 packages.
  ```bash
  yum group remove 'Trisul Full'
  ```
  2. Remove the Trisul 7.0 yum repositories.
  ```bash
  rm -f /etc/yum.repos.d/trisulfull-rhel*.repo
  ```
  3. Install the Trisul 8.0 packages. Follow [Installing](/docs/guide/starthere/setuptrisul/install/doinstall).

  If you downloaded the packages and installed them manually, remove the old packages and install the 8.0 RPM files. Download each RPM for your release from the download page. Open the [Getting Started page](https://trisul.org/get-started/); it leads you to the download page.

  ```bash
  rpm -e trisul-hub trisul-probe trisul-badfellas trisul-geo webtrisul
  rpm -Uvh trisul-hub-8.0*.rpm trisul-probe-8.0*.rpm webtrisul-8.0*.rpm trisul-badfellas-8.0*.rpm trisul-geo-8.0*.rpm
  ```
  </TabItem>
</Tabs>
