# Cleaning the Database

Once Trisul is running and ingesting traffic, you may occasionally need to **remove accumulated data while keeping the existing configuration intact**.

This page explains how to:

- Delete all collected traffic data while preserving configuration
- Delete only packet capture (PCAP) data on probes
- Completely remove a context, including configuration and data

These operations are typically performed during maintenance, testing, or before reusing an environment.

## Delete All Traffic Data (Keep Configuration)

Use the `reset context <contextname>` command to **delete all collected traffic data** for a context while retaining its configuration.

:::warning NOTE
Before resetting a context, it **must be stopped** using the `stop context <contextname>` command.
Both commands are executed from the Trisul control utilities.
:::

### Step 1: Stop the Context

**User action**  
> Start the Trisul Hub control utility:  
```
$ trisulctl_hub
```
**System response**  
> Stop the running context:  
```
trisul_hub(domain0)> stop context default

+ config0 stopped success.default
+ hub0    stopped Successfully stopped context processes default@hub0
+ probe0  stopped Successfully stopped context processes default@probe0
```

### Step 2: Reset the Context Data

**User action**
> Reset all data for the context:
```
trisul_hub(domain0)> reset context default
```
**System response**
> Trisul will display a summary of the data that will be deleted and ask for confirmation:
```
The following data in context default will be deleted
Please review
* Will erase data on config0  disk space 91136 bytes   time interval 00h 00m 00s
* Will erase data on hub0     disk space 13930496 bytes time interval 01h 15m 37s
* Will erase data on probe0   disk space 40144896 bytes time interval 01h 15m 10s

Do you want to proceed ? Enter YES to continue : YES
```


After confirmation, Trisul deletes all stored traffic data while keeping the context configuration intact.
```
+ config0 reset success Reset context. Keeping configuration default
+ hub0    reset success Reset context successfully. Cleaned out data from : default
+ probe0  reset success Reset context successfully. Cleaned out data from : default
```
### Verification

You can run `info context` to confirm that the data has been cleared and the configuration remains intact.

## Delete Only PCAP Data (Probe Data Only)

Use this option when you want to remove only Probe-side data, such as raw packet capture (PCAP) and other probe-specific files, without affecting Hub data or context configuration.

To do this, target the probe explicitly by appending `@probe0` to the context name. The reset operation will then execute only on that probe.  
**Command format**  
```
reset context <contextname>@probe0
```
**Example**
```
$ trisulctl_hub  
trisul_hub(domain0)> reset context default@probe0
```

## Delete Complete Context 

Deleting a context removes **both configuration and all associated data**.
Use this only if you are certain the context is no longer required.

:::warning cant delete the default context 

You are not allowed to delete the `default` context. Running
`delete context default` will get rid of the configuration and data for
the default context, but the context itself will be available.
:::