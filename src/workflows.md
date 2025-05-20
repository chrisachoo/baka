---
title: Git Workflows
description: Improve your team or solo Git workflow using Baka’s suggested practices and terminal tools.
head:
  - [
      "meta",
      {
        name: "keywords",
        content: "git workflows, terminal git tools, baka best practices"
      }
    ]
---

# 🧠 Git Workflows (Optional)

These optional enhancements help take your Git workflow to the next level—faster, safer, and cleaner. Whether you're working solo or as part of a team, these snippets can be freely copied, renamed, and customized.

> 💡 You can name your script file however you like (`~/.workflow.sh`, `~/.devkit.sh`, `~/.git-tools.sh`, etc.). Just be sure to **source** it in your shell config (`.zshrc` or `.bashrc`).

## 🔍 Interactive Git Menu (with `fzf`)

Quick fuzzy selection for common Git commands:

```bash
gmenu() {
  local cmd
  cmd=$(printf "status\nlog\nadd\ncommit\npush\npull\nstash\ncheckout\nbranch\n" | fzf)
  case $cmd in
    status) git status ;;
    log) git log --oneline ;;
    add) git add . ;;
    commit) git commit ;;
    push) git push ;;
    pull) git pull ;;
    stash) git stash ;;
    checkout) git checkout ;;
    branch) git branch ;;
  esac
}
```

> 🧩 **Requires:** [`fzf`](https://github.com/junegunn/fzf) (Fuzzy Finder)

## 🧼 Clean Untracked Files (With Confirmation)

```bash
gclean-confirm() {
  echo "⚠️  This will permanently delete untracked files. Continue? (y/n)"
  read -r confirm
  [[ $confirm == y* ]] && git clean -fd
}
```

## 🧪 Preview Diff Before Commit

```bash
gcommit-safe() {
  git diff --staged
  echo "Commit staged changes above? (y/n)"
  read -r confirm
  if [[ $confirm == y* ]]; then
    git commit
  else
    echo "Cancelled."
  fi
}
```

## 🔀 Interactive Branch Switcher (with `fzf`)

```bash
gswitch() {
  local branch
  branch=$(git branch | sed 's/..//' | fzf)
  [ -n "$branch" ] && git checkout "$branch"
}
```

## ⏮️ Undo Last Commit (Keep Changes)

```bash
gundo() {
  git reset --soft HEAD~1
  echo "Last commit undone. Changes are still staged."
}
```

## 📦 Quick Stash with Message

```bash
gquickstash() {
  local msg="${1:-"quick stash"}"
  git stash push -m "$msg" && echo "Stashed: $msg"
}
```

## ✅ Commit All with Prompt

```bash
gcommit-all() {
  git add .
  echo "Enter commit message:"
  read -r msg
  git commit -m "$msg"
}
```

## 🧠 Build Your Own Functions

Baka encourages you to remix and expand your own Git toolkit. Some ideas:

- Auto-stash and auto-pull before switching branches
- Open GitHub PRs directly from the terminal
- Quick lookup of GitHub issues or PRs
- Rebase helpers with prompts

## 📚 References & Resources

- [fzf](https://github.com/junegunn/fzf) – Fuzzy finder for the command line
- [Oh My Zsh Plugins](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins)
- [Oh My Zsh Git Plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git)
- [Git Extras](https://github.com/tj/git-extras) – A collection of useful Git utilities

> 🧩 All of these functions are optional. Use what helps, ignore what doesn’t. Your terminal, your workflow.
