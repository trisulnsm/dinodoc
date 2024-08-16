# Advanced Settings

This page contains detailed configuration and tuning parameters. What goes on under the hood. 

## Configuring Trisul for IPDR

At ISP scale storing every single flow is a processor and disk intensive
task. Hence this configuration cannot be mixed with the Netflow Traffic
and Security Analytics feature except for very small ISPs. This section
contains configuration tips to optimize this feature.

### Use compressor lz4-ipv4-call-log-with-nat

Use a new flow compressor specifically designed for IPDR flow log. This
high performance compressor can store a flow with NAT in as little as 14
bytes.

Open the [trisulHubConfig.xml](/docs/ref/trsulhubconfig#advanced-db-parameters) file and specify the following in Advanced DB Parameters.

- Use a new compressor `lz4-ipv4-call-log-with-nat`
- Disable microsecond timestamps

```
<DBParameters>
    <FlowStream>
        <MicroSecondTimestamps>false</MicroSecondTimestamps>
        <ZFLOWBLOCK_COMPRESSOR_CODE>lz4-ipv4-call-log-with-nat</ZFLOWBLOCK_COMPRESSOR_CODE>
...
```

## The trisul-ipdr query service

The Trisul IPDR package comes with a powerful async query service called
`trisul-ipdr` The features of this service are

1. Asynchronous - you can submit multiple long running queries for IP
   and then download the results when done
2. Results - the results will be in compliance format including the
   full IP details as well as the NAT (if applicable)
3. Dashboard - dashboard shows running queries, completed queries,
   download results
4. Cancel - allows cancel of long running queries, number of records
   are constantly updated
5. Audit log - all query submits including user name, submit time,
   submit params are stored in audit log
6. Statistics - Dashboard also shows important statistics about Total
   BW, Number of flows/min, DB growth etc.
7. Automatic FTP - for query dumps that are huge, the service
   automatically FTP’s results to a separate secure FTP server

To start this service

```language-bash
systemctl start trisul-ipdr 
```

## Workflow

The system is designed to create a special login to the agent who will
be performing the queries. This login has no other privileges other than
to perform the query required for complaince. The powerful `trisul_ipdr`
service described above ensures the data is provided as a download or
pushed directly to a Secure FTP (SFTP) server. Sometimes we have noticed
agent requests resulting in several GB of output which cannot be downloaded over a browser. See [Configure IPDR Settings](/docs/ug/webadmin/ipdr-settings) on how to setup the SFTP server.

The following diagram shows the workflow

![](images/ipdrflow.png)

Fig 2. Agent login, submit, download, FTP workflow

#### Agent login with special ID

The agent is given a separate login and password with a dashboard that
shows only one option to retrieve IPDR logs. Once logged in the agent can submit query using [Trisul IPDR Query form](/docs/ipdr/querying_using_ipdr) and view the [IPDR dashboard](/docs/ipdr/ipdrdashboard) for the queried IP addresses. The [IPDR reports](/docs/ipdr/ipdrreport) are then downloaded from web browser or FTP server.

## Tuning

We suggest the following configuration parameters for a minimal IPDR
deployment.

| Config file | Parameter | Set this to | Notes  |
| -------- | ---- | ------- | ------------ |
| [Netflow config](/docs/ref/netflow-config)  | AppMode                              | ipdr                             | Sets the Netflow processing to IPDR mode|
| [Hub Config](/docs/ref/trsulhubconfig#advanced-db-parameters) | DBParamters \> FlowStream \> AppMode | lz4-ip-call-log-with-nat-pro-max | Sets the database schema and compression code to pro-max mode|
| [Probe Config file](/docs/ref/trisulconfig#tuning)            | Tuning \> DisableFlowTupleFeedback   | true                             | Disables monitoring of flow tuples by IP and Application. If this is enabled, there will be connection metrics for every IP and App, could waste disk space for IPDR |
| [Probe Config file](/docs/ref/trisulconfig#edges)             | Edges \> EnableFlowEdges             | false                            | Disable Edge graph generation for space savings                                                                                                                      |

### References

Also see [IPDR FTP Settings](/docs/ug/webadmin/ipdr-settings)
