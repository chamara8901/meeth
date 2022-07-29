### order_cancels
キャンセル
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|order_id|bigint|NO|NULL|MUL||注文ID|
|reason|int|unsigned|NO|NULL|||キャンセル理由|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|