### subscription_details(T)
定期注文詳細情報
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|subscription_id|bigint|NO|NULL|MUL||定期注文の基本情報id|
|product_detail_id|bigint|NO|NULL|MUL||商品詳細id|
|product_price_id|bigint|NO|NULL|MUL||商品価格id|
|status|int|unsigned|NO|NULL|||ステータスst_dummy: ダミー(0)（使用されていません）|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|
|quantity|int|NO|NULL|||注文個数|