# Trisul Licensing 

A Trisul Network Analytics license names the **Product** you are licensed for and sets one **Limit** on how much of it you use.

- **Product** : the kind of Trisul deployment, for example NetFlow analytics or IPDR flow logging.
- **Limit Type** : what is counted against the license. The default is the number of simultaneously active internal hosts (IPs in your [Home Network](/docs/guide/learntrisul/homenetwork_concepts)). A license can instead be sized by interfaces, devices or contexts and, for IPDR, by bandwidth, flow records per day or ingest volume per day.
- **Limit** : the licensed amount for that limit type, or UNLIMITED.

| Product | Limit Types |
|---|---|
| NETFLOW, ISP, NSM | INTERNAL_HOSTS (default), INTERFACES, DEVICES, CONTEXTS |
| IPDR | BANDWIDTH, FLOWRECORDSPERDAY, INGESTVOLUME |

See the [Introduction](/docs/guide/starthere/setuptrisul/license/intro) for what each product and limit type means, how to get your Machine ID and how to size your license. When you receive your license file, see [Installing a License File](/docs/guide/starthere/setuptrisul/license/install).
