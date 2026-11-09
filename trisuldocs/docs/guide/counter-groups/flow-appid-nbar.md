# Flow-APPID-NBAR

Counts NetFlow v9/IPFIX traffic per application, keyed by the application ID (Cisco NBAR / RFC 6759 `applicationId`) that the router exports in each record.

| Property | Value |
|---|---|
| GUID | `{322AFE57-BA50-47B1-BE5C-EBC05BCC186B}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | Application ID (`engine:selector`) |
| Implementation | Lua — nf-nbar.lua (trisul_probe/sysplugs/flowhandlers); updated by CPINetflowMeter (PINetflowMeter.cpp); label database NBMAP.SQT loaded by CPICGNetflowGen |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- The probe reads field 95 (`applicationId`) from each v9/IPFIX record. Records without field 95 are not counted. NetFlow v5 and sFlow do not update this group.
- The probe meters this group inside the Apps logic. That means all of these must hold: `MeterApplications=TRUE`, `MeterNBAR=TRUE`, and the protocol is TCP, UDP or not exported. `MeterBothPorts` has no effect on this group. GRE, ESP and ICMP flows are not counted.
- Direction meters follow the same home/external test as [Apps](/docs/guide/counter-groups/apps): Home Networks, or [`HomeASNumbers`](pathname:///docs/guide/ref/netflow-config#HomeASNumbers) when that is set.
- IPDR mode turns this group off.

## Keys

For a 4-byte `applicationId`, the key is `<classification engine ID>:<selector ID>`, both in decimal. Common engine IDs: `1` IANA L3 protocol, `3` IANA L4 port, `13` Cisco NBAR2 L7. For an 8-byte ID the key is the 64-bit value in lowercase hex. For a 9-byte ID it is `<first byte>:<remaining 8 bytes in decimal>`.

| Key | Meaning |
|---|---|
| `3:443` | Engine 3 (L4 port) selector 443, label `secure-http` |
| `3:53` | Engine 3 selector 53, label `dns` |
| `13:453` | Engine 13 (NBAR2) selector 453, label `ssl` |
| `1:6` | Engine 1 (IP protocol) selector 6 |

The labels come from two places:

- `NBMAP.SQT`, a key database of about 1,400 IDs that ships with the probe in the plugin data directory (engines 1, 3 and 13).
- The router's own `applicationName` and `applicationDescription` (fields 96 and 94), usually sent in an options template. When the router sends these, the probe applies them as the key label and description.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. One key per record, so this equals the TCP/UDP traffic that carries an application ID. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 10 | 0 | Sampling-adjusted bytes of records with this application ID. |
| 1 | Alerts | VT_COUNTER | Alts | 10 | 0 | Not populated by the current code. |
| 2 | Into Home | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where the source is external and the destination is home. |
| 3 | Outof Home | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where the source is home and the destination is external. |
| 4 | Connections | VT_COUNTER | Conns | 10 | 0 | Not populated by the current code. |
| 5 | Internal | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where both ends are home. |
| 6 | Transit | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where both ends are external. |
| 7 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 8 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Apps](/docs/guide/counter-groups/apps): port-based applications from the same records.
- [App-ID](/docs/guide/counter-groups/app-id): Palo Alto App-ID.
