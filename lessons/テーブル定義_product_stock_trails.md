### product_stock_trails
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|product_stock_id|bigint|YES|NULL|MUL||商品ID|
|performer_type|varchar(255)|NO|NULL|MUL||固定値：AdminUser|
|performer_id|bigint|NO|0|MUL||実行者ID|
|before_stock|int|NO|0|||前の在庫数|
|after_stock|int|NO|0|||後の在庫数|
|reason|varchar(255)|YES|NULL|||使用しない|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|