### cart_details(T)
カート詳細
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|cart_id|bigint|NO|NULL|MUL||カートid|
|product_detail_id|bigint|NO|NULL|MUL||商品詳細id|
|added_price|int|NO|NULL|||商品価格|
|sale_category|int|unsigned|NO|NULL|||セールカテゴリーnormal: 通常(0),regular: 定期(1),friend: 友達(2)（friendは使いません）|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|
|quantity|int|NO|NULL|||注文数|