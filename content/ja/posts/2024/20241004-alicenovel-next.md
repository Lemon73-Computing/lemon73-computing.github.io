---
title: "リリース予定: Alice Novel v0.9.3"
description: 次期バージョンのリリース予定
slug: "1004"
date: 2024-10-05 17:36:00+0900
aliases:
  - /blog/ja/p/20241004-alicenovel-next # from old website
categories:
    - Alice Novel
tags:
    - Release schedule
---

Alice Novel の次期バージョン v0.9.3 のリリースを検討しています。このリリースには CI/CD の修正、ディレクトリ構成の変更、そして依存関係の更新が含まれています。

### 現在

現在、すでにいくつかの PR がマージされており、それらは次期リリースに組み込む予定です。以下をご覧ください。

- docs (license): change the license ([#72](https://github.com/AliceNovel/AliceNovel/pull/72))
- chore (dependencies): bump dependencies ([#73](https://github.com/AliceNovel/AliceNovel/pull/73))
- chore (dependencies): bump maui version ([#74](https://github.com/AliceNovel/AliceNovel/pull/74))
- chore (ci/cd): recreate the android ci/cd on azure devops ([#77](https://github.com/AliceNovel/AliceNovel/pull/77))
- build (deps): bump packages ([#78](https://github.com/AliceNovel/AliceNovel/pull/78))
- chore (ci/cd): bump actions/upload-artifact from v3 to v4 ([#46](https://github.com/AliceNovel/AliceNovel/pull/46))

### 予定

次期リリースまでに更にいくつかの PR を追加する予定です。

- chore (scripts): move scripts files and update documentations ([#76](https://github.com/AliceNovel/AliceNovel/pull/76))

また、アプリケーションはセーブシステムに問題を抱えています。新しいセーブシステムに置き換えることでそのバグを修正する予定です。(関連: [#67](https://github.com/AliceNovel/AliceNovel/issues/67))

加えて、[#69](https://github.com/AliceNovel/AliceNovel/issues/69) (`.anproj` ファイルが読み込まれるまでセーブボタンを隠す) や [#10](https://github.com/AliceNovel/AliceNovel/issues/10) (英語対応) は簡単に対応可能であると考えています。

結論としては、[#76](https://github.com/AliceNovel/AliceNovel/pull/76), [#67](https://github.com/AliceNovel/AliceNovel/pull/67) (Android の [#61](https://github.com/AliceNovel/AliceNovel/issues/61) と Windows 向けの [#47](https://github.com/AliceNovel/AliceNovel/issues/47) を含む), [#69](https://github.com/AliceNovel/AliceNovel/pull/69), [#10](https://github.com/AliceNovel/AliceNovel/pull/10) そして、いくつかのリファクタリングを v0.9.3 のリリースまでに行うことを視野に入れています。

## 頒布

- Lemon73 Blog[^new-website] (EN: 2024/10/4, JP: 2024/10/5)
- [Lemonium (ここ)](./) (EN, JP: 2024/11/24)

[new-website]: Lemonium (ここ) に移行済み
