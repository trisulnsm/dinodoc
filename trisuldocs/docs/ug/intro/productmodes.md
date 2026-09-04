# Product Modes

Trisul can be used for different network monitoring and analytics requirements. **Product Modes** provide a preconfigured setup for a specific use case, including the relevant counters, flows, menus, dashboards, and other settings.

Trisul provides four Product Modes:

| Product Mode | Processing Mode | What it does | Best for |
| --- | --- | --- | --- |
| **Trisul Network Security Monitoring** ![Trisul NSM](image/nsm_prod.png) | Packet Capture Mode | Captures packets from a SPAN/port mirror, stores raw PCAPs, and generates rich metadata such as flows, applications, hosts, files, and alerts. | Deep troubleshooting, security visibility, investigation, and forensics. |
| **Trisul NetFlow Analyzer** ![Trisul NetFlow](image/netflow_prod.png) | Flow-Based Mode | Processes flow records to provide lightweight, scalable traffic analytics across large networks. [**See Usecases**](https://trisul.org/trisul-netflow-analyzer-usecases/) | Routers, firewalls, or devices that export NetFlow/IPFIX. |
| **Trisul DoT Compliance Solution** ![Trisul DoT](image/ipdr_prod.png) | Flow-Based Mode | Extracts subscriber activity records (IPDR) from live traffic in the required format for lawful retention. [**See Usecases**](https://trisul.org/trisul-ipdr-use-cases/) | ISPs that need DoT-compliant IPDR generation and long-term storage. |
| **Trisul ISP Analytics** ![Trisul ISP](image/isp_prod.png) | Flow-Based Mode | Combines NetFlow with optional BGP to provide AS and prefix-level traffic analytics, route/BGP visibility, content provider and OTT analytics, and geo-mapped traffic insights. | ISPs needing peering visibility, AS/prefix analytics, traffic engineering, route and geo traffic oversight, and peering optimization. |


### Product Mode vs Processing Mode

These two terms describe different aspects of Trisul:

- **Product Mode** describes **what you use Trisul for**, based on your monitoring or business requirement.
- **Processing Mode** describes **how Trisul receives and processes network data**, such as packet-based or flow-based processing.


See [**Processing Modes**](/docs/ug/intro/dataflow#input-processing-modes) to learn how network data enters and is processed by Trisul.

> **Note:** Product Mode provides a preconfigured starting point for the selected use case. It does not prevent you from further configuring Trisul for your specific requirements.

To learn how to select a Product Mode during installation, see [**Selecting a Product Mode**](/docs/ag/install/selectmode).