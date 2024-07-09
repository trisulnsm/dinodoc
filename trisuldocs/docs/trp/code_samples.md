# TRP Code Samples

## Tutorial samples

Have you first read the [step-by-step tutorial](trpgemsteps.html)



If you have, then you know  
\* how to set up a TRP environment  
\* how to securely connect to a Trisul instance  
\* exchange a basic message

## Samples in Ruby

All these samples are written in Ruby, and use the
[trisulrp](//rubygems.org/gems/trisulrp) gem. These scripts can be
easily adapted to other languages like Python or Java.

<div class="success github autohint">

We have a new Github repo called
[trisul-samples](https://github.com/trisulnsm/trisul-scripts) containing
all our scripts.

</div>

| Name                                      | Description                                                                                                                                                          |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [flows_for_ip](./samples/flows_for_ip)    | Print top 100 flows for an IP or host during the past 6 hours.This script contains detailed line by line comments, so start here                                     |
| [grep_flows](samples/grep_flows.html)     | Print a maximum of 100 flows which contain a payload matching a specified pattern                                                                                    |
| [pcap_simple](samples/pcap_simple.html)   | Retrieve all SMTP and DNS packets over the last 1 hour. This sample demonstrates the use of a [Trisul Filter Format](/docs/ref/trisul_filter_format.html) expression |
| [cginfo](samples/cginfo.html)             | Print information about all available counter groups                                                                                                                 |
| [sessions](samples/tophttpflows.html)     | Print top 100 flows by volume seen in an arbitrary time interval                                                                                                     |
| [alerts_query](samples/alerts_query.html) | Print 100 alerts in last 6 hours of Priority 1, 2, 3                                                                                                                 |

## Links

You will need to refer to the following material

\# The [TRP Messages and Fields documentation](/docs/ref/trpproto.html)
