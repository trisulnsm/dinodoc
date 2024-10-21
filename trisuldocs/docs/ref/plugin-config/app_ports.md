# APP Ports

## File Location
`
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-9999CCCC-125E-48D0-8AC9-A7E3AD2F60FD.xml
`

```bash
<TrisulPluginConfiguration>
    <Policy>
        <description>Server ports for specific hosts </description>
        <SampleRate>1</SampleRate>
        <ShortUpdates>false</ShortUpdates>
        <AppPolicyItem>
                <ServerPorts></ServerPorts>
                                <Subnets></Subnets>
        </AppPolicyItem>
    </Policy>
</TrisulPluginConfiguration>
~                                 
```


| Parameters   | Defaults | Description                                     |
| ------------ | -------- | ----------------------------------------------- |
| SampleRate   | 1        | Only process every X packet.                                                          |
| ShortUpdates | false    | Set to true to skip some metrics. If true - skips tracking home network based meters. |


### AppPolicyItem

By default, the app ports are selected using the following formula. If
TCP, the client port is the side with the initial SYN packet. Otherwise
if the protocol is UDP, or if the SYN packet is missed, the lower port
is treated as the server port. This section allows you to specify exact
rules.