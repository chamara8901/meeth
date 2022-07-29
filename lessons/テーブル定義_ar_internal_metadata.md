### ar_internal_metadata
DBの不用意な削除を防止するための機能に用いられる
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|key|varchar(255)|NO|NULL|PRI||environment|
|value|varchar(255)|YES|NULL|||環境名(development, production)|
|created_at|datetime(6)|NO|NULL|||作成日時|
|updated_at|datetime(6)|NO|NULL|||更新日時|