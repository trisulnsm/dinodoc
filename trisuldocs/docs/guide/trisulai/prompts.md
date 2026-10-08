---
title: What you can ask Trisul AI
sidebar_label: What you can ask
description: Example questions by task, output types, and what Trisul AI can't do.
---

# What you can ask Trisul AI

Example questions, grouped by task. Change the hosts, apps and time windows to match your network.

## Example questions

| Task | Example |
| --- | --- |
| **Top-N** | `show top 5 hosts` · `top 10 applications in the last 24 hours` · `which ASNs pushed the most traffic this week?` |
| **Trends and charts** | `show the traffic chart of 172.18.8.194 for last 5 minutes` · `show https traffic chart for last 10 minutes` |
| **Compare** | `compare today's top bandwidth consumers with yesterday's` |
| **Investigate** | `investigate the traffic spike around 3 PM` · `any unusual spike in inbound flows lately?` |
| **Raw flows** | `show the raw flows of last 10 minutes` |
| **Reports** | `generate a pdf report with the top hosts traffic trend and a https traffic chart for last 1 hour` · `generate a excel report with top 20 applications` |
| **Dashboards** | `create a network overview dashboard` · `explain this dashboard` |
| **Counter groups** | `create a keyset counter group to show IPs 192.168.10.21–25 as Chennai` |
| **Context** | To change context, select it in WebTrisul and reopen the **Trisul AI** page. Don't ask the chat to switch. |
| **Health** | `i cant see today's traffic data in the UI can you debug what is the issue` |
| **Product help** | `what is key set counter group` · `how do I create a dashboard?` |

## Write better questions

- **Name the time window:** "last 30 minutes", "yesterday 14:00–16:00".
- **Name the thing:** an IP, an app name, an interface or a counter group.
- **Name the output:** "as a table", "as a pie chart", "as a PDF".
- **Follow up:** the chat remembers the conversation, so "now only inbound" works.

## Output types

| Output | How you get it |
| --- | --- |
| Text answer | Any question |
| Table | Top-N, flows, lists |
| Chart | Line or pie. Line charts have zoom and pan controls. Dashboards can also hold Sankey diagrams, trees, badges and tables. |
| PDF report | Ask for a PDF. Click **Download report**. |
| Excel report (.xlsx) | Ask for an Excel report. Click **Download report**. |
| Dashboard | Ask for a dashboard and approve the plan. See [Build a dashboard](./build-dashboard). |
| Counter group | Ask for one and approve the proposal. See [Create a counter group](./create-countergroup). |

## What Trisul AI can't do

- Read packet captures (PCAPs).
- Run commands on your servers. It can suggest them.
- Answer about data Trisul doesn't collect. If no counter group has the data, it tells you and may propose one.
- Reach the LLM if the CLI machine can't reach your provider.

## Accuracy

The LLM writes the answer, so check important numbers against the matching WebTrisul screen. Each answer names the counter group it used, so you know where to look. Answers about menus and procedures come from the docs; if one doesn't match your screen, follow the docs page.
