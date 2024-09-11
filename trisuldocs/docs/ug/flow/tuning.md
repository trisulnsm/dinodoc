---
sidebar_position: 04
---

# Settings

This section describes options available to tweak flow handling.

:::note storing all flows and disk space 

The default setting is to store ALL flows regardless of size. This works great for security conscious customers but it can eat up quite a bit of disk space for large customers.  Using the Volume Cutoff Bytes parameter you can greatly reduce disk requirements. 

:::


## Optimize Flow Handling

In the rare cases where you need to customize flow handling :

:::info navigation

:point_right: Login as `admin` and select Context:default &rarr;profile0 &rarr;Session
Groups

:::

Description of flow handling and tuning parameters

| Option                    | Default Value | Description  |
| ------------------------- | ------------- | ------- |
| Time out                  | 120 (seconds) | Time out interval. If a flow is inactive for this many seconds it is presumed to have been terminated. It will be treated as another flow if it resumes later than this timeout. |
| TrackHiWater              | 2000          | Highest threshold value (internal tuning parameter)  |
| TrackLoWater              | 1000          | Lowest threshold value (internal tuning parameter)  |
| Active Tracking Age Limit | 30            | Periodically update database with ongoing flows this many seconds. You can set this to zero to only store completed flows, but keep in mind that long lived flows will not be seen until they terminate.   |
| Volume Cutoff Bytes       | 0             | Only store flows that have transferred this many number of bytes or greater. The byte count includes both directions and ethernet and ip headers. The default value is 0, which represents store all flows regardless of size |
| Status                    | Active        | Shows whether the session group is enabled or disabled |
