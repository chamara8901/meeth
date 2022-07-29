### billing_addresses(T)
請求先住所（要件としては存在するが実際は使用していない）
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|address1|varchar(255)|NO|NULL|||住所1（市区町村）|
|address2|varchar(255)|NO|NULL|||住所2（番地以外の住所）|
|address3|varchar(255)|YES|NULL|||住所3（アパート、部屋番号など）|
|company_name|varchar(255)|YES|NULL|||会社名|
|country|varchar(255)|NO|NULL|||国|
|family_name|varchar(255)|NO|NULL|||姓|
|first_name|varchar(255)|NO|NULL|||名|
|phone|varchar(255)|NO|NULL|||電話番号|
|prefecture|varchar(255)|NO|NULL|||県|
|zip_code|varchar(255)|NO|NULL|||郵便番号|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|