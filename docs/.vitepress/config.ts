import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DoxaUI',
  description: 'Vue component library based on Doxa design system',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button' }
    ],
    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Radio', link: '/components/radio' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Heading', link: '/components/heading' },
          { text: 'Text', link: '/components/text' },
          { text: 'Link', link: '/components/link' },
          { text: 'Icon', link: '/components/icon' }
        ]
      }
    ],
    socialLinks: [
      { text: 'GitHub', link: 'https://github.com/anomalyco/doxaui' }
    ]
  }
})