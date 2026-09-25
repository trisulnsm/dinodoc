---
title: How to Get Started
sidebar_label: Quickstart
---

# How to Get Started

Plan for about **20-30 minutes** from a blank VM to your first dashboard.


:::success Included Trial License 
Every installation includes a built-in 7-day trial license - no signup step blocks you from trying it. After the trial period, you can purchase and activate a production license; Trisul prompts you with upgrade options on login.
:::


Here is how you get started with links to relevant pages. 


### Step 1: Get a Linux VM or a Bare Metal machine ready 

Ubuntu and RHEL/CentOS are supported. Packet capture mode (used by Trisul NSM) needs more resources than flow-based mode (used by the other three product modes). If you're not sure your hardware is enough, check **[System Requirements](/docs/guide/starthere/setuptrisul/install/requirements)** first. It breaks sizing down by deployment scale and by processing mode.


### Step 2: Sign up and download Trisul

Visit the **[Trisul Get Started page](https://www.trisul.org/download/)** and sign up, this also activates your 7-day trial license.

### Step 3: Install

Follow **[Installing Trisul](/docs/guide/starthere/setuptrisul/install/doinstall)**. To check package signatures before you install, see [Verifying Packages](/docs/guide/starthere/setuptrisul/install/pkgverify). If you're upgrading an existing instance instead, see [Upgrading Trisul](/docs/guide/starthere/setuptrisul/install/doupgrade).


### Step 4: Tell Trisul what to monitor, and pick your mode

Trisul does four jobs on one platform, and this is the step where they diverge. Send Trisul either raw packets (via a SPAN/TAP port) or NetFlow/IPFIX/sFlow exports, and pick the mode that matches what you're here for:
 
| I want to... | Send this | Configure this | Then run this mode |
|---|---|---|---|
| Monitor security threats from raw traffic | Packets, via SPAN port | [Configure Packet Capture](/docs/guide/starthere/setuptrisul/network/input_packets) | Trisul NSM |
| Analyze traffic from routers/firewalls/switches | NetFlow / IPFIX / sFlow | [Configure NetFlow](/docs/guide/starthere/setuptrisul/network/input_netflow) | Trisul NetFlow Analyzer |
| Generate compliance records | NetFlow (regulatory format) | [Configure NetFlow](/docs/guide/starthere/setuptrisul/network/input_netflow) | Trisul IPDR DoT Compliance Solution |
| Run carrier-scale NetFlow + BGP analytics | NetFlow + BGP peering | [Configure NetFlow](/docs/guide/starthere/setuptrisul/network/input_netflow) | Trisul ISP Analytics |
 
You'll choose the mode itself on first login - see [Selecting the Product Mode](/docs/guide/starthere/setuptrisul/install/selectmode). Nothing here is permanent; you can change modes later from **Web Admin → Manage → App Settings → UI**.
 
Not sure which row fits? [Product Modes](/docs/guide/starthere/what_is_trisul/productmodes) compares the four product modes - worth a detour if you want the "why" before the "how."


### Step 5: Login and start viewing 

Point your browser at `http://<your-server-ip>:3000` and log in. See [Logging In](/docs/guide/starthere/setuptrisul/login) for default credentials and first-login steps.
 
**Congratulations! You're running Trisul.** From here:
 
- New to the terminology (NetFlow, PCAP, ASN, and so on)? The **[Glossary](/glossary)** has it.
- Ready to go deeper on your specific mode? Jump to the [Trisul NSM](/docs/prodguide/nsm/), [Trisul NetFlow Analyzer](/docs/prodguide/nf/), [Trisul IPDR DoT Compliance Solution](/docs/prodguide/ipdr/), or [Trisul ISP Analytics](/docs/prodguide/isp/) guide. The [User Guide](/docs/guide/ug/) covers what all modes share.
- Past the 7-day trial? See [Licensing](/docs/guide/starthere/setuptrisul/license/) to get and install a production license.
- Adding people? See [Users](/docs/guide/ag/webadmin/manageusers) to create accounts for your team.
 
