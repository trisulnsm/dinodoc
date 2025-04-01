// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trisul Network Analytics Docs',
  tagline: 'Wide and deep visibility, detection, and audit of network traffic',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site
  url: 'https://docs.trisul.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '',

  // GitHub pages deployment config.
  organizationName: 'trisulnsm', // Usually your GitHub org/user name.
  projectName: 'dinodocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          sidebarCollapsed: true,
          editUrl: 'https://github.com/trisulnsm/dinodoc/blob/main/trisuldocs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Open Graph and Twitter metadata for social sharing
      metadata: [
        { property: 'og:image', content: 'https://docs.trisul.org/img/latest-release.jpeg' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://docs.trisul.org/' },
        { property: 'og:title', content: 'Trisul Network Analytics Docs' },
        { property: 'og:description', content: 'Wide and deep visibility, detection, and audit of network traffic' },
        { name: 'twitter:image', content: 'https://docs.trisul.org/img/latest-release.jpeg' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],

      // This sets the default social media preview image
      image: 'img/logo.png',

      navbar: {
        title: 'Trisul Docs',
        logo: {
          alt: 'Trisul Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/docs/ag', label: 'Admin Guide', position: 'left' },
          { to: '/docs/ug', label: 'User Guide', position: 'left' },
          { to: '/docs/lua', label: 'API', position: 'left' },
          { to: '/docs/ref', label: 'Reference', position: 'left' },
          { to: '/docs/ipdr', label: 'IPDR', position: 'left' },
          { to: '/docs/isp', label: 'ISP', position: 'left' },
          { to: '/docs/releasehistory', label: 'Changelog', position: 'left' },
          {
            href: 'https://github.com/trisulnsm/dinodoc',
            label: 'GitHub',
            position: 'right',
          },
        ],
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

