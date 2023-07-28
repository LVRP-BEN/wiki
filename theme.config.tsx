import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>LunaRP</span>,
  project: {
    link: 'https://github.com/luna-rp/wiki',
  },
  chat: {
    link: 'https://discord.gg/JENCkRU6he',
  },
  docsRepositoryBase: 'https://github.com/luna-rp/wiki/tree/main/',
  footer: {
    text: 'LunaRP',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – LunaRP'
    }
  }
}

export default config
