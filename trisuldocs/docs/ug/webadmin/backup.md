---
sidebar_position: 14
sidebar_label: Backups
---

# Backups

There are two categories of data you might want back up :

**Configuration**  
This includes all the config files, analytics configuration, users, web
config, context configuration, and such.

**Data**  
This includes the metrics, flows, alerts, packets

For a large data platform like Trisul , configuration backup is of main
importance. The databases tend to be of very large Terabyte sizes. The
recommended solution for full scale data backup is to setup a DR node.

## Directories

:::note

**Small deployment easy backup** 

For small deployments simply backup the `/usr/local` directory. Ensure to first check the directory size using `du -sh /usr/local`

:::

The following directories need to be backed up. If your Trisul installation
is small you can simply backup these directories using normal Linux
backup tools.

| Directories      | Description                                          |
| ---------------- | ---------------------------------------------------- |
| /usr/local/share | data                                                 |
| /usr/local/lib   | libraries                                            |
| /usr/local/var   | data and log files. this directory can be very large |
| /usr/local/etc   | config                                               |
| /usr/local/bin   | executables                                          |

## Daily config backup

Using the `install_setup_backup.sh` tool.

The trisul-hub package includes the install_setup_backup.sh (backup the
Trisul setup) script which setups a CRON which automates these backups.

The supported backup methods are :

1. using sftp / scp (the default)
2. using FTP
3. by copying to another directory, such as an external drive

### Running install_setup_backup.sh

> **For secure backups using ssh/scp** you need to setup automatic login
> use `ssh-copy-id`

The steps are :

1. Go to /usr/local/share/trisul-hub
2. Type ./install_setup_backup.sh
3. You will be asked to enter the SFTP login details , or FTP login
   details
4. You will be asked to enter a remote directory

Once complete a crontab entry will be automatically created to backup at
4:00AM daily. You may adjust this later.

### Backup trisul configuration

`0 4 * * * /usr/local/share/trisul-hub/setup_backup.sh /usr/local/share/trisul-hub/setup_backup.conf`

The backups are placed in the remote directory in a single tar.gz file
with the HOSTNAME and TIMSTAMP of the backup

### Distributed probe

If you have a distributed setup, copy the `install_setup_backup.sh`
`install_setup_backup.conf` and `setup_backup.sh` files to each node
into the /usr/local/share/trisul-probe or trisul-hub directories and
repeat the above steps.

## Restore

To restore the backup. Locate the backup with the correct timestamp you
wish to use and untar the backup file.
