# MAC

Controls how MAC addresses are metered.

## File Location
~~~text
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-ABBBBBCC-125E-48D0-8AC9-A7E3AD2F60FD.xml
~~~

```xml
<TrisulPluginConfiguration>
    <Policy>
        <description>Controls MAC  counting</description>
        <SampleRate>1</SampleRate>
        <MeterMACPairs>true</MeterMACPairs>
        <MeterBroadcast>true</MeterBroadcast>
        <LookupOUI>true</LookupOUI>
    </Policy>
</TrisulPluginConfiguration>

```
### Policy

| Parameters     | Defaults | Description                                |
| -------------- | -------- | ------------------------------------------ |
| Description    | Controls MAC  counting  |                             |
| SampleRate     | 1        | Process only 1 in X packets                |
| MeterMACPairs  | true     | Meter MAC pairs every single Source-\>Dest |
| MeterBroadcast | true     | Meter broadcast addresses                   |
| LookupOUI      | true     | Labels each MAC key with the vendor name from its OUI (first 3 bytes), and multicast MACs with their multicast name. |