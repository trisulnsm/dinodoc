# Monitoring Web Traffic Using Filtered Counter Groups

## Scenario

The network team notices that web traffic is consuming a significant portion of the available bandwidth. They want to identify **which hosts are associated with web traffic** and understand how that traffic can be viewed and analyzed in Trisul.

The requirement is:

> **Show me hosts associated with HTTP and HTTPS traffic.**

A [**Filtered Counter Group**](/docs/ag/context/filtered_countergroups) can be used to create this custom view.

In this example, we will use:

- **Parent Group:** [Hosts](/docs/counter-groups/hosts)
- **Filter Group:** [Apps](/docs/counter-groups/apps)
- **Key List:** `http, https`

This configuration tells Trisul:

> **Show me Hosts that are associated with HTTP and HTTPS Apps.**

The resulting Counter Group can then be used in a dashboard to view the hosts contributing to web traffic.

---

:::info Video Walkthrough

See this scenario in action:

**[How to Monitor Web Traffic Using Custom Counter Groups | Trisul](https://youtu.be/0FaFqeco468)**

The video demonstrates how to create the Filtered Counter Group, configure the dashboard, and view the resulting hosts.

:::

---

## What You Will Build

By the end of this walkthrough, you will have:

- A **Web Traffic** Filtered Counter Group for HTTP and HTTPS traffic.
- A dashboard using the Counter Group to view hosts associated with web traffic.
- A way to filter the results using key details.
- A practical example of how Parent Groups, Filter Groups, and keys can be combined to create a custom traffic view.

---

## When This Is Useful

Custom Counter Groups are useful when the predefined traffic views do not provide the specific view required for a monitoring requirement.

The same approach can be adapted to create different views by changing the **Parent Group, Filter Group, and keys**.

For example, a Filtered Counter Group can be used to:

- View hosts associated with selected applications.
- View hosts associated with selected countries.
- View hosts associated with specific routers.
- Create focused traffic views for a particular monitoring requirement.

---

## 1. Create the Web Traffic Counter Group

We first need to define **what we want to see** and **what we want to filter it by**.

For this scenario:

| Setting | Value |
| --- | --- |
| **Counter Group Type** | Filtered |
| **Parent Group** | Hosts |
| **Filter Group** | Apps |
| **Key List** | `http, https` |

Think of the configuration this way:

> **Parent Group = What you want to see**

> **Filter Group + Keys = What you want to filter it by**

So:

> **Hosts + Apps (`http, https`)**

means:

> **Show me hosts associated with HTTP and HTTPS applications.**

### Navigation

1. Log in to Trisul as an **administrator**.

:::info Navigation

👉 Go to **Profile0** from the main sidebar, then navigate to **Custom Counters &rarr; Filtered**

:::

2. Click **Create New**.
3. Enter the Counter Group details:

   - **Title:** Web Traffic
   - **Description:** HTTP and HTTPS web application traffic
   - **Parent Group:** Hosts
   - **Filter Group:** Apps

4. Under **Key List**, enter:

   `http, https`

5. Click **Create**.

The **Web Traffic** Counter Group is now created.

[**Restart the Probe**](/playbook/cgconfigguide/#restart-the-probe) to enable the Counter Group.

---

## 2. Create a Dashboard for the Web Traffic Counter Group

The Counter Group defines the traffic view. Next, create a dashboard to visualize the resulting data.

### Navigation

:::info Navigation

👉 Go to **Dashboards** from the main sidebar and click **Show All**

:::

1. Click **Create New**.
2. Configure the dashboard with the following settings:

| Field | Value |
| --- | --- |
| **Name** | Web Traffic |
| **Description** | HTTP and HTTPS web application traffic |
| **Top Count** | 10 |
| **Counter Group** | Web Traffic |
| **Meter** | Bytes |

3. Click **Save Changes**.

For this scenario, add **Current Toppers** and **Realtime Toppers** to view the hosts associated with the selected web traffic.

4. Add the following topper modules:

   - **Current Toppers**
   - **Realtime Toppers**

5. Click **Save**.

The dashboard is now configured to display the hosts associated with the **Web Traffic** Counter Group.

---

## 3. View the Hosts Associated With Web Traffic

Once traffic data becomes available, the dashboard will populate with the hosts associated with HTTP and HTTPS traffic.

The dashboard can now help answer questions such as:

- Which hosts are generating the most web traffic?
- Which hosts are currently contributing to web traffic?
- Which hosts are associated with HTTP or HTTPS traffic?
- Which hosts should be investigated further?

At this point, we have moved from a broad requirement:

> **Monitor web traffic**

to a more focused view:

> **Show me the hosts associated with HTTP and HTTPS traffic.**

---

## What This Demonstrates

This scenario demonstrates one way to use a **Filtered Counter Group** to create a custom traffic view.

The configuration used here was:

**Parent Group: Hosts**  
**Filter Group: Apps**  
**Keys: `http, https`**

This tells Trisul:

> **Show me Hosts associated with HTTP and HTTPS Apps.**

The same concept can be applied to other monitoring requirements by changing the Filter Group and keys.

For example:

- **Hosts + Countries** → filter hosts by country.
- **Hosts + Flowgens** → filter hosts by router.
- **Hosts + Apps** → filter hosts using selected application or port keys.

The Counter Group configuration therefore depends on **what you want to see and what you want to use to filter it**.

---

## Key Takeaway

A Filtered Counter Group lets you create a focused traffic view by defining:

**What you want to see → How you want to filter it → Which keys to include**

In this example:

**Hosts → Apps → `http, https`**

creates a view of hosts associated with HTTP and HTTPS traffic.

This is one example of how Filtered Counter Groups can be used to create custom traffic views for specific monitoring requirements.