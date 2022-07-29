### products(M)
商品
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|name|varchar(255)|NO|NULL|MUL||商品名|
|brand_id|bigint|YES|NULL|MUL||ブランドid（不使用）|
|category_id|bigint|YES|NULL|MUL||カテゴリーid（不使用）|
|delivery_terms|varchar(255)|YES|NULL|||配送条件|
|description_title|varchar(255)|YES|NULL|||商品説明タイトル|
|description|text|YES|NULL|||商品説明本文|
|caution|text|YES|NULL|||ご注意|
|effect|text|YES|NULL|||効果|
|capacity|varchar(255)|YES|NULL|||容量|
|how_to|text|YES|NULL|||使用方法|
|ingredient|text|YES|NULL|||成分|
|status|tinyint|NO|0|||ステータスdraft: 下書き(0),published: 公開中(1),closed: 公開終了(2)（サイトに表示する場合はステータスがpublishedである必要があります)|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|
|campaign|tinyint(1)|YES|0|||キャンペーン商品であるか否か|
|display_order|int|YES|NULL|||通常商品表示順番|
|campaign_display_order|int|YES|NULL|||キャンペーン商品表示順番|