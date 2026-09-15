# Hosts Configuration files

Controls how hosts are metered. You need to tweak this only when working with very high speed networks and you want maximum throughput per core at the expense of some metrics.

## File Location 
`
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-01010101-125E-48D0-8AC9-A7E3AD2F60FD.xml
`

``` bash 
<TrisulPluginConfiguration>
    <Policy>
        <description>Controls host counting HOST</description>
        <SampleRate>1</SampleRate>
        <ExtraCountersSampleRate>1</ExtraCountersSampleRate>
        <ExternalIPOnly>false</ExternalIPOnly>
        <ShortUpdates>false</ShortUpdates>
    </Policy>
</TrisulPluginConfiguration>
```

### Policy

| Parameters              | Defaults | Description    |
| ------------------------| -------- | -------------- |
| description             |          |                |
| SampleRate              | 1        | packet sampling rate. Default, every packet.  |
| ExtraCountersSampleRate | 1        |                |
| ExternalIPOnly          | false    | only meter external IPs. IPs that are not in your HOME\_NETWORK   |
| ShortUpdates            | false    | limited host updates - do not measure TotalBandwidth, IntoHomeNetwork, OutofHomeNetwork.         |          |                |


