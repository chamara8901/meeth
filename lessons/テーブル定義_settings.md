### settings
マスターデータの設定(現在、キャンペーンタイトルの設定のため、しか使われていない。)
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|key|varchar(255)|YES|NULL|||キー|
|value|varchar(255)|YES|NULL|||値|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|
|category|varchar(255)|YES|NULL|||マスタデータのカテゴリー|
|name|varchar(255)|YES|NULL|||マスタデータの名前|