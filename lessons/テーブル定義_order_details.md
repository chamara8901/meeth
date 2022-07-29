### [order_details(T)](https://docs.google.com/spreadsheets/d/1lUmvenkr5ejjbUE94PmhqNayrkiqSJutftjH3E-JnaU/edit#gid=0&range=201:201)
注文詳細
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|order_id|bigint|NO|NULL|MUL||注文id|
|product_detail_id|bigint|NO|NULL|MUL||商品詳細id|
|product_price_id|bigint|NO|NULL|MUL||商品価格id|
|billing_amount|int|NO|NULL|||商品金額合計(product_price * quantity)|
|status|int unsigned|NO|NULL|||ステータス<br>processing: 処理中(0)<br>pending: 保留中(1)<br>finished: 完了(2)<br>canceled: キャンセル(3)<br>returned: 返品(4)|
|tax_rate|decimal(3,2)|NO|NULL|||税率|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|
|quantity|int|NO|NULL|||注文個数|
|order_address_id|bigint|YES|NULL|MUL||お届け先住所id|
|billing_address_id|bigint|YES|NULL|MUL||請求先住所id|