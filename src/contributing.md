# 🛠 Contributing to Baka

Thanks for considering contributing to **Baka** — a simple, terminal-first Git helper built to reduce friction and frustration in everyday Git workflows.

We welcome all types of contributions: bug reports, feature suggestions, new aliases, documentation updates, or workflow improvements.

## 📦 Getting Started

1. **Fork the repo**
   Click the **Fork** button on [GitHub](https://github.com/chrisachoo/baka) to make your own copy.

2. **Clone your fork**

   ```bash
   git clone https://github.com/your-username/baka.git
   cd baka
   ```

3. **Create a feature branch**

   ```bash
   git checkout -b my-feature-name
   ```

4. **Make your changes**

5. **Commit with a clear message**

   ```bash
   git commit -m "feat: add gsync alias for safe pull+push"
   ```

6. **Push and open a Pull Request**

   ```bash
   git push origin my-feature-name
   ```

## ✅ Contribution Types

Here are some common ways you can help:

| Type              | Examples                                                 |
| ----------------- | -------------------------------------------------------- |
| 💡 Features       | Add new aliases or workflows (`gundo`, `gpr-open`, etc.) |
| 🢼 Refactoring     | Improve script logic, optimize alias definitions         |
| 🪲 Bug Fixes      | Fix an alias that behaves incorrectly                    |
| 📚 Docs           | Improve clarity, fix typos, or add usage examples        |
| 🧪 Workflow Ideas | Suggest new ways to use Git interactively or safely      |
| 💬 Feedback       | Open issues with suggestions or questions                |

## 🧩 Code Style & Guidelines

- Keep aliases **short, intuitive, and safe**
- Add **comments** if a function is complex
- Be cautious with destructive commands (`git clean`, `reset`, `rm`, etc.)
- Wrap advanced logic in confirm prompts when appropriate

Example:

```bash
gclean-confirm() {
  echo "⚠️  This will permanently delete untracked files. Continue? (y/n)"
  read -r confirm
  [[ $confirm == y* ]] && git clean -fd
}
```

## 📄 Docs Contribution

Docs live in the `docs/` folder and are powered by **VitePress**.

To edit documentation:

1. Navigate to a markdown file (e.g. `docs/docs.md`)
2. Submit a clear edit with improved examples, grammar, or structure

## 🧪 Testing

Before submitting a PR, manually test your changes in a terminal:

```bash
source ./scripts/baka.sh
gmenu       # or test the alias you added
```

## 🧠 Code of Conduct

We follow a friendly and respectful [Code of Conduct](https://opensource.guide/code-of-conduct/). Be kind, helpful, and constructive in discussions.

## 🙏 Thank You

Thanks for improving Baka! Your contributions help make Git less painful for developers everywhere.

— **Chris Mabs** ([@chrisachoo](https://github.com/chrisachoo))
