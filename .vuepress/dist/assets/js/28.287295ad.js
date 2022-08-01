(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{292:function(t,e,l){"use strict";l.r(e);var a=l(13),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"ソースコードの場所について"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ソースコードの場所について"}},[t._v("#")]),t._v(" ソースコードの場所について")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("lib/csv/shopify/\n  ∟ base_import.rb              (共通系の処理)\n  ∟ customer_import.rb          (Shopifyの顧客CSVを新Meethにimport)\n  ∟ order_import.rb    　　　　　 (Shopifyの注文CSVを新Meethにimport)\n  ∟ subscription_import.rb    　(Shopifyの定期購入CSVを新Meethにimport)\n  ∟ order_detail_bulk_update.rb (OrderDetailの一括更新用のツール) ※ ツールなのでディレクトリ移動予定\n  ∟ subscription_bulk_update.rb (Subscriptionの一括更新用のツール) ※ ツールなのでディレクトリ移動予定\n")])])]),e("ul",[e("li",[t._v("メインのcutomer_import、order_import、subscription_importは時間かかるが、shopifyのデータが予期しないものがくることがあるので、どこでエラーかわかるように1件づつ処理する")]),t._v(" "),e("li",[t._v("更新系は、一度データ入れば問題ないのでBulk利用でもOK(Rails6のupsert_allはバリデーション使えないので、activerecord-importを利用している)")]),t._v(" "),e("li",[t._v("Bulk使う場合、一部のenumが命名規則に違反しているので使えないので注意が必要")])]),t._v(" "),e("h2",{attrs:{id:"customer-csvのインポートについて"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customer-csvのインポートについて"}},[t._v("#")]),t._v(" Customer CSVのインポートについて")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bundle exec rake csv_import:shopify_customers[{CSVファイルパス}]\n")])])]),e("p",[t._v("内容:\n指定された顧客情報CSVファイルを読み込んで1件づつDBに保存する(対象： Customer, CustomerAddress)\n※ 1件づつにしているのはShopifyのデータがイレギュラーのが多いので、どこの行でエラーになったか把握するため")]),t._v(" "),e("h3",{attrs:{id:"登録する項目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登録する項目"}},[t._v("#")]),t._v(" 登録する項目")]),t._v(" "),e("h4",{attrs:{id:"customerテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customerテーブル"}},[t._v("#")]),t._v(" Customerテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("備考")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("password")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ランダムで作成したPW")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("テーブルが必須なので仮で入れる ※shopifyからの移行データはPWなしでもOK")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("email")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのemail項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("family_name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのlast_name項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVに存在しない場合は、空文字")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("first_name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのfirst_name項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVに存在しない場合は、空文字")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("birthday")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1999/01/01")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("gender")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("no_answer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("active")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("from_shopify")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("dm_agreed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのaccepts_marketing項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Yesの場合、true")])])])]),t._v(" "),e("h4",{attrs:{id:"customeraddressテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customeraddressテーブル"}},[t._v("#")]),t._v(" CustomerAddressテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("備考")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("customer_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CustomerテーブルID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("phone")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのphone項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("family_name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのlast_name項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVに存在しない場合は、空文字")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("first_name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのfirst_name項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVに存在しない場合は、空文字")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("company_name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのcompany項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("country")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのcountry_code項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("country_codeがない場合、CSVのcountry項目が入る")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("zip_code")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのzip項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("prefecture")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのprovince_code項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("province_codeがない場合、CSVのprovince項目が入る ※いいツールでも無いかぎりiso3166-2の世界対応はかなり工数かかるので、原則日本のみ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("address1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのcity項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVに存在しない場合は、空文字")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("address2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのaddress1項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVに存在しない場合は、空文字")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("address3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのaddress２項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVに存在しない場合は、空文字")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("is_default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])])])]),t._v(" "),e("h2",{attrs:{id:"subscription-csvのインポートについて"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscription-csvのインポートについて"}},[t._v("#")]),t._v(" Subscription CSVのインポートについて")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bundle exec rake csv_import:shopify_subscriptions[{CSVファイルパス}]\n")])])]),e("p",[t._v("内容:\n指定された定期購入のCSVファイルを読み込んで1件づつDBに保存する(対象： Subscription, SubscriptionDetail)")]),t._v(" "),e("p",[t._v("顧客情報との紐付け:\nCSVのcustomer_emailと 新Meethのcustomerテーブルのemailを紐付けて処理する")]),t._v(" "),e("h3",{attrs:{id:"登録する項目-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登録する項目-2"}},[t._v("#")]),t._v(" 登録する項目")]),t._v(" "),e("h4",{attrs:{id:"subscriptionテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscriptionテーブル"}},[t._v("#")]),t._v(" Subscriptionテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("備考")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("customer_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CustomerテーブルのID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのcustomer_emailと一致した、Customer情報")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのactive項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Yesの場合、"),e("code",[t._v("active")]),t._v(" それ以外、"),e("code",[t._v("reversal_ng")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("processing_status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのis_paused項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1の場合、"),e("code",[t._v("pending")]),t._v(" それ以外、"),e("code",[t._v("processing")]),t._v(" ※ 配送完了しているかここではわからないため")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("delivery_plan")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのlast_order_date項目の日にちから計算")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("正確ではないので、はorder import時に"),e("strong",[t._v("配送完了日を見て再設定")]),t._v("する")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("payment_method")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("credit_card(固定)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("BoldはStripeを推奨しているそうなので、credit_card固定にしています。https://commerce-media.info/blogs/ec/shopify-bold-01")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("customer_address_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CustomerAddressテーブルのID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("住所情報が複数ある場合は、最初のID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shopify_subscription_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのsubscription_id項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shopify_last_order_date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのlast_order_date項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shopify_subscription_date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのsubscription_date項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"subscriptiondetailテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscriptiondetailテーブル"}},[t._v("#")]),t._v(" SubscriptionDetailテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("備考")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("subscription_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SubscriptionテーブルのID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("product_detail_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのproducts項目を元にマッピングしたProductDetailテーブルID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("product_price_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのproducts項目を元にマッピングしたProductPriceテーブルID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("st_dummy")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("st_dummyこの意味は不明。値はこれしかないので")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("quantity")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("credit_card(固定)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("BoldはStripeを推奨しているそうなので、credit_card固定にしています。https://commerce-media.info/blogs/ec/shopify-bold-01")])])])]),t._v(" "),e("ul",[e("li",[t._v("商品情報の取得について\n"),e("ul",[e("li",[e("strong",[t._v("Shopifyの商品ID・名前と新Meethの商品IDと名前は一致しない")])]),t._v(" "),e("li",[e("strong",[t._v("そのため、Shopify商品名 -> プログラム内でその商品名とマッピングさせた新Meethの商品IDを返して処理させる")])])])])]),t._v(" "),e("h2",{attrs:{id:"order-csvのインポートについて"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-csvのインポートについて"}},[t._v("#")]),t._v(" Order CSVのインポートについて")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bundle exec rake csv_import:shopify_orders[{CSVフォルダパス}]\n")])])]),e("p",[t._v("内容:\n指定された注文のCSVファイルを読み込んで1件づつDBに保存する(対象： Order, Subscription, Customer, CustomerAddress, OrderAddress, BillingAddress, OrderDetail, Payment)")]),t._v(" "),e("p",[t._v("顧客情報との紐付け:\nCSVのemailと 新Meethのcustomerテーブルのemailを紐付けて処理する")]),t._v(" "),e("h3",{attrs:{id:"登録する項目-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登録する項目-3"}},[t._v("#")]),t._v(" 登録する項目")]),t._v(" "),e("h4",{attrs:{id:"customer-customeraddressテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customer-customeraddressテーブル"}},[t._v("#")]),t._v(" Customer, CustomerAddressテーブル")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[6] pry(main)> customer = Customer.new(\n[6] pry(main)*   password: "password",              \n[6] pry(main)*   email: "test111111@test.com",              \n[6] pry(main)*   family_name: "",              \n[6] pry(main)*   first_name: "",              \n[6] pry(main)*   birthday: "1999/01/01",              \n[6] pry(main)*   gender: :no_answer,              \n[6] pry(main)*   status: :active,              \n[6] pry(main)*   activated: false,              \n[6] pry(main)*   from_shopify: true,              \n[6] pry(main)*   dm_agreed: false              \n[6] pry(main)* )              \n   (16.9ms)  SET NAMES utf8mb4 COLLATE utf8mb4_bin,  @@SESSION.sql_mode = CONCAT(CONCAT(@@sql_mode, \',STRICT_ALL_TABLES\'), \',NO_AUTO_VALUE_ON_ZERO\'),  @@SESSION.sql_auto_is_null = 0, @@SESSION.wait_timeout = 2147483\n/usr/local/bundle/gems/activemodel-6.0.2.1/lib/active_model/type/integer.rb:13: warning: Using the last argument as keyword parameters is deprecated; maybe ** should be added to the call\n/usr/local/bundle/gems/activemodel-6.0.2.1/lib/active_model/type/value.rb:8: warning: The called method `initialize\' is defined here\n=> #<Customer:0x000055d368058e80\n\n id: nil,\n email: "test111111@test.com",\n password_digest: "$2a$12$q29H0aeSEPS.Z.lJStm7ve4p5KKqWPI9iR8asWi5k/nzTT7Fh9iDa",\n remember_token: nil,\n family_name: "",\n first_name: "",\n birthday: Fri, 01 Jan 1999,\n gender: "no_answer",\n dm_agreed: false,\n status: "active",\n password_reset_digest: nil,\n password_reset_issued_at: nil,\n created_at: nil,\n updated_at: nil,\n activation_digest: nil,\n activated: false,\n activation_issued_at: nil,\n mail_address_update_digest: nil,\n mail_address_update_issued_at: nil,\n temporary_email_address: nil,\n card_registered: false,\n from_shopify: true,\n pw_update_completed: nil,\n delivery_plan_reset_completed: nil,\n movement_digest: nil,\n movement_issued_at: nil>\n[7] pry(main)> customer&.save!(validate: false)            \n   (5.7ms)  BEGIN\n  Customer Create (137.2ms)  INSERT INTO `customers` (`id`, `email`, `password_digest`, `family_name`, `first_name`, `birthday`, `gender`, `status`, `created_at`, `updated_at`, `activation_digest`, `from_shopify`) VALUES (1342444182697938946, \'test111111@test.com\', \'$2a$12$q29H0aeSEPS.Z.lJStm7ve4p5KKqWPI9iR8asWi5k/nzTT7Fh9iDa\', \'\', \'\', \'1999-01-01\', 9, 1, \'2020-12-25 21:16:49.219181\', \'2020-12-25 21:16:49.219181\', \'4c4e3656c64582cfec5860346a2019d9e8dc9896a33481546854bae74f1aa4e4\', TRUE)\n  CustomerRegulation Load (27.1ms)  SELECT `customer_regulations`.* FROM `customer_regulations` WHERE `customer_regulations`.`customer_id` = 1342444182697938946\n   (11.5ms)  COMMIT\n=> true\n[8] pry(main)> \n')])])]),e("p",[t._v("・メールアドレスが既存のCustomerテーブルに存在しない場合、メールアドレスとパスワード以外は固定で入る\n=> この理由は本番でimportを実行した際、入らなかったデータが存在し、そのデータをがShopifyで会員にならずに注文したユーザーのため。")]),t._v(" "),e("h4",{attrs:{id:"orderテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#orderテーブル"}},[t._v("#")]),t._v(" Orderテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("備考")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("customer_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CustomerテーブルのID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("subscription_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SubscriptionテーブルのID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのTags項目に「recurring_order」が存在する場合且つ、Subscriptionテーブルに存在する場合")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("total_amount")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのsubtotal項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("fee")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("delivery_method")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ems or yamato")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのshipping_method項目にInternationalが存在する場合は、ems それ以外はyamato")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("desired_delivery_date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("nil")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("desired_delivery_time")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("nil")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("order_category")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("normal")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのfulfillment_status項目で判断")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("新Meethとstatusが異なるので、finished(fulfilled), processing(partial), canceled(restocked), returned(fulfilled 且つ CSVのfinancial_status項目がrefunded), pending(それ以外) ※かっこ内はCSVの値")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shipping_status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのfulfillment_status項目で判断")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("こちらは新Meeth似ているので、finished(fulfilled), preparing(partial), canceled(restocked), returned(fulfilled 且つ CSVのfinancial_status項目がrefunded), undispatched(それ以外) ※かっこ内はCSVの値")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shipping_at")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのfulfilled_at項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("email_status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("product_shipped")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shopify_order_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのid項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shopify_fulfilled_at")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのfulfilled_at項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("created_at")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのcreated_at項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ここは、ユーザーの注文詳細画面でここの値を入れているので、CSVの値を入れる")])])])]),t._v(" "),e("ul",[e("li",[t._v("subscription_idについて")]),t._v(" "),e("li",[t._v("定期購入データは、過去のデータも存在(例 2020-01に開始 -> 2020-04に終了、2020-08に開始の場合、2レコード)するため、 subscriptionテーブルの shopify_subscription_date以降のデータと紐付ける")])]),t._v(" "),e("h4",{attrs:{id:"orderdetailテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#orderdetailテーブル"}},[t._v("#")]),t._v(" OrderDetailテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("備考")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("order_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("OrderテーブルのID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("product_detail_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのlineitem_name項目を元にマッピングしたProductDetailテーブルID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("product_price_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのlineitem_name項目を元にマッピングしたProductPriceテーブルID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("billing_amount")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのlineitem_price項目 x CSVのlineitem_quantity項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのlineitem_fulfillment_status項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("finished(fulfilled)、pending（それ以外） リファレンス見ると "),e("code",[t._v("fulfilled")]),t._v(" か空白でくるみたい  https://help.shopify.com/ja/manual/migrating-to-shopify/transporter-app/csv-orders")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("tax_rate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのtax1_name項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Tax XX%と来るので、その値を入れる")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("quantity")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのlineitem_quantity項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("order_address_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("OrderAddressテーブルのID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("billing_address_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("BillingAddressテーブルのID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"orderaddressテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#orderaddressテーブル"}},[t._v("#")]),t._v(" OrderAddressテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("備考")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("address1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのshipping_city項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("address2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのshipping_address1項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("address3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのshipping_address2項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("country")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのshipping_country項目を元に算出した国")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("※ない場合は国コードそのまま入る")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shipping_cost")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのshipping項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("family_name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのshipping_name項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("姓名が一緒の項目に入っているので、半角スペースで分けた前半")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("first_name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのshipping_name項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("姓名が一緒の項目に入っているので、半角スペースで分けた後半")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("phone")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのshipping_phone項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("国際番号、記号など入ってくるため、バリデーションエラーにならないように加工して入れる")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("prefecture")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのshipping_province項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("iso3166-2のコードでくるので、全て対応は時間的に難しいので日本とアメリカのみ。それ以外はCSVのshipping_province項目が入る ※ ここはあった場合、ユーザーに直してもらうか、Update文で対応など簡単な方で対応")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("zip_code")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのshipping_zip項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ない場合は、0000000")])])])]),t._v(" "),e("h4",{attrs:{id:"billingaddressテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#billingaddressテーブル"}},[t._v("#")]),t._v(" BillingAddressテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("備考")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("address1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのbilling_city項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("address2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのbilling_address1項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("address3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのbilling_address2項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("country")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのbilling_country項目を元に算出した国")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("※ない場合は国コードそのまま入る")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("family_name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのbilling_name項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("姓名が一緒の項目に入っているので、半角スペースで分けた前半")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("first_name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのbilling_name項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("姓名が一緒の項目に入っているので、半角スペースで分けた後半")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("phone")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのbilling_phone項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("国際番号、記号など入ってくるため、バリデーションエラーにならないように加工して入れる")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("prefecture")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのbilling_province項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("iso3166-2のコードでくるので、全て対応は時間的に難しいので日本とアメリカのみ。それ以外はCSVのbilling_province項目が入る ※ ここはあった場合、ユーザーに直してもらうか、Update文で対応など簡単な方で対応")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("zip_code")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのbilling_zip項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ない場合は、0000000")])])])]),t._v(" "),e("h4",{attrs:{id:"paymentテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#paymentテーブル"}},[t._v("#")]),t._v(" Paymentテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("備考")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("customer_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("OrderテーブルのCustomerID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("order_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("OrderテーブルのID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのfinancial_status項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("shopifyのステータスとかなり異なる。ひとまず記載する通り入れる。auth(pending, authorized, partially_paid),capture(paid),returned(refunded),canceled(voided),auth(それ以外) ※かっこ内はCSVの値")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("payment_method")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのpayment_method項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("paypal(PayPal), cod(Cash on), bank_transfer(Bank), credit_card(それ以外)  ※かっこ内はCSVの値")])])])]),t._v(" "),e("h2",{attrs:{id:"追加のカラムについて"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#追加のカラムについて"}},[t._v("#")]),t._v(" 追加のカラムについて")]),t._v(" "),e("p",[t._v("shopifyのデータかどうか確認するため以下のカラムを追加している")]),t._v(" "),e("h3",{attrs:{id:"subscriptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscriptions"}},[t._v("#")]),t._v(" Subscriptions")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- shopify_subscription_id: Shopify側の定期購入ID\n- shopify_last_order_date: Shopify側の定期購入の最後に注文した日付\n- shopify_subscription_date: Shopify側の定期購入の開始した日付\n")])])]),e("h3",{attrs:{id:"orders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#orders"}},[t._v("#")]),t._v(" Orders")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- shopify_order_id: Shopify側の注文ID\n- shopify_fulfilled_at: Shopify側の配送完了日\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);