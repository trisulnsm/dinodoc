# Scan Slices

Scan each slice in storage pool by comparing with metaslice db & provide supplementary information.

## How it works
- Preliminary check
  - Check the given context has a config file
  - Check the METASLICE.DB is accessible by the current user
  - Check the storage pool is accessible by the current user
  - If above condition is not met it will stop
- Gather information from METASLICE and SLICE directory
  - Extract slice details for a single slice storage and checks this slice are present in the directory
  - Same-way it check all slices in the directory is present in DB.
  - Analyze each slice and extract required data
- Process the information
  - Based on the gathered data each slice is prented in terminal with table format
  - At end of the script it shows the number of collected slice
  
   
   ## Arguments
   
   | Syntax          | Info                             | Usage                            |                Example               |
   | --------------- | ---------------------------------| ---------------------------------------------------- | ------------------------------------------------------ |
   | -l              | list the storage pool available                             | Use this output to below argument          | archive<br/>ref<br/>xarchive_1<br/>oper/0/<br/>oper/1/      |
   | -m storage-pool | prints the slice in the storage pool given by user          | You can run this script anywhere                     | ./scanslices.sh -m ref      |
   | -d .          | prints the current directry slice details                     | You should be in the storage pool to run this script | ./scan_slices.sh -d .                              |
   | -d Slice-name   | Print specific slice details given by user                  | You should be in the storage pool to run this script | ./scan_slices.sh -d SLICE.eJkeR                    |
   | -a              | Prints the slice which is either missing in db or directory | this option should be run aling with -d or -m option | ./scan_slices.sh -m red -a                               |
   | -h              | Prints the usage details                                    | -                                                    | ./scan_slices.sh -h      |

## Description of each column

| Parameter           | Info                                                              |
| ------------------- | ----------------------------------------------------------------- |
| Slice-name          | Name of the directory in storage pool                             |
| Status              | storage pool  name                                                |
| Instance            | Directory present inside storage pool for oper like 0,1.          |
| Metaslice Timestamp | Timestamp of slice in database                                    |
| Topper Timestamp    | Timestamp in directory itself                                     |
| Slide-date          | A file that contains the date in the file name                    |
| Date-Match          | compare the date between topper and meta-slice timestamp & check the difference is below 10 min or not |
| Slice-in-DB         | slice present in metaslice db or not                              |
| Slice-in-DIR        | slice presnet in storage-pool or not                              |
| Archive             | Check if the file is archivable or not                            |
| AAA                 | Check the AAAlog.SQT is present or not                            |

## Examples :

- /usr/local/share/trisul-hub/scan_slices.sh -m ref 
  
  ![Scan-slices](./images/scan_slices1.png)

- ![scan_slices](./images/scanslices2.png)
