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

#### Interactive Git Menu (using fzf)

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
