### [customer_addresses(T)](https://docs.google.com/spreadsheets/d/1lUmvenkr5ejjbUE94PmhqNayrkiqSJutftjH3E-JnaU/edit#gid=0&range=93:93)
顧客住所
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|customer_id|bigint|NO|NULL|MUL||顧客id|
|phone|varchar(255)|NO|NULL||電話番号|
|family_name|varchar(255)|NO|NULL|||お届け先の方の姓|
|first_name|varchar(255)|NO|NULL|||お届け先の方の名|
|company_name|varchar(255)|YES|NULL|||会社名|
|country|varchar(255)|NO|NULL|||国|
|zip_code|varchar(255)|NO|NULL|||郵便番号|
|prefecture|varchar(255)|NO|NULL|||県|
|address1|varchar(255)|NO|NULL|||住所1（市区町村）|
|address2|varchar(255)|NO|NULL|||住所2（番地以外の住所）|
|address3|varchar(255)|YES|NULL|||住所3（アパート、部屋番号など）|
|is_default|tinyint|NO|0|||not_default: 規定の住所ではない(0),default: 規定の住所(1)|
|created_at|datetime(6)|NO|NULL|||レコード生成時刻|
|updated_at|datetime(6)|NO|NULL|||レコード更新時刻|