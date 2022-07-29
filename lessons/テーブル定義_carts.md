### carts(T)
カート
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|session_id|bigint|NO|NULL|||カートに紐けるユーザーid（ログイン時はcustomer.id、非ログイン時は-1）|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|