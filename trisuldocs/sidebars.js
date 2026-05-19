// @ts-check

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

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // Main Docs Sidebar
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
        },

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
        },

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
        },

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
        },

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
        },

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
            'ug/alerts/mitre',
          ],
        },

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
        },

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
        },

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
        },

        /* NBAD */
        {
          type: 'category',
          label: 'NBAD',
          link: { type: 'doc', id: 'nbad/trisulnbad' },
          items: [
            'nbad/trisulnbad',
            },
          ],
        },

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
        },

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
        },
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

};

export default sidebars;
