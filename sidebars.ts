import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  sidebar: ['introduction', 'get-started',
    {
      type: 'category',
      label: 'Navigating Auxdibot',
      collapsed: false,
      items: [
        'navigating/commands',
       'navigating/dashboard',
      ]
    },
  {
    type: 'category',
    label: 'Modules',
    collapsed: true,
    items: [
      'modules/moderation',
      'modules/logging',
      'modules/embeds', 
      'modules/roles',
      'modules/greetings',
      'modules/starboard',
      'modules/levels',
      'modules/automod',
      'modules/notifications',
      'modules/suggestions',
      'modules/schedules',
       
    ]
  },
  {
    type: 'category',
    label: 'Legal',
    items: [
      'legal/terms-of-service',
      'legal/privacy-policy',
    ]
  }
],

 
};

export default sidebars;
