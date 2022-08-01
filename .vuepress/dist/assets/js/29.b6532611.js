(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{293:function(t,e,a){"use strict";a.r(e);var l=a(13),i=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"定期購入バッチ-make-order-from-subscription"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定期購入バッチ-make-order-from-subscription"}},[t._v("#")]),t._v(" 定期購入バッチ (make_order_from_subscription)")]),t._v(" "),e("ol",[e("li",[t._v("Subscriptionsテーブルから以下の条件の定期購入データを対象に処理する")])]),t._v(" "),e("h4",{attrs:{id:"subscriptionテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscriptionテーブル"}},[t._v("#")]),t._v(" Subscriptionテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("説明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("active")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("有効")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("processing_status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("prepare_for_next")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("次回準備中")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("delivery_plan")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("実行日 or 指定した日付で算出された配送プラン")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h6",{attrs:{id:"delivery-planについて"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delivery-planについて"}},[t._v("#")]),t._v(" delivery_planについて")]),t._v(" "),e("p",[t._v("以下のルールで配送プランを決定する")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}}),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("実行日(or対象日)")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("バッチ実行日")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("5日前後")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("around_5")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1日 〜 4日, 25日 〜 31日")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2日の22:00")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("10日前後")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("around_10")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("5日 〜 9日")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("7日の22:00")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("15日前後")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("around_15")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10日 〜 14日")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("12日の22:00")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("20日前後")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("around_20")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("15日 〜 19日")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("17日の22:00")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("25日前後")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("around_25")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("20日 〜 24日")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("22日の22:00")])])])]),t._v(" "),e("p",[t._v("※参考：バッチ実行日は"),e("a",{attrs:{href:"https://github.com/grrowjp/Meeth/wiki/%E3%83%90%E3%83%83%E3%83%81%E9%96%A2%E9%80%A3#%E5%AE%9A%E6%9C%9F%E8%B3%BC%E5%85%A5%E3%81%AE%E5%87%A6%E7%90%862%E6%97%A57%E6%97%A512%E6%97%A517%E6%97%A522%E6%97%A5%E3%81%AE2200",target:"_blank",rel:"noopener noreferrer"}},[t._v("こちら"),e("OutboundLink")],1),t._v("を参照")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("「1.の定期購入データ」の中で今月の注文データが存在するか確認")])]),t._v(" "),e("p",[t._v("Ordersテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("説明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shipping_at")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("配送日時")])])])]),t._v(" "),e("p",[t._v("上記のカラムを "),e("code",[t._v("1日 〜 末日")]),t._v(" (当月)までの注文データが存在しないか確認する\n=> 存在する場合は、"),e("strong",[t._v("注文データを作成しない")])]),t._v(" "),e("h2",{attrs:{id:"shopify-csv-importバッチ-shopify-subscriptions-shopify-orders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shopify-csv-importバッチ-shopify-subscriptions-shopify-orders"}},[t._v("#")]),t._v(" Shopify CSV importバッチ (shopify_subscriptions, shopify_orders)")]),t._v(" "),e("p",[t._v("定期購入バッチで利用するカラムには以下のデータが入ります")]),t._v(" "),e("h4",{attrs:{id:"shopify-subscriptionsバッチ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shopify-subscriptionsバッチ"}},[t._v("#")]),t._v(" shopify_subscriptionsバッチ")]),t._v(" "),e("h5",{attrs:{id:"subscriptionsテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscriptionsテーブル"}},[t._v("#")]),t._v(" Subscriptionsテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("備考")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのactiveの項目がyesの場合、active")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("processing_status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのis_pausedの項目が1の場合、pending")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("本来配送完了しているかで "),e("code",[t._v("prepare_for_next")]),t._v(" にするが、order csvを参照しないといけないので、pending以外は "),e("code",[t._v("processing")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("delivery_plan")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのlast_order_date項目の日にちから計算")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("正確ではないので、はorder import時に"),e("strong",[t._v("配送完了日を見て再設定")]),t._v("する")])])])]),t._v(" "),e("h4",{attrs:{id:"shopify-ordersバッチ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shopify-ordersバッチ"}},[t._v("#")]),t._v(" shopify_ordersバッチ")]),t._v(" "),e("h5",{attrs:{id:"subscriptionsテーブル-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscriptionsテーブル-2"}},[t._v("#")]),t._v(" Subscriptionsテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("条件")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("processing_status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("prepare_for_next")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("fulfilled_at(配送完了日)が今月")]),t._v("のデータの時")])])])]),t._v(" "),e("h5",{attrs:{id:"ordersテーブル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ordersテーブル"}},[t._v("#")]),t._v(" Ordersテーブル")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("カラム名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("備考")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shipping_at")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CSVのfulfilled_at項目")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("日付型ではない場合nil")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);