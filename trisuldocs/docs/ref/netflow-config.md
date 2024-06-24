# Netflow Configuration File

## How to edit

On the Trisul-Probe type `sudo /usr/local/share/trisul-probe/cfgedit` then select “Netflow” to edit.  See [Plugin Configuration](/docs/ref/plugin_configuration.html)

## Location

In a file called `PI-7CA09636-02D4-45E7-AA00-BE0D49B94E26.xml` in `/usr/local/etc/trisul-probe/domainX/probeX/contextX` You can edit the config file directly by typing the full file name as shown below

```bash
# vi /usr/local/etc/trisul-probe/domain0/probe0/context0/PI-7CA09636-02D4-45E7-AA00-BE0D49B94E26.xml 
```

## Parameters

These are the parameters that control Netflow processing.

:::note Case insensitive

Boolean parameters are case-insensitive. True, true, TRUE mean the same thing

:::

| Parameters | Defaults | Description                                                                                                              |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| AppMode    |          | Application mode. Set this to `ipdr` to enable IPDR mode of Netflow processing. Leave it to blank for default processing |
|            |          |                                                                                                                          |
|            |          |                                                                                                                          |
