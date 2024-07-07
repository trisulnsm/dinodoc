# Importing a PCAP file

How to create a new context by importing PCAP (packet capture) dumps.

## trisulctl_probe importpcap

Logon to the Trisul-Probe node where you have the PCAP dumps and run the
following command.

```language-bash
trisulctl_probe importpcap /home/trisul/dumps/MassivePacket.pcap context=mass1
```

This command does the following

- if a context called *mass1* does not exist; creates it
- if *mass1* exists, it cleans it (ask you permission first)
- runs the PCAP through trisulctl_probe and into the context *mass1*
- to view results ; logon to Web Trisul and in the login screen select
  *mass1*

### More links

- For Step-by-step instructions see [Import PCAP
  dumps](/docs/ug/caps/pcap_import.html)
- To import PCAP with IDS context merged in see [Import PCAP with
  IDS](snort.html)
