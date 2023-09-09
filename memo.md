# 目指すべきベストプラクティス

- 構成関連
  - StoryBook + Hygen
    - (index(presenter/containerファイル), stories, componentファイル )
- AtomicDesginの場合
  - UI/ロジックの切り分け(presenter / container), Styledを使う
- 脱AtomicDesignの場合
  - UIpartsのパターン(bulletproof)
- MUI
  - レイアウト学習のためにTemplatesの写経
  - AtomicDesign + MUIのベストプラクティス
- 基礎理解
  - hooks集で抑える
  - Reactチュートリアル
  - りあくとで原理・原則の座学
- そのほか
  - 絶対パス

- ゆくゆくは抑えたい
  - Jest
---

# 参考になりそうなサイト

## React, JS の基本的なところ
- [React×TypeScript 基本の型定義](https://qiita.com/hinako_n/items/97ccaf85eb40d7e45657)
- [module(import/export)ってなんなん?](https://zenn.dev/kanachan/articles/ad28de7389bcd0)
- [絶対パス](https://zenn.dev/yuji6523/articles/react-absolute-path)

## atomic design
- [アトミックデザインとは？(図示)](https://www.tanipu-blog.com/blog/what-is-atomic-design)

## MUI * atomic design
- [Next.js + MUIのスタイル再定義とアトミックデザインの話](https://note.com/pk_yakkun/n/ne1bc79d699be#a2200f68-8b8c-4e32-b1cc-f1341e2c03b6)
- [Next.js×MUI×AtomicDesignにおけるオリジナルテーマの適応とコンポーネント設計について](https://zenn.dev/pk_yakkun/articles/dcdee4cf64c4ef)

## チュートリアル系
- [storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/ja/simple-component/)
- [旧react.dev](https://ja.legacy.reactjs.org/tutorial/tutorial.html)
- [react.dev](https://ja.react.dev/learn/tutorial-tic-tac-toe)
  - 各チャレンジ問題が参考になりそう
- [muiアプリテンプレート](https://blog.usize-tech.com/react-free-template/)
- [Netflixのクローンを作るチュートリアル](https://zenn.dev/gunners6518/books/4c4672f32dd100)
- [React 入門 qiita](https://qiita.com/KNR109/items/d5945897dd67123a87de)
- [React hooksを基礎から理解する (useState編) qiita](https://qiita.com/seira/items/f063e262b1d57d7e78b4)
- [React Hooksのみでドラッグ＆ドロップの並び替えを実装する](https://zenn.dev/uttk/articles/b90454baec68c8)
- [Next.js チュートリアルまとめ](https://zenn.dev/yossyxp/scraps/312e66748bf9aa)