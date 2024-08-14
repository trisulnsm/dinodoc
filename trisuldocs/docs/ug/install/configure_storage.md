---
sidebar_position: 8
---

# Configure disk storage

Trisul’s disk requirements depend on how much you want to retain :

1. How much raw packet data in GB (probe nodes)
2. How much metrics, flows, alerts in Days (hub nodes)

**Probe vs Hub**  
The Probes store the raw packets.AESencrypted.  
The Hubs store everything else – metrics, flows, alerts, metadata, etc.

## Checking current database status

One of the first things you need to do is to calculate how much disk you are going to need to meet your data retention requirements. Follow these steps.

1. Logon to the web interface as*admin*then select the*Admin Tasks → DB Status*
2. From the*Database Slices*section you can check how much Disk Space is being used per day.
3. Lower down , from the “Raw packet storage slices” section you can see how much disk space is being used for packets.
   
   

If you are trying to recover from a 100% full disk you may not be able to access the web interface. Add new disk space as described below and retry these steps.

## Data locations on the Probe Nodes

The raw packets are stored for each context in the following default directories. The*App > DBRoot*parameter in[trisulProbeConfig.xml](/docs/ref/trisulconfig)points to the base directory

- /usr/local/var/lib/trisul-probe/domain0/probe0/context0/caps/
  - /oper – the operational directory where Trisul*writes*packets
  - /ref – the reference directory for recent data likely to be looked up
  - /archive – older data  
    As data ages they ‘cool down’ and slide from oper to ref to archive. Therefore the ‘hottest’ data slices are under /oper. For more details read[How the sliding slices work](/docs/ug/caps/fullcontent#sliding-slices )

The reason we have three directories is that they can be mounted on three separate volumes if required for heavy workloads.

### Move packets to a different volume

Follow the instructions for[`trisulctl_probe relocate context`](/docs/ug/basicusage/reloc)command to relocate the probe capture files to a different directory.

### Decide how muchPCAPto store

On the Probe nodes, PCAPs can rapidly fill a disk volume. By default Trisul Probe is configured to store 10GB of packet data, you can increase that to match your disk size.

- To specify how much GB of PCAPs you want to retain —> change the*Ring > SlicePolicy*setting in[trisulProbeConfig.xml](/docs/ref/trisulconfig )

## Data locations on the Hub Nodes

All of the timeseries metrics, alerts, flows and other metadata are stored on the Hub node.

The databases are stored for each context in the following default directories. The*App > DBRoot*parameter in[trisulHubConfig.xml](/docs/ref/trsulhubconfig )points to the base directory

- /usr/local/var/lib/trisul-hub/domain0/hub0/context0/caps/
  - /oper – the operational directory where Trisul writes metrics
  - /ref – the reference directory for recent data
  - /archive – older data  
    Trisul slides the oldest data each day from the oper to ref to archive to /dev/null (delete)

As in the probe, we have three directories so they can be mounted on three separate volumes with different performance characteristics.

### Move packets to a different volume

Follow the instructions for[trisulctl_hub relocate context](/docs/ug/basicusage/reloc )command to relocate to a different volume.

### Decide retention period

On the Hub you specify how many days you want to retain data. To specify the value , change the*SlicePolicy*setting in[trisulHubConfig.xml](/docs/ref/trsulhubconfig )

## Recovering from a Disk Full error

If the Trisul disk fills up 100% you may not be able to access the web interface and of course Trisul will stop working. To recover from this error follow these steps.

- ##### Step 1: Mount new partition
  
  Create a new partition with enough space and mount the new partition, say on`/mnt/trisul_extra`[Trisul Hub Configuration File - Trisul Documentation](/docs/ref/trsulhubconfig)
  
  We will be moving some packet capture and metrics to this new area to free up some space.

- ##### Step 2: Move the Probe archive to the new volume
  
  The idea here is to move the packet capture`archive`directory to the new volume and create a soft link to point to it in the old location.
  
  ```bash
  cd /usr/local/var/lib/trisul-probe/domain0/probe0/context0/caps/
      mv archive /mnt/trisul_extra/probe_archive
      ln -sf /mnt/trisul_extra/probe_archive archive
  ```

- ##### Step 3:Check if enough disk is freed up and repeat
  
  Use the`df`command to check if now enough disk is available. If it is not available repeat Step 2 for the`/ref`directory and then if required for the`/oper`directory.
  
  :::note **[Check disk space]**
  
  At this step, if disk usage drop to about 70-80% you can stop here and skip Step 4. You should be able to restart the Web Server and then the other Trisul components.
  
  :::

- ##### Step 4: Move the Hub archive to the new volume
  
  Similar to the probe node we want to move the Hub data to the new partition and create a soft link to point to it.
  
  ```bash
  cd /usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/
      mv archive /mnt/trisul_extra/hub_archive
      ln -sf /mnt/trisul_extra/hub_archive archive
  ```

Usually at this point you should have enough disk space freed up. Now you need to tune the SlicePolicy on both the Hub and Probe Config files so they dont fill up again.

##### References

1. [trisulProbeConfig.xml](/docs/ref/trisulconfig)– for setting max GB retention of pcaps.
2. [trisulHubConfig.xml](/docs/ref/trsulhubconfig)– for setting days of metrics.

## Best practices

Here are some best practices for large deployments.

1. Run Trisul for 3-4 days to get an idea of data growth per day. Use that information to size the disks.
2. PreferXFSfilesystem over EXT4 due to the large number of inodes supported
3. Consider usingLVMso you can easily expand a filled up volume by adding new disk capacity
4. PreferRAID-0 for the ProbePCAPSfor higher write performance
5. PreferRAID-5 for the Hub for resilience
6. For large enterprises, mount the`/archive`on yourNASif you have one
7. Try to use[PCAPpruning rules](/docs/ug/caps/packetstorage)eg, dont store Netflix,YouTube videos packets
