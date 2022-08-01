(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{325:function(_,v,t){"use strict";t.r(v);var d=t(13),r=Object(d.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h3",{attrs:{id:"orders-t"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#orders-t"}},[_._v("#")]),_._v(" "),v("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1lUmvenkr5ejjbUE94PmhqNayrkiqSJutftjH3E-JnaU/edit#gid=0&range=170:170",target:"_blank",rel:"noopener noreferrer"}},[_._v("orders(T)"),v("OutboundLink")],1)]),_._v(" "),v("p",[_._v("注文")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("カラム名")]),_._v(" "),v("th",[_._v("データ型")]),_._v(" "),v("th",[_._v("NULL許容")]),_._v(" "),v("th",[_._v("デフォルト値")]),_._v(" "),v("th",[_._v("Key")]),_._v(" "),v("th",[_._v("属性")]),_._v(" "),v("th",[_._v("説明")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("id")]),_._v(" "),v("td",[_._v("bigint")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("PRI")]),_._v(" "),v("td",[_._v("auto_increment")]),_._v(" "),v("td",[_._v("id")])]),_._v(" "),v("tr",[v("td",[_._v("customer_id")]),_._v(" "),v("td",[_._v("bigint")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("MUL")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("顧客id")])]),_._v(" "),v("tr",[v("td",[_._v("subscription_id")]),_._v(" "),v("td",[_._v("bigint")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("MUL")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("（定期注文の場合）紐付ける定期レコードのid")])]),_._v(" "),v("tr",[v("td",[_._v("total_amount")]),_._v(" "),v("td",[_._v("int")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("合計金額")])]),_._v(" "),v("tr",[v("td",[_._v("fee")]),_._v(" "),v("td",[_._v("int")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("配送料")])]),_._v(" "),v("tr",[v("td",[_._v("delivery_method")]),_._v(" "),v("td",[_._v("int unsigned")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("配送方法"),v("br"),_._v("yamato: ヤマト（１）"),v("br"),_._v("ems: EMS（２）")])]),_._v(" "),v("tr",[v("td",[_._v("desired_delivery_date")]),_._v(" "),v("td",[_._v("date")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("配送日指定（機能としては存在しません）")])]),_._v(" "),v("tr",[v("td",[_._v("desired_delivery_time")]),_._v(" "),v("td",[_._v("int")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("配送時間指定（機能としては存在しません）")])]),_._v(" "),v("tr",[v("td",[_._v("tracking_number")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("追跡番号（機能としては存在しません）")])]),_._v(" "),v("tr",[v("td",[_._v("order_category")]),_._v(" "),v("td",[_._v("int unsigned")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("注文カテゴリー"),v("br"),_._v("normal: 通常(1)"),v("br"),_._v("reservation: 予約(2)（予約が使われることはありません）")])]),_._v(" "),v("tr",[v("td",[_._v("status")]),_._v(" "),v("td",[_._v("int unsigned")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("注文ステータス"),v("br"),_._v("processing: 処理中(1)"),v("br"),_._v("pending: 保留中(2)"),v("br"),_._v("finished: 完了(3)"),v("br"),_._v("canceled: キャンセル(4)"),v("br"),_._v("returned: 返品(5)")])]),_._v(" "),v("tr",[v("td",[_._v("shipping_status")]),_._v(" "),v("td",[_._v("int unsigned")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("配送ステータス"),v("br"),_._v("undispatched: 未発送(1)"),v("br"),_._v("preparing: 発送処理中(2)"),v("br"),_._v("finished: 発送完了(3)"),v("br"),_._v("canceled: キャンセル(4)"),v("br"),_._v("returned: 返品(5)")])]),_._v(" "),v("tr",[v("td",[_._v("shipping_at")]),_._v(" "),v("td",[_._v("date")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("商品発送日")])]),_._v(" "),v("tr",[v("td",[_._v("email_status")]),_._v(" "),v("td",[_._v("int unsigned")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("メールステータス"),v("br"),_._v("undispatched: 未発送(1)"),v("br"),_._v("order_accepted: 注文受付(2)"),v("br"),_._v("transfer_confirmed: 振込確認(3)"),v("br"),_._v("product_shipped: 商品発送(4)")])]),_._v(" "),v("tr",[v("td",[_._v("note")]),_._v(" "),v("td",[_._v("text")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("備考")])]),_._v(" "),v("tr",[v("td",[_._v("created_at")]),_._v(" "),v("td",[_._v("datetime(6)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("レコード作成日時")])]),_._v(" "),v("tr",[v("td",[_._v("updated_at")]),_._v(" "),v("td",[_._v("datetime(6)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("レコード更新日時")])]),_._v(" "),v("tr",[v("td",[_._v("parent_order_id")]),_._v(" "),v("td",[_._v("bigint")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("複数の注文レコードをまとめる場合の親となる注文レコード")])]),_._v(" "),v("tr",[v("td",[_._v("gift_bag")]),_._v(" "),v("td",[_._v("tinyint(1)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("（単品注文時）ギフトバッグをつけるか否か")])]),_._v(" "),v("tr",[v("td",[_._v("shopify_order_id")]),_._v(" "),v("td",[_._v("bigint")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("shopify_fulfilled_at")]),_._v(" "),v("td",[_._v("datetime")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("gmo_order_id")]),_._v(" "),v("td",[_._v("string(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("GMOの注文ID GMOからコールバックが来るときに、Meethのどの注文と紐ずくかを解るためです。")])])])]),_._v(" "),v("ul",[v("li",[_._v("関連："),v("a",{attrs:{href:"%E5%80%89%E5%BA%AB%E3%81%A8%E3%81%AE%E5%87%BA%E8%8D%B7%E9%80%A3%E6%90%BA%E4%BB%95%E6%A7%98"}},[_._v("倉庫連携CSVの仕様について")])])])])}),[],!1,null,null,null);v.default=r.exports}}]);