---
description: 'Flutter iOS 上で GoogleSignIn を試す'
slug: '/posts/2021/07/14/flutter-google-sign-in'
title: 'Flutter iOS 上で GoogleSignIn を試す'
---

Flutter iOS 上で GoogleSignIn を試す。  
FlutterFire という Firebase が公式で出しているプラグインがあるので、これを使う。  
https://firebase.flutter.dev/

必要なプラグインを追加する

```bash
flutter pub add firebase_core
flutter pub add firebase_auth
flutter pub add google_sign_in
```

基本的に公式ドキュメントに丁寧に導入手順が記載されているので、その通りに進めていく。

https://firebase.flutter.dev/docs/overview

1 点だけハマったのが以下。  
`GoogleService-Info.plist` にある `REVERSED_CLIENT_ID` を `ios/Runner/Info.plist` に追記する必要がある。

```diff
	<array>
		<dict>
			<key>CFBundleTypeRole</key>
			<string>Editor</string>
			<key>CFBundleURLSchemes</key>
+			<array>
+				<string>$(REVERSED_CLIENT_ID)</string>
+			</array>
		</dict>
	</array>
```

あとは GoogleSignIn を呼び出したい部分で以下のコードを書くとオーバーレイする形で GoogleSignIn の画面が表示される。

https://firebase.flutter.dev/docs/auth/social#google

Firestore の Project settings で Public-facing name がデフォルト値だと怪しいので忘れずに変更しておく。
