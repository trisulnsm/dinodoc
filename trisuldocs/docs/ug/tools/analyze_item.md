---
sidebar_position: 5
---

# Long Term Traffic

The Long Term Traffic Tool in Trisul allows you to analyze and visualize network traffic patterns of a particular item over extended periods, typically weeks, months, or even years. This feature is also available on the Module templates if you would like to monitor long term traffic of a particular item on a regular basis.


## How to Use
To use long term traffic tool,

:::info navigation

Go to Tools -> Select Long Term Traffic

:::

The following *search criteria* window open up with a [*Hide/ Show Search Form*](/docs/ug/ui/elements#hide-show-search-form) option.

![](images/longtermtraffic.png)  
*Figure: Long Term Traffic*

You can begin your search in the *SLong term traffic* form by populating the search criteria fields with the help of the following fields and their descriptions.

| Field                                               | Description                                                 |
| ----------------------------------------------------| ----------------------------------------------------------- |
| CounterGroup                                        | Select a counter group to define the type of traffic data to display(example, ASN, Hosts, Apps, etc.)                                                                            |
| Meters                                              | Choose a meter to focus on specific aspects of network traffic                                                                                                             |
| Item                                                | Select an item to specify the entity for which you want to display traffic data (example, a specific IP address, port, protocol)                                               |
| Surface Type                                        | Select the type of chart to display. Tip : Choose `LINETABLE` if you want to see a box with `MAX/MIN/AVG` below chart                                                            |
| [Time Frame](/docs/ug/ui/elements#time-selector)    | Define the time range for the chart                         |
| Business Hour                                       | You can specify the business hours for accurate statistics  |
| Expression                                          | Combines two or more metrics unsing arithmetic expressions. Click on the question mark icon near the field name for a quick hint                                                |

