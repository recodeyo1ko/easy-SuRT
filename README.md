# かんたん SuRT

- SuRT(Surrogate Reference Task)を簡単に実施できるアプリケーション
- 画面の中から他と比較して大きい丸を選択するゲーム
- 画面サイズは ipad pro 11inch (Gen1) ,iphone12 mini を想定

## 使用方法

1. https://easy-su-rt.vercel.app/ にアクセス

- Safari で起動後ツールバーを非表 or「ホーム画面に追加」を選択後、ホーム画面から起動
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
