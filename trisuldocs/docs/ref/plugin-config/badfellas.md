---
sidebar_position: 13
---

# BadFellas Plugin

The Badfellas plugin checks your network traffic against millions of indicators to detect malicious activity.

![Badfellas malware tracker screenshot](./images/Badfellas.png)

*Figure: Blacklist Alerts*

The following objects in your network traffic are scrutinized.

**IP address**

Matches IPs against blacklisted IPs

**Domain**

Matches blacklisted domain names, even if no response was received, or hidden in DNSrecords

**HTTPHost**

Checks if a HTTPhost is blacklisted. Priceless when flagging shared hosts like badun.blogspot.com

**SSLHost**

The Server Name Indicator (SNI) is inspected  

**URL**
Checks HTTP GETs/POSTs of your network against well known evil ones

**SSLCertificate**

Checks SHA1 fingerprint

## Feeds

Feeds are sources of threat intelligence from which Trisul downloads updated threat indicators. Upon installation of badfellas plugin a “Feed” is automatically added to the Trisul-Hub node. The hub node then downloads the updates as per rules and pushes them to the probes.

The feed directory is located on the Trisul-Hub node at  

```bash
 cd /usr/local/var/lib/trisul-config/domain0/allcontexts/feeds
```

Inside this directory you can see `feed_xx` sub-directories representing plugins requesting feed updates. For example : GeoIP updates. The Badfellas feed is located in the subdirectory  

```bash
cd feed-2F3CCCA3-38D4-4773-97AB-3ED732F82533
```


Inside the feed directory , there is a file called `rules.xml` This contains the feed configuration.

### Removing a Feed

Locate the `rules.xml` file as described above. Then remove the feeds you want to disable. For example if you wish to disable the ALIENVAULT feed.

Remove the following lines

```xml
<Source>
    <URL>http://reputation.alienvault.com/reputation.generic.gz</URL>
    <Target>reputation.generic.gz</Target>
</Source>
```

The feed will be skipped at the next download. See `Frequency` parameter in the rules.xml file.

## Included Blacklist Feeds

The Badfellas package installs stub copies of the following blacklists. These feeds are updated to the latest versions at the next scheduled update time. Within 24 hrs.

| Name                     | Type   |
| ------------------------ | -------------- |
| DNS blackhole list       | [malwaredomains.lehigh.edu](http://sbc.io/hosts/hosts)<br/>List keeps track of domains known to propagate malware and spyware                             |   
| Malicious/scanner IPs    | [Dshield.org](https://www.dshield.org/)<br/>The well known DSHIELD list                                                                                   |        
| IP Blocklist             | [feodotracker.abuse.ch](https://feodotracker.abuse.ch/blocklist/)<br/>Contains IP addresses (IPv4) used as C&C communication channel by the Feodo Trojan. |        
| Malware domain + URLs    | [Malware Domain List](http://www.malwaredomainlist.com/)<br/>Domains hosting latest malware                                                           |        |
| Anti phishing            | [Phish Tank](https://www.phishtank.com/)<br/>User submitted known phishing domains                                                                        |       
| Domains                  | Contains top domains list                                                                                                                             |       
| Domains                  | [Ransomware Domain Blocklist](https://ransomwaretracker.abuse.ch/blocklist/)<br/>Show list of ransomware domain                                           |       
| IPs                      | [Ransomware Domain IPs](https://ransomwaretracker.abuse.ch/blocklist/)<br/>Show list of ransomware IPs                                                    |       
| URLs                     | [Ransomware Domain URLs](https://ransomwaretracker.abuse.ch/blocklist/)<br/>Show list of ransomware urls                                                  |       
| SSL Blacklist            | [SSLBlacklist](https://sslbl.abuse.ch/)<br/>Contains list of bad SSL certificates                                                                        |       
| Domains                  | Contains top 1 million domains list                                                                                                                   |       
| TOR nodes                | [TORnodes](https://www.dan.me.uk/torlist/?full)<br/>Checks if any of your network hosts are involved inTORproxy activitiy                              |       
| AlienVault IP Reputation | Flags IPs with poor reputation. This list includes scanners and other mischief                                                                        |       
| SSL Blacklist            | Hashes of malicious SSL certificates sourced from sslbl.abuse.ch    |       

## Feed Updates

The plugin will automatically download a fresh database at a set schedule. You can control when and how frequently this database is updated by modifying the `Frequency` parameter in the rules.xml file. The default setting is 1 update every day. All feeds are updated at the same frequency.

```bash
<Run>
    <RunAt>0200</RunAt>
    <Frequency>86400</Frequency>
</Run>
```

### Viewing Status of Feed Updates

To view the status of feed updates, whether the downloads were successful or not.

:::info navigation

:point_right: Login as `admin`, then select Webadmin &rarr; Manage &rarr;  Plugin Data Updates

:::

This shows the feed status.

## Installation

This plugin is distributed as a RPM/DEB package.

```bash
# on centos
rpm -Uvh trisul_badfellas-1.0.153-0.el5.x86_64.rpm
# on ubuntu
dpkg -i trisul_badfellas-1.0.153.amd64.deb
```

##### Upgrading

Simply uninstall the old package and reinstall the new package.

#### A Sample Install

When you install you should get an output like the following.

```bash
[root@localhost share]# rpm -Uvh trisul_badfellas-1.0.153-0.el5.x86_64.rpm
Preparing...                ########################################### [100%]
   1:trisul_badfellas       ########################################### [100%]
Creating temp staging area..
Creating consolidated Bad Fellas Tokyo Cab ..
Processing File /tmp/temp_trisul_badfellas_staging/usr/local/share/BadFellas/dns-blackhole.txt..25270 entries
Processing File /tmp/temp_trisul_badfellas_staging/usr/local/share/BadFellas/malware-domain-list.txt.......134498 entries
[root@localhost share]#
```

### Uninstallation

Stop Trisul and uninstall the RPM/DEB

```bash
# centos
rpm -e trisul_badfellas
# ubuntu
dpkg -r  trisul_badfellas
```

### Starting

Once installed, the plugin will be effective the next time you restart Trisul.

## Adding Custom Indicators

#### Step 1 : Create Tab Separated Indicator file

Using external mechanism place your custom feed in a Tab Separated file with the following format `<FEEDNAME><TAB><IP/DOMAIN/URL><TAB><DESCRIPTION>`

#### Step 2 : Add your File as a Source Feed for Badfellas Automatic Updates

Locate the feed `rules.xml` file [as described in feeds](#feeds)

Find the local feed section

```xml
<!-- ***************************************************************** -->
<!--    Local feed                                                     -->
<!--     Any file named badfellas-local-*.tsv  will be processed       -->
<!--     The file is a TAB separated file with the following fields    -->
<!--     INTELSOURCE<TAB>KEY<TAB><DESCRIPTION>                         -->
<!--     KEY = IP Address, Domain Name, URL                            -->
<!-- ***************************************************************** -->
<Source>
    <URL>file:///usr/local/share/trisul/plugins/badfellas-local.tsv</URL>
    <Target>badfellas-local-0.tsv</Target>
</Source>
```

In the above snippet – the URL `file://.... badfellas-local.tsv` represents the source feed. Change it to your file or URL if you are hosting it on a website. The feed will be automatically refreshed like the other sources.

> **Restart Trisul or wait for about 30 minutes for the feed to be picked up**

## Configuration Parameters

The rules.xml allows you to customize

**ReloadListSeconds**

How frequently Trisul server reloads the threat intel information. This is separate from the per-feed download Frequency

**CheckICMP**

Scan ICMP traffic like PINGs for connection attempts

**CheckDNS**

Parse DNS records

**CheckHTTPHost**

Check HTTP Host header in addition to DNS

**CheckTCPFlows**

Check each flow

**CheckURL**

Check all URLs seen

**FatTailRank**

In the URL Top-1 million lists URLs below this as considered as Fat Tail

Locate the [rules.xml file](/docs/ag/install/badfellas)

```xml
<TrisulPluginConfiguration>
        <description>Controls how the Trisul Badfellas plugin works </description>
        <ReloadListSeconds>900</ReloadListSeconds>
        <CheckICMP>TRUE</CheckICMP>
        <CheckDNS>TRUE</CheckDNS>
        <CheckHTTPHost>TRUE</CheckHTTPHost>
        <CheckTCPFlows>TRUE</CheckTCPFlows>
        <CheckURLs>TRUE</CheckURLs>
```

## Also Read

See the [Badfellas Malware alerts section](/docs/ug/alerts/mw) in the User Guide
