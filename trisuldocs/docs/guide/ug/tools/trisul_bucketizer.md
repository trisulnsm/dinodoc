# Rebucketizer

## Overview

The Rebucketizer is a Hub feature that helps Trisul handle long time windows of time series data. It does this by:
Maintaining Multiple Resolutions of Data.



## Functionality

Trisul stores time series data at multiple resolutions, including:
- High-resolution data (example, 1-minute intervals): Detailed data suitable for short-term analysis.
- Lower-resolution data (example, 5-minute, 15-minute intervals): Aggregated data suitable for long-term analysis.

When querying large time windows, Trisul automatically switches to lower-resolution data.

## Configuration

You configure the Rebucketizer in the Hub configuration file (trisulHubConfig.xml). See [Rebucketizer](/docs/guide/ref/trisulhubconfig#rebucketizer) in the Hub configuration reference. The main parameters are:

![](images/bucketizer_config.png)  
*Figure: Sample of Rebucketizer Configuration*

**Configuration Parameters**

**BucketSize**: The bucket size in seconds.  
**TopperBucketSize**: The Topper bucket size in seconds.  
**ThresholdDays**: Trisul uses this resolution when the query time window is at least this many days long.  

**Default**

The Rebucketizer has no built-in resolutions. It stays off until you enable it and enter each resolution yourself. When it is off, the section looks like this:

~~~xml
<Rebucketizer>
    <Enable> False </Enable>
    <Resolutions>
    </Resolutions>
</Rebucketizer>
~~~

**Example Configuration**

This example enables the Rebucketizer with three resolutions:

~~~xml
<Rebucketizer>
    <Enable> True </Enable>
    <Resolutions>
        <Resolution>
            <ID>1</ID>
            <BucketSize>300</BucketSize>
            <TopperBucketSize>900</TopperBucketSize>
            <ThresholdDays>29</ThresholdDays>
        </Resolution>
        <Resolution>
            <ID>2</ID>
            <BucketSize>900</BucketSize>
            <TopperBucketSize>900</TopperBucketSize>
            <ThresholdDays>90</ThresholdDays>
        </Resolution>
        <Resolution>
            <ID>3</ID>
            <BucketSize>3600</BucketSize>
            <TopperBucketSize>900</TopperBucketSize>
            <ThresholdDays>180</ThresholdDays>
        </Resolution>
    </Resolutions>
</Rebucketizer>
~~~

**Parameters Reference**

| Parameter | Description | Default |
|-----------|-------------|---------|
| Enable | Turns the Rebucketizer on (`True`) or off (`False`) | `False` |
| ID | Unique ID of the resolution | None. You enter it. |
| BucketSize | Bucket size in seconds | None. You enter it. |
| TopperBucketSize | Topper bucket size in seconds | None. You enter it. |
| ThresholdDays | Use this resolution when the query time window is at least this many days | None. You enter it. |
