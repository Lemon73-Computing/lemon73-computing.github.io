# LEC-MainSite
[LECのメインサイト][lec-main]のソースコードです。

### ライセンス
こちらのコードのライセンスに関しては、これから変更する可能性が高いのですが、<br>
2023/2/4(土)現時点では[Creative Commons License BY-SA 4.0(CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/deed.ja)を採択します。<br>
それに加えて、独自のルールなどを定める予定なので、制定次第そちらもご確認ください。<br>

### サイトについて
運営/管理は私、LEC代表Lemon73のみで行っています。<br>
バグの改善が遅かったりするかもしれませんがご了承ください。<br>
[こちら][lec-main]がメインサイトのリンクとなっています。<br>
サイトに関してのご意見は、Microsoft Formsの用意を考えているので少々お待ちください。<br>
(GitHubでのIssuesなどは使い方がよくわからないので現時点では対応できませんが、将来的には対応を考えています。)<br>
メールのほうは確認していないので、メールには送らないでください。<br>

[lec-main]: http://lec.starfree.jp

### 使っているフレームワークについて
#### メイン部分
    IDE:Microsoft Visuai Studio Code
    フレームワーク:なし
    言語:HTML+CSS
#### [N-SCF(NEO)](http://lec.starfree.jp/neo/neo_scf/)
    IDE:Microsoft Visual Studio2022 Community
    フレームワーク:Blazor WebAssembly(.NET6)
    言語:HTML+CSS+JavaScript(記述自体はC#)

#### 注意点
ブラウザにキャッシュがたまっているとCSSが更新されないことがあります。<br>
その際はお手数ですが、[Ctrl]+[F5]にてリロードを行ってください。<br>
また、それでも解決しない場合はブラウザのシークレットモードにてページをアクセスする又は、時間が経ってから再度アクセスしてください。<br>

### 更新
当サイト及び、データサイトでのサイト、ソースコードの更新は不定期に行われます。<br>

### 開発環境+動作テスト環境
#### ローカル開発環境
    OS:Windows10 22H2
    CPU:Intel Core i5-6400T(2.20GHz)
    RAM:4GBx2枚 (DDR4 2133MHz SO-DIMM)
    GPU:Intel HD Graphics 530(CPU内蔵GPU)
#### ブラウザ環境
    種類:Opera
    バージョン/Chromium バージョン:最新
    アップデートストリーム:Stable
    システム:Windows 10 64-bit
    ブラウザID:略
#### 公開サーバー
    管理企業:Netowl
    OS:Linux(詳細は不明)
    CPU:Intel Xeon E5-2430 v2(2.50GHz)(何コア割り当てられているか不明)
    RAM:48GB(何GB割り当てされているかは不明)
    容量:4GB割り当て
