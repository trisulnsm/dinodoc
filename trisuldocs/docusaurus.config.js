// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import path from 'path';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trisul Network Analytics Docs',
  tagline: 'Wide and deep visibility, detection, and audit of network traffic',
  favicon: 'img/favicon.ico',

  url: 'https://docs.trisul.org/',
  baseUrl: '',

  organizationName: 'trisulnsm',
  projectName: 'dinodocs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          sidebarCollapsed: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsDir: ['docs', 'glossary', 'Playbook'],
        docsRouteBasePath: ['docs', 'playbook', 'playbook/cgconfigguide'],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'glossary',
        path: 'glossary',
        routeBasePath: '/',
        sidebarPath: './sidebarsGlossary.js',
        sidebarCollapsed: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'playbook',
        path: 'Playbook',
        exclude: ['cgconfigguide/**'],
        routeBasePath: 'playbook',
        sidebarPath: './sidebarsPlaybook.js',
        sidebarCollapsed: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cgconfigguide',
        path: 'Playbook/cgconfigguide',
        routeBasePath: 'playbook/cgconfigguide',
        sidebarPath: './sidebarsCgconfigguide.js',
        sidebarCollapsed: true,
      },
    ],
    function fixPlaybookOverlapPlugin(context) {
      return {
        name: 'fix-playbook-overlap-plugin',
        configureWebpack(config) {
          const cgPath = path.resolve(context.siteDir, 'Playbook/cgconfigguide');
          const playbookPath = path.resolve(context.siteDir, 'Playbook');

          config.module.rules.forEach((rule) => {
            if (rule.include) {
              const includes = Array.isArray(rule.include) ? rule.include : [rule.include];
              const matchesPlaybook = includes.some(
                (inc) => typeof inc === 'string' && path.resolve(inc) === playbookPath
              );
              const matchesCg = includes.some(
                (inc) => typeof inc === 'string' && path.resolve(inc) === cgPath
              );

              if (matchesPlaybook && !matchesCg) {
                if (!rule.exclude) {
                  rule.exclude = [];
                } else if (!Array.isArray(rule.exclude)) {
                  rule.exclude = [rule.exclude];
                }
                rule.exclude.push(cgPath);
              }
            }
          });
          return {};
        },
      };
    },
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          if (existingPath.includes('/docs/guide')) {
            return [existingPath.replace('/docs/guide', '/docs/documentation')];
          }
          if (existingPath.includes('/docs/prodguide/nf')) {
            return [
              encodeURI(existingPath.replace('/docs/prodguide/nf', '/docs/Product Guides/NETFLOW ANALYZER GUIDE')),
              encodeURI(existingPath.replace('/docs/prodguide/nf', '/docs/prodguide/NETFLOW ANALYZER GUIDE')),
            ];
          }
          if (existingPath.includes('/docs/prodguide')) {
            return [
              encodeURI(existingPath.replace('/docs/prodguide', '/docs/Product Guides')),
            ];
          }
          return undefined;
        },
        redirects: [
          {
            from: '/docs/ipdr/api',
            to: '/docs/prodguide/ipdr/ipdr_customers_api',
          },
          {
            from: '/docs/ug/intro/terminology',
            to: '/docs/guide/learntrisul/terminology',
          },
          {
            from: '/docs/ug/intro',
            to: '/docs/guide/starthere/what_is_trisul/',
          },
          {
            from: '/docs/ug/intro/architecture',
            to: '/docs/guide/starthere/what_is_trisul/architecture',
          },
          {
            from: '/docs/ug/intro/dataflow',
            to: '/docs/guide/starthere/what_is_trisul/dataflow',
          },
          {
            from: '/docs/ug/intro/productmodes',
            to: '/docs/guide/starthere/what_is_trisul/productmodes',
          },
          {
            from: '/docs/ug/intro/getstart',
            to: '/docs/guide/starthere/quickstart',
          },
          {
            from: '/docs/starthere/getstart',
            to: '/docs/guide/starthere/quickstart',
          },
          {
            from: '/docs/guide/starthere/setuptrisul/getstart',
            to: '/docs/guide/starthere/quickstart',
          },
          {
            from: '/docs/guide/starthere/setuptrisul/quickstart',
            to: '/docs/guide/starthere/quickstart',
          },
          {
            from: '/docs/setuptrisul/install/requirements',
            to: '/docs/guide/starthere/setuptrisul/install/requirements',
          },
          {
            from: '/docs/ag/install/requirements',
            to: '/docs/guide/starthere/setuptrisul/install/requirements',
          },
          {
            from: '/docs/setuptrisul',
            to: '/docs/guide/starthere/quickstart',
          },
          {
            from: '/docs/setuptrisul/install/doinstall',
            to: '/docs/guide/starthere/setuptrisul/install/doinstall',
          },
          {
            from: '/docs/setuptrisul/install/selectmode',
            to: '/docs/guide/starthere/setuptrisul/install/selectmode',
          },
          {
            from: '/docs/setuptrisul/network/input_packets',
            to: '/docs/guide/starthere/setuptrisul/network/input_packets',
          },
          {
            from: '/docs/setuptrisul/network/input_netflow',
            to: '/docs/guide/starthere/setuptrisul/network/input_netflow',
          },
          {
            from: '/docs/ipdr',
            to: '/docs/prodguide/ipdr/',
          },
          {
            from: '/docs/isp',
            to: '/docs/prodguide/isp/',
          },
          {
            from: '/docs/guide/ug/nbad/enable-nbad',
            to: '/docs/prodguide/nsm/NBAD/enable-nbad',
          },
          {
            from: '/docs/guide/ug/nbad/nfgen',
            to: '/docs/prodguide/nsm/NBAD/nfgen',
          },
          {
            from: '/docs/guide/ug/nbad/flowmap',
            to: '/docs/prodguide/nsm/NBAD/flowmap',
          },
          {
            from: '/docs/guide/ug/nbad/httptraffic',
            to: '/docs/prodguide/nsm/NBAD/httptraffic',
          },
          {
            from: '/docs/guide/ug/nbad/layer7metrics',
            to: '/docs/prodguide/nsm/NBAD/layer7metrics',
          },
          {
            from: '/docs/guide/ug/nbad/tunnels',
            to: '/docs/prodguide/nsm/NBAD/tunnels',
          },
          {
            from: '/docs/guide/ug/nbad/ipv4ipv6',
            to: '/docs/prodguide/nsm/NBAD/ipv4ipv6',
          },
          {
            from: '/docs/guide/ug/nbad/p2p',
            to: '/docs/prodguide/nsm/NBAD/p2p',
          },
          {
            from: '/docs/guide/ug/nbad/ja3',
            to: '/docs/prodguide/nsm/NBAD/ja3',
          },
          {
            from: '/docs/guide/ug/nbad/ja4',
            to: '/docs/prodguide/nsm/NBAD/ja4',
          },
          {
            from: '/docs/guide/ug/nbad/tcpanalyzer',
            to: '/docs/prodguide/nsm/NBAD/tcpanalyzer',
          },
          {
            from: '/docs/guide/ug/nbad/commontasks',
            to: '/docs/prodguide/nsm/NBAD/commontasks',
          },
          {
            from: '/docs/guide/ug/nbad/falsepos',
            to: '/docs/prodguide/nsm/NBAD/falsepos',
          },
          {
            from: '/docs/guide/ug/nbad/trisulnbad',
            to: '/docs/prodguide/nsm/NBAD/trisulnbad',
          },
          {
            from: '/docs/guide/ug/nbad',
            to: '/docs/prodguide/nsm/NBAD/',
          },
          {
            from: '/docs/guide/ug/resources/url',
            to: '/docs/prodguide/nsm/Resources/url',
          },
          {
            from: '/docs/guide/ug/resources/dns',
            to: '/docs/prodguide/nsm/Resources/dns',
          },
          {
            from: '/docs/guide/ug/resources/sslcerts',
            to: '/docs/prodguide/nsm/Resources/sslcerts',
          },
          {
            from: '/docs/guide/ug/resources/ftsssl',
            to: '/docs/prodguide/nsm/Resources/ftsssl',
          },
          {
            from: '/docs/guide/ug/resources/ftshttp',
            to: '/docs/prodguide/nsm/Resources/ftshttp',
          },
          {
            from: '/docs/guide/ug/resources/oveview',
            to: '/docs/prodguide/nsm/Resources/oveview',
          },
          {
            from: '/docs/guide/ug/resources/fts',
            to: '/docs/prodguide/nsm/Resources/fts',
          },
          {
            from: '/docs/guide/ug/resources',
            to: '/docs/prodguide/nsm/Resources/',
          },
          {
            from: '/docs/guide/ug/resources/index',
            to: '/docs/prodguide/nsm/Resources/',
          },
        ],
      },
    ],
  ],

  customFields: {
    tocLabel: 'In this page:',
  },
  themes: [
    '@docusaurus/theme-mermaid',
  ],
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    metadata: [
      { property: 'og:image', content: 'https://docs.trisul.org/img/latest-release.jpeg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://docs.trisul.org/' },
      { property: 'og:title', content: 'Trisul Network Analytics Docs' },
      { property: 'og:description', content: 'Wide and deep visibility, detection, and audit of network traffic' },
      { name: 'twitter:image', content: 'https://docs.trisul.org/img/latest-release.jpeg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],

    image: 'img/logo.png',

    navbar: {
      title: 'Trisul Docs',
      logo: {
        alt: 'Trisul Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Documentation',
          to: '/docs/guide',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'guide/index',
              label: 'Overview',
            },
            {
              type: 'doc',
              docId: 'guide/starthere/what_is_trisul/index',
              label: 'Start Here',
            },
            {
              type: 'doc',
              docId: 'guide/ag/index',
              label: 'Admin Guide',
            },
            {
              type: 'doc',
              docId: 'guide/ug/index',
              label: 'User Guide',
            },
            {
              type: 'doc',
              docId: 'guide/learntrisul/terminology',
              label: 'Learn Trisul',
            },
            {
              type: 'doc',
              docId: 'guide/ref/index',
              label: 'Reference',
            },
            {
              type: 'doc',
              docId: 'guide/releasehistory',
              label: 'Changelog',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Product Guides',
          to: '/docs/prodguide',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'prodguide/index',
              label: 'Overview',
            },
            {
              type: 'doc',
              docId: 'prodguide/nf/index',
              label: 'NetFlow Analyzer Guide',
            },
            {
              type: 'doc',
              docId: 'prodguide/ipdr/index',
              label: 'IPDR Solution Guide',
            },
            {
              type: 'doc',
              docId: 'prodguide/isp/index',
              label: 'ISP Analytics Guide',
            },
            {
              type: 'doc',
              docId: 'prodguide/nsm/index',
              label: 'NSM Guide',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'API',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'lua/index',
              label: 'LUA API',
            },
            {
              type: 'doc',
              docId: 'trp/index',
              label: 'TRP API',
            },
          ],
        },
        {
          type: 'doc',
          docId: 'Troubleshooting/index',
          label: 'Troubleshooting',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'intro',
          docsPluginId: 'glossary',
          label: 'Glossary',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Playbook',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'Network Investigation Playbook/index',
              docsPluginId: 'playbook',
              label: 'Network Investigation Playbook',
            },
            {
              type: 'doc',
              docId: 'securityplaybook/index',
              docsPluginId: 'playbook',
              label: 'Network Threat Investigation Playbook',
            },
            {
              type: 'doc',
              docId: 'index',
              docsPluginId: 'cgconfigguide',
              label: 'CounterGroup Configuration Guide',
            },
          ],
        },
        {
          href: 'https://github.com/trisulnsm/dinodoc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },

    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Trisul Network Analytics. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['ruby', 'lua', 'bash'],
    },
  },
};

export default config;