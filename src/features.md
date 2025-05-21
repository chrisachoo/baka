---
title: Beginner vs Advanced
description: Compare Baka’s features for beginners and advanced users, and choose the best setup for you.
head:
  - [
      meta,
      {
        name: "keywords",
        content: "git beginner guide, advanced git, baka profiles, contribute to git tools"
      }
    ]
  - [meta, { name: "author", content: "Chris Mabs" }]
---

# 🌱 Beginner vs Advanced

Baka works for every developer—whether you're just starting with Git or you're deep in daily rebase battles.

## 👶 Beginner Profile

For those just learning Git or using it casually:

- ✅ **Safe defaults** – interactive prompts for critical actions (e.g., deletes, commits)
- 🧠 **Minimal aliases** – only the essentials (`gs`, `ga`, `gco`, etc.)
- 📘 **Readable and forgiving** – error messages, clear function naming
- 🪄 **Fewer foot-guns** – no risky defaults; aliases guide you step-by-step

## 🧙 Advanced Profile

For power users who know their way around Git internals:

- 🧩 **Full function suite** – `gundo`, `gclean-confirm`, `gcommit-safe`, and more
- ⚡ **Fuzzy tools** – integration with [`fzf`](https://github.com/junegunn/fzf) for interactive Git navigation
- 🧰 **Custom sourcing** – keep advanced tools in `~/.workflow.sh` or any file, and just `source` it
- 🔁 **Extended workflows** – chain together aliases, hooks, and auto-pull logic

> 💡 **Pro tip**: You can combine both beginner and advanced setups by organizing your config files modularly (e.g. `~/.baka-core.sh`, `~/.baka-advanced.sh`).

## 🧩 Contribution

Baka is open-source and welcomes your input!

### 🛠 Ways to Contribute

- 📥 **Submit Pull Requests** – Bug fixes, improvements, or new features
- 🧪 **Suggest Ideas** – Open a GitHub Discussion or Issue
- 📚 **Improve Documentation** – Help clarify usage or contribute examples
- 💬 **Share Feedback** – What do you love/hate? Tell us!

👉 [Contribute on GitHub](https://github.com/chrisachoo/baka)

> 🧠 All contributions are reviewed with care. We value clarity, safety, and community insight.

## 📚 Recommended Resources

- 📖 [Pro Git Book](https://git-scm.com/book/en/v2)
- 🧾 [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- 🧑‍💻 [GitHub Docs](https://docs.github.com/en/get-started/using-git)
- 🛠 [zshine: Terminal Config Toolkit](https://github.com/chrisachoo/zshine) – for a beautiful shell experience alongside Baka

## 📄 License

Baka is licensed under the **MIT License** — you’re free to use, modify, and redistribute it.

> ✨ Build your flow. Share your tools. Help others simplify Git.
