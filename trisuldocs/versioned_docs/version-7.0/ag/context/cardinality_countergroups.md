# Cardinality Counting

Cardinality counters allow you to measure unique hits for keys within a
counter group. For example, we can track how many unique IPs did each
country see.

By default, Trisul ships with the following three cardinality counters
enabled.

| Cardinality Counter   | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| Unique Apps per Host  | For each host, track how many unique apps were seen          |
| Unique Hosts per Host | For each host, track how many unique hosts (peers) were seen |
| Unique Hosts per App  | For each app, track how many unique hosts were seen          |

You may add your own cardinality counters to any counter group with the
following restriction :

1. A maximum of 2 cardinality counters are allowed per counter group.

### Creating cardinality counters

:::info navigation

:point_right: Login as Admin &rarr; Select Context:default&rarr; profile0 &rarr; Custom Counters
&rarr; Cardinality

:::

1. A list of existing counters is displayed
2. Click on *New Cardinality Counter*
3. Enter the following three fields

| Fields              | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| Host Counter        | The counter group whose members you want to attach this counter to |
| Cardinality Counter | The counter group whose uniqueness you want to count               |
| Description         | Recommended \< 16 chars, describing the counter                    |

#### Example

If you wanted a cardinality counter to count unique hosts for each
country.

1. Host Counter Group = `Country` from dropdown
2. Cardinality Counter Group = `Hosts` from dropdown
3. Description = `Unique Hosts`

### Using Cardinality Counters

Once configured, cardinality counters behave just like other counters.
They appear as extra counters in the drop down lists, you can draw
charts, trend over time, even set threshold crossing alerts on them.