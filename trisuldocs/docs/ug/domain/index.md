# Trisul distributed domain concepts

Trisul 6.0 is a *streaming* *distributed* analytics platform. There are
“Trisul Probes” which acquire and process network data and there are
“Trisul Hubs” which provide the database function. The “Trisul Probes”
are not just dumb collectors but actually contain the main streaming
analytics function. You can even connect the output of a Trisul Probe to
a separate backend like Elastic Search.

The following diagram illustrates the components involved

1. the **domain** *domain0*
2. the **trisul-probe** nodes *probe0* *probeEAST* and *probeWEST*
3. the **trisul-hub** node *hub0*

![](images/dom.png)

Trisul domain components

The domain represents a top level management group within which you
create a topology of *probe* nodes and *hub* nodes. All the nodes are
logical entities and you can install them all on a single physical
machine or distribute them on different machines.

## Domain nodes terminology

The following logical concepts are key to understanding a Trisul domain.

1. **Domain** - the top most level management group
2. **Context** - a separate monitoring instance. You always start,
   stop, and view data within a context.
3. **Profiles** - a probe configuration
4. **Probes** - the packet capture and streaming analytics
5. **Hubs** - a database node

## Domain

The topmost entity in Trisul called a **domain**. The default domain you
are likely using is called `domain0`.

A domain is a top level membership group which includes *probes* and
*hubs*. Each *probe* and *hub* instance must belong to one and only one
domain. You can also have multiple domains - each domain is disjoint
from every other domain but the hardware can be shared.

## Contexts

A context is a separate database that represents an instance of Trisul
monitoring a particular network or dataset. You start and stop contexts
as a unit. You also view reports and perform analytics within a context.
By default Trisul puts all data into a single context called `context0`.
You can create additional contexts using the `trisulctl_hub` tool.

The rules

1. a context accepts data from multiple probes
2. a single probe can supply data to multiple contexts
3. a context database is stored on a single hub - currently only on
   `hub0`
4. you select a context while logging in to the web interface

:::note **Contexts** A context is a separate database

:::

## Profiles

Profiles are just configuraton for probes inside of a context. Typically
you would want each probe in a context to use the same profile. A
profile includes such things as counter groups, thresholds, flow
trackers, and the other things that you would find when you login as
Admin \> Admin.

:::note **Profiles** are just configuration for probes

:::

## Probes

Probes are the main processing component of Trisul. They run the main
processing pipeline from the packet acquisition to streaming stats
generation. The function of probes are

1. high speed packet capture
2. packet storage
3. netflow packet capture
4. run the analytics pipeline
5. host all the LUA scripts written by users
6. store packet **locally** after encryption
7. send the analytics stream to a hub node (currently `hub0` )

A probe can run in multiple contexts and multiple domains. There will be
different instances of the probes running isolated from each other.

Probes are managed using the `trisulctl_probe` command line tool 
:::note **Probes** transform packets into analytics streams.

:::

:::note **Packages** The “trisul-probe” package provides the Probe function

:::

## Hubs

Hubs provides the database and querying functionality. Data from all the
*Probes* stream into to a *Hub* and are stored here. The only data that
stays on the *Probe* are the raw packets.

Hubs are managed using the `trisulctl_hub` command line tool
:::note **Packages** The package “trisul-hub” provides the Hub function. The
package “webtrisul” which resides on the same node provides the
webserver.

:::

## Security

The authentication used to connect various nodes to the domain is ZeroMQ
CURVE security using certificates. CURVE uses elliptic curve encryption
and cryptography. See [CurveMQ](http://curvezmq.org/) for more.

1. Each node needs a certificate key pair to connect to the domain
2. The command line tools trisulctl_probe and trisulctl_hub allow you
   to manage the whole setup easily
