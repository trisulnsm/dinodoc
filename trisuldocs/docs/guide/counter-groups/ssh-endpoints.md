# SSH Endpoints

Counts successful SSH logins per SSH software version string, for the client and the server side of the session.

| Property | Value |
|---|---|
| GUID | `{E6A387F4-5B51-4C8B-86FD-DE6258D3F214}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | SSH version banner |
| Implementation | Lua — ssh_counters.lua, fed by ssh_dissect.lua through ssh-spy.lua (apps/analyzers/ssh-alert) |
| Trisul App | ssh-alert (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- The app reassembles SSH over TCP and reads the version banner each side sends.
- After key exchange it detects a successful login from the size of the encrypted pty request. On each detected login it adds 1 to meter 0 for the **client's** banner and 1 to meter 1 for the **server's** banner. The same event raises a `LOGIN` alert in the SSH alert group.
- The meter labels say "Server Types" for meter 0 and "Client Types" for meter 1, but the code puts the client banner in meter 0 and the server banner in meter 1.
- Sessions with no detected login are not counted. Meters 2 and 3 are not written.

## Keys

The full SSH identification string with CR/LF removed.

| Key | Meaning |
|---|---|
| `SSH-2.0-OpenSSH_8.9p1 Ubuntu-3ubuntu0.6` | OpenSSH 8.9 on Ubuntu |
| `SSH-2.0-PuTTY_Release_0.78` | PuTTY 0.78 client |
| `SSH-2.0-libssh_0.9.6` | libssh based endpoint |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Meter 0 and meter 1 each equal the number of detected logins. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Hits | VT_COUNTER | hits | 20 | 0 | Meter name `SSH Server Types`. +1 per detected login, keyed by the client's banner. |
| 1 | Hits | VT_COUNTER | hits | 20 | 0 | Meter name `SSH Client Types`. +1 per detected login, keyed by the server's banner. |
| 2 | Hits | VT_COUNTER | hits | 20 | 0 | Meter name `SSH Server Logins`. Not populated by the current code. |
| 3 | Hits | VT_COUNTER | hits | 20 | 0 | Meter name `SSH Client Logins`. Not populated by the current code. |
| 4 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 5 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [SSH Hosts](/docs/guide/counter-groups/ssh-hosts)
