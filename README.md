# nijitogotoh portfolio

このリポジトリは、[本番公開中のWebサイト](https://kazehitotsukami.com/) のソースコードです。  
イラストレーターの活動記録、ポートフォリオサイトとなっています。
HTML / CSS / JavaScript をベースに、Sass（SCSS）を使用してスタイルの管理・リファクタリングを行っています。

---

## 📦 構成

- HTML / CSS / JavaScript
- Sass（SCSS記法による管理）

---

## ⚠️ 注意事項

現在、本番環境では従来の CSS（`style/css/style.css`）が使用されています。  
このリポジトリでは、保守性と拡張性を目的に、**Sassによるスタイルのリファクタリング**を進めています。

> `style/scss/style.scss` をコンパイルして `style/css/style.css` に反映する構成です。

---

## 🛠️ Sassのビルド方法

以下のコマンドで Sass をコンパイル・監視できます：

```bash
# 1回だけビルドする場合
sass style/scss/style.scss style/css/style.css

# ファイル変更を監視して自動ビルドする場合
sass --watch style/scss/:style/css/

---

## 🎨 Sassファイル構成

Sassファイルはセクション・用途ごとに分割して管理しています。  
すべて `style/scss/` 内に配置され、`style.scss` にて集約されています。

| ファイル名                    | 用途説明                             |
|-----------------------------|--------------------------------------|
| `_analog.scss`              | アナログページ専用のスタイル         |
| `_footer.scss`              | フッターに関するスタイル             |
| `_illustration-pages.scss`  | イラスト各ページのスタイル           |
| `_main.scss`                | トップページおよび全体のレスポンシブ対応 |
| `_profile.scss`             | プロフィールページのスタイル         |
| `_shop.scss`                | ショップページのスタイル             |
| `_variables.scss`           | 色・フォントサイズなどの共通変数管理 |
| `_works.scss`               | worksページ（一覧）のスタイル       |
| `_works-pages.scss`         | 各作品ページの詳細スタイル           |
| `style.scss`                | 上記すべてをインポートするメインファイル |

> 🔸 `_fee.scss` は現在未使用の仮ファイルです。ビルド対象外としてください。
