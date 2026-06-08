# IPDR Cloud

Trisul IPDR Cloud at **trisulipdr.in**  is a fully managed IPDR compliance service. 
You do not install or operate Trisul IPDR yourself, Trisul hosts and operates the platform. Your responsibility is to send the required telemetry from your network to the endpoint provided at the end of onboarding.

## Overview

IPDR Cloud is intended for ISPs who want regulatory IPDR compliance without the headache of running their own IPDR server. During onboarding you work with the Trisul team to configure your deployment options. When onboarding is complete, Trisul provides the connection details you need to start sending data.

At minimum, every IPDR Cloud customer receives:

- An **IPv4 address** — the endpoint where your network must export NetFlow or IPFIX

If you opt in to **AAA processing**, you also receive:

- An **SFTP username and password** — used to upload RADIUS AAA log dumps to the same IPv4 endpoint

## Onboarding

The onboarding process covers your compliance requirements, expected traffic volume, retention needs, and whether AAA-based user identification is required.

Typical steps:

1. Contact Trisul to start an IPDR Cloud subscription.
2. Provide details about your network — peak throughput, CGNAT usage, RADIUS/AAA environment, and any jurisdiction-specific requirements.
3. Choose whether to enable AAA processing for dynamic subscriber identification.
4. Complete onboarding and receive your **IPv4 endpoint** (and SFTP credentials if AAA processing is enabled).

:::info[What you receive at the end of onboarding]
Trisul IPDR provides a single IPv4 address that serves as the data-collection endpoint for your deployment. 
Configure your network elements to send NetFlow to this address. 
If AAA processing is enabled, use the SFTP username and password provided during onboarding to upload RADIUS logs to the same IPv4 address.
:::

## Send NetFlow to the IPDR Cloud endpoint

After onboarding, configure your gateway routers and other flow-exporting devices to send NetFlow or IPFIX to the IPv4 address provided by Trisul.

General guidelines:

- Enable NetFlow or IPFIX on **gateway routers** and **uplink interfaces**
- Point the flow exporter at the **IPv4 endpoint** supplied at the end of onboarding
- Use the **default NetFlow port UDP 2055** unless Trisul specifies a different port during onboarding
- Use the lowest acceptable sampling rate for your traffic volume
- IPFIX is supported in addition to NetFlow v5/v9
- If firewalls sit between your routers and the Trisul endpoint, add rules to **allow outbound UDP/2055** from the flow-exporting devices to the assigned IPv4 address

### Example: Cisco NetFlow configuration

Replace `203.0.113.50` with the IPv4 endpoint provided at the end of onboarding.

```bash
flow exporter TRISUL-IPDR
 destination 203.0.113.50
 transport udp 2055

flow monitor TRISUL-MONITOR 
 exporter TRISUL-IPDR
 record netflow ipv4 original-input

interface GigabitEthernet0/0/0
 ip flow monitor TRISUL-MONITOR input
```

Enable the monitor on each uplink or gateway interface that carries subscriber traffic. Adjust the interface name to match your device.

For additional router models and configuration tips, see [NetFlow](netflow).

:::tip[Verify export is working]
After configuring your routers and confirming your gateways are whitelisted, verify that flow records are reaching the Trisul endpoint. Contact Trisul support if you do not see traffic reflected in your IPDR Cloud environment within the expected timeframe.
:::

## Gateway whitelist 
For added security, Trisul maintains a whitelist ACL for IPDR Cloud customers. 
NetFlow from sources that are not on the whitelist is dropped. 
After configuring NetFlow on your gateways, contact Trisul with the **public IPv4 addresses of your flow-exporting gateways** so they can be added to the whitelist.


## AAA processing (optional)

If you opted for AAA processing during onboarding, you must also send RADIUS AAA log dumps to the IPDR Cloud endpoint. This allows Trisul IPDR to correlate flow and NAT records with subscriber user IDs.

### SFTP upload

Use the **username and password** provided at the end of onboarding to SFTP RADIUS log files to the **same IPv4 endpoint** assigned for NetFlow collection.

Typical workflow:

1. On your RADIUS server, export active and closed sessions periodically — typically once per hour.
2. Name each dump file with a timestamp so files can be processed in order. For example: `radiusaaa0_CDRs2023-09-27_133000.csv` or `netxstream-nas1-1740587653.csv`.
3. SFTP the file to the Trisul IPDR Cloud IPv4 endpoint using the provided credentials.
4. Repeat on your chosen schedule (for example, every hour via cron).

The expected CSV fields and file formats are described in [AAA and RADIUS](radius) and [Trisul AAA ingestor](trisul_aaaing).

:::warning[AAA processing requires regular uploads]
If you opted for AAA processing, SFTP uploads are required for accurate subscriber identification in IPDR output. Missing or delayed RADIUS dumps will result in flows without user ID attribution.
:::

## What IPDR Cloud handles for you

With IPDR Cloud, Trisul manages:

- Platform installation, upgrades, and maintenance
- Storage, retention, and archival per your subscription
- IPDR record generation, query processing, and compliance reporting
- AAA log ingestion and correlation (when enabled)
- Storing offline backups of all data in addition to AWS own backups for S3 Glacier

You manage:

- NetFlow/IPFIX export from your network to the assigned IPv4 endpoint
- RADIUS AAA log export and SFTP upload (when AAA processing is enabled)

## Also see

- [NetFlow](netflow) — configuring flow export from your routers
- [AAA and RADIUS](radius) — AAA integration overview
- [Trisul AAA ingestor](trisul_aaaing) — RADIUS dump file format and scheduling
- [Installation](install) — for self-hosted on-premises IPDR deployments
