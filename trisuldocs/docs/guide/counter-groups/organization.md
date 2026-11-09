# Organization

:::warning Deprecated
The Remote Office feature is deprecated and will be removed in a future release. Do not build new reports or alerts on this group.
:::

Traffic and whitelist violations rolled up per remote office organization, keyed by org code.

| Property | Value |
|---|---|
| GUID | `{3A597F63-29C0-44AF-A7EF-641897D68693}` |
| Layer | L3 Network |
| Input | Packets |
| Key type | Organization code (text) |
| Implementation | Native C++ — CPICGROOrg (trisul_probe/sysplugs/counters/PICGROOrg.cpp) defines the group; CRemoteOfficeProc (trisul_probe/pcappipe/ROProc.cpp) updates it |
| Bucket / Topper | 60 s / 300 s (topper tracking off) |
| Enabled by default | Yes (empty until branches are configured) |

## What it measures

- Every update to a [Remote Office](/docs/guide/counter-groups/remote-office) branch key also goes to the key of the branch's parent organization, with the same values. See that page for how branches, organizations and whitelists are configured (`RO_ORGS`, `RO_BRANCHES`, `RO_WHITELISTS`).
- For each packet, when one end of the flow is inside a branch's IPv4 ranges, the flow's bytes are added to the organization of that branch.
- Alerts counts packets whose other end is not in the organization's whitelist (IP, and port if the whitelist has ports). If an organization has no whitelist entries, every packet from its branches counts.
- Organizations with no branches never get a key.

<!-- TODO(verify): the UI or tool used to fill RO_ORGS / RO_BRANCHES / RO_WHITELISTS -->

## Keys

One key per organization: the `code` column of `RO_ORGS`. There is no separate label.

| Key | Meaning |
|---|---|
| `ACME` | All branches of organization ACME |
| `GLOBEX` | All branches of organization GLOBEX |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Traffic between two branches updates the organization once for each branch end, so it is counted twice. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 100 | 0 | Bytes in both directions of flows with one of the organization's branches at one end. |
| 1 | Into Org | VT_RATE_COUNTER | Bps | 100 | 0 | Bytes sent toward the branch end of the flow. |
| 2 | Out of Org | VT_RATE_COUNTER | Bps | 100 | 0 | Bytes sent from the branch end of the flow. |
| 3 | Alerts | VT_COUNTER | Alerts | 100 | 0 | +1 for each packet whose other end fails the organization's whitelist. |
| 4 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 5 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Remote Office](/docs/guide/counter-groups/remote-office): the same meters per branch
