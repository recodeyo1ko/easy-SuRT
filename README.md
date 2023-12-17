# かんたん SuRT

- SuRT(Surrogate Reference Task)を簡単に実施できるアプリケーション
- 画面の中から他と比較して大きい丸を選択するゲーム
- 画面サイズは ipad pro 11inch (Gen1) ,iphone12 mini, android shv39 を想定

## 使用方法

1. https://easy-su-rt.vercel.app/ にアクセス

- デバイスで画面を開く準備をする
> iphone 起動後ツールバーを非表示 or「ホーム画面に追加」を選択後、ホーム画面から起動
> andoroid ホーム画面に追加
- タスクを開始する。
- ヘッダー部からスコアの確認やリセットが可能

## 使用技術

- React - v18.2.0
- MUI - v5.14.2

## Usage

### local

- `npm install`
- `npm start`

### docker

- `docker-compose run front npm install`
- `docker-compose up`

## 今後の予定

### レスポンシブなレイアウト

- ウィンドウの幅に応じてセルの個数を決定する
  > Math.floor(window.innerWidth / 100);
- CSSをよりスマートに
