# Network Investigation Playbook

This playbook contains seven investigations for network and security teams using Trisul. Each one starts from a different trigger like, a user report, an alert, a monitored asset, but they all converge on the same core workflow: **Explore Flows → Applications → (optional) Aggregate Stats → Packet Analysis.**

If you've done one investigation in this playbook, you already know most of the moves for the rest of them.

---

## Two kinds of investigation

**Entry points** — you land here directly, because someone reported an issue or you're proactively checking something.

| Investigation | Start here when... |
|---|---|
| [Investigate the Network Activity of an IP Address](/playbook/Network%20Investigation%20Playbook/inv1-exploreflows) | A user reported an issue, or you're validating a specific host. |
| [Investigate High Traffic on a Network Interface](/playbook/Network%20Investigation%20Playbook/inv2-routersintfs) | A router or switch interface is running hot. |
| [Investigate Historical Network Activity](/playbook/Network%20Investigation%20Playbook/inv3-retro) | The issue was discovered after it happened — you're reconstructing, not live-troubleshooting. |

**Hub investigations** — you land here because a system flagged something (an alert, a baseline deviation, a monitored asset), and the investigation is designed to route you into one of the entry points above (or into each other) once the trigger is understood.

| Investigation | Triggered by... |
|---|---|
| [Investigate Threshold Crossing Alerts](/playbook/Network%20Investigation%20Playbook/inv4-tca) | A metric crossed a configured threshold. |
| [Investigate Network Behavior Anomalies](/playbook/Network%20Investigation%20Playbook/inv5-tba) | Traffic deviated from a learned baseline, even without crossing a hard threshold. |
| [Monitor Critical Network Assets](/playbook/Network%20Investigation%20Playbook/inv6-customkeymonitor) | A business-critical device or application changed behavior. |

**Supporting investigation** — not a trigger-based entry point on its own; used *alongside* any of the above when a single host/interface/app view isn't enough to answer the question.

| Investigation | Use when... |
|---|---|
| [Correlate Network Activity Across Multiple Dimensions](/playbook/Network%20Investigation%20Playbook/inv7-crosskey) | The question spans more than one dimension — e.g. "which app dominates this interface for this customer" — and no single-entity investigation above can answer it alone. |

---

## How they connect

```
                    ┌─────────────────────┐
                    │   Trigger detected    │
                    └──────────┬───────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
   Threshold Alert      Behavioral Anomaly      Critical Asset
     (inv4-tca)            (inv5-tba)            (inv6-ckey)
        │                      │                      │
        └──────────────────────┼──────────────────────┘
                               │
                   routes into one or more of:
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
   Host Activity         Interface Traffic      Historical Activity
   (inv1-exploreflows)   (inv2-routersintfs)     (inv3-retro)
        │                      │                      │
        └──────────────────────┴──────────────────────┘
                               │
                  all converge on Explore Flows →
                  Applications → Aggregate Stats (optional) →
                  Packet Analysis
                               │
              (any of the above can pull in)
                               │
                  Correlate Across Dimensions
                       (inv7-crosskey)
```

---
