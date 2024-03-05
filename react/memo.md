# 目指すべきベストプラクティス
- 構成関連
- AtomicDesginの場合
  - UI/ロジックの切り分け(presenter / container) 
  - AtomicDesign + MUIのベストプラクティス
    - 全体理解の読み物
      - [アトミックデザインとは？(図示)](https://www.tanipu-blog.com/blog/what-is-atomic-design)
      - [図解](https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B)
      - [UI開発を行うためのアジャイル開発](https://ygoto3.com/posts/atomic-design-for-agile-ui-development/)
    -[ ] 詳細理解の読み物 ⇒ (各階層のベストプラクティスをマークダウンとかでまとめる！)
      - [Atomic DesignによるReactコンポーネントの設計手法](https://www.crunchtimer.jp/blog/15849)
      - [Reactにおける責務（UI/ロジック）の切り分け](https://tech.leverages.jp/entry/2022/08/31/160743)
      - [俺的 Atomic Design (Vue)](https://qiita.com/shiminori0612/items/62e002b3ce5637e0d8aa)
      - [Presentational / containerコンポーネントの分離](https://blog.kinto-technologies.com/posts/2022-12-05-atomicDesign/)
      - [食べログのAtomicDesign導入](https://note.com/tabelog_frontend/n/n4b8bcb44294c#auLEU)
    - [ ] ハンズオンで手を動かす
        - ざっくり理解
          - [Next.jsで管理画面作成 + AtomicDesign](https://zenn.dev/thirosue/books/13ac92fc34ae22)
        - StoryBook + Hygen(index(presenter/containerファイル), stories, componentファイル )
          - [React/Next.js + AtomicDesignハンズオン(ボイラープレートあり)](https://zenn.dev/hisachii/articles/2544d6ea10033d)
- MUI
  - Styledを使う
    - [MUIv5 スタイリング方法](https://qiita.com/cieloazul310/items/d630da98439c89d773ba)
    - [Next.js + MUIのスタイル再定義とアトミックデザインの話](https://note.com/pk_yakkun/n/ne1bc79d699be#a2200f68-8b8c-4e32-b1cc-f1341e2c03b6)
    - [Next.js×MUI×AtomicDesignにおけるオリジナルテーマの適応とコンポーネント設計について](https://zenn.dev/pk_yakkun/articles/dcdee4cf64c4ef)
    - [MUI v5 Theme](https://zenn.dev/longbridge/articles/c100d0311ed1be)
    - [MUIデザインシステム + AtomicDesign不採用パターン](https://tech.buysell-technologies.com/entry/2023/01/31/000000#Atomic-Design%E3%81%AE%E4%B8%8D%E6%8E%A1%E7%94%A8)
  - ハンズアウト系
    - [MUIでGridレイアウト qiita](https://qiita.com/yotsak/items/a638921241a5f0fabe0f)
    - [MUIでGridListコンポーネント hateblo](https://kakakakakku.hatenablog.com/entry/2020/01/13/000227)
  - レイアウト学習のためにTemplatesの写経
    - [muiアプリテンプレート](https://blog.usize-tech.com/react-free-template/)
- 脱AtomicDesignの場合
  - [AtomicDesignやめたディレクトリ構成](https://tech-record.com/post/cG9zdDoyOQ==)
  - [おすすめディレクトリ構成](https://zenn.dev/a_da_chi/articles/80879f4813ecac#%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E3%81%AE%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90)
  - [SPA Component](https://zenn.dev/yoshiko/articles/99f8047555f700)
  - [UIpartsのパターン(bulletproof)](https://zenn.dev/manalink_dev/articles/bulletproof-react-is-best-architecture)
- React基礎理解
  - [ ] hooksを網羅する
    - [React hooksを基礎から理解する (useState編) ](https://qiita.com/seira/items/f063e262b1d57d7e78b4)
    - [axiosを使ってReactでUnsplash APIを叩いてみた](https://qiita.com/kuropp/items/d9758d6ab573b9b53c4b)
  - [ ] Reactチュートリアルにreact-router-domでアウトプットする
    - [ja.react.dev](https://ja.react.dev/blog/2023/03/16/introducing-react-dev)
    - [react-router-domの学習](https://reffect.co.jp/react/react-router-6/)
  - りあくとで原理・原則の読み物で理解
- そのほか
  - [ ] 絶対パス
- Next.js関連
  - [Next.js チュートリアルまとめ](https://zenn.dev/yossyxp/scraps/312e66748bf9aa)
- ゆくゆくは抑えたい
  - Jest


---

# 参考になりそうなサイト

## React, JS の基本的なところ
- [React×TypeScript 基本の型定義](https://qiita.com/hinako_n/items/97ccaf85eb40d7e45657)
- [module(import/export)ってなんなん?](https://zenn.dev/kanachan/articles/ad28de7389bcd0)
- [絶対パス](https://zenn.dev/yuji6523/articles/react-absolute-path)

## チュートリアル系
- [x] [storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/ja/simple-component/)
- [x] [Netflixのクローンを作るチュートリアル](https://zenn.dev/gunners6518/books/4c4672f32dd100)
- [React 入門向けサイト、記事集](https://qiita.com/KNR109/items/d5945897dd67123a87de)
- [React Hooksのみでドラッグ＆ドロップの並び替えを実装する](https://zenn.dev/uttk/articles/b90454baec68c8)
