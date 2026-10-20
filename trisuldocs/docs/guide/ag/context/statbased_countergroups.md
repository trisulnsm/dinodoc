# Stat Based Counter Groups

A new counter group consisting of items based on an observed meter
value.

### Usage

Creates a subset of a parent group consisting only of items who meet a
certain meter criteria.

Examples :

| Counter Group         | Description     | Meter Criteria              |
| --------------------- | --------------- | --------------------------- |
| Internal hosts only   | Subset of hosts | When Hosts meter “Homenet”  |
| Under the radar hosts | Subset of hosts | When Hosts meter “Total” < 2000 (hosts that average less than 2,000 bytes/sec over the 1-minute interval)                                                        |

### Creating New Meter Value Counter Group

:::info navigation

:point_right: Log in as `admin` and go to Context: default &rarr; profile0 &rarr; Custom Counters &rarr; Stat Based

:::

1. The list of Configure Statval Counter Groups will appear  

2. Click the option found at the bottom section **New Counter Group
   Statval**  

3. You will be redirected to a page with following fields

| Field Name           | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| Counter Group Name   | The Counter Group statval Name                                     |
| Description          | Description about counter group statval                            |
| Parent Counter Group | Select a Parent from the drop down list of parent counter groups   |
| Stat ID              | Select a Stat ID from the drop down list of Stat IDs               |
| Operator             | Choose an operator that you want to perform from the dropdown list |
| Stat Val             | The threshold. Enter bits per second with a unit, for example `8Mbps` or `6Kbps`, or a plain number in bytes per second, for example `2000`. Trisul stores the value in bytes per second, using decimal units: 1 Kbps = 125 bytes/sec, 1 Mbps = 125,000 bytes/sec. Trisul compares the statistic with this value every 1-minute interval. |