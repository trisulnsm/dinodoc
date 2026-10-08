---
title: Trisul AI CLI reference
sidebar_label: CLI reference
description: Commands, API server options, settings and log file for the Trisul AI CLI.
---

# Trisul AI CLI reference

Reference for the `trisul_ai_cli` package. To install and connect it, see [Set up Trisul AI](./setup).

## Run modes

| Mode | Command | Use it for |
| --- | --- | --- |
| CLI mode | `trisul_ai_cli` | Interactive chat in a terminal. |
| API mode | `trisul_ai_cli api` | A REST server that the WebTrisul **Trisul AI** chat page talks to. |

Run both from the virtual environment where you installed the package. Both use the same settings.

## API server options

| Flag | Meaning |
| --- | --- |
| `--host` | Bind address. `0.0.0.0` lets browsers on other machines reach the server. |
| `--port` | Listen port. Default `8200`. Must match **AI Endpoint Port** in WebTrisul. |
| `--log-level` | `debug`, `info`, `warning` or `error`. |
| `--ssl-certfile`, `--ssl-keyfile` | Turn on HTTPS. Select **Enable SSL Mode** in WebTrisul if you use them. |

| Endpoint | Purpose |
| --- | --- |
| `/api/query` | The WebTrisul chat sends questions here. |
| `/api/health` | Health check. A healthy server returns `"status":"ok"` and `"mcp_connected":true`. |
| `/docs` | Interactive API documentation. |

## Commands

Type these at the CLI chat prompt. They aren't case-sensitive. The CLI handles them itself and doesn't send them to the LLM.

| Command | What it does |
| --- | --- |
| `exit` or `quit` | Saves your user memory, then exits. |
| `change_llm_api_key` | Changes the API key for the current LLM provider. |
| `change_llm_model` | Picks a Gemini, OpenAI or Anthropic model, or **custom:local** for a self-hosted endpoint. |
| `change_custom_llm` or `configure_custom_llm` | Sets a self-hosted LLM: API base URL, model name and optional API key. |
| `change_embedding_model` | Picks an embedding model (Gemini, OpenAI or VoyageAI) and asks for its API key if it's missing. |
| `change_embedding_api_key` | Changes the API key for the current embedding provider. |

## Data source

By default, Trisul AI reads data from `context0` through the local IPC socket.

| Data source | Value |
| --- | --- |
| Default local context | `context0` |
| Another local context | Its name, for example `default` or `context_XYZ` |
| A remote Trisul server | `tcp://<ip>:<port>`. The remote server's TRP endpoint must use TCP instead of IPC. |

In CLI mode you can also switch to a remote server in the chat:

~~~text
You: Connect to the remote server with IP address 10.16.8.44 and port 5008.
Bot: OK. I will use the ZMQ endpoint 'tcp://10.16.8.44:5008' for all subsequent queries.
~~~

In the WebTrisul chat, the context comes from WebTrisul. Each question is locked to the context you selected before you opened the **Trisul AI** page.

## Settings file

The CLI stores its settings in `.env`. Use the [commands](#commands) to change them, rather than editing the file.

| Variable | Meaning |
| --- | --- |
| `TRISUL_AI_PROVIDER` | `gemini`, `openai`, `anthropic` or `custom` |
| `TRISUL_AI_MODEL` | Model name, for example `gemini-3.6-flash` |
| `TRISUL_GEMINI_API_KEY`, `TRISUL_OPENAI_API_KEY`, `TRISUL_ANTHROPIC_API_KEY` | API key for the provider |
| `TRISUL_CUSTOM_API_BASE_URL` | Base URL of a self-hosted LLM (custom only), for example `http://localhost:11434` |
| `TRISUL_CUSTOM_API_KEY` | API key for a self-hosted LLM (optional) |
| `TRISUL_EMBEDDING_PROVIDER` | `gemini`, `openai` or `voyageai` |
| `TRISUL_EMBEDDING_MODEL` | Embedding model name, for example `models/gemini-embedding-001` |
| `TRISUL_AI_MAX_TOKENS` | Optional cap on tokens per answer, for example `16384` |

## Log file

The CLI writes `trisul_ai_cli.log` in the directory where you started it. The log holds:

- the questions asked (query history)
- the tools called and their responses
- errors and debug information

## Tools Trisul AI can call

The LLM calls these Trisul tools to answer you. You don't call them yourself, but the names help when you read the log.

| Tool | Purpose |
| --- | --- |
| `list_all_contexts` | Lists contexts, whether each is running, and their time window. |
| `list_all_probes` | Lists probes and their running status per context. |
| `list_all_profiles` | Lists capture profiles and the probes that use them. |
| `get_trisul_mode` | Shows the mode of a context and probe (`TAP` or `NETFLOW_TAP`). |
| `list_capture_interfaces` | Lists capture adapters for a profile. |
| `list_all_available_counter_groups` | Lists all counter groups. |
| `get_cginfo_from_countergroup_name` | Gets the details of a counter group by name. |
| `get_counter_group_topper` | Gets the top N items in a counter group. |
| `get_key_traffic_data` | Gets traffic over time for specific keys. |
| `create_crosskey_counter_group` | Proposes, then (after you confirm) creates a crosskey counter group. |
| `create_filter_counter_group` | Proposes, then (after you confirm) creates a filtered counter group. |
| `create_keyset_counter_group` | Proposes, then (after you confirm) creates a keyset counter group. |
| `list_derived_counter_group_types` | Describes crosskey, filter and keyset groups and when to use each. |
| `list_dashboard_module_types` | Lists dashboard module templates and their options. |
| `generate_dashboard_json` | Validates and previews a dashboard, then writes the package after you confirm. |
| `rag_query` | Searches the Trisul documentation. |
| `generate_and_show_chart` | Draws a traffic chart. |
