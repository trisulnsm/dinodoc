# Filtered Counter Groups

A cross-product counter group.

Meter a subset of a group that matches a set of keys from another group.

### Uses

Filtered counter group are invaluable in setting up cross-group
counters.

Some examples :

| Counter Group       | Description and Parameters                                          |
| ------------------- | ------------------------------------------------------------------- |
| Users of Youtube    | All IPs connecting to known YouTube IPs can be monitored separately |
| HTTP Hosts          | Parent = Hosts, Filter = Apps (Keys = http)                         |
| China Ukraine Hosts | Parent = Hosts, Filter = Country (Keys = cn,ua)                     |
| Server Apps         | Parent = Apps, Filter = Hosts (Key = 10.10.1.18)                    |

### Create New Filtered Counter Groups

:::info navigation

:point_right: Login as Admin &rarr; Select Context and profile0 &rarr; Under Custom Counters
&rarr;Filtered

:::

1. Click the button “Create New”  

2. You will be redirected to a page with following fields

| Field Name         | Description                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------- |
| Counter Group Name | Counter Group name                                                                       |
| Description        | Descriptiom about the counter group                                                      |
| Parent Group       | Choose parent counter group from the drop down list                                      |
| Filter Group       | Choose filter counter group from the drop down list                                      |
| Key List           | Comma separated list of keys/ranges: `Port-80, 192.168.1.2, Port-5000~Port-8000, 192.168.1.1~192.168.1.255`                                                                                      |
| Inverse Key List   | The parent will be filtered by all keys Except those in this list.                       |

### Custom Group

For more advanced custom counters you can use the [LUA API](/docs/lua/tutorial1)
to measure any subset of metrics