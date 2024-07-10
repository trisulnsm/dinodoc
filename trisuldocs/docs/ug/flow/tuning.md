---
sidebar_position: 04

sidebar_label: Tuning Options

---

# Tuning options

This section describes options available to tweak flow handling.

## Packet capture vs Netflow

The primary differences between them are :

| Packet capture mode                                                                     | Netflow mode                                                                                |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| reconstructs TCP sessions from network traffic                                          | uses uni-directional netflow records to construct a single bi-directional one               |
| creates and stores a single bi-directional flow record                                  | de-duplicates by pinning a flow to the first router reporting it                            |
| flows are subordinates to traffic metering because we meter each packet directly        | traffic metering is subordinate to flows because we extract metering information from flows |
| reassembles TCP flows and extracts resource identifiers and additional traffic metering | not available                                                                               |

## Optimize flow handling

In the rare cases where you need to customize flow handling :

:::note navigation

Login as `admin` and select Context:default -\> profile0 -\> Session
Groups

:::

Description of flow handling and tuning parameters

| Option                    | Default Value | Description                                                                                                                                                                                                                   |
| ------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Time out                  | 120 (seconds) | Time out interval. If a flow is inactive for this many seconds it is presumed to have been terminated. It will be treated as another flow if it resumes later than this timeout.                                              |
| TrackHiWater              | 2000          | Highest threshold value (internal tuning parameter)                                                                                                                                                                           |
| TrackLoWater              | 1000          | Lowest threshold value (internal tuning parameter)                                                                                                                                                                            |
| Active Tracking Age Limit | 30            | Periodically update database with ongoing flows this many seconds. You can set this to zero to only store completed flows, but keep in mind that long lived flows will not be seen until they terminate.                      |
| Volume Cutoff Bytes       | 0             | Only store flows that have transferred this many number of bytes or greater. The byte count includes both directions and ethernet and ip headers. The default value is 0, which represents store all flows regardless of size |
| Status                    | Active        | Shows whether the session group is enabled or disabled                                                                                                                                                                        |
