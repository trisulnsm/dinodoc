# Import PCAP Dumps

Trisul is capable of importing giant packet capture (PCAP) dumpfiles.

The key capabilties of Trisul’ PCAP import feature are:

1. **File or directory including nested** — Process a single huge PCAP file or PCAP files placed in a directory tree
2. **Automatic time ordering** — Files in a directory are automatically processed in correct time order, irrespective of file names.
3. **GZIP/BZIP** — GZIP and BZ2 files are automatically decompressed and imported

This document describes how you can import PCAP dumps.

## trisulctl_probe importpcap

> We will be using the probe management tool [trisulctl_probe](/docs/ag/domain/trisulctl) to import the PCAPs

Say you have placed your PCAP files in `/home/tim/MyPcap01` and you want to import them into a new Trisul context named `mypcap01` — follow these steps.

## Import Pcap

- ##### Logon to probe node
  
  Logon to the probe node on which you have placed the PCAP files. By default it is the same node as the hub.

- ##### Run importpcap
  
  Run the following command
  
  ```bash
  sudo trisulctl_probe importpcap /home/tim/MyPcap01 context=mypcap01
  ```

:::note common errors to avoid

1. Give full pathname for the PCAP file/directory  

2. Use sudo if you are not running as `trisul`
   
   :::

This will prompt you to either create a new context named *mypcap01* or to stop an existing context *mypcap01* and reset all of its data. You need to type `YES` to confirm and proceed to the next step.

- ##### Check Progress
  
  After trisul starts the import process you are returned back to the 
  
  shell. This does not mean the import is complete, it is just running in 
  the background. You can check the progress by tailing the log file as 
  shown below
  
  ```bash
  sudo trisulctl_probe log mypcap01@probe0 log=ns tail
  ```

or you can tail the log file directly. The trisbashrc file contains useful aliases like tailf.ns as shown below

```bash
sudo -i 
Source /usr/local/share/trisul-probe/trisbashrc mypcap01 
tailf.ns
```

- ##### Login and View Reports
  
  Next login to Web Trisul at http://your-host:3000 and on the login screen select *mypcap01* context. You should have the all the charts and analytics you are looking for.

## Tweak and Re-run

After running the first pass over the PCAP dump you might want to do the following and re-run the PCAP Dump through Trisul.

1. Add new IP ranges to the Home Networks. This is the most common and immediate thing you want to do
2. Create your own custom counter groups based on what you have 
   observed. For example you may want to create a new counter group for 
   “Hosts connecting to 28.88.28.11”
3. Write your own LUA analytics

After you have changed the configuration you can just re-run the importpcap tool (Steps 1-3).
