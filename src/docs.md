---
title: Documentation
description: Learn how to use Baka to simplify Git with custom shortcuts, workflows, and automation.
head:
  - [
      "meta",
      {
        name: "keywords",
        content: "baka git tool, git documentation, git alias, git shortcuts, beginner git guide, customize git commands"
      }
    ]
  - ["meta", { name: "author", content: "Chris Mabs" }]
---

# 📚 Welcome to Baka Docs

**Baka** is your friendly terminal companion for Git—built to simplify your workflow with smart shortcuts, interactive helpers, and clean, customizable shell functions.

> 🎯 Whether you're new to Git or want to sharpen your CLI skills, Baka offers a safer, faster way to manage repositories from your terminal.

## ✨ Highlights

- 🌀 **Intuitive Shortcuts** — Run `gco` instead of `git checkout`, `gcl` for `git clone`, and more.
- 🧠 **Interactive Helpers** — Use fuzzy search (`fzf`) to switch branches, stash changes, or review commits.
- ⚡ **Safe Prompts** — Built-in yes/no confirmations before risky commands like deleting branches or cleaning files.
- 🛠️ **Fully Customizable** — Create your own aliases, wrappers, and Git workflows using pure shell scripts.
- 🌐 **Zero Dependencies (optional)** — Works with plain Bash/Zsh. Extra features available via plugins like [`fzf`](https://github.com/junegunn/fzf).

## 🚀 Quick Start

Get up and running in under 60 seconds:

```bash
curl -o ~/.baka.sh https://raw.githubusercontent.com/chrisachoo/baka/main/blob/scripts/baka.sh
chmod +x ~/.baka.sh
echo 'source ~/.baka.sh' >> ~/.zshrc  # or ~/.bashrc
source ~/.zshrc  # or source ~/.bashrc
```

Try it out immediately:

```bash
ginit        # git init
gcl <repo>   # git clone
ga           # git add .
gs           # git status
gco <branch> # git checkout
```

👉 Want more? [Read the full Quick Start »](/quick-start)

## 🔍 What You'll Learn in This Guide

### 🧠 Core Concepts

- What Baka is and why it exists
- The philosophy behind simplifying Git (without hiding its power)

### 🛠 Setup & Installation

- How to install Baka and source it into your terminal
- Terminal compatibility: Bash, Zsh, WSL (Windows)

### 💡 Git Made Simple

- Easy aliases for everyday commands (`gpl`, `gps`, `gd`, etc.)
- Safe wrappers for destructive commands
- Helper functions to manage branches, logs, and diffs interactively

### 🎨 Customization

- How to write and organize your own Git functions
- Shell scripting patterns to reuse across teams
- Real-world examples of power-user flows

### 🧩 Optional Enhancements

- Interactive menus with [`fzf`](https://github.com/junegunn/fzf)
- Dotfile modularization and Git-aware terminal setups
- Use with [`ZShine`](https://github.com/chrisachoo/zshine) for a full CLI experience

## 🧑‍💻 Who It's For

Baka is for anyone who works with Git from the terminal:

- ✅ **Beginners** – Learn Git faster with readable commands and built-in safety nets.
- 🔧 **Power Users** – Save time with aliases, custom prompts, and modular CLI workflows.
- 💼 **Teams** – Standardize Git practices without needing global Git configs or CLI tools.

---

> 🛠️ Baka is a terminal-first, shell-native Git enhancement—not a replacement. You’re in control of every alias, command, and prompt.

Dive in, remix, and make it your own.
