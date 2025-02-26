# List Backup


## Overview

This script assists customers in identifying the specific slice to backup for a particular day by retrieving its name from the Storage Pool. Since slices in the Storage Pool have randomly generated names, this script simplifies the process by querying the pool with the desired backup date as input and returning the corresponding slice name, enabling targeted backups.


## How to use this script 

**Purpose**  
The list_backup_slices.sh script is designed to retrieve a list of slice names corresponding to a specified date range. This enables customers to selectively back up these identified slices.  

**Syntax**  

`./list_backup_slices.sh [ -s SOURCE_NODE(default hub0) ]  [ -c CONTEXT(default context0) ]  [ -f FROM_DATE-YYYY-MM-DD ]  [ -t TO_DATE-YYYY-MM-DD ]`

#### Options

| Option             | Default value   | Description                           |
| -------------------| ----------------| ------------------------------------- | 
| `-s` SOURCE_NODE   | hub0            | Specifies the source node             |                 
| `-c` CONTEXT       | context0        | Specifies the context                 |                  
| `-f` FROM_DATE-YYYY-MM-DD |          | Specifies the start date of the range (format: YYYY-MM-DD) |             
| `-t` TO_DATE-YYYY-MM-DD   |          | Specifies the end date of the range (format: YYYY-MM-DD)   |                  

**Example Usage**  
To retrieve a list of slice names for backups between January 20, 2025, and January 24, 2025, using the default source node and context:

`/usr/local/share/trisul-hub# /usr/local/share/trisul-hub/list_backup_slices.sh  -f 2025-01-20 -t 2025-01-24`

This script retrieves a list of slice names that correspond to the specified date range, enabling targeted backups of all relevant slices within that period.
```
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.qFf0ew
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.S6ZJ0r
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.M6Bt9k
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.ibZ8DV
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.1fKqnQ
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.reFmJ5
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.YTq0e2
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.LPC6gW
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.weYyY5
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.A4FSOE
root@test:/usr/local/share/trisul-hub# 
```
This allows customers to selectively back up these identified slices.