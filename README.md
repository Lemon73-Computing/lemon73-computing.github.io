# LEC-MainSite
[LECのメインサイト][lec-main]のソースコードです。<br />

### サイトについて
#### 現時点での管理
現在もこちらのサイトの運営は続けていますが、様々な理由により、新サイトを設立してそちらの開発へ移行していくことに決定しました。<br />
新サイトは[こちら](https://lemon73.gitlab.io "LEC公式サイト")で、
レポジトリは[こちら](https://gitlab.com/lemon73/lemon73.gitlab.io "GitLab LEC公式サイト")となっています。<br />

#### 旧サイト側(こちら)の管理
こちらの旧サイトもアーカイブとしていつでも見れるように調節中です。<br />
[こちら](https://lemon73-computing.github.io/LEC-MainSite/)からアクセスできます。<br />
データを移管中なので、リンク間違い(404エラー)などの不具合が多くみられますので、ご了承ください。<br />

#### 更新
運営/管理は私、LEC代表Lemon73のみで行っています。<br />
そのため、誤字脱字やバグの修正に時間がかかるかもしれませんがご了承ください。<br />
当サイト及び、新サイト、データサイトでのサイト、ソースコードの更新は不定期に行われます。<br />

#### サイトの要望や不具合について
旧サイトの運営状況や方針は[Discord](https://discord.com/channels/972718425937952798/1080900222152097913 "旧LEC公式サイト サポート")にて発表しています。<br />
旧サイトに関してのご意見は以下の場所で共有してください。<br />
(旧サイト側はメンテナンスのみで、情報の更新を行うつもりはありません。)
○GitHubのIssues<br />
×Form系<br />
×メール<br />
×Twitter、RedditなどのSNSやDM<br />

[lec-main]: http://lec.starfree.jp "旧LEC公式サイト"

### ライセンスについて
こちらのコードのライセンスに関しては、これから変更する可能性が高いのですが、<br />
[GPL-3.0]と[CC BY-SA 4.0]のツインライセンス体制となります。<br />
・[GPL-3.0]…プログラムや(s)html/cssの構成や内容などに適応<br />
・[CC BY-SA 4.0]…文章の内容に適応<br />
独自のルールなどを定める可能性もあるため、その際はそちらもご確認ください。<br />
なお、画像については現時点ではライセンスの制定は行っていないため、利用を禁じます。<br />

##### ライセンスの履歴
- 2023/ 2/ 2(木)~ [CC BY-SA 4.0]を採択<br />
- 2023/ 2/28(火)~ [GPL-3.0]を追加で採択<br />

[GPL-3.0]: LICENSE "GNU GPL v3.0"
[CC BY-SA 4.0]: https://creativecommons.org/licenses/by-sa/4.0/deed.ja "Creative Commons License BY-SA 4.0"

### 開発構成や使用しているエディタについて
#### [メイン部分][lec-main]
    エディター:Microsoft Visual Studio Code
    フレームワーク:なし
    言語:HTML+CSS
#### [N-SCF(NEO)](http://lec.starfree.jp/neo/neo_scf/)
    IDE:Microsoft Visual Studio2022 Community
    フレームワーク:Blazor WebAssembly(.NET6)
    言語:HTML+CSS+JavaScript(記述自体はC#)

### 開発環境+動作テスト環境
#### ローカル開発環境
    OS:Windows10 22H2
    CPU:Intel Core i5-6400T(2.20GHz)
    RAM:4GBx2枚 (DDR4 2133MHz SO-DIMM)
    GPU:Intel HD Graphics 530(CPU内蔵GPU)
#### ブラウザ環境
    種類:Opera
    バージョン:最新
    アップデートストリーム:Stable
    システム:Windows 10 64-bit
    ブラウザID:略
#### 公開サーバー
    管理企業:GitHub
    システム:GitHub Pages
