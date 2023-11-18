# LEC-MainSite
[旧LECメインサイト][lec-main](アーカイブ)のソースコードです。<br />

## 概要
### 管理状況
こちらのサイトの更新は終了しました。
今後最新情報は
[新サイト](https://lemon73.gitlab.io "LEC公式サイト")
([レポジトリ](https://gitlab.com/lemon73/lemon73.gitlab.io "LEC公式サイト | GitLab"))
のほうに記載していきます。<br />

### 旧サイトの維持
こちらの旧サイトは、歴史的資料保存を目的として維持することに決定しました。<br />
[新しいURL][lec-main]からアーカイブとしていつでも見れるようになりました。<br />

[lec-main]: https://lemon73-computing.github.io/LEC-MainSite/ "旧LEC公式サイト アーカイブ"

### 更新
運営/管理は私、LEC代表Lemon73のみで行っています。<br />
そのため、誤字脱字やバグの修正に時間がかかるかもしれませんがご了承ください。<br />
当サイト及び、新サイト、データサイトでのサイト、ソースコードの更新は不定期に行われます。<br />

## ライセンス
現時点では[CC BY-SA 4.0]を採用しています。<br />
> [!IMPORTANT]
> 画像についてはライセンスの対象外とし、利用を禁じます。<br />

#### ライセンスの履歴
- 2023/ 2/ 2(木)~ [CC BY-SA 4.0]を採択
- 2023/ 2/28(火)~ [GPL-3.0]を追加で採択
- 2023/11/18(土)~ [GPL-3.0]を廃止

[GPL-3.0]: https://www.gnu.org/licenses/gpl-3.0.html.en "GNU GPL v3.0"
[CC BY-SA 4.0]: https://creativecommons.org/licenses/by-sa/4.0/deed.ja "Creative Commons License BY-SA 4.0"

## 開発構成など
#### [メイン部分][lec-main]
- Editor: VSCode
- Framework: なし
- Languages: HTML+CSS
#### [N-SCF(NEO)](https://lemon73-computing.github.io/LEC-MainSite/neo/neo_scf/)
- IDE: Microsoft Visual Studio2022 Community
- Framework: Blazor WebAssembly(.NET6)
- Languages: HTML+CSS+JavaScript(記述自体はC#)

## 開発環境+動作テスト環境
#### Local develop environment
- OS: Windows10 22H2
- CPU: Intel Core i5-6400T(2.20GHz)
- RAM: 4GBx2枚 (DDR4 2133MHz SO-DIMM)
- GPU: Intel HD Graphics 530
- ブラウザ: Opera
#### 公開
- 公開場所: GitHub Pages
