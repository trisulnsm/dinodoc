# trisulctl_hub commands

The trisulctl_hub allow you to co-ordinate , manage, and run commands across all the nodes in the domain

## General Commands

| Command        | Description                              | Example                                               |
| -------------- | ---------------------------------------- | ----------------------------------------------------- |
| `help`         | Displays help messgaes                   | help                                                  |
| `quit`         | Exit trisulctl tool                      | quit                                                  |
| `alias`        | create shortcuts for CLI                 | help alias                                            |
| `machineid`    | get hub machineid for licensing          | machineid                                             |
| `checklicense` | validate a license file                  | checklicense /usr/local/etc/trisul-hub/LicenseKey.txt |
| `log`          | view log files across nodes and contexts | log default@hub0 level=1 log=fs tail lastrun          |

## Domain Commands

| Command             | Description                                               | Example                              |
| ------------------- | --------------------------------------------------------- | ------------------------------------ |
| `start domain`      | start the domain processes                                | start domain                         |
| `stop domain`       | stop the domain processes                                 | stop domain                          |
| `list domains`      | domain cert and nodes found on system                     | list domains                         |
| `list nodes`        | list all the nodes active in domain                       | list nodes                           |
| `list hubs`         | list and verify connection of all hubs on this local node | list hubs                            |
| `node config`       | node config hub0                                          | show node config, allowed probes etc |
| `hello`             | get a hello message from all nodes                        | hello probe0                         |
| `changeuser domain` | change the user.group for an entire domain node           | changeuser domain domain0 trisul     |
| `ha start domain`   | start the HA (high availability) backup domain            |                                      |

## Context Commands

| Command            | Description                                                           | Example                                                                                    |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `info context`     | show context status, leave context blank to show all contexts         | info context default                                                                       |
| `start context`    | start specified context, you can also use context@node format         | start context default<br/>start context default@probe0                                      |
| `stop context`     | stop context or connected context                                     | stop context default<br/>stop context default@probe0                                        |
| `create context`   | Create a new context with name context                                | create context context1<br/>create context context1@probe0                                  |
| `delete context`   | Delete the context                                                    | delete context context1<br/>delete context context1@probe0                                  |
| `reset context`    | Just cleanout the data (keep the configuration) for specified context | reset context default<br/>reset context default @probe0                                     |
| `show config`      | show context configuration, socket information                        | show config default                                                                        |
| `set config`       | set context config parameter                                          | set config default runmode=online_rxring<br/>set config default@probe0 profile=profile_west |
| `relocate context` | move context storage to different disk volume                         | relocate context domain0 probe0 default                                                    |

## hub commands

| Command                 | Description                                                       | Example                                |
| ----------------------- | ----------------------------------------------------------------- | -------------------------------------- |
| `create domain`         | create a new domain priv+pubkey + network                         |                                        |
| `create hub`            | create a new hub                                                  |                                        |
| `install domain`        | install domain (also need private key *.cert_secret)              | install domain hub-certificate-file    |
| `install remote-domain` | install a remote domain (do not need *.cert_secret)               | install remote-domain domain-cert-file |
| `install hub`           | install a hub (also need private key *.cert_secret)               | install hub hub-certificate-file       |
| `authorize probe`       | authorize a new probe – no need of private key (stays with probe) | install probe                          |
| `authorize hub`         | authorize a hub identified by the hub-cert to connect             | authorize hub hub-certificate-file     |
| `uninstall hub`         | install a hub (also need private key *.cert_secret)               | uninstall hub                          |
