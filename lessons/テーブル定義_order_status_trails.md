### order_status_trails
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|order_id|bigint|NO|NULL|MUL||注文ID|
|performer_type|varchar(255)|NO|NULL|MUL||固定値：performer_type|
|performer_id|bigint|NO|NULL|MUL||実行者ID|
|before_status|int|NO|NULL|||前支払状態|
|after_status|int|NO|NULL|||現支払い状態|
|note|varchar(255)|YES|NULL|||備考|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|