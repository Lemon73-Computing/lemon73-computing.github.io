# LEC-MainSite
[旧LECメインサイト][lec-main](アーカイブ版)のソースコードです。<br />

## 概要
### 管理状況
現在はこちらのサイトの運営は終了し、
[新サイト](https://lemon73.gitlab.io "LEC公式サイト")
([レポジトリ](https://gitlab.com/lemon73/lemon73.gitlab.io "LEC公式サイト | GitLab"))
の開発へ移行しました。<br />

### 旧サイトの管理
こちらの旧サイトは、歴史的資料保存を目的として維持することに決定しました。<br />
[新しいURL][lec-main]からアーカイブとしていつでも見れるようになりました。<br />

[lec-main]: https://lemon73-computing.github.io/LEC-MainSite/ "旧LEC公式サイト アーカイブ"

### 更新
運営/管理は私、LEC代表Lemon73のみで行っています。<br />
そのため、誤字脱字やバグの修正に時間がかかるかもしれませんがご了承ください。<br />
当サイト及び、新サイト、データサイトでのサイト、ソースコードの更新は不定期に行われます。<br />

## ライセンス
こちらのコードのライセンスに関しては、<br />
現時点では[GPL-3.0]と[CC BY-SA 4.0]のツインライセンス体制となっています。<br />
・[GPL-3.0]…プログラムやhtml/cssの内容などに適応<br />
・[CC BY-SA 4.0]…文章の内容に適応<br />
独自のルールなどを定める可能性もあるため、その際はそちらもご確認ください。<br />
なお、画像については現時点ではライセンスの制定は行っていないため、利用を禁じます。<br />

#### ライセンスの履歴
- 2023/ 2/ 2(木)~ [CC BY-SA 4.0]を採択<br />
- 2023/ 2/28(火)~ [GPL-3.0]を追加で採択<br />

[GPL-3.0]: LICENSE "GNU GPL v3.0"
[CC BY-SA 4.0]: https://creativecommons.org/licenses/by-sa/4.0/deed.ja "Creative Commons License BY-SA 4.0"

## 開発構成など
#### [メイン部分][lec-main]
    エディター:Microsoft Visual Studio Code
    フレームワーク:なし
    言語:HTML+CSS
#### [N-SCF(NEO)](https://lemon73-computing.github.io/LEC-MainSite/neo/neo_scf/)
    IDE:Microsoft Visual Studio2022 Community
    フレームワーク:Blazor WebAssembly(.NET6)
    言語:HTML+CSS+JavaScript(記述自体はC#)

## 開発環境+動作テスト環境
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
