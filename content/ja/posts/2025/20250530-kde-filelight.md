---
title: "[KDE] Filelight を使ってみよう!"
description: Filelight から始まるファイル整理
slug: "0530-filelight"
date: 2025-05-30 22:43:00+0900
categories:
  - KDE
---

こんばんは、Lemon73 です。

2025年5月第5週目です。今日は、Filelight の紹介をします。

## Filelight とは?

![filelight screenshot](/images/kde/20250530-kde-filelight-01.ja.png)

Filelight とは、ファイル容量を視覚的に見やすくする便利ツールです!!

紹介ページ (英語): <https://apps.kde.org/filelight/>

## インストール

まずは、インストールしましょう。

(Linux 以外の Windows、macOS でも使えます!)

### Linux

KDE 環境を利用しているかたは、Discover 経由でインストールできます。

![discover screenshot](/images/kde/20250530-kde-filelight-02.ja.png)

コマンドでインストールする方は、以下を参照してください:

- Flatpak: <https://flathub.org/ja/apps/org.kde.filelight>
- Snap: <https://snapcraft.io/filelight>
- apt (KDE neon): `sudo apt install filelight`

### Windows

Windows では Microsoft Store を利用すると、簡単にインストールできます。

[![](https://get.microsoft.com/images/ja%20light.svg)](https://apps.microsoft.com/detail/9pfxcd722m2c?referrer=appbadge&mode=direct)

### macOS

macOS では、ストアからのインストールはできなさそうです。インストーラー (後述) を利用しましょう。

### インストーラー

開発版です。

- [Linux](https://cdn.kde.org/ci-builds/utilities/filelight/master/linux/)
- [Windows](https://cdn.kde.org/ci-builds/utilities/filelight/master/windows/)
- [macOS ARM](https://cdn.kde.org/ci-builds/utilities/filelight/master/macos-arm64/)
- [macOS Intel](https://cdn.kde.org/ci-builds/utilities/filelight/master/macos-x86_64/)

### その他

ソースコードから自分でビルドし、利用することもできます。(上級者向け)

## 使い方

![home summary](/images/kde/20250530-kde-filelight-03.ja.png)

フォルダーを指定するだけで利用できます。

- ホームフォルダー: Linux での `/home/<ユーザー名>/` ディレクトリより上のファイルを調べることができます。
- ルートフォルダー: Linux での `/` ディレクトリ、Windows での `C:\\` や `D:\\` フォルダー (パーティション)、つまりコンピュータ内のほぼすべてのファイルを調べることができます。
- その他のフォルダー: 指定したフォルダーより上のファイルを調べることができます。

調べ終わると、以下のように表示されます。

![result](/images/kde/20250530-kde-filelight-01.ja.png)

これにより、どのファイルが容量を多く消費しているかが、視覚的にわかりやすい形で表示されます。私の場合は、`snap/` ディレクトリ内の Opera が大きな容量をとっていることがわかりました。

## 最後に

Filelight 便利なので、皆さんぜひ使ってみてください〜!
