### non_customers(T)
非会員（ニュースレター購読のみ）
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|email|varchar(255)|YES|NULL|||メールアドレス|
|status|int|unsigned|NO|10|||ニュースレター送信に関するステータスagreed: 送信可(1),disagreed:  送信不可(2)|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|