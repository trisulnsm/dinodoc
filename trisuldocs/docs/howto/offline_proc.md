# Offline processing of packet captures

Trisul excels in analyzing large packet capture (PCAP) dumps. The
results of the analysis will be presented in the same web interface as
if the traffic was captured from a live interface.

This section introduces the feature and points you to various resources
for step-by-step instructions.

## Use contexts to separate datasets

A context is a separate instance of Trisul. Typically when you import a
PCAP dump you want to create a new context that lives independently of
the others. After analysis of the PCAP dump you can delete the context
to free up the space.

For more on contexts : see [Contexts and Domain
concepts](/docs/ag/domain#contexts)

The tools we use to import PCAP dumps support working with contexts.

## Step by step Import PCAPS

Read the document [Importing PCAP Dumps](/docs/ug/caps/pcap_import)
for step by step instructions.

If you want to import a PCAP dump and also enrich and integrate IDS
(Intrusion Detection System) data from Snort/Suricata read [Import PCAP
with IDS](/docs/ug/basicusage/snort)
