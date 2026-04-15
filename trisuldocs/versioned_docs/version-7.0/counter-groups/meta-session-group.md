# Meta Session Group

Contains metrics related to flow activity in the network. 


## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{594606BD-EEB2-4E0B-BAC4-84B7057088C8}` | Native | 60                | 300                  |



## Key Format 

TCP/IP Sessions with Key `{99A78737-4B41-4387-8F31-8077DB917336}` This represents all IP based flows including UDP,GRE,ICMP and so on. 

## Meter list

:::tip Resolution 
These meters are update every BucketSize milliseconds. By default 60,000 or 1 minute. 
:::


| ID  | DESCRIPTION   | TOP COUNT | BOTTOM COUNT | TYPE       | UNITS |
| --- | ------------- | --------- | ------------ | ---------- | ----- |
| 0   | Master Size   | 0         | 0            | VT_COUNTER | i     |
| 1   | MRU Size      | 0         | 0            | VT_COUNTER | i     |
| 2   | New           | 0         | 0            | VT_COUNTER | i     |
| 3   | Closed        | 0         | 0            | VT_COUNTER | i     |
| 4   | Expired       | 0         | 0            | VT_COUNTER | i     |
| 5   | Terminated    | 0         | 0            | VT_COUNTER | i     |
| 6   | Flushed       | 0         | 0            | VT_COUNTER | i     |
| 7   | FlushedActive | 0         | 0            | VT_COUNTER | i     |
| 8   | Key Hits      | 0         | 0            | VT_COUNTER | i     |
| 9   | Heap mem      | 0         | 0            | VT_COUNTER | i     |
| 10  | Tail Prunes   | 0         | 0            | VT_COUNTER | i     |
| 11  | Hi Water Rej  | 0         | 0            | VT_COUNTER | i     |
| 12  | After Term    | 0         | 0            | VT_COUNTER | i     |
| 13  | Flush USecs   | 0         | 0            | VT_COUNTER | i     |


## Master Size

The total size of the flow cache. This represents the total number of active flows at the end of the window. By default the streaming window size is 1 minute. 

## MRU Size
 
Most recently used cache. 

## New

Number of new flows established in the window.

## Closed

Expired + Terminated flows in the window.

## Expired

Flows timed out.  You can adjust this via the "Time out" parameter in  Admin > Manage Session Groups page

## Flushed

Flows flushed to the Hub (Database).

## Flushed Active

Active flows that were flushed to the hub.   You can adjust the "Active Tracking Age Limit" in  Admin > Manage Session Groups page

## Key Hits

Internal metric. Ignore. 

## Heap mem 

Internal metric. Ignore. 

## Tail Prunes

Internal metric. Ignore. 

## Hi water rejects

If operating in Fixed Hi-Water mode. Only N unique flows are accepted in any 1 minute window.  Adjust this via "TrackHiWater" in  Admin > Manage Session Groups page and "FlowMemcapPolicy" in [trisulProbeConfig.xml](/docs/ref/trisulconfig#tuning) file

## After Term 

Internal metric. Ignore.

## Flush Usecs

Microseconds to flush to DB.
