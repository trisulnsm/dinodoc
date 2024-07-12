---
sidebar_position: 3
---

# Uninstall

Trisul packages can be uninstalled like any other linux package.

Uninstalling Trisul will not harm the data or configuration.

## Ubuntu Uninstall

The following example will uninstall the core Trisul packages

```bash
apt-get remove trisul-probe trisul-hub webtrisul
```

Other ways to uninstall

1. using the meta package `apt-get remove 'trisul-full'` etc for each package
2. using `apt-get remove trisul-probe` or
3. using dpkg manually `dpkg -r trisul-probe` etc

## CentOS/RHEL Uninstall

The following example will uninstall the core Trisul packages

```bash
yum remove trisul-probe trisul-hub webtrisul
```

Other ways to uninstall.

1. using the meta package `yum group remove 'Trisul Full'` etc for each package
2. using `yum remove trisul-probe` or
3. using RPM manually `rpm -e trisul-probe` etc

## Resetting the database clean

Resetting the database removes all the traffic and metrics collected but keeps the configuration. Use this option to “start over” with a clean DB.

To reset the database use the trisulctl_probe/hub *reset context* tool.

The following example resets the the database.

```bash
trisulctl_probe 
stop context default
reset context default
.. confirmation follows..
```
