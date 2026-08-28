# Monitoring Applications and Hosts Using Rule Based Counter Groups

## Scenario

The network team wants to create custom traffic views by defining **rules that determine which keys should be included**.

Instead of manually selecting individual applications or hosts, they want Trisul to automatically include keys that match a specific rule.

The requirement is:

> **Show me traffic for applications that match a defined rule and hosts that match another defined rule.**

A **Rule Based Counter Group** can be used to create custom traffic views by defining rules that determine which keys are included in the Counter Group.

In this example, we will create two Rule Based Counter Groups:

- **[Application Rule]** using the **Apps** Parent Group.
- **[Host Rule]** using the **Hosts** Parent Group.

The rules determine which applications or hosts are included in the respective Counter Groups.

---

:::info Video Walkthrough

See this scenario in action:

[**How to Monitor Applications and Hosts Using Rule Based Counter Groups | Trisul**](https://youtu.be/50HH9w6WqtQ?si=fH3hFz7PDErkS3tD)

The video demonstrates how to create the Rule Based Counter Groups, configure the rules, create a dashboard, and view the resulting applications and hosts.
:::

---

## What You Will Build

## What You Will Build

By the end of this walkthrough, you will have:

- An **Application Rule Based Counter Group**.
- A **Host Rule Based Counter Group**.
- A dashboard using the Counter Groups to view applications and hosts matching the configured rules.
- A practical example of how Rule Based Counter Groups can dynamically create traffic views based on defined rules.

---

## When This Is Useful

Rule Based Counter Groups are useful when you want to create a traffic view based on **specific rules or conditions**, rather than manually selecting individual keys.

For example, you can use them to:

- Identify applications that match a specific rule.
- Identify hosts that match a specific rule.
- Create focused traffic views based on application or host attributes.
- Build reusable traffic views using defined rules.
- Dynamically include keys that satisfy the configured rule.

The same approach can be adapted by changing the **Parent Group and rule conditions** according to the monitoring requirement.

---

## 1. Create the Application Rule Based Counter Group

We first need to define **what we want to monitor** and **the rule that determines which applications should be included**.

For this example:

| Setting | Value |
|---|---|
| **Counter Group Type** | Rule Based |
| **Parent Group** | Apps |
| **Rule** | Define the required application rule |

Think of the configuration this way:

> **Parent Group = What you want to evaluate**

> **Rule = Which keys should be included**

So:

> **Apps + Rule**

means:

> **Show me applications that match the configured rule.**

### Navigation

1. Log in to Trisul as an **administrator**.

:::info Navigation

👉 Go to **Profile0** from the main sidebar, then navigate to **Custom Counters → Rule Based**

:::

2. Click **Create New**.
3. Enter the Rule Based Counter Group details according to the configuration above.
4. Define the required application rule.
5. Click **Create**.

The application Rule Based Counter Group is now created.

[**Restart the Probe**](/playbook/cgconfigguide/#restart-the-probe) to enable the Counter Group.

---

## 2. Create the Host Rule Based Counter Group

Next, create another Rule Based Counter Group to identify hosts that satisfy a defined rule.

For this example:

| Setting | Value |
|---|---|
| **Counter Group Type** | Rule Based |
| **Parent Group** | Hosts |
| **Rule** | Define the required host rule |

Think of the configuration this way:

> **Hosts + Rule**

means:

> **Show me hosts that match the configured rule.**

### Navigation

:::info Navigation

👉 Go to **Profile0** from the main sidebar, then navigate to **Custom Counters → Rule Based**

:::

1. Click **Create New**.
2. Enter the Rule Based Counter Group details according to the configuration above.
3. Define the required host rule.
4. Click **Create**.

The host Rule Based Counter Group is now created.

---

## 3. Create a Dashboard for the Rule Based Counter Groups

The Counter Groups define which applications and hosts should be included. Next, create a dashboard to visualize the resulting data.

### Navigation

:::info Navigation

👉 Go to **Dashboards** from the main sidebar and click **Show All**

:::

1. Click **Create New**.
2. Configure the dashboard with the following settings:

| Field | Value |
|---|---|
| **Name** | Rulebased Demo |
| **Description** | Applications and hosts based on rules |

3. Click **Save Changes**.

For this scenario, add topper modules for the two Rule Based Counter Groups.

4. Add the required **Current Toppers** modules.
5. Configure one module to use:
   - **Counter Group:** Application Rule Based Counter Group
   - **Meter:** Total
6. Configure another module to use:
   - **Counter Group:** Host Rule Based Counter Group
   - **Meter:** Total
7. Click **Save**.

The dashboard is now configured to display applications and hosts that satisfy the respective rules.

---

## 4. View Applications Matching the Rule

Open the dashboard and view the application Rule Based Counter Group module.

The module displays applications that satisfy the configured rule.

You can now use this view to identify applications that match the defined monitoring condition.

The result is dynamic. Applications that no longer satisfy the configured rule will no longer belong to the Rule Based Counter Group.

---

## 5. View Hosts Matching the Rule

Next, view the host Rule Based Counter Group module.

The module displays hosts that satisfy the configured rule.

This provides a focused view of hosts that match the defined monitoring condition.

As network activity changes, the keys included in the Counter Group can also change according to the configured rule.

---

## What This Demonstrates

This scenario demonstrates how a **Rule Based Counter Group** can be used to create a custom traffic view based on a defined rule.

The configuration follows this model:

**Apps → Rule**

and

**Hosts → Rule**

This tells Trisul:

> **Show me applications and hosts that match the configured rules.**

Unlike a Counter Group where keys are manually selected, a Rule Based Counter Group uses a **rule** to determine which keys are included.

The same concept can be applied to other Parent Groups and rule conditions depending on the monitoring requirement.

---

## Key Takeaway

A Rule Based Counter Group lets you create a dynamic traffic view by defining:

**What you want to evaluate → Which rule determines inclusion**

In this example:

**Apps → Rule**

creates a view of applications matching the configured rule.

**Hosts → Rule**

creates a view of hosts matching the configured rule.

This allows Trisul to automatically identify and display keys that satisfy a defined rule instead of requiring you to manually select them.