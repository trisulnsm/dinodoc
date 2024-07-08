# Controlling packet storage

Not all organizations have the 
luxury of storing every single packet that crosses their perimeter. 
Using simple rules you can trim the storage requirements sometimes 
dramatically without sacrificing capability.

There are two ways you can control what packets get stored.

1. **static rules** — you know a list of IPs, ports, other counters before hand.
2. **dynamic rules** — you decide on a per-flow basis dynamically (using LUA)

For both static and dynamic policies, Trisul can apply four ‘treatments’ to packets.

1. Store
2. Do not store
3. Store only headers
4. Cap TCP flows ( store only the first 1MB, 10MB, 100MB) of each flow

Lets look at some examples.

## Examples

> You need to restart Trisul if you want any of these changes to take effect.

### Dynamic rules

Using the LUA `packet_storage` API you can write a LUA script that gets called when a new flow is detected. You can specify 
what policy to apply to all packets in that flow. Some links :

- LUA packet_storage [API Documentation](/docs/lua/FRONT-END-SCRIPTS/pcap-storage)
- Github [trisul-scripts samples](https://github.com/trisulnsm/trisul-scripts/tree/master/lua/frontend_scripts/packetstore)

The rest of this document will describe static rules.

### Example 1 : Exclude SNMP and DNS traffic

For the first example, lets keep it simple and prevent both TCP and UDP. We will see later how to tune this to only exclude UDP ports. SNMP is UDP ports 161 + 162 and DNS is port 53.

To put this rule into effect,

1. open the [trisulConfig.xml](/docs/ref/trisulProbe-config#ring) file and locate the Ring section
2. change the `<RuleChain>` section to look like this

```xml
...
<DefaultMode>FULL</DefaultMode>
  <RuleChain>
    <Rule mode="FULL"></Rule>
    <Rule mode="FLOWCAP10M"></Rule>
    <Rule mode="FLOWCAP1M"></Rule>
    <Rule mode="FLOWCAP100K"></Rule>
    <Rule mode="FLOWCAP10K"></Rule>
    <Rule mode="HEADERS"></Rule>
    <Rule mode="IGNORE">{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}=p-00A1,p-00A2,p-0035</Rule>
```

The strange looking string under the IGNORE item is the rule in [Trisul filter format](/docs/ref/trisul_filter_format)  
The rule `{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}=p-00A1,p-00A2,p-0035` merely says `COUNTER_GROUP_APPLICATIONS = Ports 161,162,53`

The GUID refers to the counter group applications and p-00A0 denotes the port number 160 in p-HEX-Port format. You can use any counter group ID depending on what you want to achieve. [See here for a list of common counter groups](/docs/ug/cg/custom)

### Example 2 : Only exclude UDP ports SNMP and DNS

Lets extend the previous example and make it apply only to UDP ports 161,162 (snmp) and 53 (dns). Any traffic using TCP on these ports will be saved by Trisul.

Now we already know that the expression `{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}=p-00A1,p-00A2,p-0035` will match the required ports, we need to add the UDP constraint to it. Scanning the [list of well known GUIDs](/docs/ref/guid) we find the counter group Network Layer that counts IP protocols such as TCP/UDP/ICMP/GRE etc. We pick up the GUID `{E89BCD56-30AD-40F5-B1C8-8B7683F440BD}` and the IP protocol number 17 for UDP. Converting that to hex we get 11.

The final expression is

```
{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}=p-00A1,p-00A2,p-0035&{E89BCD56-30AD-40F5-B1C8-8B7683F440BD}=11
```

This will match ports 161,162,53 only if the IP protocol is 17 (UDP).

### Example 3 : Store only the first 10MB of web flows

The `FLOWCAP..` directives are a very powerful feature of 
Trisul. They allow you to store the first few bytes of large flows. This
 helps in dramatically cutting down storage requirements,  
while ensuring you have enough data when you need it.

The usage is very simple, you simply have to put a rule against the flow cap you want to apply to that rule.

We define web flows to be http and https (ports 80 and 443). 
Therefore we create an expression matching these applications and stick 
it into the FLOWCAP10M rule. The final rule looks like this.

```xml
..
<Rule mode="FLOWCAP10M">{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}=p-0050,p-01BB</Rule>
<Rule mode="FLOWCAP1M"></Rule>
<Rule mode="FLOWCAP100K"></Rule>
<Rule mode="FLOWCAP10K"></Rule>
```

### Example 4 : Combining rules

You can combine any number of rules. If you wish to flow cap web flows at 10MB and exclude all SNMP and DNS completely, the configuration looks like this.

```xml
...
<DefaultMode>FULL</DefaultMode>
  <RuleChain>
    <Rule mode="FULL"></Rule>
    <Rule mode="FLOWCAP10M">{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}=p-0050,p-01BB</Rule>
    <Rule mode="FLOWCAP1M"></Rule>
    <Rule mode="FLOWCAP100K"></Rule>
    <Rule mode="FLOWCAP10K"></Rule>
    <Rule mode="HEADERS"></Rule>
    <Rule mode="IGNORE">{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}=p-00A1,p-00A2,p-0035</Rule>
```

### Example 5 : Inverting rules – ignore all others except DNS

This example illustrates the use of the `DefaultMode` directive. If no rule matches the default mode is applied. So all you have to do is specify `IGNORE` as the default mode and specify the DNS in the FULL section.

```xml
...
<DefaultMode>IGNORE</DefaultMode>
<RuleChain>
<Rule mode="FULL">{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}=p-0035</Rule>
...
```
