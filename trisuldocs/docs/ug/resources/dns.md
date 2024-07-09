# DNS Resources

Trisul extracts domain names from DNS Question and Answer records on the
network. Even hosts that do not receive a reply or those in the
‘additional records’ section are pulled out.

<div class="image-with-caption">

![](images/dns_resources.png)  
DNS Resources

</div>

## Searching

<div class="info hand-o-right autohint">

Click on Resources -\> DNS Resources

</div>

1.  Open the Search Criteria box by clicking on “Show”
2.  Tabs “Search by endpoints” or “Search by regex”

### Search by endpoints

You can search by

1.  IP
2.  Exclude these IPS
3.  Pair of IPs
4.  Port
5.  Timeframe
6.  Regex Pattern
7.  Invert Regex Pattren

### Search by regex

You can search by a single regular expression or bulk substring
matching.

#### A single perl compatible regex

Enter a single regex in the Pattern box. It must be on a single line.

For example `v16.cache?.*youtube.com$` will match
`tc.v16.cache8.c.youtube.com` but not `v16.cache18.c.youtube.com`

#### Multiple patterns for substring matches

Enter a list of patterns one per line.

Use this if you want to search for hundreds of domains at once. This is
a substring match so you cannot use any regexes.

## Search results

Matching resources are shown in a table.

Click on “Options” for further options.

1.  Related flow(s) - find TCP/UDP flow that transferred the resource
2.  Details - Resource details in a single page
3.  Show Headers - PCAP headers in text and hexdump (first 50K bytes)
4.  Download PCAP - PCAP containing the flow(s) that transferred the
    resource
5.  Add to briefcase - Add to PCAP briefcase for later download

<div class="info hand-o-right autohint">

Click on “Download PCAP” button to get a PCAP file with all resources
shown in table

</div>
