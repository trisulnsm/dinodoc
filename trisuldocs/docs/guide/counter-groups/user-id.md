# User-ID

Counts traffic per user name, as exported in flow records by Palo Alto Networks firewalls (User-ID) and by Nokia CGNAT devices.

| Property | Value |
|---|---|
| GUID | `{86A8880D-F4B2-4E49-A4FA-718880CAA976}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | User name (string) |
| Implementation | Lua — nf-userid.lua (trisul_probe/sysplugs/flowhandlers); updated by CPINetflowMeter (PINetflowMeter.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- The probe reads the user name from one of two fields:
  - **Palo Alto:** enterprise field 56702 (64 bytes) when the enterprise number is 25461. The probe drops the value if it contains non-printable characters. The shipped static templates 1257 and 1261 carry this field.
  - **Nokia:** field 32861, a variable-length string. It needs `AllowVariableLengthStrings=TRUE` (default FALSE).
- Each record with a non-empty user name adds its bytes to Total, adds one flow, and adds its bytes to one direction meter. Records without a user name are not counted. sFlow does not update this group.
- Direction uses the probe's Home Networks for the source and destination IP. `HomeASNumbers` does not affect it.
- The config elements `MeterUserID` and `MeterAppID` both default to TRUE. Set `MeterUserID` to FALSE to turn this group off. `MeterAppID` controls [App-ID](/docs/guide/counter-groups/app-id). See the [NetFlow config](/docs/guide/ref/netflow-config).
- IPDR mode does not turn this group off.

<!-- TODO(verify): in IPDR mode the Home Network lookup is skipped, so the direction meters (1-4) for User-ID may not be meaningful. -->

## Keys

The key is the user string exactly as the device sends it (at most 63 characters).

| Key | Meaning |
|---|---|
| `acme\jsmith` | Palo Alto user `jsmith` in domain `acme` |
| `jsmith@acme.example` | Palo Alto user in UPN form |
| `LSN@10.140.242.61` | Nokia CGNAT subscriber string |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. One key per record, so this equals traffic that carries a user name. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 50 | 0 | Sampling-adjusted bytes of records with this user. |
| 1 | Download | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where the source is external and the destination is home. |
| 2 | Upload | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where the source is home and the destination is external. |
| 3 | Transit | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where both ends are external. |
| 4 | Internal | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where both ends are home. |
| 5 | Flows | VT_COUNTER | flws | 50 | 0 | Number of flow records with this user. |
| 6 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 7 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [App-ID](/docs/guide/counter-groups/app-id): the application from the same Palo Alto records.
- [Hosts](/docs/guide/counter-groups/hosts)
