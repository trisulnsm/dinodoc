# Import PCAP with IDS

Runs a PCAP dump and indexes Trisul’s statistics, flow, and packet data
with IDS alerts.

## Two pass analysis

The tool included in the trisul-probe package called `importpcap_ids` is
used to import a PCAP dump. The tool essentially orchestrates a 2-pass
analysis over the PCAP dump. It looks like the following.

1. **First pass** — Trisul runs over the PCAP files and builds
   statistics, flows, traffic, packets, and all the other analytics.

<!-- -->

1. **Second pass** — Snort/Suricata run over the PCAP files, sends
   alerts to Trisul via a Unix Socket, and Trisul integrates the alerts
   with the statistics computed in the first pass.

## trisulctl_probe importpcap_ids

:::note **Snort or Suricata install**  
To proceed further you need to have Snort or Suricata installed on the
probe node with all the rules that you want to use.

:::

Logon to the Trisul-Probe node where you have the PCAP dumps and run the
following command.

```language-bash
trisulctl_probe importpcap_ids /home/trisul/dumps/MassivePacket.pcap context=mass1
```

This command does the following

- if a context called *mass1* does not exist; creates it
- if *mass1* exists, it cleans it (ask you permission first)
- runs the PCAP through trisulctl_probe and into the context *mass1*
- runs the IDS over the same PCAPs and sends alert to Trisul
- to view results ; logon to Web Trisul and in the login screen select
  *mass1*

Some additional limitations of the IDS tools :

1. you need to put all PCAP files in one directory
2. the PCAP files need to be named in “time order”
3. the files cannot be .gz or .bz2, you need to uncompress them.
