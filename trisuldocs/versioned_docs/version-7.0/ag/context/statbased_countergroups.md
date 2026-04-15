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
| Under the radar hosts | Subset of hosts | When Hosts meter “Total” < 2000 (hosts who only xmit or recv < 2K bytes in an interval )                                                        |

### Creating New Meter Value Counter Group

:::info navigation

:point_right: Login as Admin &rarr; Select Context:default&rarr; profile0 &rarr; Custom Counters&rarr; Stat Based

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
| Stat Val             | Example : 8Mbps, 2000, 6Kbps (default units is bytes/sec)          |