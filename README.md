# かんたん SuRT

- SuRT(Surrogate Reference Task)を実施できるアプリケーション
- 画面の中から他と比較して大きい丸を選択するゲーム
- デバイスによっては見切れてしまったり間が空いてしまったりする可能性があります。(現状)想定しているデバイスは以下に示す通りです。
  > - ipad pro 11inch (Gen1)
  > - iphone12 mini
  > - android shv39

## 使用方法

1. 任意のデバイスで https://easy-su-rt.vercel.app/ にアクセス

2. デバイスで画面を開く準備をする
   > - iphone
   >   起動後ツールバーを非表示 or「ホーム画面に追加」を選択後、ホーム画面から起動
   > - andoroid
   >   ホーム画面に追加

- タスクを開始する。
- ヘッダー部からスコア(正解数/選択数)の確認やリセットが可能

## 開発

### local

- `npm install`
- `npm start`

### docker

- `docker-compose run front npm install`
- `docker-compose up`

## 使用技術

- React - v18.2.0
- TypeScript - 4.9.5
- MUI - v5.14.2

## 今後の予定

### レスポンシブなレイアウト

- ウィンドウの幅に応じてセルの個数を決定する
  > Math.floor(window.innerWidth / 100);
- CSS をよりスマートに
