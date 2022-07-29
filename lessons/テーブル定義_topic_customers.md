### [topic_customers(T)](https://docs.google.com/spreadsheets/d/1lUmvenkr5ejjbUE94PmhqNayrkiqSJutftjH3E-JnaU/edit#gid=0&range=38:38)

どのお知らせをどのユーザーが開いたかを管理するテーブル
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|topic_id|bigint|NO|NULL|MUL||読まれたお知らせのid|
|customer_id|bigint|NO|NULL|MUL||上記お知らせを読んだ（クリックした）顧客のid|
|created_at|datetime(6)|NO|NULL||レコード作成時刻|
|updated_at|datetime(6)|NO|NULL||レコード更新時刻|