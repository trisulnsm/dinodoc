# Sankey Drilldown

The Sankey Drill Down App, can be downloaded from [TRSIUL Apps]. This visualization tool illustrates the split of traffic for various applications, originating from specific routers and interfaces by providing a graphical representation of traffic distribution.

The specialized chart depicts the proportion of traffic allocated to different applications enable users to drill down into specific data points, facilitating in-depth analysis of traffic patterns.

Once downloaded the Sankey shall be available on the [Show All] dashbaord. Fill in the fields to configure the sankey settings.

![](images/sankey.png)  
*Figure: Sankey Crossdrill Search Criteria Form*

| Field | Description |
|-------|-------------|
| Counter Group | Select the counter group to analyze. Counter groups categorize traffic based on specific criteria. |
| Time Frame | Choose the time frame for which you want to analyze traffic patterns. |
| Filter Item | Apply filters to narrow down the analysis based on specific items, such as application names|
| Meter | Select the metering option to measure traffic |
| Remove Toppers | Move the slider to left or right to exclude top traffic contributors from the analysis, allowing for a more detailed view of lesser contributors. |
| Show Max nodes | Move the slider to left or right to specify the maximum number of nodes to display in the Sankey diagram. |

**Advanced Search Options**

| Field | Description |
|-------|-------------|
| Routers | Select specific routers to include in the analysis. This helps in understanding traffic patterns across different network segments.|
| Interfaces | Choose the interfaces to analyze. This could be specific ports, VLANs, or other interface types. |