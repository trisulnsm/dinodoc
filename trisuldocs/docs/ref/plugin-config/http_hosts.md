# HTTP Hosts

How HTTP Hosts are metered.

## File Location
`/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-D2AAD7C6-E129-4366-A2AD-A8CB9AA4C2F4.xml
`

``` bash
<TrisulPluginConfiguration>
    <Policy>
        <description>Controls how HTTP Host headers are counted</description>
<!-- ********************************************************* -->
<!-- DomainDepth     for example lax25.sjv.y1.youtube.com      -->
<!-- 0 indicates fulldomain,                                   -->
<!-- 1 com,                                                    -->
<!-- 2 youtube.com,                                            -->
<!-- 3 y1.youtube.com,                                         -->
<!-- ********************************************************* -->
        <DomainDepth>
                        0
        </DomainDepth>
    </Policy>
</TrisulPluginConfiguration>

```


| Parameters  | Defaults | Description                                                 |
| ----------- | -------- | ----------------------------------------------------------- |
| DomainDepth | 0        | See below, you can control how HTTP hostnames are processed |

DomainDepth if you have a HTTP host like `lax25.sjv.y1.youtube.com`

|     |                      |
| --- | -------------------- |
| 0   | indicates fulldomain |
| 1   | com                  |
| 2   | youtube.com          |
| 3   | y1.youtube.com       |
