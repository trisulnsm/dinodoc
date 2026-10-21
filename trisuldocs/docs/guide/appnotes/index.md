# Trisul Application Notes

Task-focused application notes for Trisul. Each note states the problem, explains how the feature works, and gives the full procedure with checks.

## All notes

| ID | Title | Use it to… | Applies to |
|---|---|---|---|
| [AN-001](an001.md) | Resolve router and interface names for NetFlow with SNMP | Show router and interface names instead of IPs and ifIndex numbers | NetFlow input |
| [AN-002](an002.md) | Scale NetFlow monitoring for large enterprises | Stop routers and interfaces dropping out of NetFlow toppers | NetFlow Analyzer mode |
| [AN-003](an003.md) | Control host storage growth in ISP NetFlow deployments | Keep host storage under control at an ISP | ISP deployments |
| [AN-004](an004.md) | Give ISP subscribers a login to their own traffic reports | Give each subscriber a login that shows only their own traffic | ISP and MSP operators |
| [AN-005](an005.md) | Get Snort, Barnyard2 and Suricata alerts into Trisul | See IDS alerts next to traffic data | Packet capture mode |
| [AN-006](an006.md) | Add your own threat intel to Badfellas | Match traffic against your own IP, domain and URL indicators | Hub and probes running Badfellas |
| [AN-007](an007.md) | Analyze PCAP dumps offline in their own Trisul context | Analyze a saved PCAP without mixing it into live data | Packet capture mode, probe node |
| [AN-008](an008.md) | See the real client behind your web proxy with X-Forwarded-For | Attribute web traffic to the real client behind a proxy | Packet capture mode, upstream of a web proxy |
| [AN-009](an009.md) | Cut Trisul storage per day by tuning flows, edges and counter groups | Reduce how much disk Trisul uses per day | Hub database; probe flow and edge settings |
| [AN-010](an010.md) | Recover Trisul from a full disk and stop it filling again | Recover from a 100% full disk | Probe and hub storage, default context |
| [AN-011](an011.md) | Serve the Trisul web interface over HTTPS | Serve the web UI over HTTPS with your own certificate | Hub node running WebTrisul |
| [AN-012](an012.md) | Move the Trisul web interface off port 3000 | Run the web UI on a port other than 3000 | Hub running `webtrisuld` |
| [AN-013](an013.md) | Add web server capacity when WebTrisul slows down under many users | Make the web UI faster for many concurrent users | Hub running WebTrisul |
| [AN-014](an014.md) | Capture a core dump when the Trisul Probe crashes | Collect a core dump and stack trace after a probe crash | Probe nodes |

## Find a note by product mode

| Mode | Notes |
|---|---|
| NetFlow Analyzer | [AN-001](an001.md) SNMP name resolution · [AN-002](an002.md) Scale for large enterprises |
| ISP Analytics | [AN-003](an003.md) Host storage growth · [AN-004](an004.md) Subscriber reports |
| NSM (packet capture, IDS) | [AN-005](an005.md) IDS alerts · [AN-006](an006.md) Custom threat intel · [AN-007](an007.md) Offline PCAP · [AN-008](an008.md) Web proxies (XFF) |
| All modes (administration) | [AN-009](an009.md) Storage tuning · [AN-010](an010.md) Disk full · [AN-011](an011.md) HTTPS · [AN-012](an012.md) Web port · [AN-013](an013.md) Web server capacity · [AN-014](an014.md) Core dumps |

## Related notes

- Storage: AN-003, AN-009 and AN-010 cover the same storage from three angles: ISP host policy, per-day tuning, and recovery from a full disk.
- Web server: AN-011, AN-012 and AN-013 all change the WebTrisul web server setup on the Hub.
- NetFlow: AN-002 ends where AN-001 starts (SNMP name resolution).
- IDS: AN-005 and AN-007 both use `trisulctl_probe importpcap_ids` for saved captures.