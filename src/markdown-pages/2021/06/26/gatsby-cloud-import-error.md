---
description: 'Gatsby Cloud では import するコンポーネント名は大文字小文字の区別がされる'
slug: '/posts/2021/06/26/gatsby-cloud-import-error'
title: 'Gatsby Cloud では import するコンポーネント名は大文字小文字の区別がされる'
---

ローカルで `gatsby build` してエラーにならないが、  
Gatsby Cloud 上へデプロイする時にエラーとなるケースに遭遇した。

```
If you're trying to use a package make sure that '../components/Date' is installed.
If you're trying to use a local file make sure that the path is correct.
```

理由は単純で `components/date.tsx` では小文字で定義しており、  
利用箇所の `import Date from '../components/Date'` で大文字としていたためだった。  
ローカルで `gatsby develop` していても問題なく動作していたので気付くのに時間がかかった。

2021-06-27 追記  
そもそも PascalCase にしたら上記の問題は起こらないので  
components 配下は PascalCase とすることにした。
