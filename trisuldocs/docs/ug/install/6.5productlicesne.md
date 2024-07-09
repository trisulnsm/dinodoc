# How to upgrade 6.5 production license

Trisul customers who are running production systems need to first contact us and obtain an upgraded Trisul Network Analytics 7.0 Production license first.

Merely updating packages without getting a new production license will result in an error like the following

```bash
*********************************************************************
*

   VERSION 6.5 PRODUCTION LICENSE detected                          
   Trisul Network Analytics Version 7.0 will not install over an    
   existing PRODUCTION license.                                     

   Please install on a fresh machine or request an upgrade license  
   from Trisul Network Analytics https://trisul.org                 

*
*********************************************************************
```

If you uninstall the production 6.5 system by mistake, reinstall it, then apply the 7.0 license and then try again.

## Preparing for update

Follow these steps

- ### Obtain Trisul 7.0 production license file
  
  Before uninstalling the Trisul 6.5 packages please obtain the updated Trisul 7.0 production license file from us.
  
  :::note
  
  You need to be on a valid support program to be able to upgrade a 6.5 production license to a 7.0 license.
  
  :::

- ### Apply the new 7.0 production license
  
  On your 6.5 system apply the new 7.0 production license. Now you are ready for packages

- ### Uninstall the old packages and re-install the new ones
  
  Use the normal apt/dpkg or yum/dpkg tools to uninstall the old packages and install the new ones. Sign up and follow instructions from the download page. https://trisul.org

## Restoring the old 6.5 system

If you erroneously uninstall the older 6.5 package without first obtaining new license files, you have two options

1. Use a Trisul 6.5 RPM or DEB package file to quickly restore the old system
2. Install the Trisul 6.5 builds from the 6.5 repository we have provided as shown below.

We provided access to all old 6.5 packages at these repository locations

### Ubuntu 6.5 Repo

Ubuntu repositories for Trisul 6.5

https://trisul.org/repos/apt/debian/v6

To install 6.5 packages you would typically do the following

Copy

``

```xml
# remove the 7.0 repository
add-apt-repository -r https://trisul.org/repos/apt/debian

# enable only the 6.5 repository
add-apt-repository -r https://trisul.org/repos/apt/debian/v6

# then update and install
apt update
```

### CentOS/RHEL 6.5 repo

RHEL7/CentOS7 repository for Trisul 6.5

https://trisul.org//trisulfullv6.repo

RHEL8/OracleLinux8 repository for Trisul 6.5

https://trisul.org//trisulfullv6-rhel8.repo

Follow the instructions in the Trisul [Get Started](https://www.trisul.org/get-started/) page for instructions on how to install from repositories. You may need to sign in first.
