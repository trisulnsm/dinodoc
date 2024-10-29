# TCP Flows

How TCP Sessions are metered.

## File Location
`/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-88384B31-883A-8383-1278-0F3A11CEEE90.xml
`

``` bash
<TrisulPluginConfiguration>
    <Policy>
        <description>Controls TCP Session Metering </description>
        <SubnetOnly>0.0.0.0/0</SubnetOnly>
        <ShortUpdates>false</ShortUpdates>
    </Policy>
</TrisulPluginConfiguration>

```

### Policy

| Parameters   | Defaults  | Description                                                       |
| ------------ | --------- | ----------------------------------------------------------------- |
| Description  | Controls TCP Session Metering |                                               |
| SubnetOnly   | 0.0.0.0/0 | Only count flows in this subnet.                                  |
| ShortUpdates | false     | Only count payloads \> 200 bytes and dont measure payload counts. |