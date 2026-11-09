# Remote Office

:::warning Deprecated
The Remote Office feature is deprecated and will be removed in a future release. Do not build new reports or alerts on this group.
:::

Traffic and whitelist violations for each configured remote office branch, keyed by `<org code>_<branch code>`.

| Property | Value |
|---|---|
| GUID | `{664D68BF-5544-43CE-A895-50F2E179EA5A}` |
| Layer | L3 Network |
| Input | Packets |
| Key type | Branch name (text) |
| Implementation | Native C++ — CPICGROBranch (trisul_probe/sysplugs/counters/PICGROBranch.cpp) defines the group; CRemoteOfficeProc (trisul_probe/pcappipe/ROProc.cpp) updates it |
| Bucket / Topper | 60 s / 300 s (topper tracking off) |
| Enabled by default | Yes (empty until branches are configured) |

## What it measures

- Branches are read at startup from the context's configuration database: `RO_ORGS` (id, code), `RO_BRANCHES` (id, ro_org_id, code, ips) and `RO_WHITELISTS` (ro_org_id, ips, apps). `ips` is a comma separated list of IPv4 addresses or CIDR blocks. `apps` is a comma separated list of ports or `from~to` port ranges. If `RO_BRANCHES` is empty, the probe skips this processing.
- For each packet, the probe takes the flow update in it and checks both IPv4 endpoints against the branch address ranges. When an endpoint belongs to a branch, the bytes update that branch key and its parent [Organization](/docs/guide/counter-groups/organization) key with the same values.
- The flow is also tagged with the branch key and the org code.
- **Whitelist check:** the other end of the flow must be in the organization's whitelist IPs and, if the whitelist has ports, use a whitelisted port. If not, Alerts gets +1, the probe raises a Blacklist alert "bad activity detected from branch" and tags the flow `WHITELIST_VIOLATE`. If an organization has no whitelist entries, every packet from its branches counts as a violation.
- When both ends are branches, both branch keys are updated.

<!-- TODO(verify): the UI or tool used to fill RO_ORGS / RO_BRANCHES / RO_WHITELISTS; whether NetFlow input reaches this processing -->

## Keys

One key per branch: the org code, an underscore, then the branch code, as stored in the database. There is no separate label.

| Key | Meaning |
|---|---|
| `ACME_BLR01` | Branch `BLR01` of organization `ACME` |
| `ACME_DEL02` | Branch `DEL02` of organization `ACME` |
| `GLOBEX_HQ` | Branch `HQ` of organization `GLOBEX` |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Traffic between two branches updates two keys, so it is counted twice. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 100 | 0 | Bytes in both directions of flows with this branch at one end. |
| 1 | Into Branch | VT_RATE_COUNTER | Bps | 100 | 0 | Bytes sent toward the branch end of the flow. |
| 2 | Out of Branch | VT_RATE_COUNTER | Bps | 100 | 0 | Bytes sent from the branch end of the flow. |
| 3 | Alerts | VT_COUNTER | Alerts | 100 | 0 | +1 for each packet whose other end fails the organization's whitelist. |
| 4 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 5 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Organization](/docs/guide/counter-groups/organization): the same meters rolled up per organization
