# TCP based metering

How TCP is metered.

# File Location
`
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-923740FF-125E-48D0-8AC9-A7E3AD2F60FD.xml
`

``` bash
<TrisulPluginConfiguration>
    <Policy>
        <description>TCP  Protocol Handler</description>
        <EnableAccessPoints>true</EnableAccessPoints>
    </Policy>
</TrisulPluginConfiguration>
```

### Policy 

| Parameters         | Defaults              | Description        |
| ------------------ | ----------------------| ------------------ |
| Description        | TCP  Protocol Handler |        |
| EnableAccessPoints | true     | Allows a dynamic mapping for port based higher level protocol. Disable for very high speed network on limited hardware. |