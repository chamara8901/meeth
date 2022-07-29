### admin_users
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|name|varchar(255)|NO|NULL|||管理者名前|
|email|varchar(255)|NO|NULL|||管理者Eメール|
|password_digest|varchar(255)|NO|NULL|||パスワード|
|remember_token|varchar(255)|YES|NULL|||忘れパスワードトーケン|
|status|int|NO|0|||状態（無効、有効）|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|