# Flow-Prefix-v6

Traffic by IPv6 Prefixes from the router RIB

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{467AE21F-F2B7-4509-EA69-514CF2352D36}` | Native | 60                | 300                  |



## Meter list

| ID  | DESCRIPTION               | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS |
| --- | ------------------------- | --------- | ------------ | --------------- | ----- |
| 0   | Total                     | 50        | 0            | VT_RATE_COUNTER | Bps   |
| 1   | Recv from Upstream AS     | 50        | 0            | VT_RATE_COUNTER | Bps   |
| 2   | Transmit to Upstream AS   | 50        | 0            | VT_RATE_COUNTER | Bps   |
| 3   | Prefixes Flows            | 50        | 0            | VT_COUNTER      | Flws  |
| 4   | Recv from Downstream AS   | 50        | 0            | VT_RATE_COUNTER | Bps   |
| 5   | Transmit to Downstream AS | 50        | 0            | VT_RATE_COUNTER | Bps   |

### Total                     
### Recv from Upstream AS     
### Transmit to Upstream AS   
### Prefixes Flows            
### Recv from Downstream AS   
### Transmit to Downstream AS 