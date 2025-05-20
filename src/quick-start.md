---
title: Quick Start
description: A fast introduction to installing and using Baka Git shortcuts in your terminal.
head:
  - [
      "meta",
      {
        name: "keywords",
        content: "baka quickstart, git commands, install git helper"
      }
    ]
---

# 🚀 Getting Started

#### Prerequisites

- Git installed (`git --version`)
- Bash or Zsh shell (or WSL for Windows)

## ⚙️ Installation

```bash
curl -o ~/.baka.sh https://raw.githubusercontent.com/chrisachoo/baka/main/blob/scripts/baka.sh
chmod +x ~/.baka.sh
echo 'source ~/.baka.sh' >> ~/.zshrc  # or ~/.bashrc
source ~/.zshrc  # or source ~/.bashrc
```

## ⚡ Quick Start Commands

Use these shortcuts immediately:

```bash
ginit        # git init
gcl <repo>   # git clone <repo>
ga           # git add .
gs           # git status
gco <branch> # git checkout <branch>
```

## 🎨 Optional: Terminal Setup & Customization

Want a better terminal experience with visuals, plugins, and quality-of-life improvements?

Check out [ZShine](https://github.com/chrisachoo/zshine) – a preconfigured terminal setup designed to work well with Git, Baka shortcuts, and more.

It includes:

- A clean, readable Zsh prompt
- Git branch and status indicators
- Aliases, completions, and suggestions
- Plugin-friendly `.zshrc` structure

> 🔗 Visit the [ZShine GitHub README](https://github.com/chrisachoo/zshine) to explore, clone, or customize it to your workflow.

---

> 🧠 You can always rename `~/.baka.sh` or integrate it into any dotfile system you prefer. Baka is flexible by design.
