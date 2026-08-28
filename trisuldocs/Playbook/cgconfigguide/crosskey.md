# Viewing Country, Host, and Application Relationships Using Crosskey Counter Groups

## Scenario

The network team wants to understand the relationship between **countries, hosts, and applications** in the network.

A **Crosskey Counter Group** can combine multiple dimensions to create a composite view of their relationships.

Crosskey Counter Groups can combine up to **three dimensions**:

**A × B**

or:

**A × B × C**

In this scenario, we will build the relationship in two stages:

**Country × Hosts**

then extend it to:

**Country × Hosts × Apps**

This allows the final view to show:

> **Country → Host → Application**

---

:::info Video Walkthrough

See this scenario in action:

**[How to create a three dimension crosskey counter group in Trisul](https://youtu.be/eIsgcZph7Yk?si=0t6RRgW8NIIwrO-2)**

The video demonstrates how to create the Crosskey Counter Group, configure the dashboard, and view the resulting hierarchy.

:::

---

### Filtered or Crosskey?

At this point, it is natural to wonder:

> **"Couldn't I use a Filtered Counter Group to get a similar view?"**

You can. Both Counter Group types can involve multiple groups, but they are used for different purposes.

A **Filtered Counter Group** is used when you want to **filter one group using another group**.

A **Crosskey Counter Group** is used when you want to **combine multiple dimensions and analyze their relationship as composite keys**.

### Filtered Counter Group

For example:

> **Parent Group:** Hosts  
> **Filter Group:** Country

This means:

> **Show me Hosts filtered by Country.**

The result is still a view of **Hosts**, with the Country group used to select the hosts.

### Crosskey Counter Group

Now consider:

> **Country × Hosts**

This means:

> **Show me the Country-Host combinations.**

Here, the relationship between **Country and Host** becomes part of the resulting key.

A Crosskey can then be extended to a third dimension:

> **Country × Hosts × Apps**

which provides a hierarchical relationship:

> **Country → Host → Application**

In short:

> **Filtered:** "Show me one group, filtered by another."

> **Crosskey:** "Show me the combinations between multiple groups."

---

## What You Will Build

By the end of this walkthrough, you will have:

- A two-dimension **CountryxHosts** Crosskey Counter Group.
- A three-dimension **CountryxHostsxApps** Crosskey Counter Group.
- A dashboard containing **Current Toppers** and a **Crosskey Tree**.
- A hierarchical view of **Country → Host → Application** relationships.
- A practical example of extending a two-dimension Crosskey into a three-dimension Crosskey.

---

## When This Is Useful

Crosskey Counter Groups are useful when the relationship between multiple network entities is important to the monitoring requirement.

For example, you can use them to:

- View hosts associated with countries.
- View applications associated with hosts.
- Analyze traffic relationships between multiple network entities.
- Create a two-dimensional relationship such as **A × B**.
- Extend the relationship to three dimensions such as **A × B × C**.

The dimensions can be selected based on the relationship you want to analyze.

---

# 1. Create the Two-Dimension Crosskey Counter Group

Before creating the three-dimension Crosskey Counter Group, first create the two-dimension relationship.

For this scenario:

| Setting | Value |
| --- | --- |
| **Counter Group Type** | Crosskey |
| **Counter Group Name** | CountryxHosts |
| **Parent Group** | Country |
| **CrossKey Group** | Hosts |
| **Optional Group 2** | Not used |

This creates:

**Country × Hosts**

In simple terms:

> **Show me the Hosts associated with each Country.**

### Navigation

1. Log in to Trisul as an **administrator**.

:::info Navigation

:point_right: Go to **Profile0** from the main sidebar, then navigate to **Custom Counters → Crosskeys**

:::

2. Click **New Crosskey Counter Group**.
3. Enter the Counter Group details:

   - **Counter Group Name:** CountryxHosts
   - **Description:** Country and Host relationship
   - **Parent Group:** Country
   - **CrossKey Group:** Hosts
   - **Optional Group 2:** Leave unselected

4. Click **Create**.

The **CountryxHosts** Crosskey Counter Group is now created.

---

# 2. Create the Three-Dimension Crosskey Counter Group

Now that the **CountryxHosts** relationship has been created, extend it with a third dimension: **Apps**.

For this scenario:

| Setting | Value |
| --- | --- |
| **Counter Group Type** | Crosskey |
| **Counter Group Name** | CountryxHostsxApps |
| **Parent Group** | Country |
| **CrossKey Group** | Hosts |
| **Optional Group 2** | Apps |

This creates:

**Country × Hosts × Apps**

The three dimensions can be understood as:

> **Country → Host → Application**

This allows the dashboard to show applications under the hosts associated with each country.

### Navigation

:::info Navigation

:point_right: Go to **Profile0** from the main sidebar, then navigate to **Custom Counters → Crosskeys**

:::

1. Click **New Crosskey Counter Group**.
2. Enter the Counter Group details:

   - **Counter Group Name:** CountryxHostsxApps
   - **Description:** Country, Host, and Application relationship
   - **Parent Group:** Country
   - **CrossKey Group:** Hosts
   - **Optional Group 2:** Apps

3. Click **Create**.

The **CountryxHostsxApps** Crosskey Counter Group is now created.

[**Restart the Probe**](/playbook/cgconfigguide/#restart-the-probe) to enable the new Counter Group.

> **Important:** The two-dimension Crosskey Counter Group must be created first before extending the relationship to the third dimension for this hierarchical view.

---

# 3. Create a Dashboard for the Crosskey Counter Group

The Crosskey Counter Group defines the relationship. Next, create a dashboard to visualize it.

### Navigation

:::info Navigation

:point_right: Go to **Dashboards** from the main sidebar and click **Show All**

:::

1. Click **Create New**.
2. Enter the dashboard details:

   | Field | Value |
   | --- | --- |
   | **Name** | Dashboard for Crosskey CountryxHostsxApps |
   | **Description** | Add some modules to this dashboard |
   | **Counter Group** | CountryxHostsxApps |
   | **Top Count** | 10 |
   | **Meter** | Upload Bytes |

3. Click **Save Changes**.

For this scenario, add the following modules:

- **Current Toppers**
- **Crosskey Tree**

The **Current Toppers** module displays the traffic associated with the composite Country × Host × Application keys.

The **Crosskey Tree** provides the hierarchical view of the three dimensions.

Click **Save**.

---

# 4. View the Country → Host → Application Hierarchy

Once traffic data becomes available, open the dashboard.

The **Crosskey Tree** displays the relationship between the three dimensions.

You can navigate through the hierarchy:

**Country**

→ **Host**

→ **Application**

For example, selecting a country allows you to view the hosts associated with it. Expanding a host then shows the applications associated with that host.

This allows you to move progressively from a broad view to a more specific traffic relationship.

---

# 5. Analyze the Country × Host × Application Traffic

The **Current Toppers** module provides the traffic information for the composite Crosskey entries.

You can use it to identify the Country × Host × Application combinations contributing the most traffic.

The analysis can move from:

**Country**

→ **Host**

→ **Application**

→ **Traffic**

This provides more context than viewing countries, hosts, or applications independently.

For example, instead of only knowing that a country is generating traffic, you can determine:

> **Which host in that country is generating the traffic, and which application is responsible for it.**

---

## What This Demonstrates

This scenario demonstrates how a **Crosskey Counter Group** can be extended from two dimensions to three dimensions to create a hierarchical view of network relationships.

The configuration is built in two stages:

**Country × Hosts**

then:

**Country × Hosts × Apps**

The final three-dimension Crosskey allows the relationship to be viewed as:

**Country → Host → Application**

This approach can be adapted to other combinations of network dimensions depending on the relationship you want to analyze.

---

## Key Takeaway

Use a **Filtered Counter Group** when you want to select a subset of one group based on another group.

Use a **Crosskey Counter Group** when you want to analyze the relationship between multiple groups.

Crosskey Counter Groups can combine up to **three dimensions**:

**A × B**

or:

**A × B × C**

For a three-dimension hierarchical view, first establish the two-dimension Crosskey relationship and then extend it with the third dimension.

In this example:

**Country × Hosts → Country × Hosts × Apps**

creates a hierarchical view of:

**Country → Host → Application**