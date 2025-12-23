# Relocate Trisul Database

Once retention is configured, the next practical step is deciding **where Trisul stores its data**.  

This page explains how to **move existing Trisul data to a new storage volume** using Trisul’s control utilities. Relocation is typically performed when:

- You are moving to a larger or faster disk
- Storage was initially placed on a temporary or default volume
- You want to separate packet data and processed data across disks

Relocation changes **only the storage location**. It does not modify retention policies, input configuration, or analysis behavior.

## Probe and Hub Relocation

Trisul provides a `relocate context` command through its control utilities to move data safely to a new storage volume.

- Use `trisulctl_hub` to relocate Hub-side data, such as metrics, flows, alerts, and databases
- Use `trisulctl_probe` to relocate Probe-side data, such as packet capture (PCAP) files

You may relocate data on the Hub, the Probe, or both, depending on your storage layout.

:::info Default storage location
By default, Trisul stores all data under root location :dvd:  `/usr/local/var` 
:::

## Relocate Data on Hub

Use the `relocate context` command in `trisulctl_hub` to move Hub-side data.

Example: relocating Hub data to `/nsm/trisuldata`

**User action**
> Start the Trisul Hub control utility by running:
```bash
$ /usr/local/bin/trisulctl_hub/trisulctl_hub

```
**System response**
> Trisul will then display an interactive prompt similar to the following:
```
trisul_hub(domain0)> relocate context domain0 hub0 default

```
During relocation, the tool will:

- Stop the context if it is running
- Display the current storage location and size
- Prompt for the new destination directory  

Later:
> Trisul will show the current storage location and prompt for a new path:
```
Current DB Root is at              : /usr/local/var
Current size                       : 5.67 MB
-----------------------------------------------------------------------------
Enter new location (enter to quit) : /nsm/trisuldata
```
After validation and confirmation, the data is moved and internal paths are updated.  
:point_right: A restart is required after relocation. See [After Relocation Restart](#after-relocation-restart-required) below.

## Relocate Data on Each Probe

Probe relocation moves **packet capture (PCAP) data** and must be performed **on each probe individually**.  
Example: relocating PCAP data to `/nsm/trisuldata`  
**User action**  
> Start the Trisul Probe control utility by running:
```
$ /usr/local/bin/trisulctl_probe/trisulctl_probe
```
**System response**
> Trisul will then display an interactive prompt similar to the following:
```
> relocate context domain0 probe0 default
..
Enter new location (enter to quit) : /nsm/trisuldata
```

Repeat this step for every probe where packet capture data needs to be relocated.

👉 A restart is required after relocation. See [After Relocation Restart](#after-relocation-restart-required) below for instructions.


## After Relocation: Restart Required

Once relocation is complete, Trisul components and the web interface must be restarted for the changes to take effect.

### Restart Trisul

**User action**
> Start the Trisul Hub control utility:  
```
$ /usr/local/bin/trisulctl_hub/trisulctl_hub
```
**System response**
> Restart the context:
```
> restart context default
> quit
```
### Restart WebTrisul
**User action**
> Restart the WebTrisul service:
```
systemctl restart webtrisuld
```

For more details on the component lifecycle control (starting and stopping) see :memo: [Start and Stop Trisul](/docs/ag/admintasks/startstop)