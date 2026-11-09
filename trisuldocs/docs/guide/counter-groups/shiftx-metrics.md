# ShiftX Metrics

Scores how much the top-K ranking of a monitored counter group changes between topper intervals, keyed by the monitored group GUID and meter.

| Property | Value |
|---|---|
| GUID | `{22B6E494-382B-47D5-D914-591CF8572343}` |
| Layer | Derived |
| Input | Internal |
| Key type | `<CounterGUID>-<meter>` string |
| Implementation | Lua — rbocounter.lua (group), shiftx.lua + shiftx_core.lua + shiftx_climb.lua (scoring) (apps/analyzers/shiftx) |
| Trisul App | shiftx (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- `shiftx.lua` is a `cg_monitor` script on one counter group, `CounterGUID`. The default is [Flow-ASN](/docs/guide/counter-groups/flow-asn) `{120A3124-E2BB-47BD-6C64-71BBB861C428}`. You can change it in `config/trisulnsm_shiftx.lua` under `//App/DBRoot`.
- At each topper flush of each meter of that group (every 300 s), it keeps the first `top_n` toppers (default 30) and skips `SYS:GROUP_TOTALS`. It then scores the ranking against history.
- Scores are fractions in 0–1, written as score × 100 into gauges. Each bucket keeps the last value written, so only buckets that hold a topper flush have data.
- The first interval per meter is warm-up. Meters 0–4 are written from the second interval on.
- Novelty skips the keys in `whitelist` (default ASNs 15169, 16509, 32934, 13335).

## Keys

One key per monitored meter: the monitored group's GUID, a hyphen, and the topper meter index. No labels are set.

| Key | Meaning |
|---|---|
| `{120A3124-E2BB-47BD-6C64-71BBB861C428}-0` | Scores for Flow-ASN meter 0 |
| `{120A3124-E2BB-47BD-6C64-71BBB861C428}-1` | Scores for Flow-ASN meter 1 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Gets every update made to any key. All meters are gauges, so the totals item keeps the last value written by any key. It is not a sum and is not meaningful. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | RBO Score | VT_GAUGE | score | 1000 | 0 | Short name `RBO`. 100 × (1 − rank-biased overlap) between this and the previous top-K list (`rbo_p` 0.90). Higher means more change. |
| 1 | Novelty Score | VT_GAUGE | score | 1000 | 0 | Short name `Novelty`. 100 × rank-weighted share of keys not in the last `novelty_window` (60) intervals. Keys never seen before score 1, others 0.5. |
| 2 | JSD Score | VT_GAUGE | score | 1000 | 0 | Short name `JSD`. 100 × rank-weighted Jensen-Shannon divergence of the current distribution against an EMA baseline (`ema_alpha` 0.08). |
| 3 | Composite Score | VT_GAUGE | score | 1000 | 0 | Short name `Composite`. 100 × (0.40 × RBO + 0.40 × Novelty + 0.20 × JSD), using weights `w_rbo`, `w_novelty`, `w_jsd`. |
| 4 | Alert | VT_GAUGE | trigger | 1000 | 0 | Short name `Alert`. 100 when the CUSUM on the composite score crosses `cusum_h` (0.45), else 0. |
| 5 | Climb Rate | VT_GAUGE | wrate | 1000 | 0 | Short name `ClimbRate`. 100 × the highest log-decay rank-climb rate of any key in this interval (`shiftx_climb.lua`). Written from the first interval. |
| 6 | Climb Note | VT_GAUGE | note | 1000 | 0 | Short name `ClimbNote`. 1 when the climb rate reaches `climb_wrate_alert` after the lookback period, else 0. Not scaled by 100. |
| 7 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 8 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Flow-ASN](/docs/guide/counter-groups/flow-asn)
