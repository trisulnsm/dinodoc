# SNMP-Interface

Traffic using SNMP input

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{9781DB2C-F78A-4F7F-A7E8-2B1A9A7BE71A}` | Native | 60                | 300                  |



## Meter list

| ID  | DESCRIPTION | TOP COUNT | BOTTOM COUNT | TYPE                 | UNITS |
| --- | ----------- | --------- | ------------ | -------------------- | ----- |
| 0   | Total BW    | 100       | 0            | VT_DELTA_RATE_ROUTER | Bps   |
| 1   | In Octets   | 100       | 0            | VT_DELTA_RATE_ROUTER | Bps   |
| 2   | Out Octets  | 100       | 0            | VT_DELTA_RATE_ROUTER | Bps   |
| 3   | Recv-Util   | 100       | 0            | VT_GAUGE             | Pct   |
| 4   | Xmit-Util   | 100       | 0            | VT_GAUGE             | Pct   |


### Total BW    
### In Octets   
### Out Octets  
### Recv-Util   
### Xmit-Util 