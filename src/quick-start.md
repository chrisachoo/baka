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

#### Installation

```bash
curl -o ~/baka.sh https://yourdomain.com/baka.sh
chmod +x ~/baka.sh
echo 'source ~/baka.sh' >> ~/.zshrc  # or ~/.bashrc
source ~/.zshrc  # or source ~/.bashrc
```

#### Quick Start

Use these shortcuts immediately:

```bash
ginit        # git init
gcl <repo>   # git clone <repo>
ga           # git add .
gs           # git status
gco <branch> # git checkout <branch>
```
