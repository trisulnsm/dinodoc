# App-ID

Counts traffic per Palo Alto App-ID, the application name that a Palo Alto Networks firewall exports in its IPFIX/NetFlow v9 records.

| Property | Value |
|---|---|
| GUID | `{9021F5D3-FEFB-401B-99EC-EF2ACD088578}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | App-ID name (string) |
| Implementation | Lua — nf-appid.lua (trisul_probe/sysplugs/flowhandlers); updated by CPINetflowMeter (PINetflowMeter.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- The probe reads enterprise field 56701 (App-ID, 32 bytes) when the exporter's enterprise number is 25461 (Palo Alto Networks). The shipped config includes static Palo Alto "Enterprise" templates (1257, 1261) that carry this field.
- Each record with a non-empty App-ID adds its bytes to Total, adds one flow, and adds its bytes to one direction meter. Records without the field are not counted. Other vendors and sFlow do not update this group.
- Direction uses the probe's Home Networks for the source and destination IP. `HomeASNumbers` does not affect it.
- The config elements `MeterAppID` and `MeterUserID` both default to TRUE. Set `MeterAppID` to FALSE to turn this group off. `MeterUserID` controls [User-ID](/docs/guide/counter-groups/user-id). See the [NetFlow config](/docs/guide/ref/netflow-config).
- IPDR mode does not turn this group off.

## Keys

The key is the App-ID string exactly as the firewall sends it (at most 31 characters).

| Key | Meaning |
|---|---|
| `ssl` | Palo Alto App-ID ssl |
| `web-browsing` | Palo Alto App-ID web-browsing |
| `dns` | Palo Alto App-ID dns |
| `incomplete` | Session closed before the firewall identified the application |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. One key per record, so this equals traffic that carries an App-ID. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 50 | 0 | Sampling-adjusted bytes of records with this App-ID. |
| 1 | Download | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where the source is external and the destination is home. |
| 2 | Upload | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where the source is home and the destination is external. |
| 3 | Transit | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where both ends are external. |
| 4 | Internal | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where both ends are home. |
| 5 | Flows | VT_COUNTER | flws | 50 | 0 | Number of flow records with this App-ID. |
| 6 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 7 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [User-ID](/docs/guide/counter-groups/user-id): the user name from the same Palo Alto records.
- [Flow-APPID-NBAR](/docs/guide/counter-groups/flow-appid-nbar), [Apps](/docs/guide/counter-groups/apps)
