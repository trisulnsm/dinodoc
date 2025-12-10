/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // But you can create a sidebar manually
  docsSidebar: [
    {
      type: 'category',
      label: 'Trisul User Guide',
      link: { type: 'doc', id: 'ug/index' },
      className: 'root-section-title',
      collapsible: false,                 
      collapsed: false,                  
      items: [
        /* Introduction */
        {
          type: 'category',
          label: 'Introduction',
          link: { type: 'doc', id: 'ug/intro/index' },
          items: [
            'ug/intro/getstart',
            'ug/intro/terminology',
          ],
        }, /* end Introduction */

        /* Navigating the UI */
        {
          type: 'category',
          label: 'Navigating the UI',
          link: { type: 'doc', id: 'ug/ui/index' },
          items: [
            'ug/ui/userlayout',
            'ug/ui/dashmod_intro',
            'ug/ui/create_dashboards',
            'ug/ui/modules',
            'ug/ui/charts',
            'ug/ui/elements',
            'ug/ui/dashboards',
            'ug/ui/module_templates',
            'ug/ui/key_dashboard',
          ],
        }, /* end Navigating the UI */

        /* Traffic Monitoring */
        {
          type: 'category',
          label: 'Traffic Monitoring',
          link: { type: 'doc', id: 'ug/cg/index' },
          items: [
            'ug/cg/intro',
            'ug/cg/settings',
            'ug/cg/resolve',
            'ug/cg/ckey',
            'ug/cg/retro',
            'ug/cg/retrotools',
            'ug/cg/retrofaq',
            'ug/cg/stabber',
            'ug/cg/ssl',
            'ug/cg/deepmonitoring',
            'ug/cg/tasks',
            'ug/cg/custom',
          ],
        }, /* end Traffic Monitoring */

        /* Flow Analysis */
        {
          type: 'category',
          label: 'Flow Analysis',
          link: { type: 'doc', id: 'ug/flow/index' },
          items: [
            'ug/flow/intro',
            'ug/flow/tagger',
            'ug/flow/stabber',
            'ug/flow/tracker',
            'ug/flow/tuning',
            'ug/flow/deduplication',
            'ug/flow/tasks',
          ],
        }, /* end Flow Analysis */

        /* Packet Captures */
        {
          type: 'category',
          label: 'Packet Captures',
          link: { type: 'doc', id: 'ug/caps/index' },
          items: [
            'ug/caps/fullcontent',
            'ug/caps/packetstorage',
            'ug/caps/pcap_import',
            'ug/caps/tasks',
            'ug/caps/methods',
          ],
        }, /* end Packet Captures */

        /* Alerts */
        {
          type: 'category',
          label: 'Alerts',
          link: { type: 'doc', id: 'ug/alerts/index' },
          items: [
            'ug/alerts/manage',
            'ug/alerts/tca',
            'ug/alerts/ft',
            'ug/alerts/ids_stabber',
            'ug/alerts/mw',
            'ug/alerts/monthly_summary',
            'ug/alerts/sms_settings',
            'ug/alerts/tband',
            'ug/alerts/viewall',
            'ug/alerts/ddos',
            'ug/alerts/msteams',
            'ug/alerts/email_wizard',
          ],
        }, /* end Alerts */

        /* Resources */
        {
          type: 'category',
          label: 'Resources',
          link: { type: 'doc', id: 'ug/resources/index' },
          items: [
            'ug/resources/oveview',
            'ug/resources/dns',
            'ug/resources/url',
            'ug/resources/sslcerts',
            'ug/resources/fts',
            'ug/resources/ftshttp',
            'ug/resources/ftsssl',
          ],
        }, /* end Resources */

        /* Reports */
        {
          type: 'category',
          label: 'Reports',
          link: { type: 'doc', id: 'ug/reports/index' },
          items: [
            'ug/reports/available_reports',
            'ug/reports/readymade',
            'ug/reports/flexible_reports',
            'ug/reports/emailsettings',
            'ug/reports/schedreports',
          ],
        }, /* end Reports */

        /* NetFlow Monitoring */
        {
          type: 'category',
          label: 'NetFlow Monitoring',
          link: { type: 'doc', id: 'ug/netflow/index' },
          items: [
            'ug/netflow/netflow_setup',
            'ug/netflow/routers_and_interfaces',
            'ug/netflow/snmp',
            'ug/netflow/interface_tracker',
            'ug/netflow/pcap_and_netflow_setup',
            'ug/netflow/netflow_wizard',
            'ug/netflow/drilldown',
            'ug/netflow/l2qos',
            'ug/netflow/netflow_vs_snmp',
            'ug/netflow/sources',
          ],
        }, /* end NetFlow Monitoring */

        /* Tools */
        {
          type: 'category',
          label: 'Tools',
          link: { type: 'doc', id: 'ug/tools/index' },
          items: [
            'ug/tools/explore_flows',
            'ug/tools/aggregate_flows',
            'ug/tools/analyze_item',
            'ug/tools/daily_usage',
            'ug/tools/payload_search',
            'ug/tools/keyspace',
            'ug/tools/rule_builder',
            'ug/tools/trisul_bucketizer',
          ],
        }, /* end Tools */

        /* Graph Analytics */
        {
          type: 'category',
          label: 'Graph Analytics',
          link: { type: 'doc', id: 'ug/edges/index' },
          items: [
            'ug/edges/using',
            'ug/edges/multicast',
            'ug/edges/sankey',
          ],
        }, /* end Graph Analytics */
      ],
    },
    {
      type: 'category',
      label: 'HowTos',
      link: { type: 'doc', id: 'howto/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'howto',
        },
      ],
    },

  ],

  // IPDR User Guide Sidebar
  ipdrSidebar: [
    {
      type: 'category',
      label: 'Trisul IPDR User Guide',
      link: { type: 'doc', id: 'ipdr/index' },
      className: 'root-section-title',
      collapsible: false,                      // cannot collapse
      collapsed: false,                  
      items: [
        'ipdr/intro',
        {
          type: 'category',
          label: 'Get started',
          link: { type: 'doc', id: 'ipdr/install' },
          items: [
            'ipdr/requirements',
            'ipdr/specialuser',
            {
              type: 'category',
              label: 'Settings',
              items: [
                'ipdr/ipdr-settings',
                'ipdr/advanced',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Network Config',
          link: { type: 'doc', id: 'ipdr/network-config' },
          items: [
            'ipdr/netflow',
            'ipdr/radius',
            'ipdr/syslog',
          ],
        },
        {
          type: 'category',
          label: 'Programs and Scripts',
          link: { type: 'doc', id: 'ipdr/scripts' },
          items: [
            'ipdr/trisul_aaaing',
            'ipdr/qstream',
          ],
        },

        'ipdr/ipdrui',
        'ipdr/submit-queries',
        'ipdr/ipdrdashboard',
        'ipdr/ipdrstatistics',
        'ipdr/ipdrexportfields',
        'ipdr/staticip-mappings',
        'ipdr/api',
        'ipdr/latlong',
        'ipdr/tape',
        'ipdr/prod_checklist',
        'ipdr/faq',

      ],
    },
  ],

// LUA API Sidebar
luaAPISidebar: [
  {
    type: 'category',
    label: 'LUA API',
    link: { type: 'doc', id: 'lua/index' },
    className: 'root-section-title',
    collapsible: false,                      // cannot collapse
    collapsed: false,                  
    items: [
      'lua/basics',
      'lua/faq',
      'lua/tutorial1',
      'lua/tutorial2',
      'lua/selector',
      'lua/debugger',
      'lua/async-exec',
      {
        type: 'category',
        label: 'Global LUA Objects',
        items: [
          'lua/obj_ac',
          'lua/obj_buffer',
          'lua/obj_engine',
          'lua/obj_flowid',
          'lua/obj_globalt',
          'lua/obj_tasync',
          'lua/obj_layer',
          'lua/obj_packet',
          'lua/obj_re2',
          'lua/obj_httpheader',
        ],
      },
      {
        type: 'category',
        label: 'Frontend Scripts',
        items: [
          'lua/inputfilter',
          'lua/counter_group',
          'lua/alert_group',
          'lua/resource_group',
          'lua/simple_counter',
          'lua/fileextractoverview',
          'lua/fileextract',
          'lua/reassembly',
          'lua/packet_storage',
          'lua/protocol_handler',
          'lua/message_monitor',
        ],
      },
      {
        type: 'category',
        label: 'Backend Scripts',
        items: [
          'lua/alert_monitor',
          'lua/cg_monitor',
          'lua/sg_monitor',
          'lua/resource_monitor',
          'lua/fts_monitor',
          'lua/engine_monitor',
          'lua/flow_tracker',
        ],
      },
    ],
  },
],  // luaAPISidebar ends here

// TRP API Sidebar
trpAPISidebar: [
  {
    type: 'category',
    label: 'TRP API',
    link: { type: 'doc', id: 'trp/index' },
    className: 'root-section-title',
    items: [
      {
        type: 'category',
        label: 'TRP Code Samples',
        link: { type: 'doc', id: 'trp/code_samples' },
        items: [
          'trp/samples/alerts_query',
          'trp/samples/cginfo',
          'trp/samples/flows_for_ip',
          'trp/samples/grep_flows',
          'trp/samples/pcap_simple',
          'trp/samples/resources_step_by_step',
          'trp/samples/tophttpflows',
        ],
      },
      'trp/troubleshooting',
      'trp/trpfirst',
      'trp/trpfirstjava',
      'trp/trpgemsteps',
      'trp/trpprogramodel',
    ],
  },
],  // trpAPISidebar ends here


  // Ref sidebar
  refSidebar: [
    {
      type: 'category',
      label: 'Configuration Files Reference',
      link: { type: 'doc', id: 'ref/index' },
      className: 'root-section-title',
      collapsible: false,                      // cannot collapse
      collapsed: false,                  
      items: [
        'ref/guid',
        'ref/meters',
        'ref/netflow-config',
        {
          type: 'category',
          label: 'Plugin Configuration',
          link: { type: 'doc', id: 'ref/plugin_configuration' },
          items: [
            'ref/plugin-config/badfellas',
            'ref/plugin-config/geoasn',
            'ref/plugin-config/app_ports',
            'ref/plugin-config/basedomain',
            'ref/plugin-config/dns',
            'ref/plugin-config/hosts',
            'ref/plugin-config/http_hosts',
            'ref/plugin-config/iptunnels',
            'ref/plugin-config/mac',
            'ref/plugin-config/tcp_based_metering',
            'ref/plugin-config/tcpflow',
            'ref/plugin-config/udp_protocol_disector',
          ],
        },
        'ref/trisbashrc',
        'ref/trisul_filter_format',
        'ref/trisul_hub',
        'ref/trisul_probe',
        'ref/trisulconfig',
        'ref/trisulhubconfig',
        'ref/trpproto',
      ],
    },
    // Prog Files Reference
    {
      type: 'category',
      label: 'Program Files Reference',
      link: { type: 'doc', id: 'programs/index' },
      className: 'root-section-title',
      items: [
        // Standalone ProgFilesRef Pages
        'programs/distributed-domain',
        'programs/listbackup',
        'programs/monit',
        'programs/rat',
        'programs/runhubflusher_watchdog',
        'programs/scanslices',
        'programs/trisul_flowcap',
        'programs/trisul_reencrypt',
        'programs/trisul_udpsink',
        'programs/trisulprogram',
      ],
    },
    // Counter Groups Reference
    {
      type: 'category',
      label: 'Counter Groups Reference',
      link: { type: 'doc', id: 'counter-groups/index' },
      className: 'root-section-title',
      items: [
        'counter-groups/aggregates',
        'counter-groups/alert-classes',
        'counter-groups/alert-priorities',
        'counter-groups/alert-signatures',
        'counter-groups/app-id',
        'counter-groups/applicationgroup',
        'counter-groups/apps',
        'counter-groups/asnumber',
        'counter-groups/base-domain',
        'counter-groups/bgp-aspathbgp',
        'counter-groups/bgp-orgin-as',
        'counter-groups/bgp-peer-as',
        'counter-groups/bgp-prefix-external',
        'counter-groups/bgp-prefix-home',
        'counter-groups/blacklist',
        'counter-groups/city',
        'counter-groups/country',
        'counter-groups/dir-mac',
        'counter-groups/flow-appid-nbar',
        'counter-groups/flow-asn',
        'counter-groups/flow-bgp-nexthop',
        'counter-groups/flow-ip-nextHop',
        'counter-groups/flow-link-asn',
        'counter-groups/flow-prefix-home',
        'counter-groups/flow-prefix-v6',
        'counter-groups/flow-prefix',
        'counter-groups/flow-tos',
        'counter-groups/flow-vrf',
        'counter-groups/flowgens',
        'counter-groups/flowi-ntfs',
        'counter-groups/hosts',
        'counter-groups/hostsIPv6',
        'counter-groups/http-content-types',
        'counter-groups/http-hosts',
        'counter-groups/http-methods',
        'counter-groups/http-status-codes',
        'counter-groups/http-url-category',
        'counter-groups/icmp-types',
        'counter-groups/link-layer-stats',
        'counter-groups/long-fat-tail-hosts',
        'counter-groups/mac',
        'counter-groups/meta-counter-group',
        'counter-groups/meta-session-group',
        'counter-groups/mpls-stats',
        'counter-groups/networklayerstats',
        'counter-groups/organization',
        'counter-groups/prefix',
        'counter-groups/remote-office',
        'counter-groups/snmp-interface',
        'counter-groups/tls-ca',
        'counter-groups/tls-ciphers',
        'counter-groups/tls-orgs',
        'counter-groups/user-id',
        'counter-groups/vlanstats',
      ],
    },
  ],

  ispSidebar: [
    {
      type: 'category',
      label: 'Trisul ISP  Guide',
      link: { type: 'doc', id: 'isp/index' },
      className: 'root-section-title',
      collapsible: false,                      // cannot collapse
      collapsed: false,                  
      items: [
        'isp/requirements',
        'isp/bgp',
        'isp/isapps',
        'isp/isp_analytics_dashboard',
        'isp/resourcegroups',
        'isp/pingmonitor',
        'isp/rtg',
        'isp/ott_analytics',
        'isp/api',
        'isp/userapi',
      ],
    },
  ],

  TroubleshootingSidebar: [
    {
      type: 'category',
      label: 'Troubleshooting a Step by Step Guide',
      link: { type: 'doc', id: 'Troubleshooting/index' },
      className: 'root-section-title',
      collapsible: false,                      // cannot collapse
      collapsed: false,                  
      items: [
        'Troubleshooting/netflownotreceiving',
        'Troubleshooting/unabletologin',
        'Troubleshooting/contextnotgettingcreated',
      ],
    },
  ],

  // Admin Guide
  adminGuideSidebar: [
    {
      type: 'category',
      label: 'Trisul Admininstrator Guide',
      link: { type: 'doc', id: 'ag/index' },
      className: 'root-section-title',
      collapsible: false,                      // cannot collapse
      collapsed: false,                  
      items: [
        'ag/install/requirements',

        /* Installation */
        {
          type: 'category',
          label: 'Installation',
          link: { type: 'doc', id: 'ag/install/index' },
          items: [

            {
              type: 'category',
              label: 'Packages',
              link: { type: 'doc', id: 'ag/install/packages' },
              items: ['ag/install/badfellas', 'ag/install/geoasn'],

            },
            'ag/install/pkgverify',
            'ag/install/doinstall',
            'ag/install/selectmode',
            'ag/install/doupgrade',
            'ag/install/douninstall',
            'ag/install/openports',
          ],
        }, /* end Installation */

        /* Licensing */
        {
          type: 'category',
          label: 'Licensing',
          link: { type: 'doc', id: 'ag/license/index' },
          items: [
            'ag/license/intro',
            'ag/license/install',
          ],
        }, /* end Licensing*/

        /* Network */
        {
          type: 'category',
          label: 'Configure the Network',
          link: { type: 'doc', id: 'ag/network/index' },
          items: [
            'ag/network/input_packets',
            'ag/network/input_netflow',
          ],
        }, /* end Network*/

        /* Admin Tasks */
        {
          type: 'category',
          label: 'Admin Tasks',
          link: { type: 'doc', id: 'ag/basictasks/index' },
          items: [
            'ag/admintasks/startstop',
            'ag/basictasks/logfiles',
            {
              type: 'category',
              label: 'Managing Storage',
              link: { type: 'doc', id: 'ag/admintasks/storage' },
              items: [
                'ag/basictasks/configure_storage',
                'ag/basictasks/reloc',
                'ag/basictasks/cleanenv',
                'ag/admintasks/dbstatus',
                'ag/admintasks/system_health',
                'ag/admintasks/storage_status',
              ],
            },
            'ag/admintasks/manage_profiles',
            'ag/admintasks/probe_health',
            'ag/admintasks/netflow_templatedb',
            'ag/admintasks/drdc_status',
            'ag/admintasks/userresources',

          ],
        }, /* end Admin Tasks*/

        /* UI*/
        {
          type: 'category',
          label: 'Using the Admin UI',
          link: { type: 'doc', id: 'ag/basictasks/index' },
          items: [
            'ag/ui/adminlayout',
          ],
        }, /* end Basic Tasks*/

        /* Web Admin*/
        {
          type: 'category',
          label: 'Managing Trisul',
          link: { type: 'doc', id: 'ag/webadmin/index' },
          items: [
            'ag/webadmin/admin_menus',
            'ag/webadmin/manageusers',
            'ag/webadmin/ldap_login',
            'ag/webadmin/userroles',
            'ag/webadmin/authlog',
            'ag/webadmin/web_options',
            'ag/webadmin/emailsettings',
            'ag/webadmin/modules',
            'ag/webadmin/dashboards',
            'ag/webadmin/menus',
            'ag/webadmin/startorstop_tasks',
            'ag/webadmin/logs',
            'ag/webadmin/apps',
            'ag/webadmin/plugin_data_update',
          ],
        }, /* end Web Admin*/

        /* Context Menu*/
        {
          type: 'category',
          label: 'Configuring Trisul',
          link: { type: 'doc', id: 'ag/context/index' },
          items: [
            'ag/context/login',
            'ag/context/profiles',
            'ag/context/home_networks',
            'ag/context/homenetwork_concepts',
            'ag/context/access_points',
            'ag/context/crontasks',
            'ag/context/customize',
            'ag/context/backup',
            'ag/context/disk_usage_alerts',
            'ag/context/advanced',
            {
              type: 'category',
              label: 'Custom Countergroups',
              link: { type: 'doc', id: 'ag/context/custom_countergroup' },
              items: [
                'ag/context/filtered_countergroups',
                'ag/context/keyset_countergroups',
                'ag/context/statbased_countergroups',
                'ag/context/rulebased_countergroups',
                'ag/context/crosskey_countergroups',
                'ag/context/cardinality_countergroups',
              ],
            },
            'ag/context/countergroup_settings',
            'ag/context/managekeys',
            'ag/context/profilemenu',
            'ag/context/snmp_agent',

          ], /* end Context Menu*/
        },

        /* HA */
        {
          type: 'category',
          label: 'High Availability',
          link: { type: 'doc', id: 'ag/ha/index' },
          items: [
            {

              type: 'autogenerated',
              dirName: 'ag/ha',
            },
          ],
        }, /* end HA*/

        {
          type: 'category',
          label: 'Manage Contexts',
          link: { type: 'doc', id: 'ag/manage_contexts/listcontexts' },
          items: [
            {

              type: 'autogenerated',
              dirName: 'ag/manage_contexts',
            },
          ],
        }, /* end Manage Contexts*/

        /* Domain*/
        {
          type: 'category',
          label: 'Concepts',
          link: { type: 'doc', id: 'ag/domain/index' },
          items: [
            {

              type: 'autogenerated',
              dirName: 'ag/domain',
            },
          ],
        }, /* end Domain*/

      ],

    },
  ],

};

export default sidebars;