# Flow-Prefix

Traffic by Prefixes from the router RIB

## Counter groups

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{2BE2A3B6-613D-4216-0737-3684E824EA33}` | Native | 60                | 300                  |

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