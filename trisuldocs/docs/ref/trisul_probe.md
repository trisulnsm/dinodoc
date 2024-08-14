# trisulctl_probe commands

The trisulctl_probe allow you to co-ordinate , manage, and run commands across all the nodes in the domain

## General Commands

| `help`         | Displays help messgaes                   | help                                                  |
| -------------- | ---------------------------------------- | ----------------------------------------------------- |
| `quit`         | Exit trisulctl tool                      | quit                                                  |
| `alias`        | create shortcuts forCLI                 | help alias                                            |
| `machineid`    | get hub machineid for licensing          | machineid                                             |
| `checklicense` | validate a license file                  | checklicense /usr/local/etc/trisul-hub/LicenseKey.txt |
| `log`          | view log files across nodes and contexts | log default@probe0 level=1 log=ns tail lastrun        |

## Domain Commands

| Command             | Description                                                     | Example                                 |
| ------------------- | --------------------------------------------------------------- | --------------------------------------- |
| `start domain`      | start the domain processes                                      | start domain                            |
| `stop domain`       | stop the domain processes                                       | stop domain                             |
| `list domains`      | domain cert and nodes found on system                           | list domains                            |
| `list nodes`        | list all the nodes active in domain                             | list nodes                              |
| `list probes`       | list and test all probes found on local node                    | list probes                             |
| `hello`             | get a hello message from all nodes                              | hello probe0                            |
| `relocate context`  | move context storage to different disk volume                   | relocate context domain0 probe0 default |
| `changeuser domain` | Change the user.group for an entire domain node                 | changeuser domain0 trisul               |
| `create probe`      | create new probe cert/key and request permission from hub admin | craete probe                            |
| `install domain`    | install a new domain using the certficate file given by admin   |                                         |
| `install probe`     | install a new probe using the certificate file given by hub     |                                         |
| `install context`   | install a new context inside the probe                          | install context probe-id context-name   |

## Context Commands

| Command          | Description                                                           | Example                                                                                     |
| ---------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `info context`   | show context status, leave context blank to show all contexts         | info context default                                                                        |
| `start context`  | start specified context, you can also use context@node format         | start context default<br/>start context default@probe0                                      |
| `stop context`   | stop context or connected context                                     | stop context default<br/>stop context default@probe0                                        |
| `create context` | Create a new context with name context                                | create context context1<br/>create context context1@probe0                                  |
| `delete context` | Delete the context                                                    | delete context context1<br/>delete context context1@probe0                                  |
| `reset context`  | Just cleanout the data (keep the configuration) for specified context | reset context default<br/>reset context default @probe0                                     |
| `show config`    | show context configuration, socket information                        | show config default                                                                         |
| `set config`     | set context config parameter                                          | set config default runmode=online_rxring<br/>set config default@probe0 profile=profile_west |

## Probe Commands

| Command | Description | Example |
| ------- | ----------- | ------- |

| `createramfs`    | create a ramfs filesystem for use with File Extraction                 | createramfs probe0 default                      |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------------- |
| `importpcap`     | import a pcap file or dir into specified context (or default)          | importpcap /tmp/sample.pcap context=offline     |
| `importpcap_ids` | same as importpcap but runs a 2nd pass over pcaps using snort/suricata | importpcap_ids /tmp/sample.pcap context=offline |

## Developer commands

| `list lua`       | list all theLUAscripts discovered in context and probe               | list lua context@probe         |
| ---------------- | ---------------------------------------------------------------------- | ------------------------------ |
| `testbench run`  | start the testbench in a debug mode, use this to test yourLUAscripts | testbench run /tmp/sample.pcap |
| `testbench guid` |                                                                        |                                |
