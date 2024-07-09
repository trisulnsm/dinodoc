# Input filter

Custom data acquisition for driving the Trisul pipelines.

1. read packet data from non PCAP sources
2. process “flow like” data from arbitrary formats
3. plug into custom alert platforms

### Running these type of scripts

Unlike other LUA scripts the `input_filter` script needs to be run on the command line because it drives the Trisul-Probe.

```lua
trisul -demon /usr/local/etc/trisul-probe/domain0/probe0/context0/trisulProbeConfig.xml \
   -mode lua   \ 
     -in /home/kev/my-input-filter.lua   \
       -args hello-argument
```

## Structure

### Arguments in T.args

All input filter scripts can access the global variable `T.args` this is the parameter that is passed using `.. -args args123` while running the Trisul Probe executable.

```lua
inputfilter = {

  step = function(packet, engine )
    ... 
    -- get next packet or batch of packets 
  end,

  step_alert  = function()
    ...
    -- get next alert or batch of alerts 
  end,

}
```

| name                | description                                |
| ------------------- | ------------------------------------------ |
| function step       | called when trisul ready for new packet(s) |
| function step_alert | called when trisul ready for new alert(s)  |

## LUA functions reference

The *step* functions are called by Trisul framework at the appropriate time.

## Function step

### Purpose

Process a packet.

### When called

Process a packet or a batch of packets. You can do two things.

1. construct a real packet and use “set_packet” on the supplied “Packet” parameter
2. just call methods on the “Engine” object supplied

### Parameters

| newpacket | An Packet object | if you wish to construct a new packet, use the `set_packet` method to set the packet bytes |
| --------- | ---------------- | ------------------------------------------------------------------------------------------ |
| engine    | An Engine object | use this object to add metrics, resources, or alerts into the Trisul framework             |

### Return value

Return `true` if you want to be called again  
Return `false` if you have EOF.

### Example

## Function step_alert

Read a new alert object.

### Purpose

This method is repeatedly called – if you have a new alert object from your input framework return that object.

### When called

When Trisul checks to see if you have a new alert.

### Parameters

No parameters

### Return value – alert

The Trisul framework will call `step_alert` at appropriate times making sure it wont starve any of the sources.

When the `step_alert` is called – you need to return

1. **nil** – if you dont have any alert to process.
2. **the following table** – if you do have an alert.

:::info[NO BLOCK]

Do not block in the step_alert function. This means you cant wait on some socket connection on an alert. Use Non Blocking socket or file reads.

If you have an alert, return this table with the following fields

| field              | type        | mandatory/optional  | description                                                                                                                                                          |
| ------------------ | ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AlertGroupGUID** | guid string | **mandatory field** | A GUID that specifies the type of alert                                                                                                                              |
| **TimestampSecs**  | numeric     | **mandatory field** | epoch secs                                                                                                                                                           |
| TimestampUsecs     | numeric     | default 0           | epoch usecs                                                                                                                                                          |
| **SigIDKey**       | string      | **mandatory field** | SignatureID or someother type of key that uniquely identifies the type of alert                                                                                      |
| SigIDKeyLabel      | string      | mandatory field     | A user label or description for the SigIDKey. This is placed in Trisul framework as a UserLabel for the Key for display purposes.                                    |
| SensorID           | numeric     | default 0           | Which sensor                                                                                                                                                         |
| ProtocolFamily     | numeric     | default 0           | Protocol family 0 = IPv4 or 1=IPv6 – we dont actually use this to interpret the SourceIP and DestIP fields, just pass it onto the storage for correlation with snort |
| SourceIP           | string      | default “0.0.0.0”   | The IPv4 or IPv6 address. Hostnames are not allowed                                                                                                                  |
| SourcePort         | string      | default “0”         | port number or any string identifying non TCP/UDP transport eg. `igmp` or `icmp01` to denote ICMP message type 1                                                     |
| DestIP             | string      | default “0.0.0.0”   | IPv4 or v6 address string                                                                                                                                            |
| DestPort           | string      | default “0”         | See Source Port                                                                                                                                                      |
| Protocol           | numeric     | default 0           | IP Protocol number. “6” for TCP, “17” for UDP etc                                                                                                                    |
| SigGenerator       | numeric     | default 0           | snort SigGenerator, we dont process just send it to backend storage for correlation with SIEM                                                                        |
| SigRev             | numeric     | default 0           | Signature revision                                                                                                                                                   |
| ClassificationKey  | string      | default “c-xx”      | The type of classification. CID in Snort parlance                                                                                                                    |
| Priority           | numeric     | default 1           | Alert Priority (1 = Crit, 2=Maj, 3=Minor)                                                                                                                            |
| EventID            | numeric     | default 0           | Snort compatiable used for correlation only                                                                                                                          |
| AcknowledgeFlag    | numeric     | default 0           | 0=Unacknowledged Alert, 1=Acknowledged                                                                                                                               |
| AlertDetails       | string      | default ""          | Any extra text you want to append to the alert (searchable via Trisul)                                                                                               |
| AlertStatus        | string      | default “ALARM”     | ALARM or CLEAR. Actually you can set it to any string that is meaningful to your particular alert group                                                              |

#### Usage
