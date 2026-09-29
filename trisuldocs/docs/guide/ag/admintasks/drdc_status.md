# DR DC Status


Trisul supports Disaster Recovery when the primary site crashes. The primary site is the data centre where traffic is pushed. With the DR setup, Trisul also creates a backup of all the traffic in the DR site and once the primary site is down, the DR site is up.

You can configure the primary site to check whether the DR site is running.

In here you can only view the DR DC status. All the configuration of DR Settings, are done in [DR Settings](/docs/guide/ag/webadmin/web_options#dr-settings). This configuration enables you to view the Traffic Chart and DB Status of the DR Site from the primary site.

:::info navigation
:point_right: Go to Context: default &rarr; Admin Tasks &rarr; DR DC Status
:::

![](images/dr_trafficchart.png)  
*Figure: DR Traffic Chart*

The DR Traffic Chart shows the traffic at the DR site, which runs in parallel with the primary site's traffic. Located below the DR Traffic Chart, DR Database slices serve as backups of the primary database, mirroring the same configuration as the Database Slices in [DB Status](/docs/guide/ag/admintasks/dbstatus#database-slices).

Refer [Disaster Recovery](/docs/guide/ag/ha/dr)