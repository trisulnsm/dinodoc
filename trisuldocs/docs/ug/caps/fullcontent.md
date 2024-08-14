---
sidebar_position: 01
---

# Packet Capture Basics

The Trisul raw packet engine is designed towards these goals :

1. **Scaling** — The amount of data is only limited by the disk resources at your disposal

2. **Multi disk** — Supports multiple disks to optimize $/byte

3. **Flexibility** — Allows you to specify policies to cut down storage requirements

4. **Security** — Encrypts the raw packet storage

:::note free licence

**Free License**  
Note that the [free license](https://trisul.org/free) only allows you to store a maximum of 10GB per Probe. You can use rules to cut down the traffic, such as not storing encrypted traffic.

:::

## Sliding Slices

Trisul uses an innovative sliding mechanism to store raw packets.

Raw packets are stored in three directories.

| Directory | Name               | Description                                               |
| --------- | ------------------ | --------------------------------------------------------- |
| *oper*    | Operational slices | recent data that is most likely to be called up           |
| *ref*     | Reference slices   | not so recent data so okay to be on slower disks          |
| *archive* | Archive slices     | unlikely but may be called upon, could be on slower disks |

As each directory gets filled up, the oldest slice from that directory 
moves to the next area. Slices from the archive silently move to `/dev/null`(they are deleted). The figure below illustrates the concept. Note that trisul only writes to the *oper* slices.

![](images/fullcontent.png)

*Figure: Illustration Showing Movement of Slices as Each Disk gets Full*

You have to edit the following parameters to suit your environment.

1. Size of each slice (file storing raw packets)
2. Number of slices (files) in *oper*, *ref*, and *archive* areas

See the [trisulConfig.xml](/docs/ref/trisulconfig) documentation for more details.

## Mapping Disks to Slices

The slice architecture allows you to configure hardware resources for peak performance. The concept behind the optimization is :

- Older data less likely to be called up than recent data
- If older data is called upon a reduced performance is acceptable
- Writes only ever happen to operational *oper* slices

With these in mind, you can save money while getting peak performance
 by mapping faster disks to the operational area. An example is shown 
below :

![](images/fullcontentdisk.png)

*Figure: Showing Illustration of Mapping Disks to Slices*

## Flexible Policies for Volume Reduction

Storing raw packets can be tricky due to the volume of storage 
required. Not every organization has the resources to store absolutely 
everything. In our experience, there is always some **trusted and predictable** activity that allows scope for optimization. For example :

1. a daily full company offsite backup
2. Antivirus pushes from a trusted server to desktops
3. lots of very long flows – such as MSDN / Linux ISO image downloads

The primary method Trisul uses to cut traffic is rule based flow 
capping. You specify a chain of rules and the disposition when each rule
 in the chain matches.

A sample rule chain is shown below. We want to :

1. Cap av-pushes to first 10M
2. Cap lotusnote traffic to first 1M
3. Do not store traffic to offsite-backup
4. Store full content for everything else

Rule chain :

| Rule                             | Disposition |
| -------------------------------- | ----------- |
| host av-server.mydomain.com      | FLOWCAP10M  |
| app lotus-note                   | FLOWCAP1M   |
| host offsite-backup.mydomain.com | NONE        |
| default                          | FULL        |

> if nothing matches

For detailed syntax for specifying the rule chain, see the Ring section in [trisulConfig.xml](/docs/ref/trisulconfig#ring)

## Encrypted Content

Raw packets represent all of your network communications over an extended time period.

Storing them in the clear :

- makes Trisul an attractive target for attackers
- makes disposal and reuse of disks risky
- makes enterprise network admins nervous about such systems

Trisul encrypts all content by default using AES-128 in CTR mode. The disk subsystem never sees clear text packets.

To change the passphrase, see the *PassphraseFile* parameter in [trisulConfig.xml](/docs/ref/trisulconfig#ring)
