# CounterGroup Configuration Guide

> **Practical examples for choosing and configuring Counter Groups based on what you want to monitor.**

Counter Groups are the primary way metrics are organized in Trisul Network Analytics. Trisul also allows you to create custom Counter Groups when the predefined groups do not provide the specific traffic view you need.

The **Counter Group Scenario Library** provides practical examples to help you choose the right Counter Group configuration for a particular monitoring requirement.

Instead of starting with a Counter Group and trying to determine what it can be used for, start with **what you want to monitor** and use the scenarios in this library to find a suitable configuration.

---

## Before You Use This Library

A basic understanding of Trisul Counter Groups and custom Counter Groups is required before using the scenarios in this library.

Counter Groups organize network metrics and their associated keys. Trisul provides a range of built-in Counter Groups, while custom Counter Groups allow you to create specialized traffic views based on your requirements. :contentReference[oaicite:0]{index=0}

Custom Counter Groups can be created using different approaches, including:

- **Filtered Counter Groups**
- **Keyset Counter Groups**
- **Stat Based Counter Groups**
- **Rule Based Counter Groups**
- **Cross Key Counter Groups**

Trisul also supports **Cardinality Counting** as an additional type of meter that can be added to Counter Groups. :contentReference[oaicite:1]{index=1}

Before selecting a Counter Group configuration for a scenario, familiarize yourself with:

- What Counter Groups represent.
- How groups and keys are organized.
- The different types of custom Counter Groups.
- How each custom Counter Group type is used.
- The available keys in the Counter Groups relevant to your requirement.

### Recommended References

Read the following documentation first:

- [Counter Groups](https://docs.trisul.org/docs/counter-groups/)  
  Learn how Counter Groups organize metrics, meters, and keys in Trisul.

- [Custom Counter Groups](https://docs.trisul.org/docs/ag/context/custom_countergroup)  
  Learn about the different types of custom Counter Groups and when each type can be used.

Once you understand these concepts, use the scenarios in this library as **practical configuration references**.

---

## How This Library Helps

Each scenario starts with something you want to monitor.

For example:

> **"I want to monitor traffic for a particular type of application."**

You may know the traffic or application you are interested in, but still need to determine:

- Which type of Counter Group should be used?
- What should the **Parent Group** be?
- Which **Filter Group** should be selected?
- Which **keys** should be included?
- What will the resulting Counter Group show?
- How can the Counter Group be used to view and analyze the traffic?

The corresponding scenario provides the recommended Counter Group configuration and shows how to apply it in Trisul.

This makes the library a **reference for mapping monitoring requirements to Counter Group configurations**.

---

## What You'll Find in Each Scenario

Each scenario focuses on a specific monitoring requirement and provides:

### Scenario

A practical requirement describing what you want to monitor.

### Counter Group Type

The type of custom Counter Group recommended for the scenario, such as a Filtered, Keyset, Stat Based, Rule Based, or Cross Key Counter Group.

### Counter Group Configuration

The recommended configuration, which may include:

- **Parent Group**
- **Filter Group**
- **Key List**
- Other relevant Counter Group settings

### Why This Configuration?

A simple explanation of why the selected Counter Group type, groups, and keys are appropriate for the scenario.

### How to Use the Counter Group

Steps for creating the Counter Group and using it to view the required traffic.

#### Restart the probe

After creating or modifying a Counter Group, restart the probe for the changes to take effect. This step applies to all Counter Group scenarios in this library.

:::info Navigation

:point_right: Go to **Admin Tasks** from the main sidebar and click **Start/Stop Tasks**

:::

The probe will indicate that a restart is pending.

Restart the probe and wait for it to come back online.

Once the probe has restarted, the newly created Counter Group can begin collecting data.

### Result

An explanation of what the resulting Counter Group allows you to see or monitor.

---

## Understanding the Configuration

Some scenarios, particularly those using **Filtered Counter Groups**, require you to select a Parent Group, Filter Group, and specific keys.

### Parent Group

The **Parent Group** determines what you want the resulting Counter Group to show.

Think of it as:

> **"What do I want to see?"**

### Filter Group

The **Filter Group** determines what you want to use to select or filter the items in the Parent Group.

Think of it as:

> **"What should I use to filter what I see?"**

### Key List

The **Key List** specifies the particular keys from the Filter Group that should be included.

Think of it as:

> **"Which specific values should I include?"**

Together, these settings define the traffic view that the Counter Group provides.

> **Note:** Parent Group, Filter Group, and Key List are relevant to particular Counter Group types, such as Filtered Counter Groups. Other custom Counter Group types use different configuration methods.

---

## How to Find the Right Configuration

Start with **what you want to monitor**, rather than trying to determine the Counter Group settings yourself.

You might be looking to:

- Monitor traffic associated with selected applications.
- Identify hosts associated with specific application traffic.
- Create a custom view for a group of hosts.
- Monitor traffic for selected network entities.
- Group specific traffic types into a single view.
- Create a focused traffic view for a particular monitoring requirement.

Find the scenario that most closely matches your requirement and use its Counter Group configuration as a reference.

---

## Scenario Library

The scenarios in this library cover different monitoring requirements and show how Counter Groups can be configured to create the required traffic view.

New scenarios can be added as additional Counter Group requirements are identified.

---

## Key Idea

You do not need to start with:

> **"Which Counter Group should I create?"**

Start with:

> **"What do I want to monitor?"**

Then use the scenarios in this library to find the Counter Group type and configuration that can provide that view.

The scenarios are intended as **practical reference configurations**. They can also be adapted to your environment by changing the relevant keys, groups, or other settings while keeping the same underlying approach.