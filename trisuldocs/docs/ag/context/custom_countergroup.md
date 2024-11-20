# Custom Counter Groups

Trisul ships with 40-50 counter groups. Often users want some special
type of metering for their environment. Trisul lets you build your own
advanced traffic metering on top of the existing counter groups. The
following types of custom counter groups are supported.

[Filtered Counter Group](/docs/ag/context/filtered_countergroups)  
**Meter only a subset of an existing counter group by applying a
filter**

Example : A counter group called “Web Hosts” that only counts HTTP and
HTTPS traffic. The parent group is “Hosts” and the filter is “Apps
80(http) and 443(https)”

[Keyset Counter Group](/docs/ag/context/keyset_countergroups)  
**Meter groups of keys rather than individual keys from a host group**

Example : A new counter group called *My apps* which extends the *Apps*
counter group. Then specificy groups of ports {4569,5060,3000-4000} as
VoIP, as Web,  as Email. These groups are called
keysets. Similarly you can count groups of IPs as Web Servers,
Workstations, VOIP Phones by specifying those groups from the Hosts
counter group.

[Stat Based Counter Group](/docs/ag/context/statbased_countergroups)  
**Count only keys that whose values match a mathematical value**

Example : A new counter group called *Scanners*, which extends the
*Hosts* counter group but only when the meter *Security Alerts* is more
than 0.

[Rule Based Counter Group](/docs/ag/context/rulebased_countergroups)  
**Specify arbitrary rules matching your business needs**

Example : A new counter group called *Corporate apps* which extends the
*Apps* counter group. Then adds these rules *CCTV Cameras* - if Port =
80 and subnet = 10.2.2.0/24. You can chain any number of rules to build
your custom metering.

[Cross Keys Counter Group](/docs/ag/context/crosskey_countergroups)  
**Cross product of two or three counter groups**

Example : A new counter group called *Traffic Flows* which is cross
product of two counter groups *Internal Hosts X External Hosts*. The
keys in this new counter group will be a combination of both. Another
example is *Geo Flows* which is a cross product of three counter groups
*Internal Hosts X Country X External Hosts*

[Cardinality Counting](/docs/ag/context/cardinality_countergroups)  
**Count uniques X of Y**

Cardinality counters are not a new counter group. You can add up to two
cardinality meters to any counter group. For example : You can add to
the *Hosts* counter group a meter for tracking *Unique Apps* This allows
you to track *for every host* a new metric called *unique apps*