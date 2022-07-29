### product_details(M)
商品詳細
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|product_id|bigint|YES|NULL|MUL||商品id|
|jan_code|varchar(255)|YES|NULL|MUL||JANコード（バーコード）|
|color_id|bigint|YES|NULL|MUL||カラーid（不使用）|
|selling_start_at|datetime|NO|2020-01-01 0:00:00|||販売開始時刻|
|selling_end_at|datetime|NO|9999-12-31 23:59:59|||販売終了時刻|
|fixed_price|int|NO|NULL|||定価|
|status|tinyint|NO|0|||ステータスdraft: ドラフト(1),published: 公開中(2),closed: 非公開(3)（商品詳細を適用するにはステータスをpublishedにする必要があります）|
|allocated_stock|int|NO|0|||注文確定の確保しておく個数|
|ship_days|int|NO|1|||配送にかかる日数|
|subscription|tinyint(1)|NO|0|||定期商品として購入できるか否か|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|
|movie_url|varchar(255)|YES|NULL|||商品の使い方動画のURL|
|maximum_number_of_purchases|int|YES|10|||１回の注文で可能な最大購入数|