### customer_contacts
使用されていないテーブルです
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment||
|customer_id|bigint|YES|NULL|MUL|||
|name|varchar(255)|NO|NULL||||
|phone|varchar(255)|NO|NULL||||
|email|varchar(255)|NO|NULL||||
|contact_value|text|NO|NULL||||
|status|int|NO|NULL||||
|completed_at|datetime|YES|NULL||||
|created_at|datetime(6)|NO|NULL||||
|updated_at|datetime(6)|NO|NULL||||