### active_storage_blobs(M)
ActiveStorage使用時に自動的に設定されるテーブル
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|key|varchar(255)|NO|NULL|UNI|||
|filename|varchar(255)|NO|NULL||||
|content_type|varchar(255)|YES|NULL||||
|metadata|text|YES|NULL||||
|byte_size|bigint|NO|NULL||||
|checksum|varchar(255)|NO|NULL||||
|created_at|datetime|NO|NULL||||