### topics(T)
お知らせ
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|topics_category|int|unsigned|NO|NULL|||for_all: 全ユーザーへ配信(0),for_individual: 個人へ配信(1)|
|title|varchar(255)|NO|NULL|||お知らせタイトル|
|note|text|YES|NULL|||お知らせ内容|
|published_at|datetime|NO|NULL|||配信日時|
|closed_at|datetime|YES|NULL|||配信終了日時|
|status|int|NO|NULL|||配信ステータスclosed: 配信終了(0),open: 配信中(1)|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|
|display_option|int|NO|NULL|||表示オプションhidden: お知らせ枠には表示しない(0),top_one: お知らせ枠1に表示(1),top_two: お知らせ枠2に表示(2)|