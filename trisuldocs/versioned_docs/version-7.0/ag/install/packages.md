# Core Packages 

Before installation, take a moment to understand the Trisul packages. Each package handles a different part of the system, and this page gives you a clear idea of what each package does so you know exactly what you are installing.

The Trisul Network Analytics system consists of 3 Core and 2 Optional Plugin packages.

## Core Packages

:::warning required
All three core packages are required for a complete setup, while plugin packages are optional.
:::

- :ticket: **trisul-probe**
  - Handles network capture and stream processing. This is the component that observes your network traffic and extracts analytics data from it.
- :ticket: **trisul-hub**
  - Stores, indexes, and lets you query the data coming from probes. This is where all captured information is kept and searched.
- :ticket: **webtrisul**
  - Provides the web interface you log into. This is the dashboard where you view charts, reports, and analytics.

## Plugin Packages

These are optional and extend Trisul’s capabilities:

- :electric_plug: **trisul-badfellas** 
  - Badfellas plugin adds threat-intelligence checks by comparing your traffic against known malicious IPs and domains.
- :electric_plug: **trisul-geo**
  -  Geo plugin adds geolocation data, showing the country, ASN, and city information for the IPs seen in your traffic.


## Meta Package

A meta-package called **`Trisul Full`** is also available. This is a shortcut package that installs all of the above (core + plugins) in one step. 

Now that you know what each package does, you’re ready to follow the install steps for your platform.