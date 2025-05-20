---
title: Git Aliases & Customization
description: Customize Baka with your own Git shortcuts and interactive terminal enhancements.
head:
  - [
      "meta",
      {
        name: "keywords",
        content: "custom git commands, git aliases, baka shortcuts"
      }
    ]
---

# 🧩 Git Aliases & Customization

You’re not limited to `baka.sh` or any specific filename. Feel free to name your shortcut script anything you like—`~/.git-aliases.sh`, `~/.workflow.sh`, `~/.devkit.sh`, etc.

What matters is **how you organize and source it in your shell config**.

## 🛠️ Add Your Own Aliases

Example: create `~/.git-aliases.sh` (or any name you prefer):

```bash
alias gclean='git clean -fd'
alias gundo='git reset --soft HEAD~1'
alias gfix='git commit --amend --no-edit'
```

Then in your shell config (`~/.zshrc` or `~/.bashrc`), source it:

```bash
[ -f ~/.git-aliases.sh ] && source ~/.git-aliases.sh
```

## 🔐 Safe Branch Delete with Prompt

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

## 🔁 Checkout & Pull (Smart Sync)

```bash
gsync() {
  local branch="${1:-main}"
  git checkout "$branch" && git pull
}
```

## 🔍 Last Commit Details

```bash
glast() {
  git log -1 --stat
}
```

## 📦 Stash and Pop with Message

```bash
gquickstash() {
  local msg="${1:-"quick stash"}"
  git stash push -m "$msg" && echo "Stashed: $msg"
}
```

## 🧠 Pro Tips

- **Keep it modular**: Use separate `.sh` files to organize aliases by task or project.
- **Source order matters**: Source your custom files _after_ other plugin scripts to avoid override conflicts.
- **Use prompts carefully**: Always add confirmations to destructive actions like `git reset` or `git branch -d`.

Feel free to mix, rename, extend, and modularize. This is your workflow — **make it work for you**.
