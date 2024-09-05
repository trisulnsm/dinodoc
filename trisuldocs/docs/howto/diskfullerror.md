# Disk Full Error 

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
