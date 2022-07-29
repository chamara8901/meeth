## ソースコードの場所について

```
lib/csv/shopify/
  ∟ base_import.rb              (共通系の処理)
  ∟ customer_import.rb          (Shopifyの顧客CSVを新Meethにimport)
  ∟ order_import.rb    　　　　　 (Shopifyの注文CSVを新Meethにimport)
  ∟ subscription_import.rb    　(Shopifyの定期購入CSVを新Meethにimport)
  ∟ order_detail_bulk_update.rb (OrderDetailの一括更新用のツール) ※ ツールなのでディレクトリ移動予定
  ∟ subscription_bulk_update.rb (Subscriptionの一括更新用のツール) ※ ツールなのでディレクトリ移動予定
```
* メインのcutomer_import、order_import、subscription_importは時間かかるが、shopifyのデータが予期しないものがくることがあるので、どこでエラーかわかるように1件づつ処理する
* 更新系は、一度データ入れば問題ないのでBulk利用でもOK(Rails6のupsert_allはバリデーション使えないので、activerecord-importを利用している)
* Bulk使う場合、一部のenumが命名規則に違反しているので使えないので注意が必要


## Customer CSVのインポートについて

Command:

```
bundle exec rake csv_import:shopify_customers[{CSVファイルパス}]
```
内容:
指定された顧客情報CSVファイルを読み込んで1件づつDBに保存する(対象： Customer, CustomerAddress)
※ 1件づつにしているのはShopifyのデータがイレギュラーのが多いので、どこの行でエラーになったか把握するため

### 登録する項目

#### Customerテーブル

| カラム名 | Value | 備考 |
|:---|:---|:---|
|password |ランダムで作成したPW |テーブルが必須なので仮で入れる ※shopifyからの移行データはPWなしでもOK |
|email |CSVのemail項目 | |
|family_name |CSVのlast_name項目 |CSVに存在しない場合は、空文字 |
|first_name |CSVのfirst_name項目 |CSVに存在しない場合は、空文字 |
|birthday |1999/01/01 |固定 |
|gender |no_answer |固定 |
|status |active |固定 |
|from_shopify |true |固定 |
|dm_agreed |CSVのaccepts_marketing項目 |Yesの場合、true |


#### CustomerAddressテーブル

| カラム名 | Value | 備考 |
|:---|:---|:---|
|customer_id |CustomerテーブルID | |
|phone |CSVのphone項目 | |
|family_name |CSVのlast_name項目 |CSVに存在しない場合は、空文字 |
|first_name |CSVのfirst_name項目 |CSVに存在しない場合は、空文字 |
|company_name |CSVのcompany項目 | |
|country |CSVのcountry_code項目 |country_codeがない場合、CSVのcountry項目が入る |
|zip_code |CSVのzip項目 | |
|prefecture |CSVのprovince_code項目 |province_codeがない場合、CSVのprovince項目が入る ※いいツールでも無いかぎりiso3166-2の世界対応はかなり工数かかるので、原則日本のみ |
|address1 |CSVのcity項目 |CSVに存在しない場合は、空文字 |
|address2 |CSVのaddress1項目 |CSVに存在しない場合は、空文字 |
|address3 |CSVのaddress２項目 |CSVに存在しない場合は、空文字 |
|is_default |1 |固定 |


## Subscription CSVのインポートについて

Command:

```
bundle exec rake csv_import:shopify_subscriptions[{CSVファイルパス}]
```
内容:
指定された定期購入のCSVファイルを読み込んで1件づつDBに保存する(対象： Subscription, SubscriptionDetail)

顧客情報との紐付け:
CSVのcustomer_emailと 新Meethのcustomerテーブルのemailを紐付けて処理する

### 登録する項目

#### Subscriptionテーブル

| カラム名 | Value | 備考 |
|:---|:---|:---|
|customer_id |CustomerテーブルのID |CSVのcustomer_emailと一致した、Customer情報 |
|status |CSVのactive項目 |Yesの場合、`active` それ以外、`reversal_ng` |
|processing_status |CSVのis_paused項目 |1の場合、`pending` それ以外、`processing` ※ 配送完了しているかここではわからないため |
|delivery_plan |CSVのlast_order_date項目の日にちから計算 |正確ではないので、はorder import時に**配送完了日を見て再設定**する |
|payment_method |credit_card(固定) |BoldはStripeを推奨しているそうなので、credit_card固定にしています。https://commerce-media.info/blogs/ec/shopify-bold-01 |
|customer_address_id |CustomerAddressテーブルのID |住所情報が複数ある場合は、最初のID |
|shopify_subscription_id |CSVのsubscription_id項目 | |
|shopify_last_order_date |CSVのlast_order_date項目 | |
|shopify_subscription_date |CSVのsubscription_date項目 | |


#### SubscriptionDetailテーブル

| カラム名 | Value | 備考 |
|:---|:---|:---|
|subscription_id |SubscriptionテーブルのID | |
|product_detail_id |CSVのproducts項目を元にマッピングしたProductDetailテーブルID | |
|product_price_id |CSVのproducts項目を元にマッピングしたProductPriceテーブルID | |
|status |st_dummy |st_dummyこの意味は不明。値はこれしかないので |
|quantity |credit_card(固定) |BoldはStripeを推奨しているそうなので、credit_card固定にしています。https://commerce-media.info/blogs/ec/shopify-bold-01 |

* 商品情報の取得について
  * **Shopifyの商品ID・名前と新Meethの商品IDと名前は一致しない**
  * **そのため、Shopify商品名 -> プログラム内でその商品名とマッピングさせた新Meethの商品IDを返して処理させる**



## Order CSVのインポートについて

Command:

```
bundle exec rake csv_import:shopify_orders[{CSVフォルダパス}]
```
内容:
指定された注文のCSVファイルを読み込んで1件づつDBに保存する(対象： Order, Subscription, Customer, CustomerAddress, OrderAddress, BillingAddress, OrderDetail, Payment)

顧客情報との紐付け:
CSVのemailと 新Meethのcustomerテーブルのemailを紐付けて処理する

### 登録する項目

#### Customer, CustomerAddressテーブル

```
[6] pry(main)> customer = Customer.new(
[6] pry(main)*   password: "password",              
[6] pry(main)*   email: "test111111@test.com",              
[6] pry(main)*   family_name: "",              
[6] pry(main)*   first_name: "",              
[6] pry(main)*   birthday: "1999/01/01",              
[6] pry(main)*   gender: :no_answer,              
[6] pry(main)*   status: :active,              
[6] pry(main)*   activated: false,              
[6] pry(main)*   from_shopify: true,              
[6] pry(main)*   dm_agreed: false              
[6] pry(main)* )              
   (16.9ms)  SET NAMES utf8mb4 COLLATE utf8mb4_bin,  @@SESSION.sql_mode = CONCAT(CONCAT(@@sql_mode, ',STRICT_ALL_TABLES'), ',NO_AUTO_VALUE_ON_ZERO'),  @@SESSION.sql_auto_is_null = 0, @@SESSION.wait_timeout = 2147483
/usr/local/bundle/gems/activemodel-6.0.2.1/lib/active_model/type/integer.rb:13: warning: Using the last argument as keyword parameters is deprecated; maybe ** should be added to the call
/usr/local/bundle/gems/activemodel-6.0.2.1/lib/active_model/type/value.rb:8: warning: The called method `initialize' is defined here
=> #<Customer:0x000055d368058e80

 id: nil,
 email: "test111111@test.com",
 password_digest: "$2a$12$q29H0aeSEPS.Z.lJStm7ve4p5KKqWPI9iR8asWi5k/nzTT7Fh9iDa",
 remember_token: nil,
 family_name: "",
 first_name: "",
 birthday: Fri, 01 Jan 1999,
 gender: "no_answer",
 dm_agreed: false,
 status: "active",
 password_reset_digest: nil,
 password_reset_issued_at: nil,
 created_at: nil,
 updated_at: nil,
 activation_digest: nil,
 activated: false,
 activation_issued_at: nil,
 mail_address_update_digest: nil,
 mail_address_update_issued_at: nil,
 temporary_email_address: nil,
 card_registered: false,
 from_shopify: true,
 pw_update_completed: nil,
 delivery_plan_reset_completed: nil,
 movement_digest: nil,
 movement_issued_at: nil>
[7] pry(main)> customer&.save!(validate: false)            
   (5.7ms)  BEGIN
  Customer Create (137.2ms)  INSERT INTO `customers` (`id`, `email`, `password_digest`, `family_name`, `first_name`, `birthday`, `gender`, `status`, `created_at`, `updated_at`, `activation_digest`, `from_shopify`) VALUES (1342444182697938946, 'test111111@test.com', '$2a$12$q29H0aeSEPS.Z.lJStm7ve4p5KKqWPI9iR8asWi5k/nzTT7Fh9iDa', '', '', '1999-01-01', 9, 1, '2020-12-25 21:16:49.219181', '2020-12-25 21:16:49.219181', '4c4e3656c64582cfec5860346a2019d9e8dc9896a33481546854bae74f1aa4e4', TRUE)
  CustomerRegulation Load (27.1ms)  SELECT `customer_regulations`.* FROM `customer_regulations` WHERE `customer_regulations`.`customer_id` = 1342444182697938946
   (11.5ms)  COMMIT
=> true
[8] pry(main)> 
```

・メールアドレスが既存のCustomerテーブルに存在しない場合、メールアドレスとパスワード以外は固定で入る
=> この理由は本番でimportを実行した際、入らなかったデータが存在し、そのデータをがShopifyで会員にならずに注文したユーザーのため。


#### Orderテーブル

| カラム名 | Value | 備考 |
|:---|:---|:---|
|customer_id |CustomerテーブルのID | |
|subscription_id |SubscriptionテーブルのID |CSVのTags項目に「recurring_order」が存在する場合且つ、Subscriptionテーブルに存在する場合 |
|total_amount |CSVのsubtotal項目 | |
|fee |0 |固定 |
|delivery_method |ems or yamato |CSVのshipping_method項目にInternationalが存在する場合は、ems それ以外はyamato |
|desired_delivery_date |nil　 |固定 |
|desired_delivery_time |nil |固定 |
|order_category |normal |固定 |
|status |CSVのfulfillment_status項目で判断 |新Meethとstatusが異なるので、finished(fulfilled), processing(partial), canceled(restocked), returned(fulfilled 且つ CSVのfinancial_status項目がrefunded), pending(それ以外) ※かっこ内はCSVの値|
|shipping_status |CSVのfulfillment_status項目で判断 |こちらは新Meeth似ているので、finished(fulfilled), preparing(partial), canceled(restocked), returned(fulfilled 且つ CSVのfinancial_status項目がrefunded), undispatched(それ以外) ※かっこ内はCSVの値|
|shipping_at |CSVのfulfilled_at項目 ||
|email_status |product_shipped |固定|
|shopify_order_id |CSVのid項目 ||
|shopify_fulfilled_at |CSVのfulfilled_at項目 ||
|created_at |CSVのcreated_at項目 |ここは、ユーザーの注文詳細画面でここの値を入れているので、CSVの値を入れる|

* subscription_idについて
 * 定期購入データは、過去のデータも存在(例 2020-01に開始 -> 2020-04に終了、2020-08に開始の場合、2レコード)するため、 subscriptionテーブルの shopify_subscription_date以降のデータと紐付ける

#### OrderDetailテーブル

| カラム名 | Value | 備考 |
|:---|:---|:---|
|order_id |OrderテーブルのID | |
|product_detail_id |CSVのlineitem_name項目を元にマッピングしたProductDetailテーブルID | |
|product_price_id |CSVのlineitem_name項目を元にマッピングしたProductPriceテーブルID | |
|billing_amount |CSVのlineitem_price項目 x CSVのlineitem_quantity項目||
|status |CSVのlineitem_fulfillment_status項目|finished(fulfilled)、pending（それ以外） リファレンス見ると `fulfilled` か空白でくるみたい  https://help.shopify.com/ja/manual/migrating-to-shopify/transporter-app/csv-orders|
|tax_rate |CSVのtax1_name項目|Tax XX%と来るので、その値を入れる|
|quantity |CSVのlineitem_quantity項目||
|order_address_id |OrderAddressテーブルのID||
|billing_address_id |BillingAddressテーブルのID||


#### OrderAddressテーブル

| カラム名 | Value | 備考 |
|:---|:---|:---|
|address1 |CSVのshipping_city項目 | |
|address2 |CSVのshipping_address1項目 | |
|address3 |CSVのshipping_address2項目 | |
|country |CSVのshipping_country項目を元に算出した国 |※ない場合は国コードそのまま入る |
|shipping_cost |CSVのshipping項目 | |
|family_name |CSVのshipping_name項目|姓名が一緒の項目に入っているので、半角スペースで分けた前半|
|first_name |CSVのshipping_name項目|姓名が一緒の項目に入っているので、半角スペースで分けた後半|
|phone |CSVのshipping_phone項目|国際番号、記号など入ってくるため、バリデーションエラーにならないように加工して入れる|
|prefecture |CSVのshipping_province項目|iso3166-2のコードでくるので、全て対応は時間的に難しいので日本とアメリカのみ。それ以外はCSVのshipping_province項目が入る ※ ここはあった場合、ユーザーに直してもらうか、Update文で対応など簡単な方で対応|
|zip_code |CSVのshipping_zip項目|ない場合は、0000000|

#### BillingAddressテーブル

| カラム名 | Value | 備考 |
|:---|:---|:---|
|address1 |CSVのbilling_city項目 | |
|address2 |CSVのbilling_address1項目 | |
|address3 |CSVのbilling_address2項目 | |
|country |CSVのbilling_country項目を元に算出した国 |※ない場合は国コードそのまま入る |
|family_name |CSVのbilling_name項目|姓名が一緒の項目に入っているので、半角スペースで分けた前半|
|first_name |CSVのbilling_name項目|姓名が一緒の項目に入っているので、半角スペースで分けた後半|
|phone |CSVのbilling_phone項目|国際番号、記号など入ってくるため、バリデーションエラーにならないように加工して入れる|
|prefecture |CSVのbilling_province項目|iso3166-2のコードでくるので、全て対応は時間的に難しいので日本とアメリカのみ。それ以外はCSVのbilling_province項目が入る ※ ここはあった場合、ユーザーに直してもらうか、Update文で対応など簡単な方で対応|
|zip_code |CSVのbilling_zip項目|ない場合は、0000000|


#### Paymentテーブル

| カラム名 | Value | 備考 |
|:---|:---|:---|
|customer_id |OrderテーブルのCustomerID | |
|order_id |OrderテーブルのID | |
|status |CSVのfinancial_status項目 |shopifyのステータスとかなり異なる。ひとまず記載する通り入れる。auth(pending, authorized, partially_paid),capture(paid),returned(refunded),canceled(voided),auth(それ以外) ※かっこ内はCSVの値|
|payment_method |CSVのpayment_method項目 |paypal(PayPal), cod(Cash on), bank_transfer(Bank), credit_card(それ以外)  ※かっこ内はCSVの値|




## 追加のカラムについて
shopifyのデータかどうか確認するため以下のカラムを追加している

### Subscriptions
```
- shopify_subscription_id: Shopify側の定期購入ID
- shopify_last_order_date: Shopify側の定期購入の最後に注文した日付
- shopify_subscription_date: Shopify側の定期購入の開始した日付
```

### Orders
```
- shopify_order_id: Shopify側の注文ID
- shopify_fulfilled_at: Shopify側の配送完了日
```

