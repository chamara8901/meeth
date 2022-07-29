### [payments(T)](https://docs.google.com/spreadsheets/d/1lUmvenkr5ejjbUE94PmhqNayrkiqSJutftjH3E-JnaU/edit#gid=0&range=133:133)
注文の支払い方法、また支払いの状態
|カラム名|データ型|NULL許容|デフォルト値|Key|属性|説明|
|----|----|----|----|----|----|----|
|id|bigint|NO|NULL|PRI|auto_increment|id|
|customer_id|bigint|NO|NULL|MUL||顧客id|
|order_id|bigint|NO|NULL|MUL||注文id|
|status|int unsigned|NO|NULL|||支払いステータス<br>auth: 仮売上(1)<br>capture: 実売上(2)<br>waiting_transfer: 振込待ち(3)<br>expired: 期限切れ(4)<br>cod_denied: 代引拒否(5)<br>returned: 返金(6)<br>canceled: キャンセル(7)|
|payment_method|int unsigned|NO|NULL|||支払い方法<br>credit_card: クレジットカード(1)<br>paypal: PayPal(2)<br>bank_transfer: 銀行振込(3)<br>cod: 代金引換(4)<br>cvs: コンビニ(5)|
|payment_option|text|YES|NULL|||使用していません|
|created_at|datetime(6)|NO|NULL|||レコード作成日時|
|updated_at|datetime(6)|NO|NULL|||レコード更新日時|