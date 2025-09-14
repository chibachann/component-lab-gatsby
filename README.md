[既存内容をすべて置き換え]
# web_base_gatsby

このプロジェクトは、GatsbyをベースにAtomicデザインを取り入れたWebサイトの基礎テンプレートです。

## 特徴

- Gatsby v5系を使用
- Atomicデザイン（atoms, molecules, organisms, templates, pages）に基づくコンポーネント構成
- グローバルCSSリセット済み
- レイアウトやベースページの雛形を用意

## ディレクトリ構成

```
src/
	components/
		atoms/
		molecules/
		organisms/
			basepage/
				basepage.js
				basepage.module.css
			layout.js
		templates/
		pages/
	images/
	pages/
		index.js
```

## セットアップ方法

1. 依存パッケージのインストール
	 ```bash
	 npm install
	 ```
2. 開発サーバーの起動
	 ```bash
	 npm run develop
	 ```
3. ビルド
	 ```bash
	 npm run build
	 ```
4. 本番ビルドのプレビュー
	 ```bash
	 npm run serve
	 ```

## 主なファイル

- `gatsby-browser.js` : グローバルCSSの適用設定
- `src/components/global.css` : CSSリセット
- `src/components/organisms/layout.js` : レイアウトコンポーネント
- `src/components/organisms/basepage/basepage.js` : ベースページコンポーネント

## ライセンス

MIT
