　1.shopify管理画面 > アプリ管理 > Bold Subscriptions v1 > 

　2.Bold Subscription > Tools > Export Data > Customers by Products から、

　　https://meethebeauty.myshopify.com/admin/apps/5a3cb5ac82a21b14f0e3fa026a88eb29/s/meethebeauty/reports

3. Status: Active Subscribers を選択

4. Select productで以下の3商品を選択

　・【定期購入プラン】モアリッチパック

　・【定期購入プラン】モアリッチエッセンシャルローション

　・モアリッチパック 定期購入プラン

5. Generate Report
6. ro_report_2021-01-31_products.csv

上記のようなレポートがダウンロードできる

7. ダウンロードしたファイルの
　【Last Order Date】と【Next Order Date】を見ると、いつスキップかわかります。
　スキップありの場合
　Last Order Date　2020-12-28	Next Order Date　2021-02-28の場合、1月がお休み
　スキップなしの場合
　Last Order Date　2020-12-28	Next Order Date　2021-01-28の場合、連続しているのでスキップではない
　上記がスキップユーザの検索方法になります。

8. shopifyから取得したcsvデータの【Next Order Date】 列から
　該当月以外をフィルタかける（2月時点だと3月4月が対象）、すると2月のスキップユーザーがわかります。
　（2月のスキップ390件）
9. 新meethの管理画面から、
　【顧客管理】> 【メールアドレス】で対象ユーザーのメールアドレスを絞込み検索する
10. 検索結果から対象ユーザーの【詳細】 > 詳細画面から【スキップ】押下すると

　対象定期購入ユーザーのステータスが変更できる。

　上記で新meethでの適用ができます。（手動での作業想定です）