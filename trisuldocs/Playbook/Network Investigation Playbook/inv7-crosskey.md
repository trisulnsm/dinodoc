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

### Step 2: Confirm the Required Cross Key Group Exists

A Cross Key Counter Group is a **pre-configured** counter group, it is not something you assemble ad hoc in the middle of an investigation. An admin sets one up in advance as a cross-product of two (or up to three) existing counter groups, for example Hosts × Applications or Internal Hosts × Applications × External Hosts. Cross Key Counter Groups support a maximum of three dimensions; combinations involving more than three dimensions are not supported. Once created, it meters that combination continuously, like any other counter group.

This means Step 2 is a **confirmation** step, not a configuration step: check whether a Cross Key group already exists for the dimensions your investigation question needs.

- If a matching group already exists, proceed directly to Step 3.
- If it doesn't, this investigation cannot answer the question using historical correlation data — you have two options: ask an admin to create the required [**Cross Key Counter Group**](/docs/ag/context/crosskey_countergroups#creating-a-cross-key-counter-group) (it will only start collecting data going forward, not retroactively), or fall back to answering the question manually using [**Explore Flows**](./inv1-exploreflows.md) for the specific entities involved, accepting the practical limits called out in that tool's docs for very large flow volumes.

Use this step to answer questions such as:

- Does a Cross Key group already exist for the dimension pair (or triplet) this investigation needs?
- If not, is creating one worth the lead time, given the question is expected to recur?
- Is there an existing Cross Key group that's a close-enough substitute to at least narrow the investigation?

#### Evidence to Collect

- Name and definition of the matching Cross Key group (if one exists).
- Confirmation from an admin on whether a new group can be created and how long it will take to start collecting data.
- Fallback plan if no group exists and one won't be created in time.

#### Next Step

Once a usable Cross Key group has been confirmed, analyze how those dimensions relate to one another.

---

### Step 3: Analyze the Relationships Between the Selected Dimensions

With the Cross Key Counter Group confirmed, visualize the correlated traffic using the **Sankey Crosskey** app — this is the tool Trisul provides specifically to render Cross Key group data as flow relationships between dimensions, rather than as a flat table.

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

Most multidimensional investigations can be completed using Cross Key CounterGroups and Explore Flows. Where additional validation is required, **Aggregate Flows** provides a summarized view of the investigated traffic.

Rather than introducing new evidence, Aggregate Flows groups the traffic by dimensions such as IP address, interface, application, customer, site, VLAN, or router. This helps validate whether the observed relationships are consistently reflected across the investigated network dimensions.

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

### Summarize the Investigation with Trisul AI

By this stage, the investigation should have answered the original investigation question and collected the evidence required to explain the observed relationships.

Open **Trisul AI** and review the investigation findings.

Use Trisul AI to generate a concise summary of the investigation, highlight the key observations, and assist with documenting the findings for operational review, incident reporting, or future reference.

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

- [**Investigate the Network Activity of an IP Address**](/playbook/Network%20Investigation%20Playbook/inv1-exploreflows)
- [**Investigate High Traffic on a Network Interface**](/playbook/Network%20Investigation%20Playbook/inv2-routersintfs)
- [**Investigate Historical Network Activity**](/playbook/Network%20Investigation%20Playbook/inv3-retro)
- [**Investigate Network Behavior Anomalies**](/playbook/Network%20Investigation%20Playbook/inv5-tba)
- [**Monitor Critical Network Assets**](/playbook/Network%20Investigation%20Playbook/inv6-customkeymonitor) – Use multidimensional correlation to add context to a critical asset investigation.