---
title: Configuration
description: Learn how to configure Baka and set up custom aliases for your Git workflow.
head:
  - [
      "meta",
      {
        name: "keywords",
        content: "git config, bashrc, zshrc, alias, baka configuration"
      }
    ]
---

# ⚙️ Configuration

Baka is a terminal-first Git productivity system built with shell scripts. You can use the provided `baka.sh` script or roll your own. It’s modular, customizable, and plays nicely with existing dotfile setups.

## 🧠 Load It Your Way

Source `baka.sh` from your preferred shell config file:

```bash
# Example: ~/.zshrc or ~/.bashrc
source ~/baka.sh
```

> 💡 You’re not locked into the file name or structure. Use `~/.gitflow.sh`, `~/.aliases.sh`, `~/.workflow.sh`—anything that fits your setup.

For advanced dotfile setups, you can modularize and source multiple scripts conditionally.

## 🧩 Git Aliases (Defaults)

Here are some of the built-in shortcuts:

```bash
alias ginit="git init"                 # Init repo
alias gcl="git clone"                 # Clone repo
alias ga="git add ."                  # Add all
alias gs="git status"                # Status
alias gd="git diff"                  # Diff changes
alias gl="git log --oneline --graph" # Compact log
alias gco="git checkout"             # Switch branches
alias gcb="git checkout -b"          # Create new branch
alias gb="git branch"                # List branches
alias gmg="git merge"                # Merge
alias gps="git push"                 # Push
alias gpl="git pull"                 # Pull
alias gstash="git stash"             # Stash
alias gtag="git tag"                 # Tag
alias gshow="git show"               # Show details
```

## 🛡️ Interactive Helpers (Safety & UX)

### Safe Branch Deletion

```bash
gdel() {
  local branch="$1"
  if [ -z "$branch" ]; then
    echo "Usage: gdel <branch-name>"
    return 1
  fi
  read -rp "Delete branch '$branch'? (y/n): " confirm
  [[ $confirm == y* ]] && git branch -d "$branch"
}
```

### Undo Last Commit (Keep Changes)

```bash
gundo() {
  git reset --soft HEAD~1
  echo "Last commit undone. Changes are staged."
}
```

### Commit With Preview

```bash
gcommit-safe() {
  git diff --staged
  echo "Commit staged changes above? (y/n)"
  read -r confirm
  [[ $confirm == y* ]] && git commit
}
```

### Switch Branch (with `fzf`)

```bash
gswitch() {
  local branch
  branch=$(git branch | sed 's/..//' | fzf)
  [ -n "$branch" ] && git checkout "$branch"
}
```

> 🧩 Optional dependency: [`fzf`](https://github.com/junegunn/fzf)

## 🗃 Modular Setup

To organize your scripts:

```
~/.dotfiles/
├── .zshrc
├── baka.sh
├── git-workflow.sh
├── dev-aliases.sh
└── zshine.zsh
```

Then source each in your `.zshrc`:

```bash
source ~/.dotfiles/baka.sh
source ~/.dotfiles/git-workflow.sh
```

This helps you isolate concerns (aliases, prompts, workflows) for easier updates.

## 🎨 Optional: Terminal Setup

If you want a pre-styled terminal with Git-aware prompt, completions, and plugins:

🔗 [ZShine – Terminal Starter Kit](https://github.com/chrisachoo/zshine)

Includes:

- Git-aware prompt and symbols
- Auto suggestions & completions
- Nice themes and alias-friendly structure

## 📄 Example `.baka.sh` Template

```bash
alias gs="git status"
alias ga="git add ."
alias gcommit-all='git add . && read -rp "Message: " msg && git commit -m "$msg"'
gdel() {
  read -rp "Delete branch '$1'? (y/n): " c
  [[ $c == y* ]] && git branch -d "$1"
}
```

Place this anywhere (`~/.baka.sh`, `~/.aliases/git.sh`) and load it in your shell config.

---

> 🧠 Use what helps. Remove or rename anything you don’t like. Your terminal, your rules.
