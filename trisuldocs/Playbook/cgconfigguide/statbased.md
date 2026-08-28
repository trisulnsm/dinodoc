# Monitoring Applications and Hosts by Traffic Threshold Using Stat Based Counter Groups

## Scenario

The network team wants to identify **applications generating high traffic** and **hosts generating relatively low traffic**.

Instead of manually selecting individual applications or hosts, they want Trisul to automatically identify them based on their traffic statistics.

The requirement is:

> **Show me applications generating more than 500 Kbps and hosts generating less than 1 Mbps.**

A **Stat Based Counter Group** can be used to create custom traffic views based on a statistical value and a defined threshold.

In this example, we will create two Stat Based Counter Groups:

- **Apps > 500 Kbps** using the **Apps** Parent Group.
- **Hosts < 1 Mbps** using the **Hosts** Parent Group.

This configuration tells Trisul to dynamically include keys that satisfy the specified traffic conditions.

---

:::info Video Walkthrough
See this scenario in action:

[**How to Monitor Applications and Hosts by Traffic Threshold Using Stat Based Counter Groups | Trisul**](https://youtu.be/BBCfUHSMXt8?si=POmk60aKFxMNOXhp)

The video demonstrates how to create the Stat Based Counter Groups, configure the thresholds, create a dashboard, and view the resulting applications and hosts.
:::

---

## What You Will Build

By the end of this walkthrough, you will have:

- An **Apps &gt; 500Kbps** Stat Based Counter Group.
- A **Hosts &lt; 1Mbps** Stat Based Counter Group.
- A dashboard using the Counter Groups to view applications and hosts matching the configured thresholds.
- A practical example of how Stat Based Counter Groups can dynamically create traffic views based on statistics.

---

## When This Is Useful

Stat Based Counter Groups are useful when you want to create a traffic view based on **how much traffic a key is generating**, rather than manually selecting the keys.

For example, you can use them to:

- Identify applications exceeding a traffic threshold.
- Identify hosts below or above a particular traffic level.
- Create views for high-bandwidth applications.
- Identify hosts that meet a specific traffic condition.
- Build dynamic traffic views based on available statistics.

The same approach can be adapted by changing the **Parent Group, statistic, operator, and threshold**.

---

## 1. Create the Apps >500Kbps Counter Group

We first need to define **what we want to monitor** and **what statistical condition the keys must satisfy**.

For this example:

| Setting | Value |
|---|---|
| **Counter Group Type** | Stat Based |
| **Parent Group** | Apps |
| **Statistic** | Total |
| **Operator** | `>` |
| **Threshold** | 500 Kbps |

Think of the configuration this way:

> **Parent Group = What you want to evaluate**

> **Statistic + Operator + Threshold = Which keys should be included**

So:

> **Apps + Total + `>` + 500 Kbps**

means:

> **Show me applications whose total traffic is greater than 500 Kbps.**

### Navigation

1. Log in to Trisul as an **administrator**.

:::info Navigation

👉 Go to **Profile0** from the main sidebar, then navigate to **Custom Counters → Stat Based**

:::

2. Click **Create New**.
3. Enter the Stat Based Counter Group details according to the configuration above.
4. Set the traffic threshold to **500 Kbps**.
5. Click **Create**.

The **Apps >500Kbps** Counter Group is now created.

[**Restart the Probe**](/playbook/cgconfigguide/#restart-the-probe) to enable the Counter Group.

---

## 2. Create the Hosts &lt; 1Mbps Counter Group

Next, create another Stat Based Counter Group to identify hosts whose traffic is below 1 Mbps.

For this example:

| Setting | Value |
|---|---|
| **Counter Group Type** | Stat Based |
| **Parent Group** | Hosts |
| **Statistic** | Total |
| **Operator** | `<` |
| **Threshold** | 1 Mbps |

Think of the configuration this way:

> **Hosts + Total + `<` + 1 Mbps**

means:

> **Show me hosts whose total traffic is less than 1 Mbps.**

### Navigation

:::info Navigation

👉 Go to **Profile0** from the main sidebar, then navigate to **Custom Counters → Stat Based**

:::

1. Click **Create New**.
2. Enter the Stat Based Counter Group details according to the configuration above.
3. Set the traffic threshold to **1 Mbps**.
4. Click **Create**.

The **Hosts &lt; 1Mbps** Counter Group is now created.

---

## 3. Create a Dashboard for the Stat Based Counter Groups

The Counter Groups define which applications and hosts should be included. Next, create a dashboard to visualize the resulting data.

### Navigation

:::info Navigation

👉 Go to **Dashboards** from the main sidebar and click **Show All**

:::

1. Click **Create New**.
2. Configure the dashboard with the following settings:

| Field | Value |
|---|---|
| **Name** | Statbased Demo |
| **Description** | Applications and hosts by traffic threshold |

3. Click **Save Changes**.

For this scenario, add topper modules for the two Stat Based Counter Groups.

4. Add the required **Current Toppers** modules.
5. Configure one module to use:
   - **Counter Group:** Apps >500Kbps
   - **Meter:** Total
6. Configure another module to use:
   - **Counter Group:** Hosts &lt; 1Mbps
   - **Meter:** Total
7. Click **Save**.

The dashboard is now configured to display applications and hosts that satisfy the respective traffic conditions.

---

## 4. View Applications Above 500 Kbps

Open the dashboard and view the **Apps >500Kbps** module.

The module displays applications whose traffic satisfies:

> **Total traffic > 500 Kbps**

You can now use this view to identify applications generating comparatively high traffic.

The result is dynamic. Applications that no longer satisfy the configured condition will no longer belong to this Stat Based Counter Group.

---

## 5. View Hosts Below 1 Mbps

Next, view the **Hosts &lt; 1Mbps** module.

The module displays hosts whose traffic satisfies:

> **Total traffic < 1 Mbps**

This provides a focused view of hosts that fall below the configured traffic threshold.

As traffic changes, the keys included in the Counter Group can also change according to the configured condition.

---

## What This Demonstrates

This scenario demonstrates how a **Stat Based Counter Group** can be used to create a custom traffic view based on a statistical condition.

The configuration used here was:

**Apps → Total → `>` → 500 Kbps**

and

**Hosts → Total → `<` → 1 Mbps**

This tells Trisul:

> **Show me applications above 500 Kbps and hosts below 1 Mbps.**

Unlike a Counter Group where keys are manually selected, a Stat Based Counter Group uses a **condition** to determine which keys are included.

The same concept can be applied to other Parent Groups, statistics, operators, and thresholds depending on the monitoring requirement.

---

## Key Takeaway

A Stat Based Counter Group lets you create a dynamic traffic view by defining:

**What you want to evaluate → Which statistic to use → How to compare it → The threshold**

In this example:

**Apps → Total → `>` → 500 Kbps**

creates a view of applications generating more than 500 Kbps.

**Hosts → Total → `<` → 1 Mbps**

creates a view of hosts generating less than 1 Mbps.

This allows Trisul to automatically identify the keys that meet a statistical condition instead of requiring you to manually select them.