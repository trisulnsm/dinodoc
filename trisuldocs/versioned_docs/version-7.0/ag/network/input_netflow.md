# Configure NetFlow 

This section helps you set up Trisul to ingest flow-based network measurements when packet capture is unavailable, impractical, or unnecessary. Trisul can accept NetFlow and NetFlow-like formats, including NetFlow v5, NetFlow v9, IPFIX, sFlow, and jFlow.

## When to Use NetFlow

NetFlow is ideal when:

- You can’t access raw packets due to infrastructure or policy constraints
- Traffic volumes are too high for full packet capture
- You want lightweight, scalable visibility across many devices

NetFlow doesn’t replace packet capture in all cases. For many deployments, the best results come from **using NetFlow alongside raw packets**, allowing Trisul to balance depth with coverage.

Next Steps: For step-by-step configuration, see the [Configuring Trisul with Netflow](/docs/ug/netflow/) guide.