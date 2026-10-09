---
title: Query IPDR logs with AI
sidebar_label: AI Query
description: Describe an IPDR request in plain language, or attach the request letter, and let AI fill in the IPDR queries for you.
---

# Query IPDR logs with AI

**AI Query** turns a plain-language request, or an attached request document, into IPDR queries. You review the queries, then submit them. Trisul runs them through the normal IPDR query workflow, the same one as **Query Logs**.

**Applies to:** Trisul IPDR DoT Compliance.  
**Who uses it:** compliance users who answer agency requests (for example `dotuser`).

:::note IPDR AI Query is not Trisul AI
This page covers the AI in the IPDR product. It is a separate feature from [Trisul AI](/docs/guide/trisulai/), the general network analytics assistant.

| | IPDR AI Query | Trisul AI |
| --- | --- | --- |
| Job | Fill in IPDR queries from a request | Answer questions about traffic, build reports and dashboards |
| Where | **IPDR Logs → AI Query** | **Trisul AI** page |
| LLM | Google Gemini | Gemini, OpenAI, Anthropic or a self-hosted OpenAI-compatible LLM, through the Trisul AI CLI |
| Setup | **Gemini API Key** in **API Keys** | AI endpoint in **Settings → Trisul AI** |
:::

## What the AI does and doesn't do

The AI only reads your request and fills in the query fields: IP, port, NAT IP, device IP, username, and the from and to times.

It doesn't:

- Search, read or see IPDR records.
- Run queries or build the report. The IPDR query engine does that, with the same validation and access control as a manual query.
- Make legal or compliance decisions, or skip any approval step.

:::caution Your request goes to Google Gemini
The text you type, and the file you attach, are sent to Google Gemini to extract the query fields. Check your organization's rules on sharing agency request contents with a third-party service before you use AI Query. 
:::

## Before you begin: add a Gemini API key (admin)

An admin does this once.

1. Log in to WebTrisul as **Admin**.
2. Click the **⋯** menu at the top left, then click **Settings**.
3. On **Web Trisul Settings**, click **API Keys**.
4. In **Gemini API Key**, paste your Google Gemini API key.
5. Click **Save**.

![API Keys settings with the Gemini API Key field](./images/ai-query-apikey.png)

The key applies to the whole server. Every user who runs AI Query uses this one key.

## Create queries from a request

1. Log in as a compliance user and select the IPDR context.
2. Click **IPDR Logs → AI Query**.

   The **AI Powered IPDR Query** page opens. The header reads **Trisul AI**, **IPDR Query assistance · Google Gemini**.

   ![AI Powered IPDR Query page](./images/ai-query-start.png)

3. Give the AI the request, in one of two ways:
   - **Type it** in **Describe your Query here**. Include the identifier (IP, port, NAT IP or username), the exact time window with date and time, and the type of records you need. For example: `Get IPDR logs for IP 203.0.113.1 port 443 from 2025-09-15 11:55 to 12:10`.
   - **Attach the request document.** Click **+**, then choose the file. The file appears above the input box. Click the **x** on it to remove it.

     ![Request document attached](./images/ai-query-attach.png)

     The file can be up to 10 MB. Supported types are `.txt`, `.csv`, `.xlsx`, `.xls`, `.ods`, `.docx`, `.odt`, `.pdf`, `.png`, `.jpg` and `.jpeg`.

     - For `.docx`, `.odt`, `.pdf`, `.png`, `.jpg` and `.jpeg`, the browser needs internet access. The page loads the libraries that read Word and PDF files and run OCR on images.
     - Legacy `.doc` files are not read. Save the file as `.docx`, then attach it.

4. Click the send button.

   The AI replies with a summary, for example **Created 8 IPDR reports for various IPs and ports on 2025-09-15.**, and two buttons: **Generate IPDR Report** and a view (eye) button.

   ![AI result with Generate IPDR Report and view buttons](./images/ai-query-result.png)

## Check the queries before you submit

Always review what the AI extracted. A wrong digit in an IP, port or time produces a wrong report.

1. Click the view (eye) button.

   **List of Queries** shows one row per query, with **IP**, **PORT**, **NAT IP**, **DEVICE IP**, **USERNAME**, **FROM** and **TO**.

   ![List of Queries](./images/ai-query-list.png)

2. Compare every row with the original request: the identifiers, the date, and the start and end times.
3. Check the time zone. **FROM** and **TO** use the system time zone. If the request gives times in another time zone, convert them to the system time zone before you send the request.
4. Click **Close**.

If anything is wrong, tell the AI what to fix in a new message. The AI updates the same query list. Click the view (eye) button and check the list again. To enter a query by hand instead, use **Query Logs**. See [Submit queries](/docs/prodguide/ipdr/submit-queries).

## Submit the queries

1. Click **Generate IPDR Report**.
2. Trisul submits one query per row. They appear under **Submitted queries for IPDR logs** on the IPDR page, with status **NEW**.

   ![Submitted queries for IPDR logs](./images/ai-query-submitted.png)

3. Track each query as its status moves through **NEW**, **STARTED**, **DISPATCH** and **COMPLETED**. When a query is **COMPLETED**, download its report from the **DOWNLOAD** column. For what each status means, see [Submit queries](/docs/prodguide/ipdr/submit-queries).

To stop a query before it runs, click **Cancel** in its row.

## Related

- [Submit queries](/docs/prodguide/ipdr/submit-queries): the manual query form.
- [Format of the output report](/docs/prodguide/ipdr/ipdrexportfields).
- [The dotuser ID](/docs/prodguide/ipdr/specialuser).
