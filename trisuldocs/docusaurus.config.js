// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

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
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          sidebarCollapsed: true,
          versions: {
            current: {
              label: 'Version 8.0',
            },
            '7.0': {
              label: 'Version 7.0',
            },
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
      },
    ],
  ],

  customFields: {
    tocLabel: 'In this page:',
  },

  themeConfig:
    ({
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
            type: 'docsVersionDropdown',
            position: 'left',
          },

          {
            type: 'doc',
            docId: 'ag/index',
            label: 'Admin Guide',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'ug/index',
            label: 'User Guide',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'lua/index',
            label: 'API',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'ref/index',
            label: 'Reference',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'ipdr/index',
            label: 'IPDR',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'isp/index',
            label: 'ISP',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'releasehistory',
            label: 'Changelog',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'Troubleshooting/index',
            label: 'Troubleshooting',
            position: 'left',
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
    }),
};

export default config;