### [orders(T)](https://docs.google.com/spreadsheets/d/1lUmvenkr5ejjbUE94PmhqNayrkiqSJutftjH3E-JnaU/edit#gid=0&range=170:170)
注文
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|customer_id|bigint|NO|NULL|MUL||顧客id|
|subscription_id|bigint|YES|NULL|MUL||（定期注文の場合）紐付ける定期レコードのid|
|total_amount|int|NO|NULL|||合計金額|
|fee|int|NO|NULL|||配送料|
|delivery_method|int unsigned|NO|NULL|||配送方法<br>yamato: ヤマト（１）<br>ems: EMS（２）|
|desired_delivery_date|date|YES|NULL|||配送日指定（機能としては存在しません）|
|desired_delivery_time|int|YES|NULL|||配送時間指定（機能としては存在しません）|
|tracking_number|varchar(255)|YES|NULL|||追跡番号（機能としては存在しません）|
|order_category|int unsigned|NO|NULL|||注文カテゴリー<br>normal: 通常(1)<br>reservation: 予約(2)（予約が使われることはありません）|
|status|int unsigned|NO|NULL|||注文ステータス<br>processing: 処理中(1)<br>pending: 保留中(2)<br>finished: 完了(3)<br>canceled: キャンセル(4)<br>returned: 返品(5)|
|shipping_status|int unsigned|NO|NULL|||配送ステータス<br>undispatched: 未発送(1)<br>preparing: 発送処理中(2)<br>finished: 発送完了(3)<br>canceled: キャンセル(4)<br>returned: 返品(5)|
|shipping_at|date|YES|NULL|||商品発送日|
|email_status|int unsigned|NO|NULL|||メールステータス<br>undispatched: 未発送(1)<br>order_accepted: 注文受付(2)<br>transfer_confirmed: 振込確認(3)<br>product_shipped: 商品発送(4)|
|note|text|YES|NULL|||備考|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|
|parent_order_id|bigint|YES|NULL|||複数の注文レコードをまとめる場合の親となる注文レコード|
|gift_bag|tinyint(1)|YES|NULL|||（単品注文時）ギフトバッグをつけるか否か|
|shopify_order_id|bigint|YES|NULL|||
|shopify_fulfilled_at|datetime|YES|NULL|||
|gmo_order_id|string(255)|YES|NULL|||GMOの注文ID GMOからコールバックが来るときに、Meethのどの注文と紐ずくかを解るためです。|

- 関連：[倉庫連携CSVの仕様について](倉庫との出荷連携仕様)