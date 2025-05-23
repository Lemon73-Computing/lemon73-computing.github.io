---
title: 2025年4月指針
description: 中期基本計画
slug: "0426"
date: 2025-04-26 22:53:00+0900
categories:
  - Roadmap
---

本資料では、前回"[2024年12月指針](../../2024/1222)"の振り返りと、今後約3ヶ月にかけての中期基本計画について記載します。

なお、この計画は参考程度であり、状況に応じて変更を行います。

## 振り返り

### リアルの方

新しい年度が開始し、リアルの方は新しい環境となりました。

これからはまた新しい開発 (新メンバーとの共同開発) ができそうで楽しみにしています。現在は研修を受けており、本格的な開発には乗り出していませんが、これからに期待できそうだと感じています。

今までの開発 (別メンバーとの共同開発) についても可能な限りは継続するつもりです。本日もいくつかの機能とデザインの向上を行いました。私自身はある程度時間が取れそうですが、旧メンバーたちが忙しそうなので、どのように動いていくかはわかりません。というか、あまり話し合いができていないので、リモート会議くらいは開いたほうが良いと考えています。

### LRA の方

最近は LRA の開発にやや飽きているというのと、引っ越しでパソコンを床においていたので、開発が進んでいませんでした。飽きているというのに関しては、新しい企画を立案する時期かと考えています。パソコンに関しては本日ようやく机の上に置き、高度な作業ができるようになったので、開発再開できそうです。

先述した新企画の前に、"試験場のリン" (LynnePG) とか、"Akizuki Forest" とかはどうなっているんだ!!という話ですが、ここからはそれについて触れていきます。

先にぶっちゃけた話をすると、前回の中期基本計画[^basic-project]はほとんど忘れていたので、あまり進んでいません。

(久しぶりに文章を書く気がするので、文章内容がいまいちになっているかもしれません。先に謝罪しておきます)

[^basic-project]: この"中期"とは、前期、中期、後期ではなく、短期、中期、長期の方のことです

### 前期の基本計画

> ### 時期
> 
> 概ね以下の通りです。
> 
> 2024/12/23-2025/3/31

2025/1/1-2025/4/30 だと思っていました。(12ヶ月の1/4なので、3ヶ月が妥当なのですが)

> ### 対象プロジェクト

> - Lemon's Resting Area
>   - Website (集中)  
>   本来は2024年中になんとしてでも終了させる予定でしたが、"今後5年程度大幅な変更を加える予定がない"ことが発覚したため、2025年3月まで期限を延長することにしました。

これに関しては一応終了しました。が、デザインがそこまで気に入っていないので、暇があったら改善する予定です。

> - Alice Project  
> 2023年から続行
>   - Alice Novel
>   - Alice Console
>   - Anov LSE / Anov Syntax Extension  
>   ゲーム開発環境の強化に力を入れたいと考えています。

これに関してはそこまで進展していません。が、別の場所でこれに関係する話があるので後述します。

> - Ivy Cafeteria 
>   - Lynne in the Proving Ground (集中)  
>   私の悲願であるゲーム開発計画初の成功となって欲しいです。Next: "宗教と13人の儀式"

ほぼほぼ進んでいないように思います。やっぱりグラフィックは進まない…。頑張りたいです。

> - .NET MAUI / maui-linux  
> 一部の機能を実装できたら…と思っています。私の技術力的に可能かわかりませんが…

これに関しては、4月中盤から後半にかけてかなり頑張りました。

そして、[仮のメモ](https://zenn.dev/link/comments/619ab500850e7b)と [maui-podman](https://github.com/Lemon73-Computing/maui-podman) によって非常に再現性が高い環境構築ができるようになりました。

が、実際の機能実装に関しては難易度が高すぎて頓挫しています。誰か助けて…

> - KDE
>   - 日本  
>   日本語翻訳を多少行いたいと考えています。

こちらも、ほとんどやった記憶がありません。4月にやりたいと思っていたのですが、パソコンが床にあったので、できませんでした。(ノートパソコンの方には翻訳の環境がなくて、わざわざ環境構築するのが面倒だった)

> ### その他
> 
> プロジェクトには全く関係ありませんが、Starbound、Factorio、9-nine- あたりのゲームをやりたいですね。特に nine はノベルゲームの参考にもなりそうなので。あと、Summer Pocket のアニメ化が楽しみです。

意外に何もできませんでした。Summer Pocket はまとめて見ようと思っています。

あと、ATRI を見ましたが、神アニメでした。

### 計画外

計画していなかったものの、かなりの進捗があった開発の紹介をします。

- AkizukiForest

先述した、Alice Project の思わぬ進捗というのがこちらです。AkizukiForest は Ivy Cafeteria で開発されているコンソールゲームですが、Alice Console の機能を利用することによって、視認性を大幅に向上することに成功しました。

大幅な Refactor の結果、v1.0.0 を迎え、待ちわびていた OSS 化を達成することになりました。現在では、更に Refactor を進めた v1.1.0 が最新バージョンとなっており、さらなる開発の進展が期待できそうだと考えています。

- Medicolor

こちらも、Ivy Cafeteria で開発されているコンソールアプリケーションとなっています。~~やはり、UI を考えなくていいコンソールアプリは開発が楽ですね。~~

Medicolor については、ほぼ初登場のため多少の説明をします。このアプリケーションは Microsoft.Maui.Graphics を利用して色覚異常のシミュレーションした画像に変換するという目的のもと開発されています。

この開発は、maui-linux の開発のために、また Ivy Cafeteria の登場人物である"衛生兵くん"が抱える色覚異常についての知識を広めるということができたと考えています。同等の機能を持つアプリケーションやプログラムは無数に存在していると思いますが、色彩に関する論文を読み、Maui の機能を利用したということは、それぞれの知識を広げる上で非常に役に立ったと言えると考えています。

今後開発を継続するかは未定ですが、グラフィック系の開発は視覚的に達成感が得られやすいため、今後は物理シミュレーションなどのグラフィック関連の開発を検討したいと考えています。

- commonnovel-spec

こちらは、Alice Project が開発している Anov 構文を、CommonMark を参考にして仕様の共通化を進めようという計画です。

が、仕様策定にかなり苦戦しており、あまり進んでいません。策定することを決めたということ自体は大きな一歩ですが、そこからあまり進歩がないというのも事実です。

- fluores

リソース管理ができるアプリケーションを tauri で作ろうとした計画ですが、ほとんど実装できずに頓挫しています。tauri (というか Rust) のビルドが思ったよりも遅く、開発が面倒になったので、今後開発が再開する可能性は低いです。

## 今期の計画

### 時期

2025年5月-7月

### 基本計画

#### LRA 本部

- Lemonium (Website)  
気が向いたらデザインの向上をします。

#### Alice Project

2023年から継続して開発しているゲーム関連インフラです。

- Alice Novel
- Alice Console
- Anov LSE / Anov Syntax Extension
- commonnovel-spec

Spec の制定と、それに対応させることを優先させたいです。

Alice Novel に関しては、機能実装を進めても面白いかもしれません。

#### Ivy Cafeteria

- LynnePG  
グラフィックを頑張りましょう。リリース目指します。
- AkizukiForest  
気が向いたらシナリオを刷新して、v2.0.0 をリリースするかもしれません。配布方式をもう少しわかり易くしたほうがいいかな。
- Medicolor  
先述の通り、開発を継続するかどうかは不明です。するとしたら、色覚異常のレベルを10段階 (論文で登場する数値が10段階) で変更できるとか、それ以上細かい数値を近似で求めるとか。あとは、GUI 化するとか。

#### 外部

- .NET MAUI / maui-linux  
がんばります。(使命感)
- KDE  
日本語翻訳、KDE neon の日本語対応パッチ、日本でのローカルイベント (ユーザーサポート) など考えていますが、どれをやるかはわかりません。なんかしらで KDE に貢献できたら良いと考えています。

### 最後に

計画とか言っているくせに、結構適当な気がする…。
