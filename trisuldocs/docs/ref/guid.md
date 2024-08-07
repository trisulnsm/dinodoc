# Well known GUIDs

A GUID is a “Globally Unique Identifier” string used all over Trisul.

In case you have never used them before, GUIDS are nothing but a string
of the form ``{889900CC-0063-11A5-8380-FEBDBABBDBEA}`` This long
string braces included, actually represents a 128 bit number that is
guaranteed to be unique globally. We use this string in Trisul to
prevent name collisions.

You may need to get hold of these GUIDs when working with

1. Trisul Filter Expressions
2. LUA scripts
3. TRP Scripts 

## Creating a GUID

To create a new GUID you can use a tool available in the Trisul Probe
package

```language-bash
$ trisulctl_probe testbench guid 
`{889900CC-0063-11A5-8380-FEBDBABBDBEA}`
```

## Common GUIDS

Here is a list of most common GUIDs that refers to various entities
within Trisul.

Jump to [Counter Groups](/docs/ref/guid#built-in-counter-groups) | [Session
Groups](/docs/ref/guid#session-groups) | [Alert Groups](/docs/ref/guid#alert-groups) |
[Resources](/docs/ref/guid#resource-groups) | [Protocols](/docs/ref/guid#protocols) | [FTS (Full
Text) Groups](/docs/ref/guid#fts-groups)

## Built in Counter Groups

:::note 

To view all counter groups login as Admin  context0:profile0 
Counter Groups

:::

| s   | guid                                     | name                        |
| --- | ---------------------------------------- | --------------------------- |
| 1   | `{889900CC-0063-11A5-8380-FEBDBABBDBEA}` | Internal Hosts              |
| 2   | `{00AA77BB-0063-11A5-8380-FEBDBABBDBEA}` | External Hosts              |
| 3   | `{EEF95297-0C8D-4673-AD6B-F4BD2345FD69}` | Web Hosts                   |
| 4   | `{22D4082E-B8BA-40D0-A287-1F524DF8DA7B}` | Email Hosts                 |
| 5   | `{439002E4-3758-4E88-9438-8034FE1616AF}` | SSH Hosts                   |
| 6   | `{AE3A1449-5663-41A5-A028-FDE61DBB7EFA}` | Unusual Traffic Hosts       |
| 7   | `{FF889910-9293-AAA5-0028-883991889884}` | Unleash Apps                |
| 8   | `{4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}` | Hosts                       |
| 9   | `{429B65AD-CDA4-452E-A852-24D8A3D0FBB3}` | Subnets                     |
| 10  | `{393B5EBC-AB41-4387-8F31-8077DB917336}` | Aggregates                  |
| 11  | `{79F60A94-44BD-4C55-891A-77823D59161B}` | Dir Mac                     |
| 12  | `{4B09BD22-3B99-40FC-8215-94A430EA0A35}` | Mac                         |
| 13  | `{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}` | Apps                        |
| 14  | `{8AC478BC-8891-0009-5F31-80774B010086}` | Interfaces                  |
| 15  | `{9F5AD3A9-C74D-46D8-A8A8-DCDD773730BA}` | LinkLayerStats              |
| 16  | `{E89BCD56-30AD-40F5-B1C8-8B7683F440BD}` | NetworkLayerStats           |
| 17  | `{A8776788-B8E3-4108-AD24-0E3927D9364B}` | VSAT                        |
| 18  | `{0EC72E9E-3AD2-43FD-8173-74693EEA08D0}` | VLANStats                   |
| 19  | `{6CD742B1-C1CA-4708-BE78-0FCA2EB01A86}` | HostsIPv6                   |
| 20  | `{D2AAD7C6-E129-4366-A2AD-A8CB9AA4C2F4}` | HTTP Hosts                  |
| 21  | `{C0C9757F-2005-4CC5-BB96-D72F607E6188}` | HTTP Content Types          |
| 22  | `{2314BB8E-2BCC-4B86-8AA2-677E5554C0FE}` | FlowGens                    |
| 23  | `{C0B04CA7-95FA-44EF-8475-3835F3314761}` | FlowIntfs                   |
| 24  | `{A0FA9464-B496-4A20-A9AB-4D2D09AFF902}` | Alert Signatures            |
| 25  | `{20BC4345-37F0-44D0-ABFF-3BED97363CB1}` | Alert Classes               |
| 26  | `{664D68BF-5544-43CE-A895-50F2E179EA5A}` | Remote Office               |
| 27  | `{3A597F63-29C0-44AF-A7EF-641897D68693}` | Organization                |
| 28  | `{6255BD85-2DCB-49E7-AF1F-1267AAF4DCA1}` | Blacklist                   |
| 29  | `{4D88CC23-2883-4DEA-A313-A23B60FE8BDA}` | Meta Counter Group          |
| 30  | `{594606BD-EEB2-4E0B-BAC4-84B7057088C8}` | Meta Session Group          |
| 31  | `{9EFAFDD0-6CBB-4C04-8B13-2C8E0A9D3F85}` | Alert Priorities            |
| 32  | `{432D7552-0363-4640-9CC5-23E4CA8410EA}` | TLS Organizations           |
| 33  | `{5B64A573-623F-4F5B-8865-78C62BF466A7}` | TLS Cipher Suites           |
| 34  | `{15856A98-7F87-46D7-84D2-18DD549F8A6F}` | TLS Certificate Authorities |

## Session groups

Flow like artifacts.

| s   | guid                                     | name                                          |
| --- | ---------------------------------------- | --------------------------------------------- |
| 1   | `{99A78737-4B41-4387-8F31-8077DB917336}` | IP Flows. Eg TCP/UDP/ICMP/GRE and other flows |

## Alert Groups

If you are writing a LUA script and want to generate an alert without
having to create your own alert group - just use the *User Alerts*
group.

| guid                                     | name                                           |
| ---------------------------------------- | ---------------------------------------------- |
| `{9AFD8C08-07EB-47E0-BF05-28B4A7AE8DC9}` | IDS Alerts from Snort/Suricata via Unix Socket |
| `{5E97C3A3-41DB-4E34-92C3-87C904FAB83E}` | Blacklist alerts from Trisul Badfellas plugin  |
| `{03AC6B72-FDB7-44C0-9B8C-7A1975C1C5BA}` | Threshold Crossing Alerts                      |
| `{18CE5961-38FF-4AEA-BAF8-2019F3A09063}` | Flow Tracker Alerts                            |
| `{B5F1DECB-51D5-4395-B71B-6FA730B772D9}` | General purpose User Alerts                    |

## Resource Groups

Similar to the concept of “Logs” in other systems.

| s   | guid                                     | name             |
| --- | ---------------------------------------- | ---------------- |
| 1   | `{D1E27FF0-6D66-4E57-BB91-99F76BB2143E}` | DNS Resources    |
| 2   | `{4EF9DEB9-4332-4867-A667-6A30C5900E9E}` | URL Resources    |
| 3   | `{5AEE3F0B-9304-44BE-BBD0-0467052CF468}` | SSL Certificates |

## FTS groups

FTS groups are full text search documents in parseable form.

| s   | guid                                     | name                          |
| --- | ---------------------------------------- | ----------------------------- |
| 1   | `{9FEB8ADE-ADBB-49AD-BC68-C6A02F389C71}` | SSL Certificate FTS           |
| 2   | `{28217924-E7A5-4523-993C-44B52758D5A8}` | HTTP Header FTS               |
| 2   | `{09B305DF-078C-4B9E-8E2F-EA64B7326880}` | Full text dump of DNS records |

## Protocols

You need these GUIDs when writing LUA protocol handler scripts.

| name     | guid                                     |
| -------- | ---------------------------------------- |
| Ethernet | `{974FB098-DE46-45db-94DA-8D64A3BBCDE5}` |
| IPv4     | `{0A2C724B-5B9F-4ba6-9C97-B05080558574}` |
| IPv6     | `{85C0CCED-DA8D-4029-924A-A6AB87F62EF8}` |
| ICMP     | `{7DDD65F2-A316-43b5-A103-368E700E045E}` |
| UDP      | `{14D7AB53-CC51-47e9-8814-9C06AAE60189}` |
| TCP      | `{77E462AB-2E42-42ec-9A58-C1A6821D6B31}` |
