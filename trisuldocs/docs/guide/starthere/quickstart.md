---
title: How to Get Started
sidebar_label: Quickstart
---

# How to Get Started

Trisul is incredibly easy to get started on. Plan for about **20-30 minutes** from a blank VM to your first dashboard.


:::success Included Evaluation License 
Every installation includes a built-in 7-day evaluation license - no signup step blocks you from trying it. After the evaluation period, you can purchase and activate a production license; Trisul prompts you with upgrade options on login.
:::


Here is how you get started with links to relevant pages. 


### Step 1: Get a Linux VM or a Bare Metal machine ready 

Ubuntu and RHEL/CentOS are supported. If you're not sure your hardware is enough, especially for packet-capture (NSM) mode, which is more resource-hungry than flow-based modes. Check **[System Requirements](/docs/guide/starthere/setuptrisul/install/requirements)** first; it breaks sizing down by deployment scale and by mode.


### Step 2: Sign up and download Trisul

Visit the **[Trisul Get Started page](https://www.trisul.org/download/)** and sign up, this also activates your 7-day evaluation license.

### Step 3: Install

Follow **[Installing Trisul](/docs/guide/starthere/setuptrisul/install/doinstall)**. This covers package install and verification; if you're upgrading an existing instance instead, see [Upgrading Trisul](/docs/guide/starthere/setuptrisul/install/doupgrade)


### Step 4: Tell Trisul what to monitor, and pick your mode

Trisul does four jobs on one platform, and this is the step where they diverge. Send Trisul either raw packets (via a SPAN/TAP port) or NetFlow/IPFIX/sFlow exports, and pick the mode that matches what you're here for:
 
| I want to... | Send this | Configure this | Then run this mode |
|---|---|---|---|
| Monitor security threats from raw traffic | Packets, via SPAN port | [Configure Packet Capture](/docs/guide/starthere/setuptrisul/network/input_packets) | Network Security Monitoring |
| Analyze traffic from routers/firewalls/switches | NetFlow / IPFIX / sFlow | [Configure NetFlow](/docs/guide/starthere/setuptrisul/network/input_netflow) | NetFlow Analyzer |
| Generate compliance records | NetFlow (regulatory format) | [Configure NetFlow](/docs/guide/starthere/setuptrisul/network/input_netflow) | DoT Compliance / IPDR |
| Run carrier-scale NetFlow + BGP analytics | NetFlow + BGP peering | [Configure NetFlow](/docs/guide/starthere/setuptrisul/network/input_netflow) | ISP Analytics |
 
You'll choose the mode itself on first login - see [Selecting the Product Mode](/docs/guide/starthere/setuptrisul/install/selectmode). Nothing here is permanent; you can change modes later from **Web Admin → Manage → App Settings → UI**.
 
Not sure which row fits? [How Trisul Works](/docs/guide/starthere/what_is_trisul/) walks through the four product modes in more depth - worth a detour if you want the "why" before the "how."


### Step 5: Login and start viewing 

Point your browser at `http://<your-server-ip>:3000` and log in. See [Logging In](/docs/guide/starthere/setuptrisul/login) for default credentials and first-login steps.
 
**Congratulations! You're running Trisul.** From here:
 
- New to the terminology (NetFlow, PCAP, ASN, and so on)? The **[Glossary](/glossary)** has it.
- Ready to go deeper on your specific mode? Jump to the [NetFlow Analyzer](/docs/prodguide/nf/), [IPDR](/docs/prodguide/ipdr/), or [ISP Analytics](/docs/prodguide/isp/) guide, or the [User Guide](/docs/guide/ug/) for NSM.
- Setting this up for a team, not just yourself? See [Licensing](/docs/guide/starthere/setuptrisul/license/) and [User Management](/docs/guide/ag/) next.
 
