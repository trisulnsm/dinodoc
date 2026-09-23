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

ShiftX publishes its analysis as **ShiftX Metrics**, allowing administrators to review how network behavior changes over time.

These metrics can be used alongside existing Trisul dashboards and historical analysis tools to investigate unusual activity and identify periods where the network behaved differently from its normal pattern.

## Installation

ShiftX can be installed from the Trisul Apps repository.

1. Download or install the [**ShiftX**](https://github.com/trisulnsm/apps/tree/apps7/analyzers/shiftx) app.
2. Configure the required counter group and application settings.
3. Restart or reload the Probe if required.
4. Verify that ShiftX metrics are being generated.

Refer to the GitHub documentation for detailed installation instructions and configuration options.

## When to Use ShiftX

ShiftX is useful when you want to understand **how network behavior is changing**, rather than simply how much traffic is flowing.

It is particularly useful for:

* Network operations teams monitoring daily traffic patterns.
* Detecting unusual application or host activity.
* Investigating operational changes.
* Identifying behavioral anomalies before they trigger traditional threshold-based alerts.
* Supporting network troubleshooting and investigation.