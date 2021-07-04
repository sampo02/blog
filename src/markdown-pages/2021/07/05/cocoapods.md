---
description: 'CocoaPods は brew でインストールできる'
slug: '/posts/2021/07/05/cocoapods'
title: 'CocoaPods は brew でインストールできる'
---

Flutter のセットアップで `fulluter doctor` というコマンドを使い  
Flutter での開発環境が整っているかチェックができる。

その中に iOS のライブラリ依存関係を管理する CocoaPods のインストールが必要になる。  
[Getting Started](https://guides.cocoapods.org/using/getting-started.html) では `gem` を利用したインストール方法が紹介されている。  
ローカルで `gem` 管理しているライブラリはないので `brew` で入らないかなーと調べると、あった。

https://formulae.brew.sh/formula/cocoapods

[Releases](https://github.com/CocoaPods/CocoaPods/releases) みた感じ `brew` で最新バージョン入っているので良さげ。
