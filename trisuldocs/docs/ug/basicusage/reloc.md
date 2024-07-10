---

sidebar_position: 04

sidebar_label: Relocate Trisul Database

---

# Relocate Trisul database

There are two major places where Trisul per-context data is stored.

1. **on each probe** - the pcaps, runtime data like extracted files,
   etc
2. **on the hub** - the main streaming metrics DB

By default - on both these nodes the root directory under which these
are stored are `/usr/local/var` . Use the `relocate` CLI command to move
this to a different volume.

## relocate context

:::note **Run on each node**  
The `relocate context` command must be on a node-by-node basis.

:::

You only need to run the relocate command on the nodes (probes and hub)
that you want to. Follow these steps.

## relocate on hub

Use the `trisulctl_hub relocate context` command.

Say you want to relocate the *default* context database to
`/nsm/trisuldata` ; you can run the following.

```language-bash
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

The tool will then run some checks and ask you for a confirmation.

- Once the relocation is done. You can restart the context using
  `start context default`

## relocate on each probe

Use the `trisulctl_probe relocate context` command on each probe.

Say you want to relocate the *default* context database to
`/nsm/trisuldata` ; you can run the following.

```language-bash
    trisulctl_probe
    > relocate context domain0 probe0 default
    ..
    ..
    Enter new location (enter to quit) : /nsm/trisuldata
```
