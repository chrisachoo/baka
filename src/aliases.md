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

#### Add Your Own Aliases

Create `~/.baka-custom.sh`:

```bash
alias gclean='git clean -fd'
alias gundo='git reset --soft HEAD~1'
```

Then in `baka.sh`:

```bash
[ -f ~/.baka-custom.sh ] && source ~/.baka-custom.sh
```

#### Safe Delete Prompt

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
