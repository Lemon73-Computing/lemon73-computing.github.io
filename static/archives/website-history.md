# ウェブサイトの歴史

旧 LEC 及び、LRA 系列のウェブサイトの歴史に関して記載します。

(日付は大体です。Git の履歴をもとにしていますが、昔はコミットとデプロイするタイミングが異なるため、正確な日付ではない可能性が高いです)

```mermaid
%%{
  init: {
    'theme': 'forest',
    'gitGraph': { 'mainBranchName': 'free-website' }
  }
}%%

gitGraph
  branch data-website
  branch lemon73.gitlab.io
  branch lemon73-blog
  branch alicenovel.web.app
  branch novelil.web.app

  checkout free-website
  commit id: "2023/1/x"
  commit id: "2023/1/17"

  branch lemon73-computing.github.io
  commit id: "2023/1/31"

  checkout data-website
  commit id: "2023/2/x"

  checkout lemon73-computing.github.io
  merge data-website

  checkout lemon73.gitlab.io
  commit id: "2023/5/26"

  checkout alicenovel.web.app
  commit id: "2023/9/1"

  checkout lemon73.gitlab.io
  commit id: "2023/11/12"

  checkout lemon73-blog
  commit id: "2024/2/19"

  checkout lemon73-computing.github.io
  commit id: "2024/3/25"

  checkout lemon73-blog
  commit id: "2025/1/24"

  checkout alicenovel.web.app
  merge lemon73-computing.github.io
  commit id: "2025/2/x"

  checkout lemon73-computing.github.io
  merge lemon73-blog
  commit id: "2025/3/13 (Hugo-based)"
  merge lemon73.gitlab.io
  commit id: "2025/7/13 (Archived lemon73.gitlab.io)"

  checkout novelil.web.app
  commit id: "2025/6/21"

  checkout lemon73-computing.github.io
  branch lemonium.net
  commit id: "2025/x/x"

  checkout alicenovel.web.app
  commit id: "current (alice)"

  checkout novelil.web.app
  merge alicenovel.web.app
  commit id: "future (nil)"

  checkout alicenovel.web.app
  commit id: "future (alice)"

  checkout lemonium.net
  commit id: "future (lemonium)"
```

(`free-website` was `lec.starfree.jp`, `data-website` is `http://lemonfuture.s239.xrea.com`, `lemon73-blog` was `lemon73-computing.github.io/blog`)
