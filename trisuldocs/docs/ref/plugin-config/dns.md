# DNS

How DNS protocol is metered.

# File Location
`/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-CCCBBBB3-125E-48D0-8AC9-A7E3AD2F60FD.xml
`

``` bash
<TrisulPluginConfiguration>
    <Policy>
        <description>Controls how DNS extraction works </description>
        <SampleRate>1</SampleRate>
        <CreateFTSDocument>false</CreateFTSDocument>
        <ExtractResources>true</ExtractResources>
        <MergeCDN>true</MergeCDN>
        <TrackBaseDomains>true</TrackBaseDomains>
        <BloomFilterResetMask>2097151</BloomFilterResetMask>
        <GenerateAlertOnError>true</GenerateAlertOnError>
    </Policy>
</TrisulPluginConfiguration>

```

| Parameters           | Defaults | Description                                                                       |
| -------------------- | -------- | --------------------------------------------------------------------------------- |
| SampleRate           | 1        | Once every X packets                                                              |
| CreateFTSDocument    | true     | Do you want to create a Full Text Search Document.                                |
| ExtractResources     | true     | Extract DNS Resources. Resources can be thought of as Logs                        |
| MergeCDN             | true     | If true, CDN names like akamai.. in answer records map to the original Query name |
| TrackBaseDomains     | true     | Enable base domains feature.                                                      |
| BloomFilterResetMask | 2097151  | 2^21-1 increase this if you have a very large number of DNS responses             |
| GenerateAlertOnError | true     | NXDomain responses will result in a UserAlerts error                              |

