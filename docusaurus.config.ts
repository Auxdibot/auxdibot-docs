import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Auxdibot Documentation',
  tagline: 'The official documentation website for Auxdibot. Learn how to use Auxdibot and its features here.',
  favicon: 'img/favicon.ico',
  
  url: 'https://docs.auxdibot.xyz',
  baseUrl: '/',
  organizationName: 'Auxdibot',
  projectName: 'auxdibot-docs',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        docsRouteBasePath: "/",
      }),
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Auxdibot Docs',
      logo: {
        alt: 'Auxdibot Logo',
        src: 'img/logo.png',
      },

    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Steven Primeaux. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
