# Trisul Filter Format

Several features of trisul require you to be able to construct rules.

Some examples of rules :  
\* Traffic between 192.168.1.8 and 192.168.1.89  
\* HTTP traffic to and from China  
\* Traffic on IP 192.168.1.8 and between ports 6000-7000  
\* Traffic other than port 80 and other than on subnet 192.168.2.0/24

Some of the areas in Trisul where you need to specify rules are :  
\* Specify rule chains for full content storage policy  
\* Create rule based counter groups for business apps  
\* Create key set counter groups to map range of keys to an
application  
\* Flow taggers to mark flows that matched a rule

These rules are specified in Trisul Filter Format, explained below.

## Format

The filter format is a single constraint or a chain of constraints
connected by an AND or OR logical operator.

> A constraint is a mapping of a counter group with keys in that group.

```
  A single constraint
      {guid}=k1,k2,k3         (match these keys)
      {guid}!k1,k2,k3         (match all except these keys)
      {guid}=k1,k21~k22,k3    (match these keys k1,k21 through k22, k3)

  A chain of constraints 
      constraint1|constraint2 (constraint1 OR constraint 2 must match)
      constraint1&constraint2 (constraint1 AND constraint 2 must match)
```

A list of GUIDs can be found [here](/docs/ref/guid)

## Online rule builder

Trisul has an online rule builder to
help you create these rules in an interactive way.

## Examples

Some examples will help illustrate the concept.

### Applications on ports 80, 81, 82, 83

```
{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}=p-0050,p-0051,p-0052,p-0053  
```

The GUID in the above example represents the applications counter group
and the p-0050,.. represent the keys. So in order to effectively
construct the constraint you need to know:  

1. The GUID of the counter group (you can cut and paste from *Customize Counters > All Counter Groups > Click on a group*)

2. How keys are constructed in the group (cut and paste from the Key
   dashboard)

### Hosts 192.168.1.2, 192.168.1.10, and all hosts between 192.168.1.100 to 192.168.1.192

We find that the hosts counter group GUID =`{4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}`
The hosts are keyed by hex digits separated by a period C0.A8.01.01 =
192.168.1.1

So our expression is  

```
{4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}=C0.A8.01.02,C0.A8.01.0A,C0.A8.01.64\~C0.A8.01.C0  
```

### Countries except US,CA

You need the trisul\_geo plugin to enable country / asn metering.

```
{00990011-44BD-4C55-891A-77823D59161B}\!us,ca  
```

Note that the GUID `00990011-44BD-4C55-891A-77823D59161B` represents the Country counter group.

## Chaining constraints

The Trisul Filter Format allows you to construct arbitrary chain of
constraints.

Building on the above examples, if you want to filter

- Traffic on ports 80,81,82,83 only on non USA or Canada traffic

```
{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}=p-0050,p-0051,p-0052,p-0053&{00990011-44bd-4c55-891a-77823d59161b}\!us,ca  
```