---
description: 'Nuxt.js で Composition API と TSX を導入する'
slug: '/posts/2021/07/04/composition-api-and-tsx'
title: 'Nuxt.js で Composition API と TSX を導入する'
---

既存の Nuxt.js のプロジェクトに Composition API と TSX を部分的に導入できるか試してみた。

## Composition API

Nuxt.js で Composition API を利用するために以下のライブラリが用意されている。  
[Nuxt Composition API](https://composition-api.nuxtjs.org)

[Quick start](https://composition-api.nuxtjs.org/getting-started/setup) が用意されている。  
上記の手順に従って進めたら特に問題なく設定は完了した。

## TSX

[babel-preset-vca-jsx](https://github.com/luwanquan/babel-preset-vca-jsx) を設定する。  
README に [How to use?](https://github.com/luwanquan/babel-preset-vca-jsx#how-to-use) が用意されている。  
上記の手順に従って設定する。

Composition API で JSX/TSX を利用するために以下のファイルをプロジェクトの Root に置く。  
[shim-tsx.d.ts](https://github.com/vuejs/composition-api#jsxtsx)

tsconfig.json に JSX の設定を追加する。

```diff
{
  "compilerOptions": {
+    "jsx": "preserve",
```

## 小さめのコンポーネントを書き換えてみる

[vue-composition-api-tsx-example](https://github.com/liximomo/vue-composition-api-tsx-example) にあるように  
`.tsx` と `.module.css` で分けたかったが `.module.css` の読み込みがうまくいかなかった。  
そのため `.vue` の拡張子はそのままで `script` 内を　`tsx` へ変えるのみとした。

### before

```
<template>
  <div>
    <img class="loading" src="@/assets/loading.gif" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
.loading {
  height: 80px;
  width: 80px;
}
</style>
```

### after

```
<script lang="tsx">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const loadingIcon = require('../../assets/loading.gif')
    return () => (
      <div>
        <img class="loading" src={loadingIcon} alt="loading" />
      </div>
    )
  },
})
</script>

<style scoped>
.loading {
  height: 80px;
  width: 80px;
}
</style>
```

拡張子を `.vue` のままにしているのでコンポーネントの呼び出し方は今まで通りとなった。  
これなら、部分的に Composition API と TSX を導入しながら既存のプロジェクトをリファクタリングできそうなイメージを持てる。

`.tsx` と `.module.css` に分けられないかは別途また調査してみようと思う。
