
# component-lab-gatsby

このプロジェクトは「たくさんのコンポーネントを作る」ことを目的としたGatsbyベースの開発用リポジトリです。

## 特徴

- Gatsby v5系を使用
- Atomicデザイン（atoms, molecules, organisms, templates, pages）に基づくコンポーネント構成
- 新しいUIコンポーネントやパターンの実験・追加がしやすい構成
- グローバルCSSリセット済み

## ディレクトリ構成例

```
src/
  components/
    atoms/
    molecules/
    organisms/
    templates/
  images/
  pages/
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

## ライセンス

MIT
