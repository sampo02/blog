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

git switch -c "docs/`date '+%Y-%m-%d'`-${TITLE}"