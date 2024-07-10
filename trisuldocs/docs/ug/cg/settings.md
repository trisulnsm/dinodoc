---
sidebar_position: 03

sidebar_label: Counter Group Settings

---
# Counter Group Settings

**You can :**  

1. Edit settings such as bucket size and other settings  

2. Edit topper policies; how many toppers to track for each meter  

3. Perform further configuration for user defined counter groups

You can also enable or disable any counter group.

> **Restart required** changes will be made effective only
> upon restarting Trisul

> **Disabling a built-in counter group** will cause all
> user-defined counter groups that depend on it to report zero usage.

## Editing settings

:::note navigation

Login as Admin -\> Select Context and profile -\> Under Basic
Configurations -\> Select Counter Groups

:::

1. The entire list of counter groups is shown  

2. Click on the name of a particular counter group ,which leads you to a
   page with the fields below

| FieldName           | Description                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                | A name for this counter group                                                                                                                            |
| Description         | Few words describing the purpose of the counter group                                                                                                    |
| Active              | Shows if the counter group enabled or disabled                                                                                                           |
| Bucket Size         | Specified as millisec.Counters are accumulated into this bucket and written out when a bucket is full. Smaller buckets results in more data being stored |
| Topper Traffic Only | If enabled trisul will store only the toppers                                                                                                            |

Click on *Advanced Options* to access the following

| FieldName              | Description                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| Topper Commit Interval | The parameter controls how frequently (in sec) are the toppers written to the database                   |
| High Water Mark        | The maximum number of keys tracked in this counter group, before it is pruned down to the low water mark |
| Low Water Mark         | When the number of keys tracked gets over the high water mark, Trisul prunes them down to this level     |

## Bulk edits

The following bulk edit options are available.

To access these options:

:::note navigation

Login as Admin -\> Select Context and profile -\> Under Basic
Configurations -\> Select Counter Groups -\> Advanced Options

:::

1. The entire list of counter groups is shown  

2. Set a bucket size for all counter groups  

3. Disable all counter groups that do not apply in Netflow mode

## Editing Counter Group Topper Policies

Directions to edit counter group settings

:::note navigation

Login as Admin -\> Select Context and profile -\> Under Basic
Configurations -\> Select Counter Groups  
:::

1. The entire list of counter groups is shown  

2. Click the option **Edit Topper Policies** for a particular counter
   group , directs you to a page with the below fields

|                  |
| ---------------- |
| Total            |
| Received         |
| Transmit         |
| Total            |
| Active TCP Conns |
| Attacker alerts  |
| Homenet          |
| External         |
| TCP SYN sent     |
| TCP SYN recv     |
| TCP SYNACK sent  |
| TCP RSTFIN sent  |
| Victim alerts    |

The topper policy depends on the meters present for each counter group .
The above example shows for `Internal Hosts` consisting of 12 meters
