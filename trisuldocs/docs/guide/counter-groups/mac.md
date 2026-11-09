# Mac

Counts bytes sent and received per Ethernet MAC address.

| Property | Value |
|---|---|
| GUID | `{4B09BD22-3B99-40FC-8215-94A430EA0A35}` |
| Layer | L2 Link |
| Input | Packets, Flows |
| Key type | MAC address |
| Implementation | Native C++ — CPICGMac (group), CPIMacStats (packet metering) (trisul_probe/src/sysplugs/counters); CPINetflowMeter, CPISFlowMeter (sysplugs/flowhandlers) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- **Packets:** every Ethernet II frame updates two keys: the source MAC (Transmit) and the destination MAC (Receive), each with the frame's wire length.
- **NetFlow/IPFIX** (policy `MeterMAC`, default on): uses the source and destination MAC fields of the record, if the template exports them. An all-zero MAC is skipped. Off in IPDR mode.
- **sFlow** (policy `MeterMAC`, default on): uses the sampled header's Ethernet addresses.
- `SampleRate` in `MacCounterPolicy.xml` meters 1 in N frames and scales the bytes up by N.
- Linux cooked (SLL) and raw IP captures carry no MAC header, so they do not update this group.

## Keys

One key is a MAC address in uppercase colon-hex. The label comes from the OUI database (`oui-database.txt`, policy `LookupOUI`). It is the vendor name cut to 12 characters plus the last three octets. Some multicast and virtual-router MACs get a protocol label instead.

| Key | Meaning |
|---|---|
| `00:00:0C:12:34:56` | Cisco NIC. Label `Cisco System:12:34:56` |
| `01:00:5E:00:00:FB` | IPv4 multicast group 224.0.0.251. Label `IPMulticast_0.0.251` |
| `00:00:5E:00:01:0A` | VRRP virtual router. Label `VRRP-VRID-10` |
| `00:00:0C:07:AC:01` | HSRP v1 virtual MAC. Label `HSRP-v1-Group-1` |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update in the interval. Each frame updates Transmit on one key and Receive on another, so meter 0 and meter 1 of the totals each equal total frame bytes. |
| `FF:FF:FF:FF:FF:FF` | Broadcast. Appears with Receive bytes only. |
| `01:00:5E:xx:xx:xx` | IPv4 multicast MACs. Label `IPMulticast_a.b.c` from the low three octets. |
| `00:00:0C:9F:Fx:xx` | HSRP v2 virtual MAC. Label `HSRP-v2-Group-N`. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Transmit | VT_RATE_COUNTER | Bps | 20 | 0 | Bytes in frames where this MAC is the source. |
| 1 | Receive | VT_RATE_COUNTER | Bps | 20 | 0 | Bytes in frames where this MAC is the destination. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Dir Mac](/docs/guide/counter-groups/dir-mac)
- [Aggregates](/docs/guide/counter-groups/aggregates)
- [VLANStats](/docs/guide/counter-groups/vlanstats)
