# Submit Queries

This is the place you go to generate IPDR reports when the agencies request information. 

To view Trisul IPDR Query form,

:::info Navigation

:point_right: Login as User name: `dotuser` and

Password: `ipdr@@123`  (:bulb: remember to change the default)

:::

## Form Structure

Trisul IPDR Query Form allows you to query on one or more of the following fields.


Here is the snapshot of Trisul IPDR Query Form.

![](images/ipdrqueryform.png)

*Figure: The IPDR Query form*



### Form fields

:::note 
Multiple fields are AND-ed.
:::


| Fields | Input  | Description |
| ------ | --- |---|
| IP Address | Enter the IPv4 or IPv6 address. Example:  209.168.1.20 or 2404:5440:3::a | The IP address of interest for the query. Generally this is the public IP address that you will receive|
| Time Frame | Select from a list of time frames (Last 1 hour, this month etc) or click custom to specify a time period | The time range for which you want to retrieve IPDR data.|
| Port | The TCP or UDP Port number   | The port number|
| NAT IP | The private IP Address    | When NAT or CGNAT is used , enter the private IP you want to query in this field. Typically this would be in the 100.64.0.0/10, 10.0.0.0/8, or other private ranges|
| User Name  | The AAA User name    | The AAA User name, this only works if you are using AAA real time syslog.|
| Device IP  | Router IP Example: 10.2.2.1 or 2404:5440:3::a| The IP Address of the device generating the IPDR Data. Typically the router.|


### Usage Guidelines

- Fill in these fields with desired query parameters

- Click Submit 

This will create a targeted query to retrieve specific IPDR data. The result statistics and IPDR logs can be viewed on the [IPDR Dashboard](ipdrdashboard) right away!


## Full database dump

Some jurisdictions have this requirement where ISPs are asked to provide a full database dump of all records to the agency. Obviously this is going to be gigantic, hence they can be capped at 1 Million records or such. 

To request a full dump leave all the form fields blank and **press the split submit** button as shown below.


![press to request full database dump](images/fulldbdump.png)

*Figure: Request full database dump. A compliance tick mark* 

As a safety mechanism, the Full Database Dump is capped to 250,000 records.  This is controlled by the [IPDR > MaxRecords](/docs/ref/trisulhubconfig#ipdr) option in the Trisul Hub Configuration file. 

