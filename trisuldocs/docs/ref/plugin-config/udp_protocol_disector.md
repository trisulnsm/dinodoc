# UDP Protocol dissector

Controls how UDP protocol dissection is done.

## File Location 
`
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-09809283-125E-48D0-8AC9-A7E3AD2F60FD.xml
`

``` bash
<TrisulPluginConfiguration>
    <Policy>
        <description>UDP Protocol Handler</description>
        <EnableAccessPoints>true</EnableAccessPoints>
    </Policy>
</TrisulPluginConfiguration>

```

| Parameters         | Defaults | Description                             |
| ------------------ | -------- | --------------------------------------- |
| EnableAccessPoints | true     | Allows a dynamic mapping for port based higher level protocol. Disable for very high speed network on limited hardware. |