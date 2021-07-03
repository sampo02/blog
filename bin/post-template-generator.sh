#!/bin/bash

declare -r DATE=`date '+%Y/%m/%d'`
declare -r TITLE=$1
declare -r SLUG="/posts/${DATE}/${TITLE}"

mkdir -p "src/markdown-pages/${DATE}"

cat <<EOF > "src/markdown-pages/${DATE}/${TITLE}.md"
---
description: ''
slug: '${SLUG}'
title: ''
---
EOF

declare -r BRANCH_NAME="`date '+%Y-%m-%d'`-${TITLE}"

git switch -c "docs/${BRANCH_NAME}"
git add -A
git commit -m "✨ Post ${BRANCH_NAME}"