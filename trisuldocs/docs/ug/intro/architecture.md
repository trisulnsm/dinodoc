# Trisul Basic Architecture

Trisul consists of three main components: **Probe, Domain, and Hub**. Together, they form the core architecture for processing, organizing, and storing network data.

![basic](image/basic.png)

*Figure: Trisul Basic Architecture*

At a high level:

- [**Probe**](/docs/learntrisul/terminology#probe) is the **streaming analytics engine** that processes network traffic.

- [**Domain**](/docs/learntrisul/terminology#domain) is the **top-level organizational layer** that manages Contexts.

- [**Hub**](/docs/learntrisul/terminology#hub) is the **database and data management layer** that stores the processed data.

- [**Profile**](/docs/learntrisul/terminology#profile) is the configuration associated with a Probe. Each Probe can have its own Profile.

- [**Context**](/docs/learntrisul/terminology#context) provides the logical environment in which traffic data is organized and stored.

- [**Web Trisul**](/docs/learntrisul/terminology#webtrisul) provides the user interface for accessing and analyzing the data managed by the Hub.

> **Note:** This is a high-level view intended to help you understand the main components and how they relate to each other. It is not a complete representation of the Trisul architecture. For a detailed view, see the [**Domain architecture**](/docs/learntrisul/concepts/) documentation.