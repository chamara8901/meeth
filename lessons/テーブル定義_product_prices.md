### product_prices(M)
商品価格
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|product_detail_id|bigint|YES|NULL|MUL||商品詳細id|
|selling_price|int|NO|0|||販売価格（税抜き）|
|start_at|datetime|NO|2020-01-01 0:00:00|||適用開始日時|
|sale_category|tinyint|NO|0|||販売カテゴリーnormal: 通常(1),subscription: 定期(2),friend: 友達(3)（friendが使われることはありません）|
|performer_type|varchar(255)|NO|NULL|MUL|||
|performer_id|bigint|NO|NULL|MUL|||
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|