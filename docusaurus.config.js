// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guía Chrome DevTools',
  tagline: 'Aprende a usar las herramientas de desarrollo de Chrome',
  favicon: 'img/favicon.ico',

  url: 'https://andreblv.github.io',
  baseUrl: '/docusaurus/',

  organizationName: 'andreblv',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/andreblv/docusaurus/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Chrome DevTools',
        logo: {
          alt: 'Logo Chrome DevTools',
          src: 'img/icono.svg', // Cambiando al nuevo ícono
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://github.com/andreblv/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        respectPrefersColorScheme: true,
        defaultMode: 'light',
      },
    }),
};

export default config;
