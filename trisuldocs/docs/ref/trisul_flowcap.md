# trisul\_flowcap : Prune PCAP files by capping flow payloads

Using this tool you can reduce size of Trisul PCAPs by capping how many
bytes of each flow is stored. Almost all of the valuable intelligence is
in the first 1MB or so of each flow, so this is an effective technique
to dramatically reduce the size of PCAP files.

In Trisul, PCAP policies can be specified

- During live capture  
  at capture time you can control PCAP policies see [controlling
  packet storage](/docs/ug/caps/packetstorage.html)
- Post capture  
  trisul\_flowcap can be used to prune these already collected files.
  Lets you create custom policies such as. Prune 10MB/flow for 1
  month, then reduce to 100K/flow.

## Unique features

Some of the unique features of trisul\_flowcap are *Sampling, Rich
ouput, Dry run*

### Sampling

A hard cutoff destroys the statistical information convyed in a PCAP
file. You cannot process the compressed capture file through a program
to find how many bytes the flow actually transferred. Sampling helps
here.

Using the `--capbytes-1000000 --samplerate=100` you instruct the program
to Write the first 1MB of each flow, then for payloads after 1MB sample
at 1:100 one every 100 packets, then adjust the **WireLength** to save
the bytes that were skipped.

### Rich output

After processing is complete trisul\_flowcap prints a rich performance
summary.

Here is a sample output

```language-bash
DOCKER:unplprotectli:root oper$ trisul_flowcap -c /usr/local/etc/trisul-probe/domain0/probe0/context0/trisulProbeConfig.xml  --capbytes=1000000 --samplerate=100 -i RCF_triscap.wseXmJ -o RCF_triscap.wseXmJ.flowcapped
Progress       : ||||||||||||||||||||  100%
In Bytes       : 998931121 (952.65 MB)
Out Bytes      : 313149410 (298.64 MB)
Compression %  : 68.6516 % 
Flows          : 18072
Flows capped   : 85
Flows capped % : 0.470341 % 
Method         : sampled if over flow over 1000000 bytes
Input          : RCF_triscap.wseXmJ
Output in      : RCF_triscap.wseXmJ.flowcapped
Elapsed time   : 18 seconds

DOCKER:unplprotectli:root oper$ 
```

#### Interpreting the output

The output says you have compressed the Trisul PCAP file by 68.6% , more
than 1/3rd while only impacting 0.47% of the flows. 99.53% of the flows
are left AS-IS.

### Dry Run

It could be quite difficult to judge what is the optimum capture bytes.
The `--dryrun` option prints the statistice without actually pruning the
input file.

## man page

Type `man trisul_flowcap` in the probe nodes to view the man page. The
man page is reproduced below for reference.

```
NAME
trisul_flowcap – reduce size of packet capture files by using a flow cutoff
method

SYNOPSIS
trisul_flowcap [−OPTIONS ] [−i Input PCAP] [−o Output PCAP]

DESCRIPTION
trisul_flowcap is a tool to reduce the size of packet capture files. Trisul (RCF_) and PCAP file formats are supported. It can also be used to convert from Trisul to PCAP format and vice
versa.

trisul_flowcap takes advantage of the fact is that in network traffic an overwhelming percentage of traffic is carried by a small number of large flows called ’elephant flows’. This tool uses a flow cutoff method to only store the first X bytes of a flow.

A nice real world use case is a sliding resolution. Full content can be stored for 1 Week, then the first 10MB of each flow for upto 1 Month, then the first 50K for upto 3 months.

OPTIONS
−c,
−−config-file=FILENAME

The Trisul config file (see FILES). This tool needs a trisul installation because
it requires the trisul packet dissection engine to locate the IP/TCP/UDP layers up from the link layers.

−i,
−−infile=FILENAME

The input packet capture file. It can be a Trisul packet file usually named RCF_ or a PCAP
file

−I,
−−informat=trisul|pcap

The input file format. Should
be pcap or trisul Default is :
trisul

−o,
−−outfile=FILENAME

The output file. This is optional when the —dryrun option is used. Note: The output file in Trisul format cannot be located on a tmpfs partition. You will get an error. This is due to the fact that the Trisul output uses a high throughput DIRECT write method that is not supported on a tmpfs partition.

−O,
−−outformat=trisul|pcap

The output format. Should be pcap or trisul Default is : trisul

−n,
−−capbytes=BYTES

Maximum number of raw bytes to
keep for each flow.

−w,
−−hiwater=NUMBER

The maximum number of flows to keep track of before using a LRU algorithm to evict flows. This option can be used to control memory usage. Default is1000 flows.

−s,
−−samplerate=NUMBER

Instead of completely truncating flows that cross the cutoff volume, you can specify a sample rate . With a sample rate you can save 1 every s packets for flows that cross the cutoff volume. The wirelen of the sampled packets written to the output are multiplied by the sample rate to preserve statistical and flow continuity in the output file. Default : 0 (no sampling is used)

−d,
−−dryrun

Use this option to do a dry run to check the compression performance of this tool without writing an output file.

−−hide-progress

Dont show the progress bar. Use this when running this tool in a cron job or in the background

−q,
−−quiet

No output.

−h,
−−help

Print a help message

EXAMPLES
To compress a
Trisul format capture file RCF_triscap.P7T8Lw with a flow
cutoff of 1MB

trisul_flowcap
\
-c
/usr/local/etc/trisul-probe/domain0/context0/probe0/trisulProbeConfig.xml
\
-i RCF_triscap.P7T8Lw \
-o /home/bob/RCF_triscap.P7T8Lw.cut -n 1000000

To compress a
PCAP file Bigcapture.pcap into Bigcapture.pcap.cut with a
flow cutoff of 1MB

trisul_flowcap
\
-c
/usr/local/etc/trisul-probe/domain0/context0/probe0/trisulProbeConfig.xml
\
-i Bigcapture.pcap -I pcap \
-o Bigcapture.pcap.cut -O pcap -n 1000000

To
RCF_triscap.P7T8Lw with a flow cutoff of 1MB and a sampling
of 1:10 after that

trisul_flowcap
\
-c ….trisulProbeConfig.xml \
-i RCF.triscap.P7T8Lw \
-o /home/bob/RCF_triscap.P7T8Lw.cut -n 1000000 -s 10

FILES
trisulProbeConfig.xml

The Trisul probe configuration file. This is typically located in /usr/local/etc/trisul-probe under subdirectory domain0/probe0/context0. This file is requires because trisul_flowcap needs to use the probe protocol dissectors to locate the IP and IPv6 headers.

AUTHORS
```