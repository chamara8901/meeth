### subscriptions(T)
定期注文基本情報
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|customer_id|bigint|YES|NULL|MUL||顧客id|
|status|int|unsigned|NO|NULL||定期注文として有効かのステータスactive: 有効(1),reversal_ng: 洗替NG(2),recurring_ng: 継続課金NG(3),first_month:初回スキップ(4)|
|processing_status|int|unsigned|NO|NULL|プロセスステータスprocessing: 処理中(1),prepare_for_next: 次回準備中(2),pending: 一時停止(3),finished: 終了(4)||
|delivery_plan|int|unsigned|NO|NULL|毎月のお届け日設定around_5: 5日前後(5),around_10: 10日前後(10),around_15:15日前後(15),around_20: 20日前後(20),around_25: 25日前後(25)||
|payment_method|int|unsigned|NO|NULL|支払い方法credit_card: クレジットカード(1),paypal: PayPal(2),bank_transfer: 銀行振込(3),cod: 代金引換(4)（実際はcredit_cardのみです）||
|created_at|datetime(6)|NO|NULL|レコード作成日時||
|updated_at|datetime(6)|NO|NULL|レコード更新日時||
|parent_subscription_id|bigint|YES|NULL|複数の定期レコードをまとめる場合、親となる定期レコードのid||
|customer_address_id|bigint|NO|NULL|お届け先住所id||
|next_delivery_plan|int|YES|NULL|||次回お届け日が変更された場合、その情報を次回お届けの処理まで保持しておくようのカラム||
|shopify_subscription_id|bigint|YES|NULL|||||
|shopify_last_order_date|date|YES|NULL|||||