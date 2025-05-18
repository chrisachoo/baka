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
