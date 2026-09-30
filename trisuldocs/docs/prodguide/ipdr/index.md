# Trisul IPDR DoT Compliance Solution Guide

**Trisul IPDR DoT Compliance Solution** helps Internet Service Providers meet regulatory requirements for flow, NAT and AAA logging. It stores an IPDR (Internet Protocol Detail Record) for every flow, and lets authorized users query those records.

Trisul IPDR runs on the Trisul Network Analytics platform. Read this guide along with the [Trisul User Guide](/docs/guide/ug).

## Choose how you deploy

| If you want to… | Start here |
| --- | --- |
| Run Trisul IPDR on your own server | [System Requirements](/docs/prodguide/ipdr/requirements), then [Installation](/docs/prodguide/ipdr/install) |
| Let Trisul host and operate IPDR for you | [IPDR Cloud](/docs/prodguide/ipdr/ipdr-cloud) |

## Set up a self-hosted IPDR server

1. Size the server: [System Requirements](/docs/prodguide/ipdr/requirements).
2. Install Trisul and select IPDR mode: [Installation](/docs/prodguide/ipdr/install).
3. Send NetFlow or IPFIX, NAT logs and AAA logs to Trisul: [Network configuration](/docs/prodguide/ipdr/network-config).
4. Add customer details for static IPs: [Customer Inventory Mappings](/docs/prodguide/ipdr/staticip-mappings).
5. Check your setup before going live: [IPDR Production Checklist](/docs/prodguide/ipdr/prod_checklist).

## Answer a query request

- [Submit Queries](/docs/prodguide/ipdr/submit-queries): search IPDR records for one or more IP addresses.
- [View Dashboard](/docs/prodguide/ipdr/ipdrdashboard): track query status and download results.
- [Format of the output report](/docs/prodguide/ipdr/ipdrexportfields): the fields in each report.

## Automate with the APIs

- [IPDR Query API](/docs/prodguide/ipdr/api-ipdr-query)
- [IPDR Customer Management API](/docs/prodguide/ipdr/ipdr_customers_api)
- [IPDR Customer IP Mapping API](/docs/prodguide/ipdr/ipdr_customer_mappings)
