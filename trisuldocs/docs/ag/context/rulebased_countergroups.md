# Rule Based Counter Groups

A rule based counter group allows you the maximum flexibility to
custom-meter your network traffic.

It works like this :

1. Derive from a parent group such as hosts / applications / macs  

2. Specify a chain of rules in [Trisul Filter Format](/docs/ref/trisul_filter_format)  

3. The first rule that matches determines the meter key  

4. If no rule matches the key falls through to the parent counter group

### An Example : Corporate Applications

You are a network admin in an enterprise and wish to meter traffic in
terms of your applications.

Here are your requirements.

| This kind of traffic                | Should be metered as                                     |
| ----------------------------------- | -------------------------------------------------------- |
| Ports 80 on IPs 10.10.17.20, 21, 22 | HR-Attendance                                            |
| Ports 3000-9000 on IP 10.10.18.35   | Trisul-NSM                                               |
| Ports 8000 on IPs 10.10.18.25 - 45  | Security-Cam                                             |
| All traffic to IP 10.10.19.3        | Exchange-Email                                           |
| All others                          | Use the default application (eg 80 = HTTP, SSH = 22 etc) |

You would specify the rules as follows

Counter Group Name : **ACME APPS**  
Parent Group : **Applications** (guid = {})

| No     | Rule in Trisul Filter Format  | New Key     |
| ------ | ----------- | --------- |
| Rule 1 | `{4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}=0A.0A.11.14,0A.0A.11.15,0A.0A.11.16&{C51B48D4-7876-479e-B0D9-BD9EFF03CE2E}=Port-80` | HR-Attendance                                                    |
| Rule 2 | `{4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}=0A.0A.12.23&{C51B48D4-7876-479e-B0D9-BD9EFF03CE2E}=Port-3000~Port-8000`             | Trisul-NSM                                                       |
| Rule 3 | `{4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}=10.10.18.25~10.10.18.45&{C51B48D4-7876-479e-B0D9-BD9EFF03CE2E}=Port-8000`           | Security-Cams                                                    |
| Rule 4 | `{4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}=10.10.19.3`                                                                         | Exchange-Email                                                   |
| -     | Catch-all                                                                                                                   | Uses the same application key as the parent group (applications) |

### Creating a Rule Based Counter Group

Directions to create a new Rule Based Counter Group  
:::info navigation

:point_right: Login as Admin &rarr; Select Context and profile &rarr; Under Custom Counters
&rarr; Rule Based

:::

1. Click the option **Create new rule based counter group**

This leads you to a page , whose fields are explained below

| FieldName                     | Description                                |
| ----------------------------- | ------------------------------------------ |
| Rule Based Counter Group Name | Name of the counter group                  |
| Description                   | Words about the goals of the counter group |
| Parent Group                  | The parent counter group                   |

After creation , the user is redirected to a page which lists the
available rule based counter groups

Now click the ***Edit Rules*** option for the counter group , which
leads you to another page , whose fields are as follows

| FieldName   | Description                       |
| ----------- | --------------------------------- |
| Target Key  | Name of the target                |
| Target Rule | The rule which should be followed |

#### Specifying a Target Rule

```
    {4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}=80.79.32.7A&{C51B48D4-7876-479e-B0D9-BD9EFF03CE2E}=p-0050
```

The above rule tracks the activities of the key `80.79.32.7A` only for
`HTTP` application