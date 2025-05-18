import { defineConfig } from "vitepress"
import { groupIconVitePlugin } from "vitepress-plugin-group-icons"


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Baka",
  description:
    "Git can make you feel like a fool. Baka make it easy. Streamline your workflow with smart shortcuts and intuitive commands.",
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,

  assetsDir: "static",
  cacheDir: "./.vitepress/.vite",
  srcDir: "./src",

  head: [
    [
      "meta",
      {
        property: "og:image",
        content: "https://yourdomain.com/images/baka-cover.png" // ✅ Update to your Baka image
      }
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "twitter:domain", content: "yourdomain.com" }],
    [
      "meta",
      {
        property: "twitter:image",
        content: "https://yourdomain.com/images/baka-cover.png"
      }
    ],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }]
  ],

  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          git: "logos:git-icon"
        }
      })
    ],
    server: {
      allowedHosts: true
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs" },
      { text: "Scripts", link: "/baka-sh" }
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "What is Baka?", link: "/introduction" }]
      },
      {
        text: "Getting Started",
        collapsed: true,
        items: [
          { text: "Quick Start", link: "/quick-start" },
          { text: "Configuration", link: "/configuration" }
        ]
      },
      {
        text: "Customization",
        collapsed: true,
        items: [
          { text: "Git Aliases & Customization", link: "/aliases" },
          { text: "Git Workflows", link: "/git-workflows" }
        ]
      },
      {
        text: "Advanced Git Features",
        items: [{ text: "Beginner vs Advanced", link: "/features" }]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/chrisachoo/baka" },
      { icon: "discord", link: "https://discord.gg/" },
      { icon: "x", link: "https://x.com/baka" }
    ],

    editLink: {
      pattern: "https://github.com/chrisachoo/baka/edit/main/:path",
      text: "Edit this page on Github"
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Chris Mabs."
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
