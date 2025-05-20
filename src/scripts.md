---
title: Git Shortcuts with Baka
description: Beginner-friendly Git shortcut script to boost your terminal workflow using aliases.
head:
  - [
      "meta",
      {
        name: "keywords",
        content: "git shortcuts, git alias, bashrc, zshrc, baka git helper, terminal script"
      }
    ]
  - ["meta", { name: "author", content: "Chris Mabs" }]
  - ["meta", { property: "og:title", content: "Git Shortcuts with Baka" }]
  - [
      "meta",
      {
        property: "og:description",
        content: "Copy or download the official baka.sh file with Git aliases to simplify your Git workflow."
      }
    ]
  - ["meta", { property: "og:type", content: "article" }]
---

# 🚀 Git Shortcuts with `baka.sh`

A quick, beginner-friendly way to speed up your Git commands in the terminal. Use helpful aliases like `gcl`, `ga`, `gs`, and more — all with minimal setup.

---

## 🛠️ Setup Instructions

1. **Download the script**:

```bash
curl -o ~/.baka.sh https://raw.githubusercontent.com/chrisachoo/baka/main/blob/scripts/baka.sh
```

2. **Source it in your shell config** (`~/.zshrc` or `~/.bashrc`):

```bash
echo 'source ~/.baka.sh' >> ~/.zshrc
# or for Bash users:
echo 'source ~/.baka.sh' >> ~/.bashrc
```

3. **Apply the changes**:

```bash
source ~/.zshrc
# or:
source ~/.bashrc
```

✅ Done! Try commands like `ginit`, `gps`, `gco`, and `gbd`.

---

## 📦 Full baka.sh Script

```bash
#!/bin/bash

# Baka Git Shortcuts - Speed up your Git workflow

alias ginit="git init"
alias gcl="git clone"
alias ga="git add ."
alias gs="git status"
alias gd="git diff"
alias grs="git reset"
alias grm="git rm"
alias gl="git log --oneline --graph"
alias gco="git checkout"
alias gcb="git checkout -b"
alias gb="git branch"
alias gmg="git merge"
alias gps="git push"
alias gpl="git pull"
alias gstash="git stash"
alias gtag="git tag"
alias gshow="git show"

# Interactive branch deletion
gbd() {
  if [ -z "$1" ]; then
    echo "Usage: gbd <branch-name>"
    return 1
  fi

  echo "Are you sure you want to delete branch '$1'? (y/n)"
  read -r ans
  if [ "$ans" = "y" ]; then
    git branch -d "$1"
  else
    echo "Cancelled."
  fi
}

alias gbd=gbd
```

## ✨ Customize It

Want to create your own shortcuts or add prompts, safety checks, or logs? Visit the [Git Aliases & Customization](/aliases) page to learn how to extend `baka.sh`.

## 🔗 References & Recommendations

Baka is inspired by and compatible with the wider Zsh plugin ecosystem. If you're looking for more advanced Git aliases, shell enhancements, or want to expand your workflow, check out these official Oh My Zsh resources:

- 🌐 [Oh My Zsh – Main Repository](https://github.com/ohmyzsh/ohmyzsh/tree/master)
- 🔌 [Git Plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git) – Tons of useful Git aliases
- 🌱 [Git Flow Plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-flow)
- 🧩 [All Plugins](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins) – Browse and explore more

These plugins are highly customizable and can complement or extend `baka.sh`. You can even combine them for a supercharged terminal setup.
