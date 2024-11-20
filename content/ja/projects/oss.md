---
title: Open Source in LRA
description: OSS 協力
slug: oss
date: 2024-11-20 21:35:00+0900
aliases:
  - /social/blowfish # from old website
  - /social/electron-net # from old website
  - /social/kde # from old website
  - /social/others # from old website
categories:
    - OSS
---

<!--
   __    __
  |  | /  /
  |  |/  /
  |     <
  |  |\  \
  |__| \__\
   -------
    |KDE|
   -------
-->

<!--
   _________
  /         \
 /   _    _  \
|   | |_| |   |
|   |  _  |   |
|   |_| |_|   |
 \           /
  \_________/
 --------------
     |Hugo|
 --------------
-->

<!--
      o
   ____\__
  / /   \ \
  \/  o  |/
  |\--___/   ELECTRON.NET
  o \___/--o
----------------
 |Electron.NET|
----------------
-->

<!--
  _________
 / _       \
 ||0|      |
 | V       |
 |         |
 |         |
 |         |
 |         | smart phone
 \_________/
------------------------
 |Social Communication|
------------------------
-->

このページでは、Lemon73 / Lemon's Resting Area の OSS 活動について記載します。小規模な貢献も含んでいますが、すべての活動を記載しているわけではありません。

## 活動方針

自由です。適当にやってまーす。

### 開発

C# を中心にしています。

### 翻訳

アプリケーションやウェブサイトの日本語訳をたまにしています。

### プロジェクト

興味があるプロジェクトに協力しています。

## 活動履歴

### KDE

<https://kde.org>

> KDE は、デスクトップ環境を中心に、様々なデスクトップアプリケーションと、それらに必要なコンポーネントの開発を行う、国際的なオープンソースプロジェクトです。
> 
> —Japan KDE User Group, [*What is KDE*](https://jp.kde.org/community/whatiskde/)

KDE での貢献は、 旧 Lemon Electic Computer 世代から NEO で行っていました。茶屋計画後の Lemon's Resting Area でも継続して KDE の様々な活動に参加しています。

#### 翻訳

翻訳活動は2022年11月から開始し、その後も不定期に活動しています。

- アプリケーション
  - Kontrast (当時の100%)
  - Filelight (当時の60%)
  - Krita
  - Kdenlive
- ウェブサイト
  - KDE 本部
  - Krita
  - Kdenlive Docs
  - KDE Userbase Wiki

#### 開発

KDE で主に利用されている言語は C++ や Python で、私が得意としている C# はほとんど利用されていないため、ソフトウェア関連の開発貢献はあまりできていません。

そのため、ウェブサイトの微調整や開発資料の修正などの微細な点のみの貢献となります。

- アーカイブのアイコンがつぶれる問題を修正 (KDE Invent: [KDE Japan Website !14](https://invent.kde.org/websites/jp-kde-org/-/merge_requests/14))
- Responsive design (KDE Invent: [KDE Italy Website !1](https://invent.kde.org/websites/kdeitalia-it/-/merge_requests/1))
- README: update krita ci badge (KDE Invent: [Krita !2037](https://invent.kde.org/graphics/krita/-/merge_requests/2037))
- (依頼) Request: Redirect from `https://krita.org/jp/*` to `https://krita.org/ja/*` (Krita Artists [98094](https://krita-artists.org/t/98094))
- Remove the old link (KDE Invent: [Krita.org !64](https://invent.kde.org/websites/krita-org/-/merge_requests/64))

#### 資料

KDE では日本語資料が不足しているため、記事を書いています。

- KDE の翻訳について-Wiki系 ([Qiita](https://qiita.com/Lemon73/items/768215973076938c86a2))
- KDE の翻訳について-ソフト系 ([Qiita](https://qiita.com/Lemon73/items/ad93e1ab5bad0cd1b44a))
- krita.org について ([Zenn](https://zenn.dev/lemon73/scraps/4872429955d1cc))

KDE に関する情報をまとめた資料を Zenn にて公開する予定もありましたが、現在は計画が凍結しています。

#### 広報

日本 KDE ユーザー会の一員として、日本国内で KDE を普及させることを目的とした活動にも参加したいと考えています。

イベント開催の主催も行いたいと思っていますが、目処は立っていません。

#### デバッグ

意図的にデバッグを行っているわけではないですが、バグが起こった際は報告を行っています。

- I can't open Languages-represented-page: `https://userbase.kde.org/Special:MyLanguage/Special:SupportedLanguages` (KDE Bugzilla [465268](https://bugs.kde.org/465268))
- Boot broken after Discover update (KDE Discuss [9510](https://discuss.kde.org/t/9510))
- I can't boot on KDE neon after update (KDE Discuss [18110](https://discuss.kde.org/t/18110))

### Blowfish

> A powerful, lightweight theme for Hugo.
> 
> —Blowfish, [*blowfish official website*](https://blowfish.page)

<p>開発者の [nunocoracao](https://github.com/nunocoracao) 氏が Blowfish のウェブサイトの翻訳を呼びかけた際に、初期の翻訳メンバーとして参加しました。([#1322](https://github.com/nunocoracao/blowfish/discussions/1322))

- Added: Japanese translation (`authors/**` and `samples/**`) ([#1361](https://github.com/nunocoracao/blowfish/pull/1361))
- Update Japanese translation ([#1383](https://github.com/nunocoracao/blowfish/pull/1383))
- Japanese translation ([#1339](https://github.com/nunocoracao/blowfish/pull/1339))

### Electron.NET

> Together, let's embark on an exciting Electron.NET adventure - stay with us!
> 
> —Electron.NET Team, [*#744*](https://github.com/ElectronNET/Electron.NET/issues/744#issue-1636680771)

- Upgrade to .NET 8.0 ([#846](https://github.com/ElectronNET/Electron.NET/pull/846))

### Errands

- Updated: Japanese translation ([#257](https://github.com/mrvladus/Errands/pull/257))

### ~~Dolores v2~~

(現在はプロジェクトが削除されました)

翻訳の向上を行いました。

### Simple Icons

<https://simpleicons.org>

- Update Kdenlive logo source ([#10179](https://github.com/simple-icons/simple-icons/pull/10179))

### .NET Workshops and Presentations

- Fix typo in README.md ([#122](https://github.com/dotnet-presentations/dotnet-maui-workshop/pull/122))

### Iron Python

<https://ironpython.net>

- fix: typo in WhatsNewInPython36.md ([#1795](https://github.com/IronLanguages/ironpython3/pull/1795))
