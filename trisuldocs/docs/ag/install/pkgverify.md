---
sidebar_position: 5
---

# Verifying Packages


Official Trisul package files (RPM and DEB) for Linux-based operating systems are signed with a GnuPG key available at https://trisul.org/pubkey.gpg

This page describes how you can verify these package files to ensure 

- These are created by Unleash Networks official build systems
- They have not been tampered with




import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

<Tabs>
<TabItem value="deb" label="Ubuntu">
  You will be using a package called`dpkg-sig`to verify the DEBs. Make sure it is installed first.

  The steps are :

  1. Import our public key into your key ring using`gpg --import pubkey.gpg`
  2. Verify using`dpkg-sig --verify pkg.deb`

  A sample verify session would look like below

  ```bash
  nsmdemo@ubu22:~$ wget https://trisul.org/pubkey.gpg 
  nsmdemo@ubu22:~$ gpg --import pubkey.gpg 
  gpg: key A6CC1B18: public key "Unleash Networks Support (UNPL) <info@unleashnetworks.com>" imported
  gpg: Total number processed: 1
  gpg:               imported: 1  (RSA: 1)
  nsmdemo@ubu22:~$ gpg --verify webtrisul_7.0.2522-jammy_amd64.deb 
  Processing trisul_3.0.1316_i386.deb...
  gpg: Good signature from "Unleash Networks Support (UNPL) <info@unleashnetworks.com>" [unknown]
  ```

  Look for the **"Good signature"** message. You might get a trust warning. This command simply verifies the package is signed with the correct key.
  </TabItem>
  <TabItem value="rpm" label="CentOS/RHEL Uninstall" default>
  The steps are

  1. Import our public key`rpm --import https://trisul.org/pubkey.gpg`
  2. Verify using`rpm --checksig trisulpackage.rpm`

  Look for the OK message.

  A sample verify session would look like below

  ```bash
  [root@j1] rpm --import https://trisul.org/pubkey.gpg
  [root@j1] rpm --checksig webtrisul-7.0.2522-1.el8.x86_64.rpm
  webtrisul-7.0.2522-1.el8.x86_64.rpm: digests signatures OK
  ```

  The RPM verification was successful if you see the  **OK**
  </TabItem>
</Tabs>

