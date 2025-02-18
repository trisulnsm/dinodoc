# Using a tape archive 

For very large ISPs, storing logs in tape archives is a very good value proposition.  This document explains how you can setup Trisul IPDR to use tape archives. 



## Architecture

- Trisul IPDR stores data in slices
- Each day maps to 2, 4, or 8 slices depending on the configuration
- The [Storage Status](/docs/ag/admintasks/storage_status)  tool can be used to find out the slices for any day
- When the ISP gets a query for a particular day
	- find the slices that map to the day
	- restore them to a particular directory 
	- run the query
	- afterwards delete the slices which were earlier restored 




# Storage pool architecture

The [Manage Storage](/docs/ag/admintasks/storage_status#tape) section of the Admin Guide explains the Storage Pool concept as used by Trisul. Hot data is stored in the pool called Oper, then it moves to Ref, then to a series of Archives.  

The **tape**  is a special type of storage pool at the end of the chain. 

## Enable the tape storage pool

Edit the [Trisul Hub Configuration file](/docs/ref/trisulhubconfig#advanced-archiving) and set the `OfflineArchiveTag` to `tape` 

```xml
<OfflineArchiveTag>
	tape
</OfflineArchiveTag>

```

When this is enabled, old slices are remembered in the index and tagged with the label `tape`


## Allocate a restore point

Allocate a disk area that can store atleast a week of data. For example if you generate 500GB of logs per day, allocate a 4TB disk.

Mount or softlink the restore point to  a directory called `tape` in the meters directory.

In the following example the 4TB restore disk has been softlinked to the `tape` directory

```bash


noc@ipdr:/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters$ ls -l
total 52
drwxr-x--- 2 trisul trisul  4096 Feb 10 11:16 archive
-rw-r----- 1 trisul trisul 32768 Feb 17 14:33 METASLICE.SQDB
drwxr-x--- 4 trisul trisul  4096 Feb 10 11:16 oper
drwxr-x--- 2 trisul trisul  4096 Feb 17 14:33 persist
drwxr-x--- 2 trisul trisul  4096 Feb 10 11:16 ref
drwxr-x--- 2 trisul trisul  4096 Feb 10 11:16 tape -> /restore01 
drwxr-x--- 2 trisul trisul  4096 Feb 10 11:16 tmp

```

## Restoring a day



When the customer wants to query for logs from a particular date say May 20, 2024.  The workflow is this


### Locate the slices for day 

show storage status and search for date --- TODO  
screenshot 


### Restore the 2 slices 

Restore the two slices SLICE.7v6ecw and SLICE.7v6ecw to the mentioned `tape ` restore point 

It should look like this 

```bash


noc@ipdr:/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters$ ls -l tape 
total 4
drwx------ 11 trisul trisul 4096 Feb 17 14:57 SLICE.7v6ecw
drwx------ 11 trisul trisul 4096 Feb 17 14:57 SLICE.63hj7r

```


### Run the query 

Now you can run the IPDR Query with the date May 20, 2024 as described in [Submit Queries](/docs/ipdr/submit-queries)


## Check Storage Status

After restoration  you can check the Storage Status 

![](images/storagestatus_available.png)  
*Figure: Showing Storage*

This shows the storage status with a check mark showing the slice is now available for query.





