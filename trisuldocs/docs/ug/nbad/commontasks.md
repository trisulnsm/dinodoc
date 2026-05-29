# Common Tasks

### View application bandwidth breakdown
Navigate to **NBAD → Layer 7 Metrics**. The Applications panel shows top apps ranked by total bandwidth. Click any application to open a counter group drilldown with full historical charts.

---

### Identify DNS anomalies
Go to **NBAD → Layer 7 Metrics** and scroll to the **DNS Traffic** panel. Look for unusual resolver IPs in the chart or high query volumes to unexpected destinations in the **Top DNS Resources** table.

---

### Investigate P2P or Tor usage
Navigate to **NBAD → P2P Analytics**. Check the **BL Alerts** panel for Tor-node connections and the **BitTorrent Client Traffic** chart for sustained P2P sessions. Cross-reference with the **IDS P2P Alerts** feed for signature-confirmed activity.

---

### Diagnose network performance issues
Go to **NBAD → TCP Analyzer**. Sort the **Internal Hosts: Setup Latency** and **Internal Hosts: Avg Retransmit Rate Percent** panels to identify the most affected hosts. Click any host for per-flow drilldown. Use **Flows with greater than 5% retransmit rate** to pull packets into Wireshark.

---

### Check geographic traffic distribution
Navigate to **NBAD → Flow Map**. Adjust the **Time window** to your investigation period. Review **Top Countries Uploaded to** and **Top Countries Downloaded from** panels. Unusual countries in the top list warrant flow-level investigation via [Explore Flows](../tools/explore_flows).

---

### Compare IPv4 and IPv6 usage
Go to **NBAD → IPv4 / IPv6 Dashboard**. The **Unique IPv4 Hosts / Unique IPv6 Hosts** tiles give an immediate scale comparison. Review **Top Apps over IPv4 and IPv6** to identify applications that have adopted dual-stack or IPv6-only paths.


