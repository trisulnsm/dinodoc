# Plugin Configuration

Trisul consists of two base configs - the
[Trisul-Probe](trisulconfig) config file and the
[Trisul-Hub](trsulhubconfig) config file. If you wish to finely
control how various metrics are computed you can tweak the following
Plugin configuration files.

- **What are plugins?**  
  Trisul is a network analytics platform and hence most of the actual
  metering functionality are implemented as native plugins. Hence the
  name “plugin configuration”. Each plugin has a GUID, the plugin
  config files therefore are created with a GUID in them.

## Plugin config editor

The config file that controls how IP’s are metered is called
*PI-01010101-125E-48D0-8AC9-A7E3AD2F60FD.xml*. Use **cfgedit** to locate
and edit these plugin config files.

Type the following command to bring up the editor.

```language-bash
sudo /usr/local/share/trisul-probe/cfgedit 
```

Then you can select the configuration to open the configuration file.
Set the shell variable `$EDITOR` to your favorite text editor, or the
tool opens the config file in `nano`

### Examples

Usage: `cfgedit [domain-name] [probe-id] [context-name]`

Some examples

```language-bash
# to edit configs for default context 
sudo /usr/local/share/trisul-probe/cfgedit 

# to edit context nf1 on probe1
sudo /usr/local/share/trisul-probe/cfgedit domain0 probe1 context_nf1 

# to edit context firewall on domain0/probe0
sudo /usr/local/share/trisul-probe/cfgedit context_firewall
```

<asciinema-player src="cast/cfgedit.cast" poster="npt:0:6" rows="30" loop="loop"></asciinema-player>

## List of all available configuration files

Here is a list of all the current plugin configuration options.

| Name                                              | Description                                                    |
| ------------------------------------------------- | -------------------------------------------------------------- |
| [Hosts](plugin_configuration#hosts)               | IP address based metering                                      |
| [Base Domains](plugin_configuration#base_domains) | DNS Base Domains metering (rules, regexes, etc)                |
| [Netflow](/docs/ref/netflow-config)               | NETFLOW/IPFIX policy. Link to a separate reference document.   |
| [SFlow](plugin_configuration#sflow)               | SFLOW policy.                                                  |
| [TCP Flows](plugin_configuration#tcp_flows)       | TCP Flow metering, subnets, etc                                |
| [UDP Proto](plugin_configuration#udp_proto)       | UDP Protocol parsing and metering                              |
| [TCP Proto](plugin_configuration#tcp_proto)       | TCP Protocol parsing and metering                              |
| [App Ports](plugin_configuration#app_ports)       | Application counting, special server ports                     |
| [Mac](plugin_configuration#mac)                   | MAC layer, directional, broadcast metering etc                 |
| [IP Tunnels](plugin_configuration#ip_tunnels)     | Used for 3GPP mobility (contact us)                            |
| [DNS](plugin_configuration#dns)                   | Control DNS extraction, resource, Full Text Search, etc        |
| [Http Hosts](plugin_configuration#http_hosts)     | HTTP Host header depth setting                                 |
| [Geo](/docs/ug/install/geoasn)                    | Controls Geo plugin, country and ASN metering rules            |
| [Badfellas](/docs/ug/install/badfellas)           | Controls Badfellas lists, how they are refreshed, custom rules |
| [Urlfilter](/docs/ug/install/urlfilter)           | URL Filter database and rules                                  |

## Hosts

`File:
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-01010101-125E-48D0-8AC9-A7E3AD2F60FD.xml`

Controls how hosts are metered. You need to tweak this only when working
with very high speed networks and you want  
maximum throughput per core at the expense of some metrics.

| Parameters     | Defaults | Description                                                                              |
| -------------- | -------- | ---------------------------------------------------------------------------------------- |
| SampleRate     | 1        | packet sampling rate. Default, every packet.                                             |
| ExternalIPOnly | false    | only meter external IPs. IPs that are not in your HOME\_NETWORK                          |
| ShortUpdates   | false    | limited host updates - do not measure TotalBandwidth, IntoHomeNetwork, OutofHomeNetwork. |

## Base Domains

`File:
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-081336B3-5AF1-4D4F-B850-BA3CAEEB8A2C.xml`

Base domains - map domain names used by popular webservices to
Application Names.

| Parameters    | Defaults                        | Description                                                                                                                                                                       |
| ------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rules         | string of regex to app names    | The rules section map domain regexes in Google RE2 format to application names. You can add your own rules to this list and they will be picked up when Trisul-Probe is restarted |
| StaticIPRules | maps static IPs to applications | Most useful in corporate or TELCO settings when you have a fixed mapping of IP addressess to applications. Mostly used by caches                                                  |

### Specifying rules

- attribute k  
  the key to update the Base Domains counter group
- attribute x  
  the regex in RE2 format that matches
- order of matching  
  the first match is selected

<!-- end list -->

```language-xml
<Rule>     <k> WHATSAPP        </k><x>  whatsapp                                         </x></Rule>
<Rule>     <k> FACEBOOK        </k><x>  (facebook|fbcdn|fb\.me)                          </x></Rule>
<Rule>     <k> YOUTUBE         </k><x>  (youtube|ytimg|googlevideo|ggpht|gvt1\.com)      </x></Rule>
```

## SFlow

`File:
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-819CEF8E-B6DB-431B-97D0-7DB2A5EA5392.xml`

See [Netflow configuration file
parameters](/docs/ref/netflow-config) The SFLOW options have the
same meaning as those of the Netflow configuration.

## TCP Flows

`File:
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-88384B31-883A-8383-1278-0F3A11CEEE90.xml`

How TCP Sessions are metered.

| Parameters   | Defaults  | Description                                                       |
| ------------ | --------- | ----------------------------------------------------------------- |
| SubnetOnly   | 0.0.0.0/0 | Only count flows in this subnet.                                  |
| ShortUpdates | false     | Only count payloads \> 200 bytes and dont measure payload counts. |

## UDP Protocol dissector

`File:
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-09809283-125E-48D0-8AC9-A7E3AD2F60FD.xml`

Controls how UDP protocol dissection is done.

| Parameters         | Defaults | Description                                                                                                             |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| EnableAccessPoints | true     | Allows a dynamic mapping for port based higher level protocol. Disable for very high speed network on limited hardware. |

## TCP based metering

`File:
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-923740FF-125E-48D0-8AC9-A7E3AD2F60FD.xml`

How TCP is metered.

| Parameters         | Defaults | Description                                                                                                             |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| EnableAccessPoints | true     | Allows a dynamic mapping for port based higher level protocol. Disable for very high speed network on limited hardware. |

## APP Ports

`File:
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-9999CCCC-125E-48D0-8AC9-A7E3AD2F60FD.xml`

| Parameters   | Defaults | Description                                                                           |
| ------------ | -------- | ------------------------------------------------------------------------------------- |
| SampleRate   | 1        | Only process every X packet.                                                          |
| ShortUpdates | false    | Set to true to skip some metrics. If true - skips tracking home network based meters. |

### AppPolicyItem

By default, the app ports are selected using the following formula. If
TCP, the client port is the side with the initial SYN packet. Otherwise
if the protocol is UDP, or if the SYN packet is missed, the lower port
is treated as the server port. This section allows you to specify exact
rules.

| Parameters  | Defaults        | Description                                             |
| ----------- | --------------- | ------------------------------------------------------- |
| ServerPorts | list of ports   | List of ports. Eg `40000,50000~51000,8378`              |
| Subnets     | a single subnet | A range of IP to which the above server ports are used. |

## MAC

`File:
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-ABBBBBCC-125E-48D0-8AC9-A7E3AD2F60FD.xml`

Controls how MAC addresses are metered.

| Parameters     | Defaults | Description                                |
| -------------- | -------- | ------------------------------------------ |
| SampleRate     | 1        | Process only 1 in X packets                |
| MeterMACPairs  | true     | Meter MAC pairs every single Source-\>Dest |
| MeterBroadcast | true     | Meter broadcast addresess                  |

## IP TUNNELS

`File:
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-AFFFFFFF-125E-48D0-8AC9-A7E3AD2F60FD.xml`

Used for Mobility tunnels.

| Parameters       | Defaults                          | Description             |
| ---------------- | --------------------------------- | ----------------------- |
| description      | Controls IP Tunneling Deployments |                         |
| Detunnel3GPPGTPU | false                             | Contact us for details. |

## DNS

`File:
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-CCCBBBB3-125E-48D0-8AC9-A7E3AD2F60FD.xml`

How DNS protocol is metered.

| Parameters           | Defaults | Description                                                                       |
| -------------------- | -------- | --------------------------------------------------------------------------------- |
| SampleRate           | 1        | Once every X packets                                                              |
| CreateFTSDocument    | true     | Do you want to create a Full Text Search Document.                                |
| ExtractResources     | true     | Extract DNS Resources. Resources can be thought of as Logs                        |
| MergeCDN             | true     | If true, CDN names like akamai.. in answer records map to the original Query name |
| TrackBaseDomains     | true     | Enable base domains feature.                                                      |
| BloomFilterResetMask | 2097151  | 2^21-1 increase this if you have a very large number of DNS responses             |
| GenerateAlertOnError | true     | NXDomain responses will result in a UserAlerts error                              |

## HTTP Hosts

`File:
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-D2AAD7C6-E129-4366-A2AD-A8CB9AA4C2F4.xml`

How HTTP Hosts are metered.

| Parameters  | Defaults | Description                                                 |
| ----------- | -------- | ----------------------------------------------------------- |
| DomainDepth | 0        | See below, you can control how HTTP hostnames are processed |

DomainDepth if you have a HTTP host like `lax25.sjv.y1.youtube.com`

|     |                      |
| --- | -------------------- |
| 0   | indicates fulldomain |
| 1   | com                  |
| 2   | youtube.com          |
| 3   | y1.youtube.com       |
