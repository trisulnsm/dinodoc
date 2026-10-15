# ShiftX

[**ShiftX**](https://github.com/trisulnsm/apps/tree/apps7/analyzers/shiftx) identifies significant changes in network behavior by comparing current network activity with recent historical patterns.

Imagine monitoring traffic in a busy city. One day, a major road suddenly becomes empty while a previously quiet street experiences a surge of traffic.

The change itself may be more important than the actual traffic volume.

ShiftX applies this concept to network analytics by highlighting changes in the composition of network activity. Rather than focusing only on traffic volume, it identifies when the network begins behaving differently from its recent baseline, allowing analysts to investigate emerging issues before they become larger problems.

## Objective

The primary objective of ShiftX is to detect **behavioral changes** in network traffic.

Traditional monitoring is effective at identifying when traffic exceeds a predefined threshold. However, not every operational issue is accompanied by a spike in bandwidth usage. Sometimes the overall traffic remains stable while the systems, applications, or endpoints generating that traffic change significantly.

ShiftX helps identify these changes by comparing current activity with historical patterns.

Typical use cases include:

* Detecting unexpected changes in network traffic patterns.
* Identifying new or unusual network activity.
* Monitoring changes in application or host behavior.
* Detecting operational anomalies.
* Identifying emerging issues that may require investigation.

## Workflow

ShiftX continuously analyzes network activity and compares it with recent historical behavior.

The workflow can be summarized as follows:

1. Collect network activity from the configured counter group.
2. Build a baseline using recent historical observations.
3. Compare the current activity with the established baseline.
4. Identify significant behavioral changes.
5. Generate ShiftX metrics that can be reviewed by network administrators.

This continuous comparison allows analysts to focus on **changes in behavior**, rather than only changes in traffic volume.

## Viewing ShiftX Results

ShiftX writes its results to the **ShiftX Metrics** counter group. Its meters are **RBO**, **Novelty**, **JSD**, **Composite**, **Alert**, **ClimbRate** and **ClimbNote**. Values are multiplied by 100.

These metrics can be used alongside existing Trisul dashboards and historical analysis tools to investigate unusual activity and identify periods where the network behaved differently from its normal pattern.

:::info Navigation
:point_right: Go to **Retro → Retro Counters**, then select the **ShiftX Metrics** counter group.
:::

## Installation

ShiftX can be installed from the Trisul Apps repository.

1. Download or install the [**ShiftX**](https://github.com/trisulnsm/apps/tree/apps7/analyzers/shiftx) app.
2. To change the defaults, create `trisulnsm_shiftx.lua` in the `config` directory of the probe context, for example `/usr/local/var/lib/trisul-probe/domain0/probe0/context0/config/trisulnsm_shiftx.lua`. See [Configuration](#configuration).
3. Restart the Probe. ShiftX reads its configuration only when the script loads, so every configuration change needs a Probe restart.
4. Verify that ShiftX metrics are being generated.

Refer to the GitHub documentation for detailed installation instructions and configuration options.

## Configuration

ShiftX runs with the defaults below. To override any of them, set the value in `trisulnsm_shiftx.lua` and restart the Probe.

| Parameter | Default | Description |
| --- | --- | --- |
| `CounterGUID` | `{120A3124-E2BB-47BD-6C64-71BBB861C428}` | Counter group that ShiftX analyzes (flow ASN). |
| `top_n` | `30` | Number of top keys compared in each interval. |
| `novelty_window` | `60` | Time window, in minutes, used for the novelty score. |
| `ema_alpha` | `0.08` | Smoothing factor for the baseline. |

Other tuning parameters and their defaults: `other_mass` 0.15, `rbo_p` 0.90, `cusum_k` 0.06, `cusum_h` 0.45, `w_rbo` 0.40, `w_novelty` 0.40, `w_jsd` 0.20. ShiftX excludes a built-in list of ASNs (15169, 16509, 32934, 13335) from the novelty score.

## When to Use ShiftX

ShiftX is useful when you want to understand **how network behavior is changing**, rather than simply how much traffic is flowing.

It is particularly useful for:

* Network operations teams monitoring daily traffic patterns.
* Detecting unusual application or host activity.
* Investigating operational changes.
* Identifying behavioral anomalies before they trigger traditional threshold-based alerts.
* Supporting network troubleshooting and investigation.