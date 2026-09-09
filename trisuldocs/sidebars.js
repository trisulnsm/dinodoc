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
        "id": "documentation/index"
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
            "id": "documentation/starthere/what_is_trisul/index"
          },
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "type": "category",
              "label": "What is Trisul",
              "link": {
                "type": "doc",
                "id": "documentation/starthere/what_is_trisul/index"
              },
              "collapsible": true,
              "collapsed": false,
              "items": [
                "documentation/starthere/what_is_trisul/architecture",
                "documentation/starthere/what_is_trisul/dataflow",
                "documentation/starthere/what_is_trisul/productmodes"
              ]
            },
            {
              "type": "category",
              "label": "Setup Trisul",
              "link": {
                "type": "doc",
                "id": "documentation/starthere/setuptrisul/getstart"
              },
              "collapsible": true,
              "collapsed": true,
              "items": [
                "documentation/starthere/setuptrisul/getstart",
                "documentation/starthere/setuptrisul/install/requirements",
                {
                  "type": "category",
                  "label": "Installation",
                  "link": {
                    "type": "doc",
                    "id": "documentation/starthere/setuptrisul/install/index"
                  },
                  "items": [
                    {
                      "type": "category",
                      "label": "Packages",
                      "link": {
                        "type": "doc",
                        "id": "documentation/starthere/setuptrisul/install/packages"
                      },
                      "items": [
                        "documentation/starthere/setuptrisul/install/badfellas",
                        "documentation/starthere/setuptrisul/install/geoasn"
                      ]
                    },
                    "documentation/starthere/setuptrisul/install/pkgverify",
                    "documentation/starthere/setuptrisul/install/doinstall",
                    "documentation/starthere/setuptrisul/install/selectmode",
                    "documentation/starthere/setuptrisul/install/trisulaicli",
                    "documentation/starthere/setuptrisul/install/doupgrade",
                    "documentation/starthere/setuptrisul/install/douninstall",
                    "documentation/starthere/setuptrisul/install/openports"
                  ]
                },
                {
                  "type": "category",
                  "label": "Licensing",
                  "link": {
                    "type": "doc",
                    "id": "documentation/starthere/setuptrisul/license/index"
                  },
                  "items": [
                    "documentation/starthere/setuptrisul/license/intro",
                    "documentation/starthere/setuptrisul/license/install"
                  ]
                },
                {
                  "type": "category",
                  "label": "Configure the Network",
                  "link": {
                    "type": "doc",
                    "id": "documentation/starthere/setuptrisul/network/index"
                  },
                  "items": [
                    "documentation/starthere/setuptrisul/network/input_packets",
                    "documentation/starthere/setuptrisul/network/input_netflow"
                  ]
                },
                {
                  "type": "category",
                  "label": "First Login",
                  "link": {
                    "type": "doc",
                    "id": "documentation/starthere/setuptrisul/login"
                  },
                  "items": [
                    "documentation/starthere/setuptrisul/login"
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
            "id": "documentation/ag/index"
          },
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "type": "category",
              "label": "Admin Tasks",
              "link": {
                "type": "doc",
                "id": "documentation/ag/basictasks/index"
              },
              "items": [
                "documentation/ag/admintasks/startstop",
                "documentation/ag/basictasks/logfiles",
                {
                  "type": "category",
                  "label": "Managing Storage",
                  "link": {
                    "type": "doc",
                    "id": "documentation/ag/admintasks/storage"
                  },
                  "items": [
                    "documentation/ag/basictasks/configure_storage",
                    "documentation/ag/basictasks/reloc",
                    "documentation/ag/basictasks/cleanenv",
                    "documentation/ag/admintasks/dbstatus",
                    "documentation/ag/admintasks/system_health",
                    "documentation/ag/admintasks/storage_status"
                  ]
                },
                "documentation/ag/admintasks/manage_profiles",
                "documentation/ag/admintasks/probe_health",
                "documentation/ag/admintasks/netflow_templatedb",
                "documentation/ag/admintasks/auditlog",
                "documentation/ag/admintasks/drdc_status",
                "documentation/ag/admintasks/userresources"
              ]
            },
            {
              "type": "category",
              "label": "Using the Admin UI",
              "link": {
                "type": "doc",
                "id": "documentation/ag/basictasks/index"
              },
              "items": [
                "documentation/ag/ui/adminlayout"
              ]
            },
            {
              "type": "category",
              "label": "Managing Trisul",
              "link": {
                "type": "doc",
                "id": "documentation/ag/webadmin/index"
              },
              "items": [
                "documentation/ag/webadmin/admin_menus",
                "documentation/ag/webadmin/manageusers",
                "documentation/ag/webadmin/ldap_login",
                "documentation/ag/webadmin/userroles",
                "documentation/ag/webadmin/authlog",
                "documentation/ag/webadmin/web_options",
                "documentation/ag/webadmin/emailsettings",
                "documentation/ag/webadmin/modules",
                "documentation/ag/webadmin/dashboards",
                "documentation/ag/webadmin/menus",
                "documentation/ag/webadmin/startorstop_tasks",
                "documentation/ag/webadmin/logs",
                "documentation/ag/webadmin/apps",
                "documentation/ag/webadmin/plugin_data_update",
                "documentation/ag/webadmin/bgjobs",
                "documentation/ag/webadmin/ipam",
                "documentation/ag/webadmin/smsconfig"
              ]
            },
            {
              "type": "category",
              "label": "Configuring Trisul",
              "link": {
                "type": "doc",
                "id": "documentation/ag/context/index"
              },
              "items": [
                "documentation/ag/context/profiles",
                "documentation/ag/context/home_networks",
                "documentation/ag/context/access_points",
                "documentation/ag/context/crontasks",
                "documentation/ag/context/customize",
                "documentation/ag/context/backup",
                "documentation/ag/context/disk_usage_alerts",
                "documentation/ag/context/advanced",
                {
                  "type": "category",
                  "label": "Custom Countergroups",
                  "link": {
                    "type": "doc",
                    "id": "documentation/ag/context/custom_countergroup"
                  },
                  "items": [
                    "documentation/ag/context/filtered_countergroups",
                    "documentation/ag/context/keyset_countergroups",
                    "documentation/ag/context/statbased_countergroups",
                    "documentation/ag/context/rulebased_countergroups",
                    "documentation/ag/context/crosskey_countergroups",
                    "documentation/ag/context/cardinality_countergroups"
                  ]
                },
                "documentation/ag/context/countergroup_settings",
                "documentation/ag/context/managekeys",
                "documentation/ag/context/profilemenu",
                "documentation/ag/context/snmp_agent"
              ]
            },
            {
              "type": "category",
              "label": "High Availability",
              "link": {
                "type": "doc",
                "id": "documentation/ag/ha/index"
              },
              "items": [
                {
                  "type": "autogenerated",
                  "dirName": "documentation/ag/ha"
                }
              ]
            },
            {
              "type": "category",
              "label": "Manage Contexts",
              "link": {
                "type": "doc",
                "id": "documentation/ag/manage_contexts/listcontexts"
              },
              "items": [
                {
                  "type": "autogenerated",
                  "dirName": "documentation/ag/manage_contexts"
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
            "id": "documentation/ug/index"
          },
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "type": "category",
              "label": "Navigating the UI",
              "link": {
                "type": "doc",
                "id": "documentation/ug/ui/index"
              },
              "items": [
                "documentation/ug/ui/userlayout",
                "documentation/ug/ui/dashmod_intro",
                "documentation/ug/ui/create_dashboards",
                "documentation/ug/ui/modules",
                "documentation/ug/ui/charts",
                "documentation/ug/ui/elements",
                "documentation/ug/ui/dashboards",
                "documentation/ug/ui/module_templates",
                "documentation/ug/ui/key_dashboard"
              ]
            },
            {
              "type": "category",
              "label": "Traffic Monitoring",
              "link": {
                "type": "doc",
                "id": "documentation/ug/cg/index"
              },
              "items": [
                "documentation/ug/cg/intro",
                "documentation/ug/cg/settings",
                "documentation/ug/cg/resolve",
                "documentation/ug/cg/ckey",
                "documentation/ug/cg/retro",
                "documentation/ug/cg/retrotools",
                "documentation/ug/cg/retrofaq",
                "documentation/ug/cg/stabber",
                "documentation/ug/cg/ssl",
                "documentation/ug/cg/deepmonitoring",
                "documentation/ug/cg/tasks",
                "documentation/ug/cg/custom"
              ]
            },
            {
              "type": "category",
              "label": "Flow Analysis",
              "link": {
                "type": "doc",
                "id": "documentation/ug/flow/index"
              },
              "items": [
                "documentation/ug/flow/intro",
                "documentation/ug/flow/tagger",
                "documentation/ug/flow/stabber",
                "documentation/ug/flow/tracker",
                "documentation/ug/flow/tuning",
                "documentation/ug/flow/deduplication",
                "documentation/ug/flow/tasks"
              ]
            },
            {
              "type": "category",
              "label": "NBAD",
              "link": {
                "type": "doc",
                "id": "documentation/ug/nbad/trisulnbad"
              },
              "items": [
                "documentation/ug/nbad/enable-nbad",
                "documentation/ug/nbad/nfgen",
                "documentation/ug/nbad/flowmap",
                "documentation/ug/nbad/httptraffic",
                "documentation/ug/nbad/layer7metrics",
                "documentation/ug/nbad/tunnels",
                "documentation/ug/nbad/ipv4ipv6",
                "documentation/ug/nbad/p2p",
                "documentation/ug/nbad/ja3",
                "documentation/ug/nbad/ja4",
                "documentation/ug/nbad/tcpanalyzer",
                "documentation/ug/nbad/commontasks",
                "documentation/ug/nbad/falsepos"
              ]
            },
            {
              "type": "category",
              "label": "Packet Captures",
              "link": {
                "type": "doc",
                "id": "documentation/ug/caps/index"
              },
              "items": [
                "documentation/ug/caps/fullcontent",
                "documentation/ug/caps/packetstorage",
                "documentation/ug/caps/pcap_import",
                "documentation/ug/caps/tasks",
                "documentation/ug/caps/methods"
              ]
            },
            {
              "type": "category",
              "label": "Alerts",
              "link": {
                "type": "doc",
                "id": "documentation/ug/alerts/index"
              },
              "items": [
                "documentation/ug/alerts/manage",
                "documentation/ug/alerts/tca",
                "documentation/ug/alerts/ft",
                "documentation/ug/alerts/ids_stabber",
                "documentation/ug/alerts/mw",
                "documentation/ug/alerts/monthly_summary",
                "documentation/ug/alerts/sms_settings",
                "documentation/ug/alerts/tband",
                "documentation/ug/alerts/viewall",
                "documentation/ug/alerts/ddos",
                "documentation/ug/alerts/msteams",
                "documentation/ug/alerts/email_wizard",
                "documentation/ug/alerts/mitre",
                "documentation/ug/alerts/mitretimeline"
              ]
            },
            {
              "type": "category",
              "label": "Resources",
              "link": {
                "type": "doc",
                "id": "documentation/ug/resources/index"
              },
              "items": [
                "documentation/ug/resources/oveview",
                "documentation/ug/resources/dns",
                "documentation/ug/resources/url",
                "documentation/ug/resources/sslcerts",
                "documentation/ug/resources/fts",
                "documentation/ug/resources/ftshttp",
                "documentation/ug/resources/ftsssl"
              ]
            },
            {
              "type": "category",
              "label": "Reports",
              "link": {
                "type": "doc",
                "id": "documentation/ug/reports/index"
              },
              "items": [
                "documentation/ug/reports/available_reports",
                "documentation/ug/reports/readymade",
                "documentation/ug/reports/flexible_reports",
                "documentation/ug/reports/emailsettings",
                "documentation/ug/reports/schedreports"
              ]
            },
            {
              "type": "category",
              "label": "NetFlow Monitoring",
              "link": {
                "type": "doc",
                "id": "documentation/ug/netflow/index"
              },
              "items": [
                "documentation/ug/netflow/netflow_setup",
                "documentation/ug/netflow/routers_and_interfaces",
                "documentation/ug/netflow/snmp",
                "documentation/ug/netflow/interface_tracker",
                "documentation/ug/netflow/pcap_and_netflow_setup",
                "documentation/ug/netflow/netflow_wizard",
                "documentation/ug/netflow/drilldown",
                "documentation/ug/netflow/l2qos",
                "documentation/ug/netflow/netflow_vs_snmp",
                "documentation/ug/netflow/sources"
              ]
            },
            {
              "type": "category",
              "label": "Tools",
              "link": {
                "type": "doc",
                "id": "documentation/ug/tools/index"
              },
              "items": [
                "documentation/ug/tools/explore_flows",
                "documentation/ug/tools/aggregate_flows",
                "documentation/ug/tools/analyze_item",
                "documentation/ug/tools/daily_usage",
                "documentation/ug/tools/payload_search",
                "documentation/ug/tools/keyspace",
                "documentation/ug/tools/rule_builder",
                "documentation/ug/tools/trisul_bucketizer"
              ]
            },
            {
              "type": "category",
              "label": "Graph Analytics",
              "link": {
                "type": "doc",
                "id": "documentation/ug/edges/index"
              },
              "items": [
                "documentation/ug/edges/using",
                "documentation/ug/edges/multicast",
                "documentation/ug/edges/sankey"
              ]
            },
            {
              "type": "category",
              "label": "REST API",
              "link": {
                "type": "doc",
                "id": "documentation/ug/restapi/index"
              },
              "items": [
                "documentation/ug/restapi/countergrouptopper_api",
                "documentation/ug/restapi/countergroupinfo_api",
                "documentation/ug/restapi/timeslices_api"
              ]
            },
            {
              "type": "category",
              "label": "HowTos",
              "link": {
                "type": "doc",
                "id": "documentation/howto/index"
              },
              "items": [
                {
                  "type": "autogenerated",
                  "dirName": "documentation/howto"
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
            "id": "documentation/learntrisul/terminology"
          },
          "collapsible": true,
          "collapsed": true,
          "items": [
            "documentation/learntrisul/terminology",
            "documentation/learntrisul/homenetwork_concepts",
            {
              "type": "category",
              "label": "Flow Concepts",
              "link": {
                "type": "doc",
                "id": "documentation/learntrisul/flow_concepts/index"
              },
              "items": [
                "documentation/learntrisul/flow_concepts/deduplication"
              ]
            },
            {
              "type": "category",
              "label": "Trisul Domain Concepts",
              "link": {
                "type": "doc",
                "id": "documentation/learntrisul/concepts/index"
              },
              "items": [
                {
                  "type": "autogenerated",
                  "dirName": "documentation/learntrisul/concepts"
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
            "id": "documentation/ref/index"
          },
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "type": "category",
              "label": "Configuration Files Reference",
              "link": {
                "type": "doc",
                "id": "documentation/ref/index"
              },
              "className": "root-section-title",
              "collapsible": false,
              "collapsed": false,
              "items": [
                "documentation/ref/guid",
                "documentation/ref/meters",
                "documentation/ref/netflow-config",
                {
                  "type": "category",
                  "label": "Plugin Configuration",
                  "link": {
                    "type": "doc",
                    "id": "documentation/ref/plugin_configuration"
                  },
                  "items": [
                    "documentation/ref/plugin-config/badfellas",
                    "documentation/ref/plugin-config/geoasn",
                    "documentation/ref/plugin-config/app_ports",
                    "documentation/ref/plugin-config/basedomain",
                    "documentation/ref/plugin-config/dns",
                    "documentation/ref/plugin-config/hosts",
                    "documentation/ref/plugin-config/http_hosts",
                    "documentation/ref/plugin-config/iptunnels",
                    "documentation/ref/plugin-config/mac",
                    "documentation/ref/plugin-config/tcp_based_metering",
                    "documentation/ref/plugin-config/tcpflow",
                    "documentation/ref/plugin-config/udp_protocol_disector"
                  ]
                },
                "documentation/ref/trisbashrc",
                "documentation/ref/trisul_filter_format",
                "documentation/ref/trisul_hub",
                "documentation/ref/trisul_probe",
                "documentation/ref/trisulconfig",
                "documentation/ref/trisulhubconfig",
                "documentation/ref/trpproto"
              ]
            },
            {
              "type": "category",
              "label": "Program Files Reference",
              "link": {
                "type": "doc",
                "id": "documentation/programs/index"
              },
              "className": "root-section-title",
              "items": [
                "documentation/programs/distributed-domain",
                "documentation/programs/listbackup",
                "documentation/programs/monit",
                "documentation/programs/rat",
                "documentation/programs/runhubflusher_watchdog",
                "documentation/programs/scanslices",
                "documentation/programs/trisul_flowcap",
                "documentation/programs/trisul_reencrypt",
                "documentation/programs/trisul_udpsink",
                "documentation/programs/trisulprogram"
              ]
            },
            {
              "type": "category",
              "label": "Counter Groups Reference",
              "link": {
                "type": "doc",
                "id": "documentation/counter-groups/index"
              },
              "className": "root-section-title",
              "items": [
                "documentation/counter-groups/aggregates",
                "documentation/counter-groups/alert-classes",
                "documentation/counter-groups/alert-priorities",
                "documentation/counter-groups/alert-signatures",
                "documentation/counter-groups/app-id",
                "documentation/counter-groups/applicationgroup",
                "documentation/counter-groups/apps",
                "documentation/counter-groups/asnumber",
                "documentation/counter-groups/base-domain",
                "documentation/counter-groups/bgp-aspathbgp",
                "documentation/counter-groups/bgp-orgin-as",
                "documentation/counter-groups/bgp-peer-as",
                "documentation/counter-groups/bgp-prefix-external",
                "documentation/counter-groups/bgp-prefix-home",
                "documentation/counter-groups/blacklist",
                "documentation/counter-groups/city",
                "documentation/counter-groups/country",
                "documentation/counter-groups/dir-mac",
                "documentation/counter-groups/flow-appid-nbar",
                "documentation/counter-groups/flow-asn",
                "documentation/counter-groups/flow-bgp-nexthop",
                "documentation/counter-groups/flow-ip-nextHop",
                "documentation/counter-groups/flow-link-asn",
                "documentation/counter-groups/flow-prefix-home",
                "documentation/counter-groups/flow-prefix-v6",
                "documentation/counter-groups/flow-prefix",
                "documentation/counter-groups/flow-tos",
                "documentation/counter-groups/flow-vrf",
                "documentation/counter-groups/flowgens",
                "documentation/counter-groups/flowi-ntfs",
                "documentation/counter-groups/hosts",
                "documentation/counter-groups/hostsIPv6",
                "documentation/counter-groups/http-content-types",
                "documentation/counter-groups/http-hosts",
                "documentation/counter-groups/http-methods",
                "documentation/counter-groups/http-status-codes",
                "documentation/counter-groups/http-url-category",
                "documentation/counter-groups/icmp-types",
                "documentation/counter-groups/link-layer-stats",
                "documentation/counter-groups/long-fat-tail-hosts",
                "documentation/counter-groups/mac",
                "documentation/counter-groups/meta-counter-group",
                "documentation/counter-groups/meta-session-group",
                "documentation/counter-groups/mpls-stats",
                "documentation/counter-groups/networklayerstats",
                "documentation/counter-groups/organization",
                "documentation/counter-groups/prefix",
                "documentation/counter-groups/remote-office",
                "documentation/counter-groups/snmp-interface",
                "documentation/counter-groups/tls-ca",
                "documentation/counter-groups/tls-ciphers",
                "documentation/counter-groups/tls-orgs",
                "documentation/counter-groups/user-id",
                "documentation/counter-groups/vlanstats"
              ]
            }
          ],
          "description": "Technical specifications for configuration files, CLI utilities, and plugins."
        },
        "documentation/releasehistory"
      ]
    }
  ],
  "ipdrSidebar": [
    {
      "type": "category",
      "label": "Trisul IPDR User Guide",
      "link": {
        "type": "doc",
        "id": "Product Guides/ipdr/index"
      },
      "className": "root-section-title",
      "collapsible": false,
      "collapsed": false,
      "items": [
        "Product Guides/ipdr/intro",
        {
          "type": "category",
          "label": "Get started",
          "link": {
            "type": "doc",
            "id": "Product Guides/ipdr/install"
          },
          "items": [
            "Product Guides/ipdr/requirements",
            "Product Guides/ipdr/ipdr-cloud",
            "Product Guides/ipdr/specialuser",
            {
              "type": "category",
              "label": "Settings",
              "items": [
                "Product Guides/ipdr/ipdr-settings",
                "Product Guides/ipdr/advanced"
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "Network Config",
          "link": {
            "type": "doc",
            "id": "Product Guides/ipdr/network-config"
          },
          "items": [
            "Product Guides/ipdr/netflow",
            "Product Guides/ipdr/radius",
            "Product Guides/ipdr/syslog"
          ]
        },
        {
          "type": "category",
          "label": "Programs and Scripts",
          "link": {
            "type": "doc",
            "id": "Product Guides/ipdr/scripts"
          },
          "items": [
            "Product Guides/ipdr/trisul_aaaing",
            "Product Guides/ipdr/qstream"
          ]
        },
        "Product Guides/ipdr/ipdrui",
        "Product Guides/ipdr/submit-queries",
        "Product Guides/ipdr/ipdrdashboard",
        "Product Guides/ipdr/ipdrstatistics",
        "Product Guides/ipdr/ipdrexportfields",
        "Product Guides/ipdr/staticip-mappings",
        "Product Guides/ipdr/api-ipdr-query",
        "Product Guides/ipdr/ipdr_customers_api",
        "Product Guides/ipdr/ipdr_customer_mappings",
        "Product Guides/ipdr/latlong",
        "Product Guides/ipdr/tape",
        "Product Guides/ipdr/prod_checklist",
        "Product Guides/ipdr/faq"
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
        "id": "Product Guides/isp/index"
      },
      "className": "root-section-title",
      "collapsible": false,
      "collapsed": false,
      "items": [
        "Product Guides/isp/requirements",
        "Product Guides/isp/bgp",
        "Product Guides/isp/isapps",
        "Product Guides/isp/isp_analytics_dashboard",
        "Product Guides/isp/resourcegroups",
        "Product Guides/isp/pingmonitor",
        "Product Guides/isp/rtg",
        "Product Guides/isp/ott_analytics",
        "Product Guides/isp/api",
        "Product Guides/isp/userapi"
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
        "id": "Product Guides/index"
      },
      "className": "root-section-title",
      "collapsible": false,
      "collapsed": false,
      "items": [
        {
          "type": "ref",
          "id": "Product Guides/NETFLOW ANALYZER GUIDE/index",
          "label": "NetFlow Analyzer Guide"
        },
        {
          "type": "ref",
          "id": "Product Guides/ipdr/index",
          "label": "IPDR Guide"
        },
        {
          "type": "ref",
          "id": "Product Guides/isp/index",
          "label": "ISP Guide"
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
        "id": "Product Guides/NETFLOW ANALYZER GUIDE/index"
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
            "Product Guides/NETFLOW ANALYZER GUIDE/Dashboards/current-hosts",
            "Product Guides/NETFLOW ANALYZER GUIDE/Dashboards/current-apps",
            "Product Guides/NETFLOW ANALYZER GUIDE/Dashboards/alerts",
            "Product Guides/NETFLOW ANALYZER GUIDE/Dashboards/security",
            "Product Guides/NETFLOW ANALYZER GUIDE/Dashboards/sessions",
            "Product Guides/NETFLOW ANALYZER GUIDE/Dashboards/overview",
            "Product Guides/NETFLOW ANALYZER GUIDE/Dashboards/real-time-traffic",
            "Product Guides/NETFLOW ANALYZER GUIDE/Dashboards/active-keys-monitor",
            "Product Guides/NETFLOW ANALYZER GUIDE/Dashboards/system-performance",
            "Product Guides/NETFLOW ANALYZER GUIDE/Dashboards/custom-key-monitors",
            "Product Guides/NETFLOW ANALYZER GUIDE/Dashboards/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Retro",
          "description": "Use Retro when you want to look back at network activity that has already happened. It lets you inspect historical counters and analyze traffic for a specific period in the past.",
          "items": [
            "Product Guides/NETFLOW ANALYZER GUIDE/Retro/retro-counters",
            "Product Guides/NETFLOW ANALYZER GUIDE/Retro/retro-tools",
            "Product Guides/NETFLOW ANALYZER GUIDE/Retro/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Tools",
          "description": "Use the Tools section when you need to investigate traffic in more detail. It includes flow exploration, historical trends, IP flow exports, usage charts, flow trackers, taggers, and edge connection graphs.",
          "items": [
            "Product Guides/NETFLOW ANALYZER GUIDE/Tools/explore-flows",
            "Product Guides/NETFLOW ANALYZER GUIDE/Tools/long-term-traffic",
            "Product Guides/NETFLOW ANALYZER GUIDE/Tools/export-ip-flows",
            "Product Guides/NETFLOW ANALYZER GUIDE/Tools/monthly-chart",
            "Product Guides/NETFLOW ANALYZER GUIDE/Tools/search-key-space",
            "Product Guides/NETFLOW ANALYZER GUIDE/Tools/real-time-stab-toppers",
            "Product Guides/NETFLOW ANALYZER GUIDE/Tools/flow-tracker",
            "Product Guides/NETFLOW ANALYZER GUIDE/Tools/flow-tagger",
            "Product Guides/NETFLOW ANALYZER GUIDE/Tools/export-flows",
            "Product Guides/NETFLOW ANALYZER GUIDE/Tools/aggregate-flows",
            "Product Guides/NETFLOW ANALYZER GUIDE/Tools/edge-graph",
            "Product Guides/NETFLOW ANALYZER GUIDE/Tools/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Netflow",
          "description": "Use the Netflow section to understand where your flow data is coming from and how traffic is distributed across your network devices and interfaces. You can view NetFlow sources, exporters, routers, interfaces, and interface-level traffic details.",
          "items": [
            "Product Guides/NETFLOW ANALYZER GUIDE/Netflow/netflow-sources",
            "Product Guides/NETFLOW ANALYZER GUIDE/Netflow/explore-flows",
            "Product Guides/NETFLOW ANALYZER GUIDE/Netflow/routers-and-interfaces",
            "Product Guides/NETFLOW ANALYZER GUIDE/Netflow/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Alerts",
          "description": "Use Alerts to identify traffic conditions that require attention. You can configure Threshold Crossing Alerts (TCAs), flow tracking alerts, blacklist matching, dynamic threshold bands, and view alert activity.",
          "items": [
            "Product Guides/NETFLOW ANALYZER GUIDE/Alerts/threshold-crossing-alerts",
            "Product Guides/NETFLOW ANALYZER GUIDE/Alerts/flow-tracking",
            "Product Guides/NETFLOW ANALYZER GUIDE/Alerts/blacklist",
            "Product Guides/NETFLOW ANALYZER GUIDE/Alerts/threshold-bands",
            "Product Guides/NETFLOW ANALYZER GUIDE/Alerts/dashboards",
            "Product Guides/NETFLOW ANALYZER GUIDE/Alerts/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Reports",
          "description": "Use Reports when you need to turn network traffic data into reports that can be reviewed or shared. This section includes standard reports, scheduled recurring reports, and email delivery settings.",
          "items": [
            "Product Guides/NETFLOW ANALYZER GUIDE/Reports/readymade",
            "Product Guides/NETFLOW ANALYZER GUIDE/Reports/schedule",
            "Product Guides/NETFLOW ANALYZER GUIDE/Reports/email-settings",
            "Product Guides/NETFLOW ANALYZER GUIDE/Reports/show-all"
          ]
        },
        {
          "type": "category",
          "label": "Customize",
          "description": "Use Customize to adjust how the NetFlow Analyzer Web UI behaves and looks. You can personalize dashboard layouts, real-time parameters, and HTTP/HTTPS traffic classification rules.",
          "items": [
            "Product Guides/NETFLOW ANALYZER GUIDE/Customize/ui",
            "Product Guides/NETFLOW ANALYZER GUIDE/Customize/real-time",
            "Product Guides/NETFLOW ANALYZER GUIDE/Customize/dashboards",
            "Product Guides/NETFLOW ANALYZER GUIDE/Customize/web-traffic-http-https",
            "Product Guides/NETFLOW ANALYZER GUIDE/Customize/show-all"
          ]
        }
      ]
    }
  ]
};

export default sidebars;
