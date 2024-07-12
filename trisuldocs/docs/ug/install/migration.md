---
sidebar_position: 7
---

# Migration instructions

From one release to another of Trisul, the following data might need migration.

1. Traffic data
2. Web user settings
3. Config files

This page describes how you can get up to the latest release from previous releases.

## Migrating from Release 5.5 to Release 6.0

Trisul 5.5 was a single point solution. The new Trisul 6.0 is a distributed system where the Probe and Hub components have been separated.

We have included a migration script called `mig_5_6.sh` you can use to migrate your existing data to the new 6.0 platform.

The following will not be migrated automatically

1. Web login/passwords from the old 5.5 system. please recreate/reset passwords on new system.
2. historical flow tracker data.

**Root** All actions must be performed as root/

- ### Uninstall Trisul 5.5 packages
  
  ```bash
  dpkg -r trisul webtrisul
  ```
  
  all running Trisul 5.5 contexts will be automatically stopped
  
  if you have installed these plugins also uninstall them
  
   BASHCopy`dpkg -r trisul-badfellas trisul-urlfilter trisul-geo`

- ### Install the Trisul 6.0 packages
  
  Follow the instructions on the [download page](https://trisul.org/download) or manually download and install the 6.0 packages using dpkg like

- ```bash
  dpkg -i trisul-hub_6.0.2774-trusty_amd64.deb  trisul-probe_6.0.2816-trusty_amd64.deb  webtrisul_6.0.2024-trusty_amd64.deb
  ```

- ### Run the migration script
  
  **Screen** Ensure you run this on a screen session. Type `screen` – this way a TTY hangup wont stop the script
  
  Migrate the default old 5.5 context to 6.0 by running this command.
  
  ```bash
  cd /usr/local/share/webtrisul/build
  ./mig_5_6.sh default
  ```
  
  If you have relocated the previous Trisul 5.5 context, you will be prompted to enter YES to relocate the new 6.0 context to the same location as well. Please enter YES.
  
  #### Migrate other contexts similarly
  
  If you have more than one context you have to migrate them one by one.
  
  To get a list of contexts type
  
  ```bash
  ls -1 /usr/local/etc/trisul/trisulConfig*
  /usr/local/etc/trisul/trisulConfig_erskkn.xml
  /usr/local/etc/trisul/trisulConfig.xml.prev
  ```

  This means you have the `default` context and the context named `erskkn`

```bash
# The usage of the migration script is
Usage : mig_5_6.sh [contextname]
# to migrate context erskkn type
./mig_5_6.sh erskkn
```

  **DONE** Your 6.0 contexts are now ready. You can login as admin/admin and start the probes.

  You can run the next step in the background.

- ### Migrate the flows
  
  The next step is to migrate the old flows to the new format. This may take some time to you can leave them running within a screen session.
  
  Run the following command
  
  ```bash
  /usr/local/bin/tool_fswmigrate`
  ```

- ### WebTrisul : Recreate the users
  
  At this time the migration script does not move the Users /Passwords from the 5.5 system.
  
  - Please reset your password by logging in as “admin/admin” on the new system.

- ### Flow Trackers
  
  At this time the Flow Trackers which have already collected data in the 5.5 system will not be moved to the 6.0 system.
  
  - From the following day of the migration, the functionality will be restored.

- ```bash
  
  ```

Please contact us if you need any extra support.
