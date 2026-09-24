# Claude Code brief: Start Here fix-now corrections (P0-fixnow-01)

Source: `audit-01-start-here` § 4, **fix-now** tag (30 findings). Repo text re-read from the working copy on 2026-09-24. Every "Find" string below was copied from the current file.

## 1. Goal

Correct the fix-now defects in the Docs overview and Start Here pages, in place. Scope is typos, broken commands, wrong or missing links, and UI-label mismatches. No moves, no renames, no sidebar changes, no new pages.

## 2. Ground rules

- Branch: `docs/p0-fixnow-start-here` off the default branch. One PR.
- Match on the **Find** text, not on line numbers. Line numbers are hints only. If a Find string isn't present verbatim, stop on that item, skip it, and list it in the PR under "Skipped".
- Change only what each item says. Don't reflow paragraphs, retitle pages, touch `sidebars.js`, or change front matter.
- Don't touch anything listed in § 5 (out of scope). Those items are blocked on SME answers or on the new IA.
- Links: absolute `/docs/...` paths only.
- No file deletions. No image changes.
- Build must pass: `npm run clear && npm run build` with 0 broken links and 0 broken anchors.
- One commit per file is fine. Commit messages: `docs(starthere): <file> fix-now corrections (F-xx, F-yy)`.

Paths below are relative to `docs/guide/`. `ST/` = `starthere/setuptrisul/`.

## 3. Changes by file

### 3.1 `index.md` (Docs overview)

**F-B1-9** Add the NSM guide (verified published live at `/docs/prodguide/nsm/`, H1 "Trisul Network Security Monitoring (NSM) Guide").

Find:
```
Dedicated guides for [NetFlow Analyzer](/docs/prodguide/nf/), [IPDR Compliance](/docs/prodguide/ipdr/), and [ISP Analytics](/docs/prodguide/isp/).
```
Replace:
```
Dedicated guides for [Network Security Monitoring (NSM)](/docs/prodguide/nsm/), [NetFlow Analyzer](/docs/prodguide/nf/), [IPDR Compliance](/docs/prodguide/ipdr/), and [ISP Analytics](/docs/prodguide/isp/).
```

### 3.2 `starthere/quickstart.md`

**F-B1-19 (wording only)**

Find: `Trisul is incredibly easy to get started on. Plan for about **20-30 minutes** from a blank VM to your first dashboard.`
Replace: `Plan for about **20-30 minutes** from a blank VM to your first dashboard.`

Find:
```
Ubuntu and RHEL/CentOS are supported. If you're not sure your hardware is enough, especially for packet-capture (NSM) mode, which is more resource-hungry than flow-based modes. Check **[System Requirements](/docs/guide/starthere/setuptrisul/install/requirements)** first; it breaks sizing down by deployment scale and by mode.
```
Replace:
```
Ubuntu and RHEL/CentOS are supported. Packet-capture (NSM) mode needs more resources than the flow-based modes. If you're not sure your hardware is enough, check **[System Requirements](/docs/guide/starthere/setuptrisul/install/requirements)** first. It breaks sizing down by deployment scale and by mode.
```

Do **not** touch the "no signup step blocks you" admonition or Step 2 signup text (F-B1-19 signup is needs-SME).

**F-B1-20**

Find:
```
Follow **[Installing Trisul](/docs/guide/starthere/setuptrisul/install/doinstall)**. This covers package install and verification; if you're upgrading an existing instance instead, see [Upgrading Trisul](/docs/guide/starthere/setuptrisul/install/doupgrade)
```
Replace:
```
Follow **[Installing Trisul](/docs/guide/starthere/setuptrisul/install/doinstall)**. To check package signatures before you install, see [Verifying Packages](/docs/guide/starthere/setuptrisul/install/pkgverify). If you're upgrading an existing instance instead, see [Upgrading Trisul](/docs/guide/starthere/setuptrisul/install/doupgrade).
```

**F-B1-9**

Find: `Jump to the [NetFlow Analyzer](/docs/prodguide/nf/), [IPDR](/docs/prodguide/ipdr/), or [ISP Analytics](/docs/prodguide/isp/) guide, or the [User Guide](/docs/guide/ug/) for NSM.`
Replace: `Jump to the [NSM](/docs/prodguide/nsm/), [NetFlow Analyzer](/docs/prodguide/nf/), [IPDR](/docs/prodguide/ipdr/), or [ISP Analytics](/docs/prodguide/isp/) guide. The [User Guide](/docs/guide/ug/) covers what all modes share.`

### 3.3 `starthere/what_is_trisul/index.md`

**F-B1-18**

Find: `Users of Trisul view these analytics reports through an easy-to-use dashboard that opens in any web browser.`
Replace: `Users of Trisul view these analytics reports through a dashboard that opens in any web browser.`

Find:
```
:memo:  This Trisul Network Analytics User Guide covers the common parts of these four products. The unique workflows associated with each of these four products can be found in their respective guides.
```
Replace:
```
:memo:  The Trisul documentation covers the parts common to all four products. Each product's own workflows are in its [product guide](/docs/prodguide).
```

Find: `  visibility. We are in some of the largest ISPs in the world.`
Replace: `  visibility.`

Find: `The following table contains a list of things you can do with Trisul. You can find them on the main menu. `
Replace: `The following table lists what you can do with Trisul.`

Find: `Offers over 150+ traffic metrics across all network layers—out-of-the-box.`
Replace: `Offers more than 150 traffic metrics across all network layers out of the box.`

Leave "Multi Homing" as is (definition is needs-SME).

### 3.4 `starthere/what_is_trisul/architecture.md`

**F-B1-23b**

Find: `- [**Web Trisul**](/docs/guide/learntrisul/terminology#webtrisul)`
Replace: `- [**WebTrisul**](/docs/guide/learntrisul/terminology#webtrisul)`

**F-B1-8** One label for `/docs/guide/learntrisul/concepts/` everywhere, matching its H1 ("Trisul Distributed Domain Concepts").

Find: `[**Domain architecture**](/docs/guide/learntrisul/concepts/)`
Replace: `[**Distributed Domain Concepts**](/docs/guide/learntrisul/concepts/)`

### 3.5 `starthere/what_is_trisul/dataflow.md`

**F-B1-16 (Mermaid label only)** The last line overrides node E's label so the Probe node renders "Trisul". Delete this line inside the mermaid block (and the blank line before it if left dangling):

```
    E[Trisul]
```

Don't change the prose pipeline or `dataflow.png` (order is needs-SME).

### 3.6 `starthere/what_is_trisul/productmodes.md`

**F-B1-24**

Find: `[**Selecting a Product Mode**](/docs/guide/starthere/setuptrisul/install/selectmode)`
Replace: `[**Selecting the Product Mode**](/docs/guide/starthere/setuptrisul/install/selectmode)`

### 3.7 `ST/install/requirements.md`

**F-B1-5**

Find: `Choose the processing mode and size that match your network’s scale, then proceed to Installation.`
Replace: `Choose the processing mode and size that match your network’s scale, then proceed to [Installing](/docs/guide/starthere/setuptrisul/install/doinstall).`

**F-B1-13** Second caption (inside the `giant` / "SD-WAN (≈5000+ Branch)" tab only):

Find (second occurrence only, the one after `8TB Storage for 3 months`): `*Table: Large Enterprise or multi-hundred site SD-WAN* `
Replace: `*Table: SD-WAN (≈5000+ branches)* `

**F-B1-13** Packet tabs: keep `default` only on the `500Mbps` tab. Remove the ` default` attribute from:
- `<TabItem value="med" label="1Gbps" default>`
- `<TabItem value="large10" label="10Gbps" default>`
- `<TabItem value="large40" label="40Gbps" default>`

Leave `<AdminGuideTour />` in place (F-B1-22 is wait-for-structure).

### 3.8 `ST/install/index.md`

**F-B1-8**

Find: `[**Distributed monitoring**](/docs/guide/learntrisul/concepts/)`
Replace: `[**Distributed Domain Concepts**](/docs/guide/learntrisul/concepts/)`

### 3.9 `ST/install/packages.md`

**F-B2-3** H1 matches the sidebar label and covers the whole page.

Find: `# Core Packages ` (line 1, trailing space)
Replace: `# Packages`

Find: `  - Badfellas plugin adds threat-intelligence checks`
Replace: `  - BadFellas plugin adds threat-intelligence checks`

**F-B2-2**

Find: `A meta-package called **`Trisul Full`** is also available.`
Replace: `A meta-package called `trisul-full` is also available (on RHEL-based systems, it's the yum group `Trisul Full`).`

**F-B2-24**

Find: `Now that you know what each package does, you’re ready to follow the install steps for your platform.`
Replace: `Now that you know what each package does, follow the install steps for your platform in [Installing](/docs/guide/starthere/setuptrisul/install/doinstall).`

### 3.10 `ST/install/badfellas.md`

**F-B2-3**

Find: `The badfellas plugin provides threat monitoring functionality.`
Replace: `The BadFellas plugin provides threat monitoring functionality.`

### 3.11 `ST/install/geoasn.md`

**F-B2-19 (sentence only)**

Find: `The Geo plugin provides based on IP Address Prefix`
Replace: `Based on the IP address prefix, the Geo plugin provides:`

Leave the "BGP Route functionality" bullet (needs-SME).

### 3.12 `ST/install/pkgverify.md`

**F-B2-11 (typos, numbering only)**

Find: `which contains the signature used to verity.`
Replace: `which contains the signature used to verify it.`

Find: `3. The RPM verification was successful if you see the  **OK**`
Replace: `The RPM verification succeeded if the output ends with **OK**.`

Do **not** change the sample session, the `gpg --verify` command, or either signer identity (needs-SME).

**F-B2-24**

Find: `Now that your packages are verified, go ahead and move to the installation section.`
Replace: `Now that your packages are verified, continue with [Installing](/docs/guide/starthere/setuptrisul/install/doinstall).`

### 3.13 `ST/install/doinstall.md`

**F-B2-2**

Find: `to install the **`Trisul-Full`** meta package consisting of all packages.`
Replace: `to install the `trisul-full` meta package (yum group `Trisul Full` on RHEL-based systems), which contains all packages.`

**F-B2-7** RHEL 8 URL double slash:

Find: `curl -LO https://trisul.org//trisulfull-rhel8.repo`
Replace: `curl -LO https://trisul.org/trisulfull-rhel8.repo`

**F-B2-24** Relative link:

Find: `select the ["Product Mode"](selectmode)`
Replace: `select the [Product Mode](/docs/guide/starthere/setuptrisul/install/selectmode)`

**F-B2-6** Missing space and double default tab:

Find: `yum install trisul-badfellastrisul-geo`
Replace: `yum install trisul-badfellas trisul-geo`

Find: `<TabItem value="redhat" label="Redhat Based" default>`
Replace: `<TabItem value="redhat" label="Redhat Based">`

**F-B2-10 (link, typo only)**

Find: `The DEB packages can be found on the Downloads page.`
Replace: `The DEB packages can be found on the [Downloads page](https://www.trisul.org/download/).`
(Same URL Quickstart Step 2 already uses. Flag in the PR for confirmation.)

Find: `Download each DEB package and install and install each file with:`
Replace: `Download each DEB package and install each file with:`

**F-B2-7** Wrong repo file in the generic YUM block:

Find:
```
Then move into the repo directory and download the repo file:

```bash
cd /etc/yum.repos.d
curl -LO https://www.trisul.org/trisulfull.repo
```
Replace:
```
Then move into the repo directory and download the repo file for your distribution from the list above. For example, on RHEL 9:

```bash
cd /etc/yum.repos.d
curl -LO https://www.trisul.org/trisulfull-rhel9.repo
```
(Only the prose line and the `curl` line change. Keep the rest of the code block as is.)

**F-B2-7** Dangling "following example". Find:
```
The following example installs the Trisul core packages
```
Replace:
```
The following example installs the Trisul core packages:

```bash
yum install trisul-hub trisul-probe webtrisul
```
```
(Command copied from the "Redhat Based" tab on the same page.)

### 3.14 `ST/install/selectmode.md`

**F-B2-24** Relative link:

Find: `After following the steps in [installation](doinstall).`
Replace: `After following the steps in [Installing](/docs/guide/starthere/setuptrisul/install/doinstall),`

**F-B2-13** Syslog omitted; buttons.

Find: `Select one or more of the interfaces on which you will be receiving Packets (via SPAN port) or NetFlow `
Replace: `Select one or more interfaces that will receive NetFlow, Packet Capture (via SPAN port) or Syslog traffic. To go back to Screen 1, click **Previous**.`

**F-B2-15 (link only)**

Find:
```
Logout and login as user to start viewing reports
```
Replace:
```
Log out and log in as the viewer user to start viewing reports. See [Logging In](/docs/guide/starthere/setuptrisul/login) for the default credentials.
```

Find: `:memo: Refer to Trisul User Guide [Introduction](/docs/guide/ug/ui/) for user login. `
Replace: `:memo: To learn the user interface, see the User Guide [Introduction](/docs/guide/ug/ui/).`

**F-B2-4** UI labels (confirmed in `reenable_productmode.png` and `selectmode.png`):

Find: `- Check the "Show mode selection" checkbox and`
Replace: `- Select the **Show mode selection** checkbox.`

Find: `- Click the "Save" button`
Replace: `- Click **Save**.`

Find: `Once you have completed these steps, you can select the desired mode from the Product Selection Mode.`
Replace: `Once you have completed these steps, you can select the desired mode in the **How do you plan to use Trisul ?** dialog.`

Don't change the "default mode" tip, the Web Admin menu path, or the `admin/admin` block (needs-SME).

### 3.15 `ST/install/doupgrade.md`

**F-B2-17**

Find: `<TabItem value="rpm" label="CentOS/RHEL Uninstall">`
Replace: `<TabItem value="rpm" label="CentOS/RHEL">`

Find: `  yum group install 'Trisul Full'``
Replace: `  yum group install 'Trisul Full'`

Remove the invalid one-line command. Find:
```
  If you are getting an error with using the Group commands, try upgrading individual packages. You can even put them all on a single line
  ``` bash
  yum  remove trisul-hub trisul-probe webtrisul yum  install trisul-hub trisul-probe webtrisul
  ```
```
Replace:
```
  If you get an error with the group commands, upgrade the individual packages:
```
(The valid two-line block that follows stays.)

Don't touch "simply an uninstall" / "preserves all …" (F-B2-18 needs-SME).

### 3.16 `ST/install/douninstall.md`

**F-B3-20 (quote only)**

Find: `1. If you installed using the meta package 'Trisul-Full - use `yum group remove 'Trisul Full'` to remove it all`
Replace: `1. If you installed using the `Trisul Full` group, use `yum group remove 'Trisul Full'` to remove it all.`

### 3.17 `ST/license/intro.md`

**F-B3-11 (wording, link)**

Find: `The trial license gives you tremendous value as it gets you all of the real time analytics and the most recent 7 days for historical analysis`
Replace: `The trial license includes all real-time analytics and the most recent 7 days of historical analysis.`
(Trial length stays as written. F-B3-9 is needs-SME.)

Find: `depends on the number of active internal endpoints in your Home Network space`
Replace: `depends on the number of active internal endpoints in your [Home Network](/docs/guide/learntrisul/homenetwork_concepts) space`

Find: `For more information see the [LicensingFAQ](https://trisul.org/pricing)`
Replace: `For more information, see the [Trisul pricing page](https://trisul.org/pricing).`

Find: `Using this alternate method to get the machine ID. Type the following command as send us its output.`
Replace: `Run the following command and send us its output.`
("send us" contact stays. It's needs-SME.)

**F-B3-12** UI labels (from `machineid.png`, `license.png`). Replace both nav lines:

Find: `:point_right: Login as Admin → Select Context :default → Licensing`
Replace: `:point_right: Login as Admin → **Context : default** → **Licensing**`

Find: `:point_right: Login as Admin → Select Context:default → Licensing`
Replace: `:point_right: Login as Admin → **Context : default** → **Licensing**`

Find: `Click on the machine ID link against each node to get the machineID as shown below`
Replace: `Click **Show Machine ID** against each node to get the Machine ID, as shown below.`

Find: `Click on “Long Term Trends” to see a longer time window`
Replace: `Click **Long term trends** to see a longer time window.`

### 3.18 `ST/license/install.md`

**F-B3-12**

Find: `:point_right: Login as Admin → Select Context :default → Licensing`
Replace: `:point_right: Login as Admin → **Context : default** → **Licensing**`

Find: `:point_right: Login as Admin → Select Context → Licensing`
Replace: `:point_right: Login as Admin → **Context : default** → **Licensing**`

**F-B3-13 (numbering, link)** Probe block. Find:
```
1. Put the new license file in `/usr/local/etc/trisul-probe` 
1. Change the name  of the new file to `LicenseKey.txt`  *OR*
2. Edit the `LicenseFile` parameter in [trisulProbeConfig.xml](/docs/guide/ref/trisulconfig#app ) to point to the new file. 
```
Replace:
```
1. Put the new license file in `/usr/local/etc/trisul-probe`.
2. Either rename the new file to `LicenseKey.txt`, or edit the `LicenseFile` parameter in [trisulProbeConfig.xml](/docs/guide/ref/trisulconfig#app) to point to the new file.
```

Hub block. Find:
```
1. Put the new license file in`/usr/local/etc/trisul-hub`
1. Change the name of the new file to `LicenseKey.txt` *OR*
2. Edit the `LicenseFile` parameter in [trisulHubConfig.xml](/docs/guide/ref/trisulconfig#app ) to point to the new file. 
```
Replace:
```
1. Put the new license file in `/usr/local/etc/trisul-hub`.
2. Either rename the new file to `LicenseKey.txt`, or edit the `LicenseFile` parameter in [trisulHubConfig.xml](/docs/guide/ref/trisulconfig#app) to point to the new file.
```

Find: `Please restart both hub and probe node to take effect`
Replace: `Restart both the hub and probe nodes for the new license to take effect. See [Start and Stop Trisul](/docs/guide/ag/admintasks/startstop).`

Leave `PRODUCTON` in the sample (needs-SME).

### 3.19 `ST/network/input_packets.md`

**F-B3-21 (label)** Insert immediately after the H1 `# Configure Packet Capture` (blank line on both sides):
```
:::info Applies to
Network Security Monitoring (NSM) mode, which uses packet capture.
:::
```

**F-B3-14 (typo only)**

Find: `– rBest for most enterprise networks`
Replace: `– Best for most enterprise networks`

Don't change the 500 Mbps threshold or the bridge configs (needs-SME).

### 3.20 `ST/network/input_netflow.md`

**F-B3-21 (label)** Insert immediately after the H1 `# Configure NetFlow ` (blank line on both sides):
```
:::info Applies to
NetFlow Analyzer, IPDR (DoT Compliance) and ISP Analytics modes, which use flow-based processing.
:::
```
(Mode-to-processing mapping taken from the `productmodes` table.)

### 3.21 `ST/login.md`

**F-B3-18 (browser note only)** Find:
```
> You need to use a **SVG capable browser** like Firefox,
> Chrome, Opera, Safari to work with Trisul.  
> For best results use **Firefox or Chrome**
```
Replace:
```
> For best results, use a current version of **Firefox** or **Chrome**.
```

**F-B3-6**

Find: `- Via HTTP on port *3000*. [Instructions to change this to another port](/docs/guide/howto) `
Replace: `- Via HTTP on port *3000*. To use another port, see [Change the Trisul webserver port](/docs/guide/howto/change_web_port).`

Find: `- Via HTTPS`
Replace: `- Via HTTPS. See [Using HTTPS](/docs/guide/howto/sslforwebtr).`

## 4. Coverage map (fix-now → section)

| Finding | Section | Finding | Section |
|---|---|---|---|
| B1-5 | 3.7 | B2-10 (link/typo) | 3.13 |
| B1-8 | 3.4, 3.8 | B2-11 (typos) | 3.12 |
| B1-9 | 3.1, 3.2 | B2-13 | 3.14 |
| B1-13 | 3.7 | B2-15 (link) | 3.14 |
| B1-16 (Mermaid) | 3.5 | B2-17 | 3.15 |
| B1-18 | 3.3 | B2-19 (sentence) | 3.11 |
| B1-19 (wording) | 3.2 | B2-24 | 3.9, 3.12, 3.13, 3.14 |
| B1-20 | 3.2 | B3-6 | 3.21 |
| B1-23b | 3.4 | B3-11 (wording/link) | 3.17 |
| B1-24 | 3.6 | B3-12 | 3.17, 3.18 |
| B2-2 | 3.9, 3.13 | B3-13 (numbering/link) | 3.18 |
| B2-3 | 3.9, 3.10 | B3-14 (typo) | 3.19 |
| B2-4 | 3.14 | B3-18 (browser note) | 3.21 |
| B2-6 | 3.13 | B3-20 (quote) | 3.16 |
| B2-7 | 3.13 | B3-21 (labels) | 3.19, 3.20 |

## 5. Out of scope. Do not change.

- Product-mode names anywhere (F-B1-10/F-B2-1).
- Trial length, signup wording, license model, "send us" contact, `PRODUCTON` (F-B1-19 signup, F-B3-9, F-B3-10, F-B3-11 contact, F-B3-13).
- Ports, firewall commands, OS tabs, OL9 repo (F-B3-4, F-B2-5, F-B2-8, F-B2-9).
- pkgverify sample session and signer identities (F-B2-11 key).
- Default mode tip, menu paths (Web Admin, Idle Timeout, User Auth Log, logout location), credentials (F-B2-14, F-B2-16, F-B3-19, F-B2-15).
- Dataflow order and diagram, component count, Domain definition (F-B1-16, F-B1-17).
- Sizing numbers, SPAN/tap threshold, bridge configs (F-B1-12, F-B1-14, F-B1-15, F-B3-14, F-B3-15).
- "Multi Homing", Geo "BGP Route functionality", AI CLI page (F-B1-18 term, F-B2-19, F-B2-20).
- Sidebar, `AdminGuideTour`, moves, merges, images (all wait-for-structure).

## 6. Verify before opening the PR

1. `npm run clear && npm run build` passes with 0 broken links and 0 broken anchors. Paste the tail of the build log in the PR.
2. `grep -rn "](selectmode)\|](doinstall)" docs/guide/starthere` returns nothing.
3. `grep -rn "badfellastrisul\|trisul.org//\|verity\|rBest\|PRODUCTON" docs/guide/starthere`: only `PRODUCTON` remains (intentional).
4. `grep -rn "Select Context" docs/guide/starthere/setuptrisul/license` returns nothing.
5. `npm run start`, then check:
   - `/docs/guide/starthere/what_is_trisul/dataflow`: the Mermaid node reads **Probe**.
   - `/docs/guide/starthere/setuptrisul/install/requirements`: packet tabs open on **500Mbps**.
   - `/docs/guide/starthere/setuptrisul/install/doinstall`: plugin tabs open on **Ubuntu Based**. The new code block renders under "installs the Trisul core packages:".
   - `/docs/guide/starthere/setuptrisul/license/install`: steps number 1, 2 in both blocks.
   - Both network pages show the **Applies to** admonition under the H1.
6. `git diff --stat` touches only the 21 files in § 3.

## 7. PR description template

```
Title: docs(starthere): fix-now corrections from audit-01 (P0-fixnow-01)

Applies the 30 fix-now findings from audit-01-start-here to the Docs overview and Start Here pages. In-place text, link and command fixes only. No moves, renames, sidebar or front-matter changes.

Coverage: see the brief § 4 table.

Skipped: <list any item whose Find string didn't match, or "none">

Needs confirmation:
- doinstall "Downloads page" now links https://www.trisul.org/download/ (same URL as Quickstart Step 2).
- Network pages' "Applies to" labels use current doc names; final names depend on SME Q1.

Build: <paste tail of npm run build>

🤖 Generated with [Claude Code](https://claude.com/claude-code)

https://claude.ai/code/session_01PmESFzVR9DpXZHP2pMfuKf
```
