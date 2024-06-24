# Trisul Executable

The *trisul* executable is located in `/usr/local/bin/`.

The *trisul* executable is the actual probe process. One instance of
trisul will run for every context. You rarely need to run this command
manually, instead

1.  use the web interface menu *Admin \> Start/Stop Tasks \> Start
    Trisul on each probe*
2.  use `trisulctl_probe start context ctxname` command line tool 

## Full Command line

Just type *trisul* to have it tell you the command line options.

pre..  
\[root@li76-90 \~\]\# trisul  
Usage: trisul \[—version|—machineid|—listdev\] | \[-demon|-nodemon\]
/path/to/config/file -mode {runmode} -in ifile -out ofile -args
extra\_args  
{runmode} = select ONE of the following  
\* online\_rxring - Linux RX RING \[default\]  
online\_pfring - Use native PF\_RING API (requires libs)  
online\_libpcap - LIBPCAP  
online\_afpacket - AF\_PACKET with FANOUT flow based load balancing  
online\_napa - Use Napatech API (requires libs)  
offline - read pcap files (also need -in option)  
idsalert - alerts only processing via unix socket  
offlineoverlay - read pcap files overlaying on existing DB  
idsalertoverlay - alerts only overlaying on stats db  
crashpcap - for debugging, gen a pcap file from prev run  
instant - for debugging, gen pkts from /dev/random like device  
lua - a lua input filter drives the pipeline

## Common operations

### Checking version

pre..  
\[demo@li76-90 \~\]$ trisul —version  
6.0.1774

### Getting the machineid

You need to get the machineid in order to upgrade Trisul from the 3-day
window free version to a licensed version.

pre..  
\[root@li76-90 \~\]\# trisul —machineid  
00551AD4-CA00-BE16-3A42-1ACCFD6BF00D

### Listing all available interfaces

pre..  
\[vivek@localhost trisul\]$ trisul —listdev  
\[sudo\] password for vivek:  
—————————————————————————————————————-  
Num Name Description  
—————————————————————————————————————-  
1 eth0 not available  
2 wlan0 not available  
3 usbmon1 USB bus number 1  
4 usbmon2 USB bus number 2  
5 any Pseudo-device that captures on all interfaces  
6 lo not available  
—————————————————————————————————————-

## About run modes

The **run mode** controls what capabilities of Trisul are used while
running.

The run mode is a combination of  
\# Packet Capture : type of capture mechanism  
\# Analytics Overlay : whether analytics are overlaid on top of existing
metrics

#### Specifying the run mode from the web interface

To specify a run mode, go to Admin Tasks \> Start/Stop Tasks then select
run mode from drop down list for each probe

### Modes supported

table(table table-bordered).  
|*.|*\\3=.Available Features in runmode|\_.|  
|*.Runmode|*.Packet acquisition |\_.Parameters |  
|\_.online\_rxring |use RX RING ||  
|\_.online\_libpcap |use LIBPCAP ||  
|\_.online\_afpacket |use AF\_PACKET ||  
|\_.online\_napa |use Napatech API (\*requires libs *see below* ) ||  
|\_.online\_pfring |use native PF\_RING API (\*requires libs *see below*
) ||  
|\_.offline |From capture file/directory| -in capture-file-dir |  
|\_.idsalert |alerts only processing via unix socket||  
|\_.crashpcap |For debugging||  
|\_.instant |For debugging||  
|\_.offlineoverlay |From capture file/directory

<p>

Overlay metrics on to existing data

</p>

| -in capture-file-or-directory |  
|\_.idsalertoverlay|IDS alerts from unix socket

<p>

Overlay metrics on to existing data

</p>

|     |                                  |                                                                       |
| --- | -------------------------------- | --------------------------------------------------------------------- |
|     |                                  |                                                                       |
| lua | a lua script drives the pipeline | \-in lua-importscript.lua -args passed as `T.args` to your LUA script |

**Requires Libs**  
For PF\_RING and other runmodes marked *requires libs* you need to copy
the appropriate libXX.so file into `/usr/local/lib/trisul-probe`. Trisul
only ships with a stub implementation. For example : if you want to use
PF\_RING. Copy the compiled libpfring.so file into
`/usr/local/lib/trisul-probe`. This is due to licensing issues.

## Examples

#### Normal run as a daemon

pre. trisul -demon
/usr/local/etc/trisul-probe/domain0/probe0/context0/trisulProbeConfig.xml
-mode online\_rxring

#### Normal run attached to terminal

pre. trisul -nodemon
/usr/local/etc/trisul-probe/domain0/probe0/context0/trisulProbeConfig.xml
-mode online\_rxring

#### Run trisul over capture files in a directory

All capture files must be in tcpdump (libpcap) format. Trisul supports
both big and little endian pcap files.  
\# PCAP files in directory are automatically processed in order of the
timestamp of the first packet in each file.  
\# capture files can be gzip or bzip2. The prefix must be gz or bzip2 of
bz2.

You can process a single PCAP file, a directory of PCAP files, or even
nested directory trees

pre. trisul -nodemon
/usr/local/etc/trisul-probe/domain0/probe0/context0/trisulProbeConfig.xml
-mode offline -in /home/vivek/mycaps/capdir

#### Run trisul for context named “satellitelinks”

Each [trisul context](/docs/ug/domain/index.html#contexts.html) is
defined by the corresponding trisulConfig `contextname` folder.

    trisul -demon /usr/local/etc/trisul-probe/domain0/probe0/context_satellitelinks/trisulProbeConfig.xml -mode online_libpcap

#### Run trisul only looking at alerts

In this mode Trisul only looks at IDS alerts. The only meters activated
are related to alerts, such as top hosts generating alerts, victim
hosts, etc.

    trisul -demon /usr/local/etc/trisul-probe/domain0/probe0/context0/trisulProbeConfig.xml -mode idsalert

#### Run trisul using a LUA input filter script

If you want your [inputfilter](/docs/lua/inputfilter.html) script at
`/home/kev/read_tcp.lua` to drive the Trisul pipeline use the following

    trisul -demon /usr/local/etc/trisul-probe/domain0/probe0/context0/trisulProbeConfig.xml -mode lua -in /home/kev/read_tcp.lua -args argstolua-script
