# Configuration Files Reference

This section describes the files that configure Trisul, the command-line tools you use to manage them, and the identifiers and syntax those files use.

## Directories

- Trisul binaries are in `/usr/local/bin`.
- Config files are in `/usr/local/etc/trisul-hub`, `/usr/local/etc/trisul-probe` and `/usr/local/etc/trisul-config`.
- Helper scripts are in `/usr/local/share/trisul-hub` and `/usr/local/share/trisul-probe`.
- Each context (an instance of Trisul) has its own config directory, named `context_{xyz}`.

## Config files

- [trisulProbeConfig.xml](/docs/guide/ref/trisulconfig): the main Probe config file.
- [trisulHubConfig.xml](/docs/guide/ref/trisulhubconfig): the main Hub config file.
- [NetFlow config file](/docs/guide/ref/netflow-config): how the Probe processes NetFlow and IPFIX records.
- [Plugin Configuration](/docs/guide/ref/plugin_configuration): the per-plugin `PI-xxxx.xml` files, and the `cfgedit` tool that edits them.

## Command-line tools

- [trisulctl_hub](/docs/guide/ref/trisul_hub): manage the domain, contexts and Hub from the command line.
- [trisulctl_probe](/docs/guide/ref/trisul_probe): manage contexts and the Probe from the command line.
- [trisbashrc](/docs/guide/ref/trisbashrc): bash aliases for moving between Trisul directories and viewing logs.

## Identifiers and syntax

- [Well known GUIDs](/docs/guide/ref/guid): GUIDs for counter groups, alert groups, resources and protocols.
- [Trisul Filter Format](/docs/guide/ref/trisul_filter_format): the rule syntax used in storage policies, counter groups and flow taggers.
- [Trisul Traffic Meters](/docs/guide/ref/meters): an index of the built-in counter groups.
- [Trisul Remote Protocol](/docs/guide/ref/trpproto): the `trp.proto` file for the TRP query API.

import DocCardList from '@theme/DocCardList';

<DocCardList />


