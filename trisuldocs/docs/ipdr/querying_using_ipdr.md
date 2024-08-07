---
sidebar_position: 5
---

# How to Query Using IPDR Form

With IPDR Query Form, you can request detailed records of internet activity from network devices. 

To view Trisul IPDR Query form,

:::note Navigation

Login as User name: `dotuser` and

Password: `ipdr@@123`

:::

Here is the snapshot of Trisul IPDR Query Form.

![](images/ipdrqueryform.png)

> As per compliance requirements agent queries are based on IPv4 or IPv6
> IP address. 

## Form Structure

Trisul IPDR Query Form consists of the following fields,

| Fields     | Input                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| IP Address | Enter IPv4 or IPv6 eg. 192.168.1.20 or 2404:5440:3::a                                                       |
| Time Frame | Click from the list of time frames (Last 1 hour, this month etc) or click custom for a specific time period |
| Port       | Enter port like 80 ,443                                                                                     |
| NAT IP     | CGNAT or Lan IP Eg.103.61.11 or 10.1.1.2                                                                    |
| User Name  | Eg.N5687                                                                                                    |
| Device IP  | Router IP eg. 10.2.2.1 or 2404:5440:3::a                                                                    |

### Fields Descriptions

1. **IP Address**: The IP address of interest for the query.

2. **Time Frame**: The time range for which you want to retrieve IPDR data.

3. **Port**: The Port range for filtering the query results

4. **NAT IP**: The NAT IP address for filtering the query results

5. **User Name**: The User name associated with the IP data

6. **Device IP**: The IP Address of the device generating the IPDR Data

### Usage Guidelines

- Fill in these fields with desired query parameters

- Click Submit 

This will create a targeted query to retrieve specific IPDR data. The result statistics and IPDR logs can be viewed on the dashboard right away!
