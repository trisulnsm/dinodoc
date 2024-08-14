---
sidebar_position: 4
---

# Upgrading trisul

An upgrade is simply an uninstall followed by a new install.

Upgrading Trisul preserves all installation, application settings, and traffic data.

Typically it will look like the following

## Ubuntu

Remove and add the meta package

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

## CentOS/RHEL

For CentOS/RHELthe instructions are similar,

 BASHCopy`

```bash
yum group remove 'Trisul Full'
yum group install 'Trisul Full'`
```

If you are getting an error with using the Group commands, try upgrading individual packages. You can even put them all on a single line

 BASHCopy`yum  remove trisul-hub trisul-probe webtrisul yum  install trisul-hub trisul-probe webtrisul`

```bash
yum  remove trisul-hub trisul-probe webtrisul
yum  install trisul-hub trisul-probe webtrisul
```
