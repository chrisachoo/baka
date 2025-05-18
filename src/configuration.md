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

Baka uses a shell script (`baka.sh`) to define handy aliases for commonly used Git commands. These shortcuts are easy to remember and type, making your Git workflow much faster and more fun.

> 💡 To enable them, source the file in your `.bashrc`, `.zshrc`, or `.profile`:
>
> ```bash
> source /path/to/baka.sh
> ```

---

## 🧩 Git Aliases & Meanings

Here’s what each alias does:

```bash
alias ginit="git init"
```

**`ginit`** – Initializes a new Git repository in your current folder. Use this to start tracking your project with Git.

---

```bash
alias gcl="git clone"
```

**`gcl`** – Clones a Git repository from a remote source (like GitHub). Great for downloading and working on existing projects.

---

```bash
alias ga="git add ."
```

**`ga`** – Adds all files in the current folder to the staging area (preparing for commit). It's like saying “I want to save these changes.”

---

```bash
alias gs="git status"
```

**`gs`** – Shows what files are modified, staged, or untracked. Useful to check what’s happening in your repo before committing.

---

```bash
alias gd="git diff"
```

**`gd`** – Displays the differences between your files and what’s staged or committed. Perfect for reviewing what changed.

---

```bash
alias grs="git reset"
```

**`grs`** – Unstages files or moves the current `HEAD` (commit pointer) backwards. Great when you want to undo staging or a recent commit.

---

```bash
alias grm="git rm"
```

**`grm`** – Removes files from both your project and the Git index. Use when you want Git to stop tracking a file and delete it.

---

```bash
alias gl="git log --oneline --graph"
```

**`gl`** – A compact view of your commit history in a nice tree-like graph. Super helpful to understand your branch history at a glance.

---

```bash
alias gco="git checkout"
```

**`gco`** – Switches between branches or restores files. Commonly used to move to a different branch.

---

```bash
alias gcb="git checkout -b"
```

**`gcb`** – Creates and switches to a new branch. A shortcut for starting new work without affecting the main branch.

---

```bash
alias gb="git branch"
```

**`gb`** – Lists all local branches, or creates/deletes branches with extra options.

---

```bash
alias gmg="git merge"
```

**`gmg`** – Merges the current branch with another. Helpful when combining finished feature branches into main or dev.

---

```bash
alias gps="git push"
```

**`gps`** – Uploads your local commits to a remote repo (like GitHub). Think of it as syncing your work with the cloud.

---

```bash
alias gpl="git pull"
```

**`gpl`** – Fetches and integrates changes from the remote repo. Use this before starting work to stay up to date.

---

```bash
alias gstash="git stash"
```

**`gstash`** – Temporarily saves your current changes without committing them. Super useful if you need to switch branches quickly.

---

```bash
alias gtag="git tag"
```

**`gtag`** – Adds a lightweight label to a specific commit. Useful for marking releases like `v1.0`.

---

```bash
alias gshow="git show"
```

**`gshow`** – Displays detailed information about a specific commit, tag, or object. Often used to see commit messages and file diffs.

---

## 🔧 Optional: Interactive Prompts

You can even wrap some aliases in interactive prompts (like `yes/no`) for safety. For example, a branch deletion alias like this:

```bash
alias gbd='function _gbd() {
  echo "Are you sure you want to delete this branch? (y/n)"
  read -r ans
  if [ "$ans" = "y" ]; then
    git branch -d "$1"
  else
    echo "Cancelled."
  fi
}; _gbd'
```

---

## 🗂 Add to Your Shell

Add the aliases by either:

- Copying them into your `.bashrc` / `.zshrc`
- Or sourcing `baka.sh` directly:

  ```bash
  source /path/to/baka.sh
  ```

Run `source ~/.zshrc` or restart your terminal to apply the changes.

---

> ✨ Now you can use `gs`, `ga`, `gco`, etc., like a Git wizard!

Here's your downloadable `baka.sh` file with all the Git aliases and an interactive prompt for deleting a branch:

👉 [Download baka.sh](/baka.sh)

You can place it anywhere on your system and source it in your shell config:

```bash
source /path/to/baka.sh
```
