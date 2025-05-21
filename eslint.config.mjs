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
          ignore: [
            "CODE_OF_CONDUCT.md",
            "CONTRIBUTING.md",
            "ISSUE_TEMPLATE.md",
            "PULL_REQUEST_TEMPLATE.md",
            "README.md"
          ]
        }
      ]
    }
  }
)
