# IPDR User Query

## Overview

The `ipdr_userquery.sh` script is used to retrieve user-specific data from the Trisul Hub. This script provides a convenient way to query user data based on various parameters. This script allows you to query the flow records by RADIUS AAA userid.  

:::note Userid 

The AAA userid can be stored in Logs from RADIUS LOG dumps processed by `trisul_aaaing`   

:::


## Usage

`./ipdr_userquery.sh [ -d domain(default domain0) ] [ -n node(default hub0) ] [ -c CONTEXT(default context0) ]  [ -f From Date YYYY-MM-DD  ] [ -t To DATE Date DATE YYYY-MM-DD] [-u userid]`

This script retrieves user IP from a specified domain, hub, and context, within a defined date range, for a particular user and queries that IP.

```Bash

./ipdr_userquery.sh [options]
```

## Options
| Options | Default value | Description |
|---------|---------------|-------------|
| `-d` | domain0 | Specify the domain |
| `-n` | hub0 | Specify the hub node |
| `-c` | context0 | Specify the context |
| `-f` |         | Specify the start date (format: YYYY-MM-DD or YYYY-MM-DD-HH:MM)  |
| `-t` |         | Specify the end date (format: YYYY-MM-DD or YYYY-MM-DD-HH:MM)  |
| `-u` |         | Specify the user ID  |


### Examples

Retrieve user data for MarkJenny123 between 2024-12-24 and 2024-12-26:

```Bash

./ipdr_userquery.sh -f 2024-12-24 -t 2024-12-26 -u MarkJenny123
```

    Retrieve user data for MarkJenny123 between 2024-12-24 14:30 and 2024-12-26 15:30:

```Bash

./ipdr_userquery.sh -f 2024-12-24-14:30 -t 2024-12-26-15:30 -u MarkJenny123
```

## Output

The script will display a table with the following columns:

- IP: The IP address assigned to the subscriber.
- LeaseStart: The date and time when the IP address lease started.
- LeaseEnd: The date and time when the IP address lease ends.
- UserID: A unique identifier for the user associated with the IP address lease.
- SubscriberID: A unique identifier for the subscriber associated with the IP address lease.

### Example output:

`root@netflow-logs:/usr/local/share/trisul-hub# ./ipdr_userquery.sh -f 2025-02-13 -t 2025-02-15 -u raghupathy`

|IP |                 LeaseStart |              LeaseEnd |                UserID |        SubscriberID |
|---|----------------------------|-----------------------|-----------------------|---------------------|        
|192.168.10.2/172.16.174.21812-02-2025-10:06 |  13-02-2025-01:39 |  |      1568172 | raghupathy |         
|192.168.11.2/172.16.183.21912-02-2025-01:02 |  12-02-2025-01:13 |  |      1568172 | raghupathy |          
|192.168.34.2/172.16.187.20613-02-2025-14:14 |  14-02-2025-00:24 |  |      1568172 | raghupathy |         