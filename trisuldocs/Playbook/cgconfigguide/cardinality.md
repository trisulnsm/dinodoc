# Monitoring Unique Hosts per Country Using Cardinality Counters

## Scenario

The network team wants to know **how many unique hosts communicate with each country**.

Traffic volume per country doesn't show this. One host can move a lot of data to a country, while many hosts can each send a little.

The requirement is:

> **Show me how many unique hosts communicate with each country.**

A [**Cardinality Counter**](/docs/guide/ag/context/cardinality_countergroups) counts unique values for each key in an existing Counter Group.

In this example, you add a cardinality counter to the **Country** Counter Group that counts unique **Hosts**.

> **Note:** Cardinality is not a separate Counter Group. You can add up to two cardinality counters to an existing Counter Group.

:::info Video Walkthrough

The video shows the same steps with a different example (unique applications per host):

[**How to Monitor Unique Applications for Hosts Using Cardinality Counters | Trisul**](https://youtu.be/K27xQk7z_WY)

:::

---

## What You Will Build

By the end of this walkthrough, you will have:

- A cardinality counter on the **Country** Counter Group that counts unique **Hosts**.
- A view showing the number of unique hosts seen for each country.

---

## When This Is Useful

Cardinality Counters are useful when you want to know **how many unique entities are associated with a key**, rather than how much traffic the key generated.

For example, you can use them to:

- Count how many unique hosts communicate with each country.
- Count how many unique applications each host uses.
- Spot a country that suddenly has many more internal hosts talking to it.
- Track changes in the number of unique entities over time.

---

## 1. Create the Cardinality Counter

For this example:

| Field | Value |
|---|---|
| **Host Counter** | Country |
| **Cardinal Counter** | Hosts |
| **Description** | Unique hosts per country |

Read the configuration this way:

> **Host Counter = for each item in this counter group**

> **Cardinal Counter = count the unique number of these**

So **Country + Hosts** means:

> **For each country, count the number of unique hosts.**

### Navigation

1. Log in to Trisul as an **administrator**.

:::info Navigation

:point_right: Go to **Profile0** from the main sidebar, then navigate to **Custom Counters → Cardinality**

:::

2. Click **New Cardinality Counter**.
3. In **Host Counter**, select **Country**.
4. In **Cardinal Counter**, select **Hosts**.
5. Enter a **Description**, for example: Unique hosts per country.
6. Click **Create**.

> **Note:** Trisul allows a maximum of two cardinality counters per Counter Group.

[**Restart the Probe**](/playbook/cgconfigguide/#restart-the-probe) to enable the configuration.

---

## 2. View Unique Hosts per Country

Once the counter is enabled, Trisul tracks the number of unique hosts seen for each country.

The resulting metric answers the question:

> **How many different hosts communicated with this country?**

For example:

| Country | Unique Hosts |
|---|---:|
| us | 120 |
| de | 35 |
| sg | 4 |

The value counts **distinct hosts**, not the amount of traffic they generated.

---

## 3. Add the Cardinality Metric to a Dashboard

### Navigation

:::info Navigation

:point_right: Go to **Dashboards** from the main sidebar and click **Show All**

:::

1. Open the dashboard where you want to show the cardinality information.
2. Add a **Current Toppers** module.
3. Configure the module to use the **Country** Counter Group.
4. Select the unique hosts cardinality metric.
5. Set the time range and topper count.
6. Click **Save**.

---

## 4. Analyze the Results

A country with a high value is reached by many different hosts. A country with a low value is reached by few hosts, even if the traffic volume is high.

> **Total traffic answers:** How much traffic went to this country?

> **Unique hosts answers:** How many different hosts communicated with this country?

---

## Cardinality vs Traffic Volume

| Measurement | Answers |
|---|---|
| **Total** | How much traffic was generated? |
| **Packets** | How many packets were observed? |
| **Flows** | How many flows were observed? |
| **Unique hosts** | How many different hosts were observed? |

For example, two countries may each receive 1 GB of traffic. One may get it from **2 hosts** and the other from **200 hosts**. The cardinality metric makes this difference visible.

---

## Key Takeaway

A Cardinality Counter measures **how many unique values are associated with each key** in a Counter Group. In this example, **Country → Hosts** gives the number of distinct hosts that communicated with each country.
