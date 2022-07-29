### active_storage_attachments(M)
ActiveStorage使用時に自動的に設定されるテーブル
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|name|varchar(255)|NO|NULL||||
|record_type|varchar(255)|NO|NULL|MUL|||
|record_id|bigint|NO|NULL||||
|blob_id|bigint|NO|NULL|MUL|||
|created_at|datetime|NO|NULL||||