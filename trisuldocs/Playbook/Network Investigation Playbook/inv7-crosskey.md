# Correlate Network Activity Across Multiple Dimensions

## Investigation Overview

Many network investigations cannot be answered by examining a single host, interface, application, or metric in isolation. Questions such as which applications consume the most bandwidth on a specific interface, which customers generate the highest traffic at a particular site, or how traffic is distributed across business units require multiple dimensions of network data to be analyzed together.

Rather than investigating individual network objects independently, multidimensional correlation enables engineers to understand how different parts of the network relate to one another. A Multidimensional Correlation Investigation begins by defining the relationship that needs to be understood and progressively identifies the network dimensions required to answer that question, analyzes the relationships between those dimensions, interprets what those relationships reveal, determines whether they represent expected behavior, and decides whether additional investigation is required.

Using Trisul, engineers can investigate relationships across multiple network dimensions within a single workflow, allowing them to answer complex operational questions without manually combining reports or switching between multiple tools.

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

- Define the investigation question.
- Select the network dimensions required to answer that question.
- Understand the relationships between the selected dimensions.
- Interpret what those relationships reveal about network operations.
- Determine whether the observed relationships are expected.
- Determine whether additional investigation is required.

---

## Investigation Workflow

### Step 1: Define the Investigation Question

Every multidimensional investigation begins with a clearly defined investigative question. Before selecting network data to analyze, establish exactly which relationship needs to be understood, which network entities are involved, and what the investigation is expected to explain.

Open [**Cross Key CounterGroups**](/docs/ag/context/crosskey_countergroups/) to identify the dimensions required for the investigation.

Use this view to answer questions such as:

- What operational question needs to be answered?
- Which network entities are involved?
- Which dimensions are likely to answer the investigation question?
- What outcome is expected from the investigation?

#### Evidence to Collect

- Investigation question.
- Network entities involved.
- Candidate dimensions for analysis.
- Expected investigation outcome.

#### Next Step

Once the investigation question has been clearly defined, select only the network dimensions required to answer that question.

---

### Step 2: Select the Network Dimensions

The quality of a multidimensional investigation depends on selecting the appropriate dimensions for correlation. Choose only the network dimensions that contribute directly to answering the investigation question rather than including every available attribute.

Configure the required dimensions within [**Cross Key CounterGroups**](/docs/ag/context/crosskey_countergroups#creating-a-cross-key-counter-group).

Use this view to answer questions such as:

- Which hosts should be included?
- Which applications are relevant?
- Which interfaces, sites, customers, or VLANs should be correlated?
- Are additional geographic or routing dimensions necessary to answer the investigation question?

#### Evidence to Collect

- Selected hosts.
- Applications.
- Interfaces.
- Customers, sites, VLANs, or ASNs.
- Additional dimensions required for the investigation.

#### Next Step

Once the required dimensions have been selected, analyze how those dimensions relate to one another.

---

### Step 3: Analyze the Relationships Between the Selected Dimensions

After selecting the required network dimensions, build the multidimensional correlation using [**Cross Key CounterGroups**](/docs/ag/context/crosskey_countergroups).

Rather than investigating a single host, interface, or application, this step examines how multiple network dimensions relate to one another to answer the original investigation question.

This step helps answer questions such as:

- Which dimensions are most strongly related?
- Which applications dominate specific interfaces, customers, or sites?
- Which users communicate most with particular services?
- Which combinations contribute most significantly to network activity?
- Which relationships appear unexpected?

#### Evidence to Collect

- Relationships between selected dimensions.
- Dominant contributors.
- Traffic distribution across dimensions.
- Significant multidimensional correlations.
- Unexpected relationships requiring further investigation.

#### Continue the Investigation

Once the significant relationships have been identified, investigate the contributing network activity in [**Explore Flows**](./inv1-exploreflows.md).

---

### Step 4: Investigate the Correlated Activity

After identifying significant multidimensional relationships, continue the investigation in [**Explore Flows**](/docs/ug/tools/explore_flows) using the network entities revealed by the correlation.

This allows you to investigate the communication activity responsible for the observed relationships while remaining focused on the original investigation question.

This step helps answer questions such as:

- Which conversations explain the observed relationships?
- Which hosts contributed most significantly?
- Which communication patterns support the correlation?
- Which network entities require deeper investigation?
- Does the detailed flow activity support the correlation?

#### Evidence to Collect

- Network entities contributing to the correlation.
- Significant communication patterns.
- High-volume conversations.
- Supporting flow evidence.
- Network objects requiring further investigation.

#### Continue the Investigation

Once the communication activity has been understood, determine which applications explain the observed relationships.

---

### Step 5: Analyze Application Activity

Remain within **Explore Flows** and review the **Top Applications** for the investigation.

Application visibility helps explain why the observed multidimensional relationships exist and whether they represent expected operational activity or unexpected behavior.

This step helps answer questions such as:

- Which applications explain the observed relationships?
- Are the applications expected?
- Do the applications align with the investigation question?
- Are unexpected services present?

#### Evidence to Collect

- Applications contributing to the observed relationships.
- Significant application activity.
- Expected operational traffic.
- Unexpected applications or protocols.
- Applications requiring further investigation.

#### Continue the Investigation

After identifying the applications involved, review the aggregate traffic profile to validate the investigation findings.

---

### Optional Validation: Review Aggregate Traffic

Most multidimensional investigations can be completed using Cross Key CounterGroups and Explore Flows. Where additional validation is required, **Aggregate Flow Statistics** provides a summarized view of the investigated traffic.

Rather than introducing new evidence, Aggregate Flow Statistics groups the traffic by dimensions such as IP address, interface, application, customer, site, VLAN, or router. This helps validate whether the observed relationships are consistently reflected across the investigated network dimensions.

This step helps answer questions such as:

- Do the aggregate statistics support the observed relationships?
- Which network entities dominate the correlated traffic?
- Are the relationships concentrated within specific dimensions?
- Does the aggregate traffic profile reinforce the investigation findings?

#### Evidence to Collect

- Aggregate traffic distribution.
- Dominant network entities.
- Traffic concentrations.
- Aggregate evidence supporting the correlation.

#### Continue the Investigation

If packet capture is available, continue with Packet Analysis to validate the observed network behavior.

### Step 6: Validate with Packet Analysis

Where packet capture is available, continue directly from **Explore Flows** by downloading the PCAP for the selected flow records.

Packet-level analysis helps validate the conclusions drawn from the multidimensional investigation and provides protocol-level evidence explaining the observed relationships.

This step helps answer questions such as:

- Does packet-level analysis support the investigation findings?
- Are protocol anomalies visible?
- Does the packet data explain the observed relationships?
- Is additional evidence required before completing the investigation?

#### Evidence to Collect

- Packet-level evidence supporting the investigation.
- Protocol anomalies.
- Communication failures or retransmissions.
- Evidence validating the observed relationships.

#### Continue the Investigation

Once the relationships have been validated, determine whether they represent expected operational behavior.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The original investigation question has been answered.
- The required network dimensions have been selected.
- The relationships between the selected dimensions have been analyzed.
- The relationships have been interpreted.
- The observed relationships have been determined to be expected or unexpected.
- The appropriate follow-up investigation has been identified.

---

## Best Practices

- Begin every investigation with a clearly defined question before selecting network dimensions.
- Select only the dimensions necessary to answer the investigation question.
- Analyze relationships rather than individual metrics.
- Interpret correlated relationships before drawing operational conclusions.
- Determine whether the observed relationships are expected before escalating the investigation.
- Progressively introduce additional dimensions only when more evidence is required.
- Use multidimensional correlation to complement specialised investigations rather than replace them.
- Document recurring relationships to improve future operational analysis.

---

## Related Investigations

- [**Investigate the Network Activity of an IP Address**](./inv1-exploreflows.md)
- [**Investigate High Traffic on a Network Interface**](./inv2-routersintfs.md)
- [**Investigate Historical Network Activity**](./inv3-retro.md)
- [**Investigate Network Behavior Anomalies**](./inv5-tba.md)