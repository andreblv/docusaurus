// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Herramientas de Desarrollo',
      items: [
        'chrome-devtools/elements',
        'chrome-devtools/console',
        'chrome-devtools/sources',
        'chrome-devtools/network',
        'chrome-devtools/performance',
        'chrome-devtools/memory',
        'chrome-devtools/application',
        'chrome-devtools/security',
        'chrome-devtools/lighthouse',
        'chrome-devtools/recorder',
        'chrome-devtools/shortcuts'
      ],
    }
  ],
};

export default sidebars;
