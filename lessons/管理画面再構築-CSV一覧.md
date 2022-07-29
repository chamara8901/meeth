# 1. [管理画面再構築](https://github.com/grrowjp/Meeth/wiki/%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E5%86%8D%E6%A7%8B%E7%AF%89-%E7%94%BB%E9%9D%A2%E4%B8%80%E8%A6%A7%28ver2.0%29) - CSV一覧

- [1. 管理画面再構築 - CSV一覧](#1-管理画面再構築---csv一覧)
  - [1.1. 顧客管理ダウンロードCSVフォーマット](#11-顧客管理ダウンロードcsvフォーマット)
  - [1.2. 倉庫連携用CSVダウンロード](#12-倉庫連携用csvダウンロード)
  - [1.3. 注文管理ダウンロードCSVフォーマット](#13-注文管理ダウンロードcsvフォーマット)
  - [1.4. 定期購入管理ダウンロードCSVフォーマット](#14-定期購入管理ダウンロードcsvフォーマット)


## 1.1. 顧客管理ダウンロードCSVフォーマット

| 論理名                     | DB項目名                                | サンプル値             |
|----------------------------|-----------------------------------------|------------------------|
| 顧客ID                     | customers.id                            | 1354151091180146709    |
| メールアドレス             | customers.email                         | dummy@meeth.store.test |
| 姓                         | customers.family_name                   | 田中                   |
| 名                         | customers.first_name                    | 花子                   |
| 誕生日                     | customers.birthday                      | 1990-01-01             |
| 性別                       | customers.gender                        | 1                      |
| DM可否                     | customers.dm_agreed                     | 1                      |
| 退会ステータス             | customers.status                        | 1                      |
| パスワードリセット要求日時 | customers.password_reset_issued_at      | 2021-03-12 09:52:05    |
| レコード生成日時           | customers.created_at                    | 2021-03-12 09:52:06    |
| レコード更新日時           | customers.updated_at                    | 2021-03-12 09:52:07    |
| アカウント有効化フラグ     | customers.activated                     | 1                      |
| アカウント有効化要求日時   | customers.activation_issued_at          | 2021-02-01 19:14:08    |
| メールアドレス変更要求日時 | customers.mail_address_update_issued_at | 2021-02-01 19:14:09    |
| クレジットカード登録フラグ | customers.card_registered               | 1                      |
| 旧shopify会員フラグ        | customers.from_shopify                  | 1                      |
| お届け先住所ID             | customer_addresses.id                   | 1354152450348553648    |
| お届け先電話番号           | customer_addresses.phone                | 09012342345            |
| お届け先姓                 | customer_addresses.family_name          | 田中                   |
| お届け先名                 | customer_addresses.first_name           | 太郎                   |
| お届け先会社名             | customer_addresses.company_name         | 株式会社グロー         |
| お届け先国                 | customer_addresses.country              | 日本                   |
| お届け先郵便番号           | customer_addresses.zip_code             | 1112222                |
| お届け先都道府県           | customer_addresses.prefecture           | 東京都                 |
| お届け先住所１             | customer_addresses.address1             | 港区                   |
| お届け先住所２             | customer_addresses.address2             | 六本木1-1-1            |
| お届け先住所３             | customer_addresses.address3             | ほげアパート           |
| お届け先デフォルトフラグ   | customer_addresses.is_default           | 1                      |
| お届け先レコード生成日時   | customer_addresses.created_at           | 2021-03-12 09:52:06    |
| お届け先レコード更新日時   | customer_addresses.updated_at           | 2021-03-12 09:52:07    |

- csvサンプル
```
顧客ID,メールアドレス,姓,名,誕生日,性別,DM可否,退会ステータス,パスワードリセット要求日時,レコード生成日時,レコード更新日時,アカウント有効化フラグ,アカウント有効化要求日時,メールアドレス変更要求日時,クレジットカード登録フラグ,旧shopify会員フラグ,お届け先住所ID,お届け先電話番号,お届け先姓,お届け先名,お届け先会社名,お届け先国,お届け先郵便番号,お届け先都道府県,お届け先住所１,お届け先住所２,お届け先住所３,お届け先デフォルトフラグ,お届け先レコード生成日時,お届け先レコード更新日時
1354151091180146709,dummy@meeth.store.test,田中,花子,1990-01-01,1,1,1,2021-03-12 09:52:05,2021-03-12 09:52:06,2021-03-12 09:52:07,1,2021-02-01 19:14:08,2021-02-01 19:14:09,1,1,1354152450348553648,09012342345,田中,太郎,株式会社グロー,日本,1112222,東京都,港区,六本木1-1-1,ほげアパート,1,2021-03-12 09:52:06,2021-03-12 09:52:07
```

## 1.2. 倉庫連携用CSVダウンロード

- 現在運用中につき、現行のものを記載

| 論理名               | DB項目名                                                                                         | サンプル値                     | 備考                                   |
|----------------------|--------------------------------------------------------------------------------------------------|--------------------------------|----------------------------------------|
| ショップID           | ー                                                                                               | 1                              | ベタ書き                               |
| ショップ名           | ー                                                                                               | meeth store                    | ベタ書き                               |
| 表示受注番号         | orders.parent_order_idまたはorders.id                                                            | 1000787                        |                                        |
| 行No                 |                                                                                                  |                                | 空白指定                               |
| 配送先名             | order_addresses.family_name<br>order_addresses.first_name                                        | 柳田 由依                      |                                        |
| 配送先郵便番号       | order_addresses.zip_code                                                                         | 7010151                        |                                        |
| 配送先都道府県       | order_addresses.prefecture                                                                       | 岡山県                         |                                        |
| 配送先住所１         | order_addresses.address1                                                                         | 岡山市                         |                                        |
| 配送先住所２         | order_addresses.address2                                                                         | 北区平野532-1                  |                                        |
| 配送先住所３         | order_addresses.address3                                                                         | ヴェルディ庭瀬1101号室         |                                        |
| 配送先電話番号       | order_addresses.phone                                                                            | 090-6834-0889                  | ハイフン付与                           |
| 配送先FAX番号        | ー                                                                                               |                                | 空白指定                               |
| 配送先Eメール        | ー                                                                                               |                                | 空白指定                               |
| 配送先法人名         | order_addresses.company_name                                                                     |                                |                                        |
| 配送先所属部署・役職 | ー                                                                                               |                                | 空白指定                               |
| 出荷備考             | orders.note                                                                                      |                                |                                        |
| 出荷日               | orders.shipping_at                                                                               | 2021-02-05                     |                                        |
| 配送会社ID           | ー                                                                                               | 1                              | ベタ書き                               |
| 配送指定日           | orders.desired_delivery_date                                                                     |                                |                                        |
| 配送時間             | orders.desired_delivery_time                                                                     |                                |                                        |
| 顧客ID               | orders.customer_id                                                                               | 1354152825843620415            |                                        |
| 発注日               | orders.created_at                                                                                | 2021/02/02 22:32               |                                        |
| 税種区分             | ー                                                                                               |                                | 空白指定                               |
| 送料                 | shipping_rates.overseas.price                                                                    | 700                            | 国によって異なるのでプログラムにて計算 |
| 代引手数料           | orders.fee                                                                                       | 0                              |                                        |
| 消費税               | orders_details.tax_rate                                                                          | 1330                           |                                        |
| 消費税加算           | orders_details.tax_rate                                                                          | 0                              | ギフトバッグに対する消費税             |
| 消費税合計           | ー                                                                                               | 1330                           | プログラムにて計算                     |
| 獲得ポイント         | ー                                                                                               |                                | 空白指定                               |
| 使用ポイント         | ー                                                                                               |                                | 空白指定                               |
| 合計ポイント         | ー                                                                                               |                                | 空白指定                               |
| 請求額合計           | orders.total_amount + orders.fee + orders.gift_bag_price + 上記消費税合計 + orders.shipping_cost | 15330                          | プログラムにて計算                     |
| 決済区分             | ー                                                                                               | 1                              | ベタ書き                               |
| 決済方法             | payments.payment_method                                                                          | bank_transfer                  |                                        |
| 配送方法             | ー                                                                                               | 宅急便                         | ベタ書き                               |
| 領収書flg            | ー                                                                                               |                                | 空白指定                               |
| 領収書宛名           | ー                                                                                               |                                | 空白指定                               |
| ギフトメッセージ     | ー                                                                                               |                                | 空白指定                               |
| 包装１               | ー                                                                                               |                                | 空白指定                               |
| 包装２               | ー                                                                                               |                                | 空白指定                               |
| 包装料１             | ー                                                                                               | 600                            | ベタ書き                               |
| 包装料２             | ー                                                                                               |                                | 空白指定                               |
| のし                 | ー                                                                                               |                                | 空白指定                               |
| 荷送人名指定flg      | ー                                                                                               |                                | 空白指定                               |
| 購入者氏名           | customer_addresses.family_name<br>customer_addresses.first_name                                  | 柳田 由依                      |                                        |
| 購入者ふりがな       | ー                                                                                               |                                | 空白指定                               |
| 購入者郵便番号       | customer_addresses.zip_code                                                                      | 7010151                        | なければ「不明」と表示する             |
| 購入者都道府県       | customer_addresses.prefecture                                                                    | 岡山県                         |                                        |
| 購入者住所１         | customer_addresses.address1                                                                      | 岡山市                         | なければ「不明」と表示する             |
| 購入者住所２         | customer_addresses.address2                                                                      | 北区平野532-1                  | なければ「不明」と表示する             |
| 購入者住所３         | customer_addresses.address3                                                                      | ヴェルディ庭瀬1101号室         |                                        |
| 購入者法人名         | customer_addresses.company_name                                                                  |                                |                                        |
| 購入者電話番号       | customer_addresses.phone                                                                         | 09068340889                    |                                        |
| 購入者eメール        | customers.email                                                                                  | s-yui.0903@ezweb.ne.jp         |                                        |
| コメント             | ー                                                                                               |                                | 空白指定                               |
| 品番                 | products.id                                                                                      | 32087286                       |                                        |
| 品名                 | products.name                                                                                    | リフティウォッシュ　LIFTY WASH |                                        |
| 形式・型番           | ー                                                                                               |                                | 空白指定                               |
| 色id                 | ー                                                                                               |                                | 空白指定                               |
| 色名                 | ー                                                                                               |                                | 空白指定                               |
| サイズID             | ー                                                                                               |                                | 空白指定                               |
| サイズ名             | ー                                                                                               |                                | 空白指定                               |
| 項目選択肢           | ー                                                                                               |                                | 空白指定                               |
| 受注数               | order_details.quantity                                                                           | 1                              |                                        |
| 単価                 | product_prices.selling_price                                                                     | 4500                           |                                        |
| 行備考               | ー                                                                                               |                                | 空白指定                               |
| 出荷行備考           | ー                                                                                               |                                | 空白指定                               |
| 送状備考１           | ー                                                                                               |                                | 空白指定                               |
| 送状備考２           | ー                                                                                               |                                | 空白指定                               |
| 出荷ステータス       | orders.shipping_status                                                                           | undispatched                   |                                        |
| 予備１               | ー                                                                                               |                                | 空白指定                               |
| ギフトフラグ         | orders.gift_bag                                                                                  | 0                              |                                        |
| 発注時間             | ー                                                                                               |                                | 空白指定                               |
| 優先フラグ           | orders.subscription                                                                              | 0                              |                                        |
| クーポン金額         | ー                                                                                               |                                | 空白指定                               |
| 納品書コメント       | ー                                                                                               |                                | 空白指定                               |
| ne配送会社id         | ー                                                                                               | 1                              | ベタ書き                               |
| 認証番号             | ー                                                                                               |                                | 空白指定                               |

- csvサンプル
```
ショップID,ショップ名,表示受注番号,行No,配送先名,配送先郵便番号,配送先都道府県,配送先住所１,配送先住所２,配送先住所３,配送先電話番号,配送先FAX番号,配送先Eメール,配送先法人名,配送先所属部署・役職,出荷備考,出荷日,配送会社ID,配送指定日,配送時間,顧客ID,発注日,税種区分,送料,代引手数料,消費税,消費税加算,消費税合計,獲得ポイント,使用ポイント,合計ポイント,請求額合計,決済区分,決済方法,配送方法,領収書flg,領収書宛名,ギフトメッセージ,包装１,包装２,包装料１,包装料２,のし,荷送人名指定flg,購入者氏名,購入者ふりがな,購入者郵便番号,購入者都道府県,購入者住所１,購入者住所２,購入者住所３,購入者法人名,購入者電話番号,購入者eメール,コメント,品番,品名,形式・型番,色id,色名,サイズID,サイズ名,項目選択肢,受注数,単価,行備考,出荷行備考,送状備考１,送状備考２,出荷ステータス,予備１,ギフトフラグ,発注時間,優先フラグ,クーポン金額,納品書コメント,ne配送会社id,認証番号
1,meeth store,1000787,,柳田 由依,7010151,岡山県,岡山市,北区平野532-1,ヴェルディ庭瀬1101号室,090-6834-0889,,,,,,2021-02-05,1,,,1354152825843620415,2021/02/02 22:32,,700,0,1330,0,1330,,,,15330,1,bank_transfer,宅急便,,,,,,0,,,,柳田 由依,,7010151,岡山県,岡山市,北区平野532-1,ヴェルディ庭瀬1101号室,,09068340889,s-yui.0903@ezweb.ne.jp,,32087286,リフティウォッシュ　LIFTY WASH,,,,,,,1,4500,,,,,undispatched,,0,,0,,,1,
```

## 1.3. 注文管理ダウンロードCSVフォーマット

| 論理名                   | DB項目名                      | サンプル値                               |
|--------------------------|-------------------------------|------------------------------------------|
| 顧客ID                   | customers.id                  | 1354151546710921295                      |
| メールアドレス           | customers.email               | hoge@hoge.com                            |
| 支払ID                   | payments.id                   | 1354151546710921295                      |
| 決済状況                 | payments.status               | 1                                        |
| 支払方法                 | payments.payment_method       | 1                                        |
| 支払レコード生成日時     | payments.created_at           | 2021/03/12 0:12:34                       |
| 支払レコード更新日時     | payments.updated_at           | 2021/03/12 0:12:34                       |
| 注文ID                   | orders.id                     | 1354151546710921295                      |
| 定期購入ID               | orders.subscription_id        | 1354151546710921295                      |
| 合計金額                 | orders.total_amount           | 11000                                    |
| 配送料                   | orders.fee                    | 3000                                     |
| 配送方法                 | orders.delivery_method        | 1                                        |
| 追跡番号                 | orders.tracking_number        | 123456789                                |
| 注文カテゴリー           | orders.order_category         | 1                                        |
| 注文状況                 | orders.status<br>orders.shipping_status              | 1                                        |
| 商品発送日               | orders.shipping_at            | 2021-04-24                               |
| メールステータス         | orders.email_status           | 1                                        |
| 備考                     | orders.note                   | コメントコメント                         |
| 注文生成日時             | orders.created_at             | 2021/03/12 0:12:34                       |
| 注文更新日時             | orders.updated_at             | 2021/03/12 0:12:34                       |
| ギフトバッグ有無         | orders.gift_bag               | 1                                        |
| GMO注文ID                | orders.gmo_order_id           | dfghjklkjhgfghjkjh                       |
| 注文詳細合計(税除く)     | orders.subtotal               | 113000                                   |
| 送料(リカバリ)           | orders.shipping               | 3000                                     |
| 消費税(リカバリ)         | orders.taxes                  | 10000                                    |
| 合計(リカバリ)           | orders.total                  | 100000                                   |
| 送料(リカバリ)           | orders.shipping_method        | 国内均一送料                             |
| 備考(リカバリ)           | orders.remarks                | コメントコメントコメント                 |
| 注文個数                 | order_details.quantity        | 2                                        |
| 商品単価                 | order_details.product_price   |                                          |
| お届け先住所ID           | order_addresses.id            | asdfghjkjfghjghhg                        |
| お届け先名前(姓)         | order_addresses.family_name   | 田中                                     |
| お届け先名前(名)         | order_addresses.first_name    | 太郎                                     |
| お届け先会社名           | order_addresses.company_name  | 株式会社グロー                           |
| お届け先国               | order_addresses.country       | 日本                                     |
| お届け先郵便番号         | order_addresses.zip_code      | 123-4567                                 |
| お届け先都道府県         | order_addresses.prefecture    | 大阪府                                   |
| お届け先住所１           | order_addresses.address1      | 港区                                     |
| お届け先住所２           | order_addresses.address2      | 六本木                                   |
| お届け先住所３           | order_addresses.address3      | 2001-1-1                                 |
| お届け先電話番号         | order_addresses.phone         | 090-9999-8888                            |
| 配送料                   | order_addresses.shipping_cost | 330                                      |
| お届け先レコード生成日時 | order_addresses.created_at    | 2021/03/12 0:12:34                       |
| お届け先レコード更新日時 | order_addresses.updated_at    | 2021/03/12 0:12:34                       |
| 商品名                   | products.name                 | モアリッチエッセンシャルローション 100ml |

- csvサンプル
```
顧客ID,メールアドレス,支払ID,決済状況,支払方法,支払レコード生成日時,支払レコード更新日時,注文ID,定期購入ID,合計金額,配送料,配送方法,追跡番号,注文カテゴリー,注文状況,商品発送日,メールステータス,備考,注文生成日時,注文更新日時,ギフトバッグ有無,GMO注文ID,注文詳細合計(税除く) ,送料(リカバリ),消費税(リカバリ),合計(リカバリ),送料(リカバリ),備考(リカバリ),注文個数,商品単価,お届け先住所ID,お届け先名前(姓),お届け先名前(名),お届け先会社名,お届け先国,お届け先郵便番号,お届け先都道府県,お届け先住所１,お届け先住所２,お届け先住所３,お届け先電話番号,配送料,お届け先レコード生成日時,お届け先レコード更新日時,商品名
1354151546710921295,hoge@hoge.com,1354151546710921295,1,1,2021/03/12 0:12:34,2021/03/12 0:12:34,1354151546710921295,1354151546710921295,11000,3000,1,123456789,1,1,2021-04-24,1,コメントコメント,2021/03/12 0:12:34,2021/03/12 0:12:34,1,dfghjklkjhgfghjkjh,113000,3000,10000,100000,国内均一送料,コメントコメントコメント,2,,asdfghjkjfghjghhg,田中,太郎,株式会社グロー,日本,123-4567,大阪府,港区,六本木,2001-1-1,090-9999-8888,330,2021/03/12 0:12:34,2021/03/12 0:12:34,モアリッチエッセンシャルローション 100ml
```

## 1.4. 定期購入管理ダウンロードCSVフォーマット

| 論理名                   | DB項目名                             | サンプル値                               |
|--------------------------|--------------------------------------|------------------------------------------|
| 顧客ID                   | customers.id                         | 1354151546710921295                      |
| メールアドレス           | customers.email                      | hoge@hoge.com                            |
| 支払ID                   | payments.id                          | 1354151546710921295                      |
| 決済状況                 | payments.status                      | 1                                        |
| 支払方法                 | payments.payment_method              | 1                                        |
| 支払レコード生成日時     | payments.created_at                  | 2021/03/12 0:12:34                       |
| 支払レコード更新日時     | payments.updated_at                  | 2021/03/12 0:12:34                       |
| 注文ID                   | orders.id                            | 1354151546710921295                      |
| 定期購入ID               | orders.subscription_id               | 1354151546710921295                      |
| 合計金額                 | orders.total_amount                  | 11000                                    |
| 配送料                   | orders.fee                           | 3000                                     |
| 配送方法                 | orders.delivery_method               | 1                                        |
| 追跡番号                 | orders.tracking_number               | 123456789                                |
| 注文カテゴリー           | orders.order_category                | 1                                        |
| 注文状況                 | orders.status<br>orders.shipping_status                        | 1                                        |
| 商品発送日               | orders.shipping_at                   | 2021-04-24                               |
| メールステータス         | orders.email_status                  | 1                                        |
| 備考                     | orders.note                          | コメントコメント                         |
| 注文生成日時             | orders.created_at                    | 2021-01-27 15:23:25.694879000            |
| 注文更新日時             | orders.updated_at                    | 2021-01-27 15:23:25.694879000            |
| GMO注文ID                | orders.gmo_order_id                  | dfghjklkjhgfghjkjh                       |
| 注文詳細合計(税除く)     | orders.subtotal                      | 113000                                   |
| 送料(リカバリ)           | orders.shipping                      | 3000                                     |
| 消費税(リカバリ)         | orders.taxes                         | 10000                                    |
| 合計(リカバリ)           | orders.total                         | 100000                                   |
| 送料(リカバリ)           | orders.shipping_method               | 国内均一送料                             |
| 備考(リカバリ)           | orders.remarks                       | コメントコメントコメント                 |
| 注文個数                 | order_details.quantity               | 2                                        |
| 商品単価                 | order_details.product_price          |                                          |
| お届け先住所ID           | order_addresses.id                   | asdfghjkjfghjghhg                        |
| お届け先名前(姓)         | order_addresses.family_name          | 田中                                     |
| お届け先名前(名)         | order_addresses.first_name           | 太郎                                     |
| お届け先会社名           | order_addresses.company_name         | 株式会社グロー                           |
| お届け先国               | order_addresses.country              | 日本                                     |
| お届け先郵便番号         | order_addresses.zip_code             | 123-4567                                 |
| お届け先都道府県         | order_addresses.prefecture           | 大阪府                                   |
| お届け先住所１           | order_addresses.address1             | 港区                                     |
| お届け先住所２           | order_addresses.address2             | 六本木                                   |
| お届け先住所３           | order_addresses.address3             | 2001-1-1                                 |
| お届け先電話番号         | order_addresses.phone                | 090-9999-8888                            |
| 配送料                   | order_addresses.shipping_cost        | 330                                      |
| お届け先レコード生成日時 | order_addresses.created_at           | 2021-01-27 15:23:25.694879000            |
| お届け先レコード更新日時 | order_addresses.updated_at           | 2021-01-27 15:23:25.694879000            |
| 商品名                   | products.name                        | モアリッチエッセンシャルローション 100ml |
| 定期購入ID               | subscriptions.id                     | 1354151546710921295                      |
| 定期購入状況             | subscriptions.status                 | 1                                        |
| 定期購入処理状況         | subscriptions.processing_status      | 1                                        |
| お届け日設定             | subscriptions.delivery_plan          | 1                                        |
| 定期購入支払方法         | subscriptions.payment_method         | 1                                        |
| 定期購入レコード作成日時 | subscriptions.created_at             | 2021-01-27 15:23:26                      |
| 定期購入レコード更新日時 | subscriptions.updated_at             | 2021-01-27 15:23:26                      |
| 同梱用親ID               | subscriptions.parent_subscription_id | 1354151546710921295                      |
| 定期購入お届け先住所ID   | subscriptions.customer_address_id    | 1354151546710921295                      |
| 次回お届け日設定         | subscriptions.next_delivery_plan     | 1                                        |

- csvサンプル
```
顧客ID,メールアドレス,支払ID,決済状況,支払方法,支払レコード生成日時,支払レコード更新日時,注文ID,定期購入ID,合計金額,配送料,配送方法,追跡番号,注文カテゴリー,注文状況,商品発送日,メールステータス,備考,注文生成日時,注文更新日時,GMO注文ID,注文詳細合計(税除く) ,送料(リカバリ),消費税(リカバリ),合計(リカバリ),送料(リカバリ),備考(リカバリ),注文個数,商品単価,お届け先住所ID,お届け先名前(姓),お届け先名前(名),お届け先会社名,お届け先国,お届け先郵便番号,お届け先都道府県,お届け先住所１,お届け先住所２,お届け先住所３,お届け先電話番号,配送料,お届け先レコード生成日時,お届け先レコード更新日時,商品名,定期購入ID,定期購入状況,定期購入処理状況,お届け日設定,定期購入支払方法,定期購入レコード作成日時,定期購入レコード更新日時,同梱用親ID,定期購入お届け先住所ID,次回お届け日設定
1354151546710921295,hoge@hoge.com,1354151546710921295,1,1,2021/03/12 0:12:34,2021/03/12 0:12:34,1354151546710921295,1354151546710921295,11000,3000,1,123456789,1,1,2021-04-24,1,コメントコメント,2021-01-27 15:23:25.694879000,2021-01-27 15:23:25.694879000,dfghjklkjhgfghjkjh,113000,3000,10000,100000,国内均一送料,コメントコメントコメント,2,,asdfghjkjfghjghhg,田中,太郎,株式会社グロー,日本,123-4567,大阪府,港区,六本木,2001-1-1,090-9999-8888,330,2021-01-27 15:23:25.694879000,2021-01-27 15:23:25.694879000,モアリッチエッセンシャルローション 100ml,1354151546710921295,1,1,1,1,2021-01-27 15:23:26,2021-01-27 15:23:26,1354151546710921295,1354151546710921295,1
```