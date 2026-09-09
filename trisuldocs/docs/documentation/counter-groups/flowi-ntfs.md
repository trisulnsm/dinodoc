# FlowIntfs

Flow interface traffic

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{C0B04CA7-95FA-44EF-8475-3835F3314761}` | Native | 60                | 300                  |

## Meter list


| ID  | DESCRIPTION | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS |
| --- | ----------- | --------- | ------------ | --------------- | ----- |
| 0   | Total       | 1000      | 0            | VT_RATE_COUNTER | Bps   |
| 1   | Recv        | 1000      | 0            | VT_RATE_COUNTER | Bps   |
| 2   | Xmit        | 1000      | 0            | VT_RATE_COUNTER | Bps   |
| 3   | Flows       | 100       | 0            | VT_COUNTER      | Flw   |
| 4   | Recv-Util   | 100       | 0            | VT_GAUGE        | Pct   |
| 5   | Xmit-Util   | 100       | 0            | VT_GAUGE        | Pct   |

### Total       
### Recv        
### Xmit        
### Flows       
### Recv-Util   
### Xmit-Util  