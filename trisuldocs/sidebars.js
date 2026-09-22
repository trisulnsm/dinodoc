/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "documentationSidebar": [
    {
      "type": "category",
      "label": "Documentation",
      "link": {
        "type": "doc",
        "id": "guide/index"
      },
      "className": "root-section-title",
      "collapsible": false,
      "collapsed": false,
      "items": [
        {
          "type": "category",
          "label": "Start Here",
          "link": {
            "type": "doc",
            "id": "guide/starthere/quickstart"
          },
          "collapsible": true,
          "collapsed": true,
          "items": [
            "guide/starthere/quickstart",
            {
              "type": "category",
              "label": "How Trisul Works",
              "link": {
                "type": "doc",
                "id": "guide/starthere/what_is_trisul/index"
              },
              "collapsible": true,
              "collapsed": false,
              "items": [
                "guide/starthere/what_is_trisul/architecture",
                "guide/starthere/what_is_trisul/dataflow",
                "guide/starthere/what_is_trisul/productmodes"
              ]
            },
            {
              "type": "category",
              "label": "Setup Trisul",
              "link": {
                "type": "doc",
                "id": "guide/starthere/setuptrisul/install/requirements"
              },
              "collapsible": true,
              "collapsed": true,
              "items": [
                "guide/starthere/setuptrisul/install/requirements",
                {
                  "type": "category",
                  "label": "Installation",
                  "link": {
                    "type": "doc",
                    "id": "guide/starthere/setuptrisul/install/index"
                  },
                  "items": [
                    {
                      "type": "category",
                      "label": "Packages",
                      "link": {
                        "type": "doc",
                        "id": "guide/starthere/setuptrisul/install/packages"
                      },
                      "items": [
                        "guide/starthere/setuptrisul/install/badfellas",
                        "guide/starthere/setuptrisul/install/geoasn"
                      ]
                    },
                    "guide/starthere/setuptrisul/install/pkgverify",
                    "guide/starthere/setuptrisul/install/doinstall",
                    "guide/starthere/setuptrisul/install/selectmode",
                    "guide/starthere/setuptrisul/install/trisulaicli",
                    "guide/starthere/setuptrisul/install/doupgrade",
                    "guide/starthere/setuptrisul/install/douninstall",
                    "guide/starthere/setuptrisul/install/openports"
                  ]
                },
                {
                  "type": "category",
                  "label": "Licensing",
                  "link": {
                    "type": "doc",
                    "id": "guide/starthere/setuptrisul/license/index"
                  },
                  "items": [
                    "guide/starthere/setuptrisul/license/intro",
                    "guide/starthere/setuptrisul/license/install"
                  ]
                },
                {
                  "type": "category",
                  "label": "Configure the Network",
                  "link": {
                    "type": "doc",
                    "id": "guide/starthere/setuptrisul/network/index"
                  },
                  "items": [
                    "guide/starthere/setuptrisul/network/input_packets",
                    "guide/starthere/setuptrisul/network/input_netflow"
                  ]
                },
                {
                  "type": "category",
                  "label": "First Login",
                  "link": {
                    "type": "doc",
                    "id": "guide/starthere/setuptrisul/login"
                  },
                  "items": [
                    "guide/starthere/setuptrisul/login"
                  ]
                }
              ]
            }
          ],
          "description": "Architecture, data flow pipeline, product modes, and guided setup instructions."
        },
        {
          "type": "category",
          "label": "Admin Guide",
          "link": {
            "type": "doc",
            "id": "guide/ag/index"
          },
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "type": "category",
              "label": "Admin Tasks",
              "link": {
                "type": "doc",
                "id": "guide/ag/admintasks/index"
              },
              "items": [
                "guide/ag/admintasks/startstop",
                "guide/ag/basictasks/logfiles",
                {
                  "type": "category",
                  "label": "Managing Storage",
                  "link": {
                    "type": "doc",
                    "id": "guide/ag/admintasks/storage"
                  },
                  "items": [
                    "guide/ag/basictasks/configure_storage",
                    "guide/ag/basictasks/reloc",
                    "guide/ag/basictasks/cleanenv",
                    "guide/ag/admintasks/dbstatus",
                    "guide/ag/admintasks/system_health",
                    "guide/ag/admintasks/storage_status"
                  ]
                },
                "guide/ag/admintasks/manage_profiles",
                "guide/ag/admintasks/probe_health",
                "guide/ag/admintasks/netflow_templatedb",
                "guide/ag/admintasks/auditlog",
                "guide/ag/admintasks/drdc_status",
                "guide/ag/admintasks/userresources"
              ]
            },
            {
              "type": "category",
              "label": "Using the Admin UI",
              "link": {
                "type": "doc",
                "id": "guide/ag/ui/adminlayout"
              },
              "items": [
                "guide/ag/ui/adminlayout"
              ]
            },
            {
              "type": "category",
              "label": "Managing Trisul",
              "link": {
                "type": "doc",
                "id": "guide/ag/webadmin/index"
              },
              "items": [
                "guide/ag/webadmin/admin_menus",
                "guide/ag/webadmin/manageusers",
                "guide/ag/webadmin/ldap_login",
                "guide/ag/webadmin/userroles",
                "guide/ag/webadmin/authlog",
                "guide/ag/webadmin/web_options",
                "guide/ag/webadmin/emailsettings",
                "guide/ag/webadmin/modules",
                "guide/ag/webadmin/dashboards",
                "guide/ag/webadmin/menus",
                "guide/ag/webadmin/startorstop_tasks",
                "guide/ag/webadmin/logs",
                "guide/ag/webadmin/apps",
                "guide/ag/webadmin/plugin_data_update",
                "guide/ag/webadmin/bgjobs",
                "guide/ag/webadmin/ipam",
                "guide/ag/webadmin/smsconfig"
              ]
            },
            {
              "type": "category",
              "label": "Configuring Trisul",
              "link": {
                "type": "doc",
                "id": "guide/ag/context/index"
              },
              "items": [
                "guide/ag/context/profiles",
                "guide/ag/context/home_networks",
                "guide/ag/context/access_points",
                "guide/ag/context/crontasks",
                "guide/ag/context/customize",
                "guide/ag/context/backup",
                "guide/ag/context/disk_usage_alerts",
                "guide/ag/context/advanced",
                {
                  "type": "category",
                  "label": "Custom Countergroups",
                  "link": {
                    "type": "doc",
                    "id": "guide/ag/context/custom_countergroup"
                  },
                  "items": [
                    "guide/ag/context/filtered_countergroups",
                    "guide/ag/context/keyset_countergroups",
                    "guide/ag/context/statbased_countergroups",
                    "guide/ag/context/rulebased_countergroups",
                    "guide/ag/context/crosskey_countergroups",
                    "guide/ag/context/cardinality_countergroups"
                  ]
                },
                "guide/ag/context/countergroup_settings",
                "guide/ag/context/managekeys",
                "guide/ag/context/profilemenu",
                "guide/ag/context/snmp_agent"
              ]
            },
            {
              "type": "category",
              "label": "High Availability",
              "link": {
                "type": "doc",
                "id": "guide/ag/ha/index"
              },
              "items": [
                {
                  "type": "autogenerated",
                  "dirName": "guide/ag/ha"
                }
              ]
            },
            {
              "type": "category",
              "label": "Manage Contexts",
              "link": {
                "type": "doc",
                "id": "guide/ag/manage_contexts/listcontexts"
              },
              "items": [
                {
                  "type": "autogenerated",
                  "dirName": "guide/ag/manage_contexts"
                }
              ]
            }
          ],
          "description": "Server administration, probes, hubs, Web Admin, contexts, and storage maintenance."
        },
        {
          "type": "category",
          "label": "User Guide",
          "link": {
            "type": "doc",
            "id": "guide/ug/index"
          },
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "type": "category",
              "label": "Navigating the UI",
              "link": {
                "type": "doc",
                "id": "guide/ug/ui/index"
              },
              "items": [
                "guide/ug/ui/userlayout",
                "guide/ug/ui/dashmod_intro",
                "guide/ug/ui/create_dashboards",
                "guide/ug/ui/modules",
                "guide/ug/ui/charts",
                "guide/ug/ui/elements",
                "guide/ug/ui/dashboards",
                "guide/ug/ui/module_templates",
                "guide/ug/ui/key_dashboard"
              ]
            },
            {
              "type": "category",
              "label": "Traffic Monitoring",
              "link": {
                "type": "doc",
                "id": "guide/ug/cg/index"
              },
              "items": [
                "guide/ug/cg/intro",
                "guide/ug/cg/settings",
                "guide/ug/cg/resolve",
                "guide/ug/cg/ckey",
                "guide/ug/cg/retro",
                "guide/ug/cg/retrotools",
                "guide/ug/cg/retrofaq",
                "guide/ug/cg/stabber",
                "guide/ug/cg/ssl",
                "guide/ug/cg/deepmonitoring",
                "guide/ug/cg/tasks",
                "guide/ug/cg/custom"
              ]
            },
            {
              "type": "category",
              "label": "Flow Analysis",
              "link": {
                "type": "doc",
                "id": "guide/ug/flow/index"
              },
              "items": [
                "guide/ug/flow/intro",
                "guide/ug/flow/tagger",
                "guide/ug/flow/stabber",
                "guide/ug/flow/tracker",
                "guide/ug/flow/tuning",
                "guide/ug/flow/deduplication",
                "guide/ug/flow/tasks"
              ]
            },
            {
              "type": "category",
              "label": "Packet Captures",
              "link": {
                "type": "doc",
                "id": "guide/ug/caps/index"
              },
              "items": [
                "guide/ug/caps/fullcontent",
                "guide/ug/caps/packetstorage",
                "guide/ug/caps/pcap_import",
                "guide/ug/caps/tasks",
                "guide/ug/caps/methods"
              ]
            },
            {
              "type": "category",
              "label": "Alerts",
              "link": {
                "type": "doc",
                "id": "guide/ug/alerts/index"
              },
              "items": [
                "guide/ug/alerts/manage",
                "guide/ug/alerts/tca",
                "guide/ug/alerts/ft",
                "guide/ug/alerts/ids_stabber",
                "guide/ug/alerts/mw",
                "guide/ug/alerts/monthly_summary",
                "guide/ug/alerts/sms_settings",
                "guide/ug/alerts/tband",
                "guide/ug/alerts/viewall",
                "guide/ug/alerts/ddos",
                "guide/ug/alerts/msteams",
                "guide/ug/alerts/email_wizard",
                "guide/ug/alerts/mitre",
                "guide/ug/alerts/mitretimeline"
              ]
            },
            {
              "type": "category",
              "label": "Reports",
              "link": {
                "type": "doc",
                "id": "guide/ug/reports/index"
              },
              "items": [
                "guide/ug/reports/available_reports",
                "guide/ug/reports/readymade",
                "guide/ug/reports/flexible_reports",
                "guide/ug/reports/emailsettings",
                "guide/ug/reports/schedreports"
              ]
            },
            {
              "type": "category",
              "label": "NetFlow Monitoring",
              "link": {
                "type": "doc",
                "id": "guide/ug/netflow/index"
              },
              "items": [
                "guide/ug/netflow/netflow_setup",
                "guide/ug/netflow/routers_and_interfaces",
                "guide/ug/netflow/snmp",
                "guide/ug/netflow/interface_tracker",
                "guide/ug/netflow/pcap_and_netflow_setup",
                "guide/ug/netflow/netflow_wizard",
                "guide/ug/netflow/drilldown",
                "guide/ug/netflow/l2qos",
                "guide/ug/netflow/netflow_vs_snmp",
                "guide/ug/netflow/sources"
              ]
            },
            {
              "type": "category",
              "label": "Tools",
              "link": {
                "type": "doc",
                "id": "guide/ug/tools/index"
              },
              "items": [
                "guide/ug/tools/explore_flows",
                "guide/ug/tools/aggregate_flows",
                "guide/ug/tools/analyze_item",
                "guide/ug/tools/daily_usage",
                "guide/ug/tools/payload_search",
                "guide/ug/tools/keyspace",
                "guide/ug/tools/rule_builder",
                "guide/ug/tools/trisul_bucketizer"
              ]
            },
            {
              "type": "category",
              "label": "Graph Analytics",
              "link": {
                "type": "doc",
                "id": "guide/ug/edges/index"
              },
              "items": [
                "guide/ug/edges/using",
                "guide/ug/edges/multicast",
                "guide/ug/edges/sankey"
              ]
            },
            {
              "type": "category",
              "label": "REST API",
              "link": {
                "type": "doc",
                "id": "guide/ug/restapi/index"
              },
              "items": [
                "guide/ug/restapi/countergrouptopper_api",
                "guide/ug/restapi/countergroupinfo_api",
                "guide/ug/restapi/timeslices_api"
              ]
            },
            {
              "type": "category",
              "label": "HowTos",
              "link": {
                "type": "doc",
                "id": "guide/howto/index"
              },
              "items": [
                {
                  "type": "autogenerated",
                  "dirName": "guide/howto"
                }
              ]
            }
          ],
          "description": "Day-to-day analytics, traffic monitoring, flow querying, alerts, and reporting."
        },
        {
          "type": "category",
          "label": "Learn Trisul",
          "link": {
            "type": "doc",
            "id": "guide/learntrisul/terminology"
          },
          "collapsible": true,
          "collapsed": true,
          "items": [
            "guide/learntrisul/terminology",
            "guide/learntrisul/homenetwork_concepts",
            {
              "type": "category",
              "label": "Flow Concepts",
              "link": {
                "type": "doc",
                "id": "guide/learntrisul/flow_concepts/index"
              },
              "items": [
                "guide/learntrisul/flow_concepts/deduplication"
              ]
            },
            {
              "type": "category",
              "label": "Trisul Domain Concepts",
              "link": {
                "type": "doc",
                "id": "guide/learntrisul/concepts/index"
              },
              "items": [
                {
                  "type": "autogenerated",
                  "dirName": "guide/learntrisul/concepts"
                }
              ]
            }
          ],
          "description": "Core concepts, terminology, home networks, and streaming flow deduplication."
        },
        {
          "type": "category",
          "label": "Reference",
          "link": {
            "type": "doc",
            "id": "guide/ref/index"
          },
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "type": "category",
              "label": "Configuration Files Reference",
              "link": {
                "type": "doc",
                "id": "guide/ref/index"
              },
              "className": "root-section-title",
              "collapsible": false,
              "collapsed": false,
              "items": [
                "guide/ref/guid",
                "guide/ref/meters",
                "guide/ref/netflow-config",
                {
                  "type": "category",
                  "label": "Plugin Configuration",
                  "link": {
                    "type": "doc",
                    "id": "guide/ref/plugin_configuration"
                  },
                  "items": [
                    "guide/ref/plugin-config/badfellas",
                    "guide/ref/plugin-config/geoasn",
                    "guide/ref/plugin-config/app_ports",
                    "guide/ref/plugin-config/basedomain",
                    "guide/ref/plugin-config/dns",
                    "guide/ref/plugin-config/hosts",
                    "guide/ref/plugin-config/http_hosts",
                    "guide/ref/plugin-config/iptunnels",
                    "guide/ref/plugin-config/mac",
                    "guide/ref/plugin-config/tcp_based_metering",
                    "guide/ref/plugin-config/tcpflow",
                    "guide/ref/plugin-config/udp_protocol_disector"
                  ]
                },
                "guide/ref/trisbashrc",
                "guide/ref/trisul_filter_format",
                "guide/ref/trisul_hub",
                "guide/ref/trisul_probe",
                "guide/ref/trisulconfig",
                "guide/ref/trisulhubconfig",
                "guide/ref/trpproto"
              ]
            },
            {
              "type": "category",
              "label": "Program Files Reference",
              "link": {
                "type": "doc",
                "id": "guide/programs/index"
              },
              "className": "root-section-title",
              "items": [
                "guide/programs/distributed-domain",
                "guide/programs/listbackup",
                "guide/programs/monit",
                "guide/programs/rat",
                "guide/programs/runhubflusher_watchdog",
                "guide/programs/scanslices",
                "guide/programs/trisul_flowcap",
                "guide/programs/trisul_reencrypt",
                "guide/programs/trisul_udpsink",
                "guide/programs/trisulprogram"
              ]
            },
            {
              "type": "category",
              "label": "Counter Groups Reference",
              "link": {
                "type": "doc",
                "id": "guide/counter-groups/index"
              },
              "className": "root-section-title",
              "items": [
                "guide/counter-groups/aggregates",
                "guide/counter-groups/alert-classes",
                "guide/counter-groups/alert-priorities",
                "guide/counter-groups/alert-signatures",
                "guide/counter-groups/app-id",
                "guide/counter-groups/apps",
                "guide/counter-groups/asnumber",
                "guide/counter-groups/base-domain",
                "guide/counter-groups/bgp-aspathbgp",
                "guide/counter-groups/bgp-orgin-as",
                "guide/counter-groups/bgp-peer-as",
                "guide/counter-groups/bgp-prefix-external",
                "guide/counter-groups/blacklist",
                "guide/counter-groups/city",
                "guide/counter-groups/country",
                "guide/counter-groups/dir-mac",
                "guide/counter-groups/email-hosts",
                "guide/counter-groups/external-hosts",
                "guide/counter-groups/external-hosts-v6",
                "guide/counter-groups/flow-appid-nbar",
                "guide/counter-groups/flow-asn",
                "guide/counter-groups/flow-bgp-nexthop",
                "guide/counter-groups/flow-ip-nextHop",
                "guide/counter-groups/flow-link-asn",
                "guide/counter-groups/flow-prefix-v6",
                "guide/counter-groups/flow-prefix",
                "guide/counter-groups/flow-tos",
                "guide/counter-groups/flow-vrf",
                "guide/counter-groups/flowgens",
                "guide/counter-groups/flowi-ntfs",
                "guide/counter-groups/hosts",
                "guide/counter-groups/hostsIPv6",
                "guide/counter-groups/http-content-types",
                "guide/counter-groups/http-hosts",
                "guide/counter-groups/http-methods",
                "guide/counter-groups/http-status-codes",
                "guide/counter-groups/icmp-types",
                "guide/counter-groups/internal-hosts",
                "guide/counter-groups/internal-hosts-v6",
                "guide/counter-groups/link-layer-stats",
                "guide/counter-groups/long-fat-tail-hosts",
                "guide/counter-groups/long-thin-tail-hosts",
                "guide/counter-groups/mac",
                "guide/counter-groups/meta-counter-group",
                "guide/counter-groups/meta-session-group",
                "guide/counter-groups/mitre-subtechnique",
                "guide/counter-groups/mitre-tactic",
                "guide/counter-groups/mitre-technique-counts-of-technique-used",
                "guide/counter-groups/mpls-stats",
                "guide/counter-groups/networklayerstats",
                "guide/counter-groups/organization",
                "guide/counter-groups/perf-stats",
                "guide/counter-groups/prefix",
                "guide/counter-groups/remote-office",
                "guide/counter-groups/snmp-interface",
                "guide/counter-groups/ssh-hosts",
                "guide/counter-groups/tls-ca",
                "guide/counter-groups/tls-ciphers",
                "guide/counter-groups/tls-orgs",
                "guide/counter-groups/unleash-apps",
                "guide/counter-groups/unusual-traffic-hosts",
                "guide/counter-groups/user-id",
                "guide/counter-groups/vlanstats",
                "guide/counter-groups/web-hosts"
              ]
            }
          ],
          "description": "Technical specifications for configuration files, CLI utilities, and plugins."
        },
        "guide/releasehistory"
      ]
    }
  ],
  "ipdrSidebar": [
    {
      "type": "category",
      "label": "Trisul IPDR User Guide",
      "link": {
        "type": "doc",
        "id": "prodguide/ipdr/index"
      },
      "className": "root-section-title",
      "collapsible": false,
      "collapsed": false,
      "items": [
        "prodguide/ipdr/intro",
        {
          "type": "category",
          "label": "Get started",
          "link": {
            "type": "doc",
            "id": "prodguide/ipdr/install"
          },
          "items": [
            "prodguide/ipdr/requirements",
            "prodguide/ipdr/ipdr-cloud",
            "prodguide/ipdr/specialuser",
            {
              "type": "category",
              "label": "Settings",
              "items": [
                "prodguide/ipdr/ipdr-settings",
                "prodguide/ipdr/advanced"
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "Network Config",
          "link": {
            "type": "doc",
            "id": "prodguide/ipdr/network-config"
          },
          "items": [
            "prodguide/ipdr/netflow",
            "prodguide/ipdr/radius",
            "prodguide/ipdr/syslog"
          ]
        },
        {
          "type": "category",
          "label": "Programs and Scripts",
          "link": {
            "type": "doc",
            "id": "prodguide/ipdr/scripts"
          },
          "items": [
            "prodguide/ipdr/trisul_aaaing",
            "prodguide/ipdr/qstream"
          ]
        },
        "prodguide/ipdr/ipdrui",
        "prodguide/ipdr/submit-queries",
        "prodguide/ipdr/ipdrdashboard",
        "prodguide/ipdr/ipdrstatistics",
        "prodguide/ipdr/ipdrexportfields",
        "prodguide/ipdr/staticip-mappings",
        "prodguide/ipdr/api-ipdr-query",
        "prodguide/ipdr/ipdr_customers_api",
        "prodguide/ipdr/ipdr_customer_mappings",
        "prodguide/ipdr/latlong",
        "prodguide/ipdr/tape",
        "prodguide/ipdr/prod_checklist",
        "prodguide/ipdr/faq"
      ]
    }
  ],
  "luaAPISidebar": [
    {
      "type": "category",
      "label": "LUA API",
      "link": {
        "type": "doc",
        "id": "lua/index"
      },
      "className": "root-section-title",
      "collapsible": false,
      "collapsed": false,
      "items": [
        "lua/basics",
        "lua/faq",
        "lua/tutorial1",
        "lua/tutorial2",
        "lua/selector",
        "lua/debugger",
        "lua/async-exec",
        {
          "type": "category",
          "label": "Global LUA Objects",
          "items": [
            "lua/obj_ac",
            "lua/obj_buffer",
            "lua/obj_engine",
            "lua/obj_flowid",
            "lua/obj_globalt",
            "lua/obj_tasync",
            "lua/obj_layer",
            "lua/obj_packet",
            "lua/obj_re2",
            "lua/obj_httpheader"
          ]
        },
        {
          "type": "category",
          "label": "Frontend Scripts",
          "items": [
            "lua/inputfilter",
            "lua/counter_group",
            "lua/alert_group",
            "lua/resource_group",
            "lua/simple_counter",
            "lua/fileextractoverview",
            "lua/fileextract",
            "lua/reassembly",
            "lua/packet_storage",
            "lua/protocol_handler",
            "lua/message_monitor"
          ]
        },
        {
          "type": "category",
          "label": "Backend Scripts",
          "items": [
            "lua/alert_monitor",
            "lua/cg_monitor",
            "lua/sg_monitor",
            "lua/resource_monitor",
            "lua/fts_monitor",
            "lua/engine_monitor",
            "lua/flow_tracker"
          ]
        }
      ]
    }
  ],
  "trpAPISidebar": [
    {
      "type": "category",
      "label": "TRP API",
      "link": {
        "type": "doc",
        "id": "trp/index"
      },
      "className": "root-section-title",
      "items": [
        {
          "type": "category",
          "label": "TRP Code Samples",
          "link": {
            "type": "doc",
            "id": "trp/code_samples"
          },
          "items": [
            "trp/samples/alerts_query",
            "trp/samples/cginfo",
            "trp/samples/flows_for_ip",
            "trp/samples/grep_flows",
            "trp/samples/pcap_simple",
            "trp/samples/resources_step_by_step",
            "trp/samples/tophttpflows"
          ]
        },
        "trp/troubleshooting",
        "trp/trpfirst",
        "trp/trpfirstjava",
        "trp/trpgemsteps",
        "trp/trpprogramodel"
      ]
    }
  ],
  "ispSidebar": [
    {
      "type": "category",
      "label": "Trisul ISP  Guide",
      "link": {
        "type": "doc",
        "id": "prodguide/isp/index"
      },
      "className": "root-section-title",
      "collapsible": false,
      "collapsed": false,
      "items": [
        "prodguide/isp/requirements",
        "prodguide/isp/bgp",
        "prodguide/isp/isapps",
        "prodguide/isp/isp_analytics_dashboard",
        "prodguide/isp/resourcegroups",
        "prodguide/isp/pingmonitor",
        "prodguide/isp/rtg",
        "prodguide/isp/ott_analytics",
        "prodguide/isp/api",
        "prodguide/isp/userapi"
      ]
    }
  ],
  "TroubleshootingSidebar": [
    {
      "type": "category",
      "label": "Troubleshooting a Step by Step Guide",
      "link": {
        "type": "doc",
        "id": "Troubleshooting/index"
      },
      "className": "root-section-title",
      "collapsible": false,
      "collapsed": false,
      "items": [
        "Troubleshooting/netflownotreceiving",
        "Troubleshooting/unabletologin",
        "Troubleshooting/contextnotgettingcreated"
      ]
    }
  ],
  "productGuidesSidebar": [
    {
      "type": "category",
      "label": "Product Guides",
      "link": {
        "type": "doc",
        "id": "prodguide/index"
      },
      "className": "root-section-title",
      "collapsible": false,
      "collapsed": false,
      "items": [
        {
          "type": "ref",
          "id": "prodguide/nf/index",
          "label": "NetFlow Analyzer Guide"
        },
        {
          "type": "ref",
          "id": "prodguide/ipdr/index",
          "label": "IPDR Solution Guide"
        },
        {
          "type": "ref",
          "id": "prodguide/isp/index",
          "label": "ISP Analytics Guide"
        },
        {
          "type": "ref",
          "id": "prodguide/nsm/index",
          "label": "Network Security Monitoring Guide"
        }
      ]
    }
  ],
  "netflowSidebar": [
    {
      "type": "category",
      "label": "Trisul NetFlow Analyzer Guide",
      "link": {
        "type": "doc",
        "id": "prodguide/nf/index"
      },
      "className": "root-section-title",
      "collapsible": false,
      "collapsed": false,
      "items": [
        {
          "type": "category",
          "label": "Dashboards",
          "description": "Use dashboards for a quick view of what is happening in your network. You can monitor current traffic, active hosts, applications, alerts, security information, sessions, and other frequently used network metrics.",
          "items": [
            "prodguide/nf/Dashboards/current-hosts",
            "prodguide/nf/Dashboards/current-apps",
            "prodguide/nf/Dashboards/alerts",
            "prodguide/nf/Dashboards/security",
            "prodguide/nf/Dashboards/sessions",
            "prodguide/nf/Dashboards/overview",
            "prodguide/nf/Dashboards/real-time-traffic",
            "prodguide/nf/Dashboards/active-keys-monitor",
            "prodguide/nf/Dashboards/system-performance",
            "prodguide/nf/Dashboards/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Retro",
          "description": "Use Retro when you want to look back at network activity that has already happened. It lets you inspect historical counters and analyze traffic for a specific period in the past.",
          "items": [
            "prodguide/nf/Retro/retro-counters",
            "prodguide/nf/Retro/retro-tools",
            "prodguide/nf/Retro/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Tools",
          "description": "Use the Tools section when you need to investigate traffic in more detail. It includes flow exploration, historical trends, IP flow exports, usage charts, flow trackers, taggers, and edge connection graphs.",
          "items": [
            "prodguide/nf/Tools/explore-flows",
            "prodguide/nf/Tools/long-term-traffic",
            "prodguide/nf/Tools/monthly-chart",
            "prodguide/nf/Tools/search-key-space",
            "prodguide/nf/Tools/real-time-stab-toppers",
            "prodguide/nf/Tools/flow-tracker",
            "prodguide/nf/Tools/flow-tagger",
            "prodguide/nf/Tools/export-flows",
            "prodguide/nf/Tools/aggregate-flows",
            "prodguide/nf/Tools/edge-graph",
            "prodguide/nf/Tools/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Netflow",
          "description": "Use the Netflow section to understand where your flow data is coming from and how traffic is distributed across your network devices and interfaces. You can view NetFlow sources, exporters, routers, interfaces, and interface-level traffic details.",
          "items": [
            "prodguide/nf/Netflow/netflow-sources",
            "prodguide/nf/Netflow/explore-flows",
            "prodguide/nf/Netflow/routers-and-interfaces",
            "prodguide/nf/Netflow/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Alerts",
          "description": "Use Alerts to identify traffic conditions that require attention. You can configure Threshold Crossing Alerts (TCAs), flow tracking alerts, blacklist matching, dynamic threshold bands, and view alert activity.",
          "items": [
            "prodguide/nf/Alerts/threshold-crossing-alerts",
            "prodguide/nf/Alerts/flow-tracking",
            "prodguide/nf/Alerts/blacklist",
            "prodguide/nf/Alerts/threshold-bands",
            "prodguide/nf/Alerts/dashboards",
            "prodguide/nf/Alerts/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Reports",
          "description": "Use Reports when you need to turn network traffic data into reports that can be reviewed or shared. This section includes standard reports, scheduled recurring reports, and email delivery settings.",
          "items": [
            "prodguide/nf/Reports/readymade",
            "prodguide/nf/Reports/schedule",
            "prodguide/nf/Reports/email-settings",
            "prodguide/nf/Reports/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Customize",
          "description": "Use Customize to adjust how the NetFlow Analyzer Web UI behaves and looks. You can personalize dashboard layouts, real-time parameters, and HTTP/HTTPS traffic classification rules.",
          "items": [
            "prodguide/nf/Customize/ui",
            "prodguide/nf/Customize/show-all"
          ]
        }
      ]
    }
  ],
  "nsmSidebar": [
    {
      "type": "category",
      "label": "Trisul Network Security Monitoring (NSM) Guide",
      "link": {
        "type": "doc",
        "id": "prodguide/nsm/index"
      },
      "className": "root-section-title",
      "collapsible": false,
      "collapsed": false,
      "items": [
        {
          "type": "category",
          "label": "Dashboards",
          "description": "Use dashboards for a quick view of what is happening in your network. You can monitor current traffic, active hosts, applications, alerts, security information, sessions, and other frequently used network metrics.",
          "items": [
            "prodguide/nsm/Dashboards/current-hosts",
            "prodguide/nsm/Dashboards/current-apps",
            "prodguide/nsm/Dashboards/alerts",
            "prodguide/nsm/Dashboards/security",
            "prodguide/nsm/Dashboards/sessions",
            "prodguide/nsm/Dashboards/overview",
            "prodguide/nsm/Dashboards/real-time-traffic",
            "prodguide/nsm/Dashboards/active-keys-monitor",
            "prodguide/nsm/Dashboards/realtime-alerts",
            "prodguide/nsm/Dashboards/system-performance",
            "prodguide/nsm/Dashboards/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Retro",
          "description": "Use Retro when you want to look back at network activity that has already happened. It lets you inspect historical counters and analyze traffic for a specific period in the past.",
          "items": [
            "prodguide/nsm/Retro/retro-counters",
            "prodguide/nsm/Retro/retro-tools",
            "prodguide/nsm/Retro/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Tools",
          "description": "Use the Tools section when you need to investigate traffic in more detail. It includes flow exploration, historical trends, IP flow exports, usage charts, flow trackers, taggers, and edge connection graphs.",
          "items": [
            "prodguide/nsm/Tools/explore-flows",
            "prodguide/nsm/Tools/long-term-traffic",
            "prodguide/nsm/Tools/monthly-chart",
            "prodguide/nsm/Tools/search-key-space",
            "prodguide/nsm/Tools/real-time-stab-toppers",
            "prodguide/nsm/Tools/flow-tracker",
            "prodguide/nsm/Tools/flow-tagger",
            "prodguide/nsm/Tools/export-flows",
            "prodguide/nsm/Tools/aggregate-flows",
            "prodguide/nsm/Tools/edge-graph",
            "prodguide/nsm/Tools/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Security",
          "description": "Use the Security section for access to monthly security summaries and unified alert views.",
          "link": {
            "type": "doc",
            "id": "prodguide/nsm/Security/index"
          },
          "items": [
            "prodguide/nsm/Security/monthly-summary",
            "prodguide/nsm/Security/all-alerts",
            "prodguide/nsm/Security/security-tools"
          ]
        },
        {
          "type": "category",
          "label": "Netflow",
          "description": "Use the Netflow section to understand where your flow data is coming from and how traffic is distributed across your network devices and interfaces. You can view NetFlow sources, exporters, routers, interfaces, and interface-level traffic details.",
          "items": [
            "prodguide/nsm/Netflow/netflow-sources",
            "prodguide/nsm/Netflow/explore-flows",
            "prodguide/nsm/Netflow/routers-and-interfaces",
            "prodguide/nsm/Netflow/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Resources",
          "description": "Use the Resources section for deep protocol analysis, DNS, URL, and certificate inspection.",
          "link": {
            "type": "doc",
            "id": "prodguide/nsm/Resources/index"
          },
          "items": [
            "prodguide/nsm/Resources/url",
            "prodguide/nsm/Resources/dns",
            "prodguide/nsm/Resources/sslcerts",
            "prodguide/nsm/Resources/ftsssl",
            "prodguide/nsm/Resources/ftshttp",
            "prodguide/nsm/Resources/oveview"
          ]
        },
        {
          "type": "category",
          "label": "Alerts",
          "description": "Use Alerts to identify traffic conditions that require attention. You can configure Threshold Crossing Alerts (TCAs), flow tracking alerts, blacklist matching, dynamic threshold bands, and view alert activity.",
          "items": [
            "prodguide/nsm/Alerts/threshold-crossing-alerts",
            "prodguide/nsm/Alerts/flow-tracking",
            "prodguide/nsm/Alerts/blacklist",
            "prodguide/nsm/Alerts/threshold-bands",
            "prodguide/nsm/Alerts/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Reports",
          "description": "Use Reports when you need to turn network traffic data into reports that can be reviewed or shared. This section includes standard reports, scheduled recurring reports, and email delivery settings.",
          "items": [
            "prodguide/nsm/Reports/readymade",
            "prodguide/nsm/Reports/schedule",
            "prodguide/nsm/Reports/email-settings",
            "prodguide/nsm/Reports/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Customize",
          "description": "Use Customize to adjust how the NSM Web UI behaves and looks. You can personalize dashboard layouts, real-time parameters, and HTTP/HTTPS traffic classification rules.",
          "items": [
            "prodguide/nsm/Customize/ui",
            "prodguide/nsm/Customize/show-all"
          ]
        },
        {
          "type": "category",
          "label": "NBAD",
          "description": "Use Network Behavioral Anomaly Detection (NBAD) for tracking protocol anomalies, Layer 7 metrics, DDoS, and MITRE ATT&CK telemetry.",
          "link": {
            "type": "doc",
            "id": "prodguide/nsm/NBAD/index"
          },
          "items": [
            "prodguide/nsm/NBAD/layer7metrics",
            "prodguide/nsm/NBAD/httptraffic",
            "prodguide/nsm/NBAD/ipv4ipv6",
            "prodguide/nsm/NBAD/tunnels",
            "prodguide/nsm/NBAD/p2p",
            "prodguide/nsm/NBAD/ja3",
            "prodguide/nsm/NBAD/ja4",
            "prodguide/nsm/NBAD/tcpanalyzer",
            "prodguide/nsm/NBAD/flowmap",
            "prodguide/nsm/NBAD/mitre-attck",
            "prodguide/nsm/NBAD/ddos-monitor",
            "prodguide/nsm/NBAD/dns-flood-activity",
            "prodguide/nsm/NBAD/enable-nbad",
            "prodguide/nsm/NBAD/nfgen",
            "prodguide/nsm/NBAD/commontasks",
            "prodguide/nsm/NBAD/falsepos"
          ]
        }
      ]
    }
  ]
};

export default sidebars;
