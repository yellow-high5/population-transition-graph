<p align="center">
  <a href="">
    <img src="./public/logo.png" height="128">
  </a>
</p>

このプロジェクトは [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)によって生成された日本の人口推移を都道府県別に表示することができるアプリケーションです。

## 開発環境

以下のバージョンを利用しています。

- Node.js `v16.17.0`
  - [nodenv](https://github.com/nodenv/nodenv)でバージョンを固定しています
- npm `v8.15.0`
- Typescript `v4.9.5`

## VSCode の拡張機能

以下のコマンドを実行して開発に必要な拡張機能をインストールしてください。

```sh
code --install-extension esbenp.prettier-vscode\
     --install-extension dbaeumer.vscode-eslint\
     --install-extension firsttris.vscode-jest-runner\
     --install-extension Orta.vscode-jest\
```

## 開発ことはじめ

プロジェクトのルートディレクトリで以下のコマンドを実行して`node_modules`をインストールします。

```sh
yarn install
```

以下のコマンドで開発用のローカルサーバーを起動します。

```sh
yarn dev
```

[http://localhost:3000](http://localhost:3000) にアクセスして確認します。

### フォーマット

[Prettier](https://prettier.io/) を使用します。

```sh
yarn format:check
```

フォーマットを全てのファイルに適用する場合は以下のコマンドを実行してください。

```sh
yarn format
```

### リンター

[ESLint](https://eslint.org/) を使用します。

```sh
yarn lint
```

指摘を修正する場合は以下のコマンドを実行してください。

```sh
yarn lint:fix
```

👉 [husky](https://github.com/typicode/husky) によってローカルでコミットする前に ESLint の指摘がある場合はコミットが中止されます。

### テスト

#### Jest

以下のコマンドで単体テストを実行できます。

```sh
yarn jest
```

👉 [husky](https://github.com/typicode/husky) によってローカルでコミットする前に Jest でテストが失敗している場合はコミットが中止されます。

## npm ライブラリ

以下機能の実装に使用しているライブラリです。

| 機能             | ライブラリ                                                         |
| ---------------- | ------------------------------------------------------------------ |
| API クライアント | [Axios](https://axios-http.com/), [SWR](https://swr.vercel.app/ja) |
| グラフ描画       | [Recharts](https://recharts.org/en-US)                             |
