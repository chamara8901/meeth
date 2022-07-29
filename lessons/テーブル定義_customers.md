### [customers(T)](https://docs.google.com/spreadsheets/d/1lUmvenkr5ejjbUE94PmhqNayrkiqSJutftjH3E-JnaU/edit#gid=0&range=2:2)
顧客情報

|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|email|varchar(255)|YES|NULL|メールアドレス|
|password_digest|varchar(255)|YES|NULL|||暗号化されたパスワード文字列|
|remember_token|varchar(255)|YES|NULL|||暗号化されたセッション管理文字列|
|family_name|varchar(255)|YES|NULL||姓|
|first_name|varchar(255)|YES|NULL|||名|
|birthday|date|YES|NULL|||誕生日|
|gender|int|unsigned|NO|90|||性別:female: 女性(1),male: 男性(2),other: その他(3),no_answer: 無回答(9)|
|dm_agreed|tinyint(1)|NO|0|MUL|DM送信の可否|
|status|int|unsigned|NO|10|MUL||※退会ステータス:active: 退会していない(1),withdraw: 退会している(2)|
|password_reset_digest|varchar(255)|YES|NULL|MUL|暗号化されたパスワードリセット時の認証用文字列|
|password_reset_issued_at|datetime|YES|NULL|||パスワードリセット用メール送信が行われた時刻|
|created_at|datetime(6)|NO|NULL|||レコード生成時刻|
|updated_at|datetime(6)|NO|NULL|||レコード更新時刻|
|activation_digest|varchar(255)|YES|NULL|||暗号化されたアカウント有効化の認証用文字列|
|activated|tinyint(1)|YES|0|||アカウントが有効化されているか否か|
|activation_issued_at|datetime|YES|NULL|||アカウント有効化（アカウント作成）用メールが送信された時刻|
|mail_address_update_digest|varchar(255)|YES|NULL|||暗号化されたメールアドレス変更時の認証用文字列|
|mail_address_update_issued_at|datetime|YES|NULL|||メールアドレス変更用メールが送信された時刻|
|temporary_email_address|varchar(255)|YES|NULL|||メールアドレス変更処理を行う際、実際に変更されるまでの間、一時的に変更したいアドレスを保持しておく用のカラム|
|card_registered|tinyint(1)|NO|0||||クレジットカード情報が登録されているか否か|
|from_shopify|tinyint(1)|NO|0|||旧Shopifyサイト会員であるか否か|
|pw_update_completed|tinyint(1)|YES|NULL|||旧サイト会員が新サイトへ移行時に、パスワード更新が完了しているか否か|
|delivery_plan_reset_completed|tinyint(1)|YES|NULL|||旧サイト会員が新サイトへ移行時に、定期お届け日設定が完了しているか否か|
|movement_digest|varchar(255)|YES|NULL|||未使用|
|movement_issued_at|datetime|YES|NULL|||未使用|

※退会ステータス：退会機能自体はありません。引き継ぎ時に既に存在していたカラムです