# Cleaning the Database

How to delete all of the traffic data but retain the configuration. 


## Delete All Traffic Data 

Use `reset context <contextname>` to delete all data. This method
preserves all your configuration but only deletes the data. This command
is available in both the `trisulctl_hub` and `trisulctl_probe` commandline tools.

```bash
trisulctl_hub reset context default
```

:::warning Stop running context first
You are not allowed to *reset context* if the context is still running.
If you get this error, use `stop context <contextname>` and then a
`reset`.
:::


```bash
$ trisulctl_hub

trisul_hub(domain0)> stop context default

+ config0              stopped  success.default
+ hub0                 stopped  Successfully stopped  context processes default@hub0
+ probe0               stopped  Successfully stopped  context processes default@probe0
  trisul_hub(domain0)> reset context default
  The following data in context default will be deleted
  Please review 
  * Will erase data  on config0               disk space  91136                bytes   time interval 00h 00m 00s         
  * Will erase data  on hub0                  disk space  13930496             bytes   time interval 01h 15m 37s         
  * Will erase data  on probe0                disk space  40144896             bytes   time interval 01h 15m 10s         
  Do you want to proceed ? Enter YES to continue : YES
+ config0              reset   success Reset context. Keeping configuration default
+ hub0                 reset   success Reset context successfully. Cleaned out data from : default
+ probe0               reset   success Reset context successfully. Cleaned out data from : default
  trisul_hub(domain0)> 

```

- you can do a `info context` to confirm the data is deleted.

## Delete Only PCAP Data 

If you only want to delete the Probe data ; i.e the raw packet capture
and other probe specific data. You can say <code>reset context myctx1@probe0</code> 
This command will then only execute on probe0.



```bash
$ trisulctl_hub

trisul_hub(domain0)> reset context default@probe0
```

## Delete Complete Context 

Delete context will get rid of the configuration and all data. Use this
if you are sure you do not want the context anymore.

:::warning cant delete the default context 

You are not allowed to delete the `default` context. Running
`delete context default` will get rid of the configuration and data for
the default context, but the context itself will be available.

```