# Country

External Traffic by country

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{00990011-44BD-4C55-891A-77823D59161B}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION      | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ------------------ | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Upload Bytes          | 30        | 20           | VT_RATE_COUNTER | Bps     | This meter reports the outbound bandwidth rate for traffic leaving the home network that is destined for hosts located in this country. |
| 1   | Download Bytes        | 30        | 20           | VT_RATE_COUNTER | Bps     | This meter reports the inbound bandwidth rate for traffic entering the home network that originates from hosts located in this country. |
| 2   | Unique Hosts           | 20        | 20           | VT_GAUGE        | Uniques | This meter reports the number of distinct hosts observed exchanging traffic with this country within the collection interval. |
| 3   | Unique Apps            | 20        | 20           | VT_GAUGE        | Uniques | This meter reports the number of distinct applications observed in traffic exchanged with this country within the collection interval. |