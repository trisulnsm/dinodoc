# Correlate Network Activity Across Multiple Dimensions

## Investigation Overview

Many network investigations cannot be answered by examining a single host, interface, application, or metric in isolation. Questions such as which applications consume the most bandwidth on a specific interface, which customers generate the highest traffic at a particular site, or how traffic is distributed across business units require multiple dimensions of network data to be analyzed together.

Rather than investigating individual network objects independently, multidimensional correlation enables engineers to understand how different parts of the network relate to one another. The objective is to identify meaningful relationships, uncover operational patterns, and answer complex questions that cannot be resolved through isolated analysis.

Using Trisul, engineers can correlate multiple network dimensions within a single investigation, allowing them to move between different perspectives without manually combining reports or switching between multiple tools.

---

## When to Use This Investigation

Use this investigation when you need to:

- Correlate multiple network attributes during an investigation.
- Analyze relationships between users, applications, interfaces, or locations.
- Understand how traffic is distributed across different parts of the network.
- Perform operational or capacity analysis involving multiple data dimensions.
- Answer complex network questions that cannot be resolved using a single metric.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Identify the network attributes relevant to the investigation.
- Correlate multiple dimensions of network activity.
- Discover relationships between network entities.
- Identify patterns that are not visible through isolated analysis.
- Produce actionable operational insights.

---

## Investigation Workflow

### Step 1: Define the Investigation Question

Every multidimensional investigation begins with a clearly defined operational question. Before selecting network data to analyze, determine exactly what relationship you are trying to understand.

Open [**Cross Key CounterGroups**](/docs/ag/context/crosskey_countergroups/) and identify the dimensions required for the investigation.

Use this view to answer questions such as:

- What operational question needs to be answered?
- Which network entities are involved?
- Which dimensions should be correlated?
- What outcome is expected from the investigation?

#### Evidence to Collect

- Investigation objective.
- Network entities involved.
- Selected dimensions for analysis.
- Expected operational outcome.

#### Continue the Investigation

Once the investigation objective has been defined, identify the network dimensions required to answer the question.

---

### Step 2: Select the Network Dimensions

The quality of the investigation depends on selecting the appropriate dimensions for correlation. Choose only the attributes that contribute to answering the operational question without introducing unnecessary complexity.

Configure the required dimensions within [**Cross Key CounterGroups**](/docs/ag/context/crosskey_countergroups#creating-a-cross-key-counter-group).

Use this view to answer questions such as:

- Which hosts should be included?
- Which applications are relevant?
- Which interfaces, sites, customers, or VLANs should be correlated?
- Are additional geographic or routing dimensions required?

#### Evidence to Collect

- Selected hosts.
- Applications.
- Interfaces.
- Customers, sites, VLANs, or ASNs.
- Additional dimensions relevant to the investigation.

#### Continue the Investigation

Once the required dimensions have been selected, analyze how they relate to one another.

---

### Step 3: Correlate Network Activity

With the investigation dimensions established, begin analyzing how the selected network attributes interact. Rather than viewing each metric independently, examine the relationships between them to understand how traffic is distributed across the network.

Use [**Cross Key CounterGroups**](/docs/ag/context/crosskey_countergroups) to correlate the selected dimensions.

Use this view to answer questions such as:

- Which entities generate the most traffic?
- Which applications dominate specific interfaces or sites?
- Are certain users associated with particular services?
- Which combinations contribute most to network utilization?

#### Evidence to Collect

- Traffic distribution across selected dimensions.
- Dominant contributors.
- Relationships between network entities.
- Unexpected traffic concentrations.
- Significant communication patterns.

#### Continue the Investigation

Once the relationships between the selected dimensions have been identified, evaluate whether they reveal meaningful operational patterns.

---

### Step 4: Identify Operational Patterns

Correlation often reveals operational patterns that are difficult to identify through individual dashboards. Review the correlated data to determine whether the observed relationships align with normal network operations or indicate opportunities for further investigation.

Continue reviewing the correlated results.

Use the investigation to answer questions such as:

- Does traffic distribution align with expected usage?
- Do particular applications dominate specific sites or business units?
- Are certain users or customers responsible for disproportionate resource consumption?
- Are unexpected relationships present between network entities?

#### Evidence to Collect

- Expected traffic distribution.
- Dominant applications.
- Heavy resource consumers.
- Unexpected relationships.
- Recurring operational trends.

#### Continue the Investigation

After identifying operational patterns, determine whether the findings can be explained by normal business and network operations.

---

### Step 5: Validate the Operational Context

Not every relationship discovered during correlation represents an operational concern. Many patterns simply reflect normal business processes, application architecture, or network design.

Review the investigation findings alongside known operational activities and network architecture.

Use the investigation findings to answer questions such as:

- Does the observed relationship match business operations?
- Can application architecture explain the traffic pattern?
- Were infrastructure changes recently introduced?
- Do the findings align with expected network design?
- Can the relationship be explained by planned operational activities?

#### Evidence to Collect

- Business processes supporting the findings.
- Application architecture.
- Infrastructure changes.
- Network design considerations.
- Evidence supporting expected or unexpected behavior.

#### Continue the Investigation

Once the operational context has been established, determine the conclusions and any follow-up actions required.

---

### Step 6: Determine the Operational Insight

By this stage, the investigation should have answered the original operational question and established the relationships between the selected network dimensions.

Review the investigation findings as a whole to determine the operational insight gained.

Use the investigation findings to answer questions such as:

- Has the original investigation question been answered?
- What relationships were discovered?
- Do the findings require further investigation?
- Should capacity planning or policy changes be considered?
- Are additional investigations required?

#### Evidence to Collect

- Correlated relationships.
- Operational conclusions.
- Significant observations.
- Recommended follow-up actions.
- Capacity planning or optimization opportunities.

#### Investigation Outcome

At this stage, you should understand how the selected network dimensions relate to one another, identify meaningful operational patterns, answer the original investigation question, and determine whether additional investigation or operational action is required.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The original investigation question has been answered.
- The required network dimensions have been correlated.
- Significant relationships have been identified.
- Operational patterns have been evaluated.
- The operational context has been validated.
- Appropriate operational or engineering actions have been determined.

---

## Best Practices

- Begin every investigation with a clearly defined operational question.
- Select only the network dimensions necessary to answer the investigation.
- Progressively correlate additional dimensions rather than analyzing everything at once.
- Always interpret correlated data within the context of network architecture and business operations.
- Use multidimensional correlation to complement, not replace, host, interface, or application investigations.
- Document recurring relationships to support future operational analysis.

---

## Related Investigations

- [**Investigate the Network Activity of an IP Address**](./inv1-exploreflows.md)
- [**Investigate High Traffic on a Network Interface**](./inv2-routersintfs.md)
- [**Investigate Historical Network Activity**](./inv3-retro.md)
- [**Investigate Network Behavior Anomalies**](./inv5-tba.md)