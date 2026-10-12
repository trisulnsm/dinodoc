---
title: Run Trisul AI in Docker
sidebar_label: Run in Docker
description: Run the Trisul AI API server as a Docker container, configure the LLM, and connect it to Trisul Hub over TCP.
---

# Run Trisul AI in Docker

Instead of installing the Trisul AI CLI with pip, you can run it as a Docker container. The container runs the API server that the WebTrisul **Trisul AI** chat page talks to. It replaces stages 1 and 3 of the [pip setup](./setup), up to and including starting the API server.

**Who does this:** a Trisul administrator.

## How it differs from a pip install

| | pip install | Docker |
| --- | --- | --- |
| Starts the API server | You run `trisul_ai_cli api` | Starts automatically on port 8200 |
| Reads Trisul data | Local IPC socket (`context0`) by default | **TCP only.** The container can't use the Hub's IPC socket. |
| Settings file | `.env` in the directory you start from | `/var/lib/trisul-ai/.env` inside the container, kept in a Docker volume |
| Log file | `trisul_ai_cli.log` in the directory you start from | `/var/log/trisul-ai/trisul_ai_cli.log` inside the container, and `docker logs` |

## Before you begin

You need:

- Trisul 8.0 or later (Hub and WebTrisul), installed and running.
- Docker on the machine that will run the container.
- An LLM: an API key for Google Gemini, OpenAI or Anthropic, or a self-hosted OpenAI-compatible endpoint.
- Network access from users' browsers to the container host on port 8200, and from the container to the Hub's TRP port (step 3).

## Step 1: Pull the image

~~~bash
docker pull parthasarathy369/trisul-ai-cli:latest
~~~

## Step 2: Start the container and configure the LLM

The container keeps its settings in `/var/lib/trisul-ai`. Mount the `trisul-ai-config` volume there, so the settings survive when you remove and recreate the container. Without the volume, a new container starts with no LLM settings.

Choose one way to configure the LLM.

### Option A: Pass the settings when you start the container

~~~bash
docker run -d \
  --name trisul-ai-cli \
  -p 8200:8200 \
  -v trisul-ai-config:/var/lib/trisul-ai \
  -e TRISUL_AI_PROVIDER=gemini \
  -e TRISUL_AI_MODEL=gemini-3.6-flash \
  -e TRISUL_GEMINI_API_KEY=your-api-key \
  parthasarathy369/trisul-ai-cli:latest
~~~

| Variable | Value |
| --- | --- |
| `TRISUL_AI_PROVIDER` | `gemini`, `openai`, `anthropic` or `custom` |
| `TRISUL_AI_MODEL` | The model name |
| `TRISUL_GEMINI_API_KEY`, `TRISUL_OPENAI_API_KEY`, `TRISUL_ANTHROPIC_API_KEY` | The API key for your provider |
| `TRISUL_CUSTOM_API_BASE_URL` | Base URL of a self-hosted LLM (`custom` only) |
| `TRISUL_CUSTOM_API_KEY` | API key of a self-hosted LLM (optional) |

You only pass these variables the first time. They're saved in the volume. To start a container later, leave them out:

~~~bash
docker run -d \
  --name trisul-ai-cli \
  -p 8200:8200 \
  -v trisul-ai-config:/var/lib/trisul-ai \
  parthasarathy369/trisul-ai-cli:latest
~~~

If a container with that name already exists, remove it first:

~~~bash
docker rm -f trisul-ai-cli
~~~

### Option B: Configure from inside the container

1. Start the container without the LLM variables:

   ~~~bash
   docker run -d \
     --name trisul-ai-cli \
     -p 8200:8200 \
     -v trisul-ai-config:/var/lib/trisul-ai \
     parthasarathy369/trisul-ai-cli:latest
   ~~~

   The API server starts, but every question returns **LLM is not configured.** until you finish the next steps.

2. Open a shell in the container and start the CLI:

   ~~~bash
   docker exec -it trisul-ai-cli bash
   trisul_ai_cli
   ~~~

3. Answer the prompts: choose the LLM and enter its API key, the same way as [stage 2 of the pip setup](./setup#stage-2-choose-the-llm-and-the-data-source).
4. Set the embedding model that Trisul AI uses to search the Trisul documentation. Run `change_embedding_model`, pick Gemini, OpenAI or VoyageAI, and enter its API key if the CLI asks for one. To replace the key later, run `change_embedding_api_key`.
5. Type `exit` to leave the chat, then `exit` again to leave the container.

The running API server picks up the new settings. You don't need to restart the container.

## Step 3: Let the container reach Trisul Hub over TCP

By default, Trisul Hub serves data through an IPC socket, which a container can't reach. Switch the context to a TCP endpoint.

1. On the Hub, open the context's configuration file:

   ~~~text
   /usr/local/etc/trisul-hub/domain0/hub0/<context_name>/trisulHubConfig.xml
   ~~~

   For the default context, that's `/usr/local/etc/trisul-hub/domain0/hub0/context0/trisulHubConfig.xml`.

2. Find `ZmqConnection`. It looks like this:

   ~~~xml
   <ZmqConnection>
   	ipc:///usr/local/var/lib/trisul-hub/domain0/hub0/<context_name>/run/trp_0
   </ZmqConnection>
   ~~~

3. Change it to a TCP endpoint: the Hub's IP address and a free port. For example:

   ~~~xml
   <ZmqConnection>
   	tcp://192.168.10.20:5000
   </ZmqConnection>
   ~~~

4. Restart the context:

   ~~~bash
   trisulctl_hub restart context <context_name>@hub0
   ~~~

   For the default context:

   ~~~bash
   trisulctl_hub restart context context0@hub0
   ~~~

The container must be able to reach this IP and port. Open the port in the Hub's firewall if needed.

## Step 4: Point WebTrisul at the container

Follow [Point WebTrisul at the API server](./setup#point-webtrisul-at-the-api-server). Use the container host's IP address and port `8200`.

## Step 5: Ask questions

1. Open the **Trisul AI** page in WebTrisul.
2. Start each new conversation by telling Trisul AI the Hub's TCP endpoint:

   ~~~text
   Connect to tcp://192.168.10.20:5000
   ~~~

   or

   ~~~text
   Connect to IP address 192.168.10.20 and port 5000
   ~~~

3. Then ask your question, for example `show top 5 hosts`.

:::caution
The endpoint lasts only for the current conversation. After you refresh the page or start a new conversation, tell Trisul AI the endpoint again.
:::

To chat in a terminal instead:

~~~bash
docker exec -it trisul-ai-cli trisul_ai_cli
~~~

## If it doesn't work

| Symptom | What to check |
| --- | --- |
| Every answer says **LLM is not configured.** | Set the LLM with option A or option B. Check that the `trisul-ai-config` volume is mounted at `/var/lib/trisul-ai`. |
| Answers can't see any traffic | The context still uses IPC. Switch it to TCP (step 3), then give Trisul AI the endpoint at the start of the conversation (step 5). |
| The chat shows **Connection Failed** | The container isn't running, port 8200 isn't published (`-p 8200:8200`), or **AI Endpoint IP** / **AI Endpoint Port** in WebTrisul are wrong. |

To see the logs:

~~~bash
docker logs trisul-ai-cli
~~~

The same output is in `/var/log/trisul-ai/trisul_ai_cli.log` inside the container.

## Related

- [Set up Trisul AI](./setup): the pip install.
- [CLI reference](./cli-reference)
