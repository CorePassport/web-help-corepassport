const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Core Passport KB',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#297abd' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'renderer', content: 'webkit' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: "book",
  themeConfig: {
    logo: '/img/corepass.svg',
    repo: 'https://github.com/CorePassport/web-kb-corepassport',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Edit Page',
    lastUpdated: true,
    postTime: {
      createTime: 'Created',
      lastUpdated: 'Updated'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Rules', link: '/rules/' },
      { text: 'Safety', link: '/safety/' },
      { text: 'About', link: '/about/' },
    ],
    sidebar: [
      '/guide/',
      '/rules/',
      '/safety/',
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
