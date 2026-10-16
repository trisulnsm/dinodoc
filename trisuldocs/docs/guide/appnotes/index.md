---
sidebar_label: Overview
description: Trisul app notes. Each one solves a specific network problem end to end, from setup through analysis, alerting and tuning.
---

# App Notes

An app note solves one network problem from start to finish. It tells you what to configure, where to look in the web interface, how to set up alerts, and what to tune once it is running.

Use an app note when you have a specific problem to solve, such as "who is using my WAN link?". To learn what a single screen or setting does, use the [User Guide](/docs/guide/ug/) instead.

## What's in each app note

Every app note follows the same structure, so you can skip to the part you need.

| Section | What it gives you |
| --- | --- |
| Summary | The problem and the outcome, in one paragraph |
| The problem | Why the problem matters and what you need to find out |
| How Trisul approaches it | The Trisul features involved and how data flows through them |
| Prerequisites | Product mode, version, data sources and access you need first |
| Configuration | One-time setup steps, run as `admin` |
| Analysis walkthrough | Stage-by-stage investigation in the web interface, run as `user` |
| Alerting & automation | Alerts that catch the problem next time, and how to deliver them |
| Tuning & limitations | Threshold guidance, costs, and what the approach can't do |
| Next steps | Related docs, use cases and blogs |

The table at the top of each note lists the product line, the Trisul version it was tested on, the data sources it needs and the estimated setup time.

## App notes by product mode

App notes are grouped by the product mode they apply to. To check which mode you run, see [Product Modes](/docs/guide/starthere/what_is_trisul/productmodes).

### Trisul NetFlow Analyzer

| ID | App note | What you'll do | Setup time |
| --- | --- | --- | --- |
| AN-NF-001 | [Find the Hosts and Apps Hogging Your WAN Bandwidth](/docs/guide/appnotes/an_nf_001_bandwidth_hogs) | Rank the top hosts and applications on a WAN link, drill down to their flows, and alert when a host crosses a bandwidth limit | 30 minutes |
