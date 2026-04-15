# Base Domains

Base domains - map domain names used by popular webservices to Application Names.

## File Location
`
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-081336B3-5AF1-4D4F-B850-BA3CAEEB8A2C.xml
`

```bash
<TrisulPluginConfiguration>
    <Policy>
     	<description>Base Domain Rules </description>

		<Rules>
			<Rule> <k> AMAZON AWS                 </k> <x> amazonaws </x> </Rule>
			<Rule> <k> GMAIL                      </k> <x> (mail\.google|gmail|inbox\.google|mail\-ads\.google|
		</Rules>

		<StaticIPRules>
			<Rule>     <k> 31.13.93.3         </k><x>  facebook                                        </x></Rule>   
		</StaticIPRules>

    </Policy>
</TrisulPluginConfiguration>

```

### Specifying rules

- attribute k  
  the key to update the Base Domains counter group
- attribute x  
  the regex in RE2 format that matches
- order of matching  
  the first match is selected

### Policy

| Parameters    | Defaults                    | Description                                                   |
| ------------- | -----------------------------|-------------------------------------------------------------- |
| Rules         | string of regex to app names    | The rules section map domain regexes in Google RE2 format to application names. You can add your own rules to this list and they will be picked up when Trisul-Probe is restarted |
| StaticIPRules | maps static IPs to applications | Most useful in corporate or TELCO settings when you have a fixed mapping of IP addressess to applications. Mostly used by caches  

### Rules

| Parameters    | Defaults | Description |
| ------------- |----------|-------------|
| Rule          |          | Domain      |     

### StaticIPRules

| Parameters    | Defaults | Description |
|---------------|----------|-------------|
| Rule          |          | Domain      |
