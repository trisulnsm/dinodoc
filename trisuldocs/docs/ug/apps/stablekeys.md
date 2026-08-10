# Stable Keys

**Stable Keys** observes the keys reported by a Trisul counter group at regular stream intervals and checks whether keys that were present in the previous interval continue to appear in the current interval. When an expected key disappears for the configured number of intervals, Stable Keys generates an alert.

Imagine monitoring traffic in a busy city. Every day, thousands of vehicles enter and leave, but certain roads consistently carry traffic. If one of these roads suddenly stops carrying vehicles, the important question is not simply whether traffic is low. It is whether a road that normally carries traffic has stopped reporting activity altogether.

Stable Keys applies this concept to network monitoring. By tracking the keys reported by a counter group across consecutive intervals, it can identify network entities that were previously active but have stopped appearing in the monitored data.

This makes Stable Keys useful for identifying **missing or inactive network entities**, particularly when the continued presence of traffic metrics from specific IP addresses or other keys is expected.

## Objective

The primary objective of Stable Keys is to detect when a previously active key stops reporting metrics.

For example, an ISP may expect NetFlow data from a known set of routers, interfaces, customers, or IP addresses. Under normal conditions, these keys appear repeatedly in the monitored counter group. If one of them stops appearing, Stable Keys can flag the condition instead of requiring an operator to manually compare traffic data across intervals.

Stable Keys can therefore be used to:

* Detect when an expected IP address stops reporting traffic metrics.
* Identify inactive or missing network entities.
* Monitor a selected set of critical IP addresses.
* Detect possible NetFlow or metric collection interruptions.
* Distinguish an individual missing key from a larger simultaneous outage.
* Generate alerts that can be used for operational follow-up.

## How Stable Keys Works

Stable Keys operates on a **counter group** and evaluates the set of keys reported during each stream snapshot interval.

The workflow is:

1. **Collect keys from the monitored counter group.**
   During each flush interval, Stable Keys records the keys reported by the configured counter group.

2. **Compare with the previous interval.**
   At the end of the interval, the current set of keys is compared with the set from the previous interval.

3. **Identify missing keys.**
   If a key was present in the previous interval but is absent from the current interval, it is considered missing for that interval.

4. **Track the missing key across intervals.**
   Stable Keys uses `NumStableIntervals` to determine how long a key must remain missing before an alert is generated.

5. **Generate an alert.**
   If the key remains missing for the configured number of intervals, Stable Keys generates a User Alert identifying the inactive key.

6. **Handle multiple missing keys.**
   If many keys disappear during the same interval, Stable Keys can use the `DebounceThreshold` to generate a consolidated alert rather than producing a large number of individual alerts.

### Example

Consider a network where the following IP addresses regularly appear in the monitored counter group:

```text
192.168.1.1
192.168.1.10
192.168.1.20
10.0.0.1
```

During one interval, all four keys are present.

During the next interval:

```text
192.168.1.1
192.168.1.20
10.0.0.1
```

`192.168.1.10` is missing.

Stable Keys marks the key as missing and continues checking subsequent intervals. If it remains absent for the configured `NumStableIntervals`, an alert is generated for that key.

If several expected keys disappear together and their count reaches the configured `DebounceThreshold`, Stable Keys generates a consolidated alert indicating that multiple keys have stopped sending metrics.

## Monitoring Specific Keys

By default, Stable Keys evaluates all keys reported by the configured counter group.

You can instead configure `TrackIPs` to monitor only specific IP addresses. This is useful when only a subset of network entities is operationally important, such as:

* Core routers
* Gateways
* Critical servers
* Customer-facing infrastructure
* Specific devices whose traffic must always be reported

For example:

```lua
TrackIPs = {
    "192.168.1.1",
    "192.168.1.10",
    "192.168.1.20",
    "10.0.0.1",
}
```

When `TrackIPs` is configured, only matching keys are considered for Stable Keys monitoring. An empty `TrackIPs` list means that all keys are monitored.

Stable Keys also supports CrossKeys values. When configuring CrossKeys entries, the key must be represented using the required escaped format.

## Alert Workflow

Stable Keys produces alerts as **User Alerts** in Trisul.

### Real-time Alerts

To view alerts as they are generated:

:::info navigation
:point_right: Go to Alerts &rarr; Show All &rarr; User Alerts &rarr; View Real Time
:::

### Historical Alerts

To review previously generated alerts:

:::info navigation
:point_right: Go to Alerts &rarr; Show All &rarr; User Alerts
:::

The alerts identify the key that stopped reporting or, when debouncing is triggered, indicate that multiple keys stopped sending metrics.

## Debouncing Multiple Missing Keys

A common problem with monitoring key stability is that a single infrastructure problem can cause many keys to disappear at once.

For example, if a router or collection path fails, 20 expected keys may disappear in the same interval. Generating 20 separate alerts would provide a lot of noise while providing very little additional information.

Stable Keys addresses this using `DebounceThreshold`.

The default threshold is **5 keys**. When the number of missing keys reaches the threshold, Stable Keys creates a consolidated alert instead of generating individual alerts for each missing key.

This allows operators to interpret the event at the appropriate level:

| Missing Keys          | Recommended Interpretation                                         |
| --------------------- | ------------------------------------------------------------------ |
| One missing key       | Investigate the specific IP or network entity.                     |
| Multiple missing keys | Investigate the common infrastructure, device, or collection path. |

## Configuration

Stable Keys can be configured on a per-Probe basis.

The primary configuration parameters are:

| Parameter            | Description                           |
| -------------------- | ------------------------------------- |
| `CounterGUID`        | Counter group whose keys are monitored.             |
| `NumStableIntervals` | Number of consecutive intervals a key must remain missing before an alert is generated. |
| `DebounceThreshold`  | Number of missing keys that triggers a consolidated alert.         |
| `TrackIPs`           | List of specific IP addresses to monitor. An empty list monitors all keys.  |

The default configuration includes a FlowGen counter group, one stable interval, a debounce threshold of five keys, and no IP filtering.

## When to Use Stable Keys

Stable Keys is particularly useful when the presence of a metric is itself meaningful.

For example, use Stable Keys when:

* A router is expected to continuously export NetFlow.
* A critical IP address should always appear in traffic metrics.
* A customer or network segment is expected to report traffic continuously.
* You need to detect silent interruptions in metric collection.
* You want to detect when a network entity has stopped appearing in a counter group.
* You need operational alerts when expected traffic metrics disappear.

It is less suited to situations where keys are naturally intermittent or where an entity is expected to appear only occasionally. In those environments, a missing key may simply represent normal behavior rather than a problem.

## Operational Workflow

A typical Stable Keys workflow can be summarized as:

```text
Expected network keys
        ↓
Counter group reports keys
        ↓
Stable Keys records current interval
        ↓
Compare with previous interval
        ↓
Any expected keys missing?
       / \
     No   Yes
     ↓     ↓
Continue  Track missing key
             ↓
       Still missing for
       configured intervals?
           /       \
         No         Yes
         ↓           ↓
      Continue    Generate alert
                       ↓
              Multiple keys missing?
                  /          \
                No            Yes
                ↓              ↓
        Individual alert   Consolidated alert
```

## Summary

Stable Keys provides a simple operational check: **if a key was consistently present, is it still present now?**

By comparing keys across consecutive counter group intervals, it can detect when expected network entities stop reporting metrics. IP filtering allows monitoring to be focused on critical infrastructure, while debouncing prevents a single network-wide problem from producing a flood of individual alerts.

In the city analogy, Stable Keys is effectively watching the roads that are expected to remain open. It does not try to decide which road is the busiest. It checks whether the roads that were carrying traffic and are expected to continue doing so have suddenly gone quiet.