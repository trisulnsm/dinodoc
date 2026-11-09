# Unleash Apps

A sample rule based counter group: a copy of [Apps](/docs/guide/counter-groups/apps) in which traffic that matches a rule is counted under a name you choose.

| Property | Value |
|---|---|
| GUID | `{FF889910-9293-AAA5-0028-883991889884}` |
| Layer | Derived |
| Input | Packets, Flows |
| Key type | Rule target name, or Apps key |
| Implementation | Derived — ruleset of Apps. Engine: trisul_probe/pcappipe/RulesetProc.cpp |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No (Inactive) |

## What it measures

- This is a [rule based counter group](/docs/guide/ag/context/rulebased_countergroups) shipped as a demo. The rules are stored in `TRISUL_COUNTER_GROUP_RULESETS` (parent **Apps**) and `TRISUL_COUNTER_GROUP_RULESET_RULES` (TargetKey, TargetRule).
- The shipped rule is: TargetKey `Web Work`, TargetRule `{4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}=80.79.32.7A&{C51B48D4-7876-479e-B0D9-BD9EFF03CE2E}=p-0050`. It matches when the same packet or flow record has the Hosts key 128.121.50.122 and the Apps key port 80.
- For each packet, flow record or flow-tracker update, the probe tests the rules in order. On the first match, the Apps update is copied here under the rule's TargetKey. If no rule matches, every Apps update is copied here under its original Apps key.
- So the group looks like Apps, except that matching traffic is moved to the named keys.
- A rule is one or more `{group-guid}=key1,key2` terms joined by `&` (all must match) or `|` (any must match). Use `!` instead of `=` to exclude keys, and `k1~k2` for a key range.
- The meter list is inherited from Apps.
- The group is Inactive in a new context. Edit the rules to suit your network, then enable it under **Context: default → profile0 → Counter Groups** and restart Trisul.

## Keys

Either a rule's TargetKey or an unchanged Apps key.

| Key | Meaning |
|---|---|
| `Web Work` | Traffic that matched the shipped rule |
| `p-01BB` | Port 443 traffic that matched no rule |
| `p-0035` | Port 53 traffic that matched no rule |
| `icmp` | ICMP traffic that matched no rule |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each packet updates one Apps key, so Total here is close to the link traffic that has an Apps key. |

## Meter list

Inherited from Apps.

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes of the traffic counted under this key. |
| 1 | Security Alerts | VT_COUNTER | Alerts | 10 | 0 | Not populated by the current code. Alert counts are written to Apps by the alert pipeline, which does not apply rulesets. |
| 2 | Into Homenet | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes from an external source to a home destination. |
| 3 | Outof Homenet | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes from a home source to an external destination. |
| 4 | Connections | VT_COUNTER | Conns | 50 | 0 | +1 for each new flow, copied from the flow tracker's update. |
| 5 | Internal Homenet | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where both ends are in the home network. |
| 6 | Transit Homenet | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where neither end is in the home network. |
| 7 | Active Conns | VT_RUNNING_COUNTER | Conns | 50 | 0 | +1 on flow create, −1 on expiry, copied from the flow tracker's updates. |
| 8 | Into Interface | VT_RATE_COUNTER | Bps | 50 | 0 | Not populated by the current code. Filled only in Interface Tracker groups of Apps. |
| 9 | Outof Interface | VT_RATE_COUNTER | Bps | 50 | 0 | Not populated by the current code. Filled only in Interface Tracker groups of Apps. |
| 10 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 11 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Apps](/docs/guide/counter-groups/apps): the parent group
- [Rule Based Counter Groups](/docs/guide/ag/context/rulebased_countergroups): how to create your own
