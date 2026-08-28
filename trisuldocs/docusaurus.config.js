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

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',

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
        redirects: [
          {
            from: '/docs/ipdr/api',
            to: '/docs/ipdr/ipdr_customers_api',
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
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'ag/index',
              label: 'Admin Guide',
            },
            {
              type: 'doc',
              docId: 'ug/index',
              label: 'User Guide',
            },
            {
              type: 'doc',
              docId: 'ipdr/index',
              label: 'IPDR Guide',
            },
            {
              type: 'doc',
              docId: 'isp/index',
              label: 'ISP Guide',
            },
            {
              type: 'doc',
              docId: 'ref/index',
              label: 'Reference',
            },
            {
              type: 'doc',
              docId: 'releasehistory',
              label: 'Changelog',
            },
          ],
        },
        {
          type: 'doc',
          docId: 'lua/index',
          label: 'API',
          position: 'left',
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