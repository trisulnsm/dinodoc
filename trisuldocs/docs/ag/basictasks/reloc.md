# Relocate Trisul Database

This document explains how you can move the Trisul Database to a new storage volume.

## Probe and Hub 

Using the `relocate context` command in `trisulctl_hub`  and `trisulctl_probe` you can move all data to a new volume. 

:::info Default storage location

You can choose to relocate one or both of the databases. 

- Relocate on the hub for metrics, flows and other data
- Relocate on the probe for PCAP data 

The default storage root location for database is  under :dvd:  `/usr/local/var` 
:::

## Relocate on Hub

Use the `trisulctl_hub relocate context` command.

Say you want to relocate the database to :dvd: `/nsm/trisuldata`  run the following.

```bash
$ trisulctl_hub 


trisul_hub(domain0)> relocate context  domain0 hub0 default
** Relocate stopping context 
   + config0              stopped  success.context0
   + hub0                 stopped  Context is already stopped
   + probe0               stopped  Context is already stopped
-----------------------------------------------------------------------------
** Relocate context : Move backend databases to another volume 
** Current location details for context [context0@hub0/domain0]

Current DB Root is at              : /usr/local/var
Current size                       : 5.67 MB
-----------------------------------------------------------------------------
Enter new location (enter to quit) :  /nsm/trisuldata
```

The `trisulctl_hub` tool will then run some checks and ask you for a confirmation.  Then the relocation will be complete. 

> :point_right: Restart after relocation is complete. See [here](#after-relocation-restart) for instructions


## Relocate on Each Probe

Use the `trisulctl_probe relocate context` command on each probe.

Say you want to relocate the PCAP files to `/nsm/trisuldata` ;  run the following.

```bash
$ trisulctl_probe
> relocate context domain0 probe0 default
..
..
Enter new location (enter to quit) : /nsm/trisuldata
```

> :point_right: Restart after relocation is complete. See [here](#after-relocation-restart) for instructions


## After Relocation Restart 

After relocation you need to restart Trisul and also the Web Server.

To restart Trisul 

```bash
$ trisulctl_hub
> restart context default 
..
> quit
```

To restart WebTrisul


```bash
systemctl restart webtrisuld 
```

For more details on starting and stopping see :memo: [Start and Stop](startstop)
