
# Admin Tasks

All the administrative functions are being done here right from
starting/stopping Hub and Probe nodes to monitoring Netflow and BGP in
Trisul.

![](images/admin_tasks.png)

*Figure: Start/Stop Tasks in Admin Panel*

### Start/Stop Tasks

This Menu is generally used to start/stop Hub and Probe nodes associated
with each context. Each context will have separate Hub and Probe nodes.
You can directly start and stop the nodes from Web Interface through
this menu.


### DB Status

This menu shows up the Trisul Data Store Statistics. It provides
detailed information on Session Flows, Resources, Alerts,
FTS (Full Text Search) objects.

Trisul Database is generally divided into three segments based on the
how many days Trisul has to store data.

- Oper is where the Latest data gets stored.
- Reference is the next level where data is pushed based on the days
  specified for storage.
- Archive is responsible for storing very old data.

You can view how much volume of data is being stored per day in each
slice and you can calculate accordingly as to how much days data can be
stored depending on the size of the disk.

> To configure the DB storage retention policy refer to [Configuring disk
> storage](/docs/ag/basictasks/configure_storage.md)

You can also view the disk occupied by each counter-group in a SLICE
every-day. This is helpful in tuning the system.

### Licensing

This menu gets you through the license policy of Trisul.

Trisul Network Analytics licenses are :

1. Perpetual
2. Need one license per physical node
3. Tied to a machine ID

License types are :

1. Free 3-Day License : this is the default license that does not
   expire but only gives you a 3-day window of history
2. Production License : depends on the number of active internal
   endpoints in your Home Network space
   1. Small Business : 500 simultaneously active Internal IPs
   2. Medium : 3000 simultaneously active Internal IPs
   3. Unlimited : As many as your hardware can support

To Install a new License, Refer to the [Installing Trisul
License](/docs/ag/license/install) for instructions

### Schedule Email Reports

You can Schedule Automatic Reports from Trisul like PDF Reports, Alert
based Reports etc.

You may dispatch by email any of the supported report types at these
intervals.

1. Hourly
2. Daily
3. Weekly
4. Monthly

To know more about how to schedule Reports, Refer to [Schedule
Reports](/docs/ug/reports/schedreports)

### BGP Route Receiver

This menu is all about the status of BGP Route Reciever. It shows the
BGP Status on all probes.

> To start the BGP Receiver you need root privileges on the probe, then
> type **systemctl start trisul-bgp**

To know more on Trisul-BGP concept, See [Trisul-BGP](/docs/isp/bgp)

