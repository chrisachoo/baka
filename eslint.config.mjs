import antfu from "@antfu/eslint-config"

export default antfu(
  {
    formatters: true,
    vue: true,

    stylistic: {
      indent: 2,
      quotes: "double"
    },

    ignores: ["**/.vitepress/*", "**/node_modules/*"]
  },
  {
    rules: {
      "perfectionist/sort-imports": ["error"],
      "style/comma-dangle": ["error", { functions: "never" }],
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md"]
        }
      ]
    }
  }
)
