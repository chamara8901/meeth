(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{327:function(_,v,t){"use strict";t.r(v);var d=t(13),r=Object(d.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h3",{attrs:{id:"product-details-m"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#product-details-m"}},[_._v("#")]),_._v(" product_details(M)")]),_._v(" "),v("p",[_._v("商品詳細")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("カラム名")]),_._v(" "),v("th",[_._v("データ型")]),_._v(" "),v("th",[_._v("NULL許容")]),_._v(" "),v("th",[_._v("デフォルト値")]),_._v(" "),v("th",[_._v("Key")]),_._v(" "),v("th",[_._v("属性")]),_._v(" "),v("th",[_._v("説明")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("id")]),_._v(" "),v("td",[_._v("bigint")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("PRI")]),_._v(" "),v("td",[_._v("auto_increment")]),_._v(" "),v("td",[_._v("id")])]),_._v(" "),v("tr",[v("td",[_._v("product_id")]),_._v(" "),v("td",[_._v("bigint")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("MUL")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("商品id")])]),_._v(" "),v("tr",[v("td",[_._v("jan_code")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("MUL")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("JANコード（バーコード）")])]),_._v(" "),v("tr",[v("td",[_._v("color_id")]),_._v(" "),v("td",[_._v("bigint")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("MUL")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("カラーid（不使用）")])]),_._v(" "),v("tr",[v("td",[_._v("selling_start_at")]),_._v(" "),v("td",[_._v("datetime")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("2020-01-01 0:00:00")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("販売開始時刻")])]),_._v(" "),v("tr",[v("td",[_._v("selling_end_at")]),_._v(" "),v("td",[_._v("datetime")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("9999-12-31 23:59:59")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("販売終了時刻")])]),_._v(" "),v("tr",[v("td",[_._v("fixed_price")]),_._v(" "),v("td",[_._v("int")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("定価")])]),_._v(" "),v("tr",[v("td",[_._v("status")]),_._v(" "),v("td",[_._v("tinyint")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("ステータスdraft: ドラフト(1),published: 公開中(2),closed: 非公開(3)（商品詳細を適用するにはステータスをpublishedにする必要があります）")])]),_._v(" "),v("tr",[v("td",[_._v("allocated_stock")]),_._v(" "),v("td",[_._v("int")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("注文確定の確保しておく個数")])]),_._v(" "),v("tr",[v("td",[_._v("ship_days")]),_._v(" "),v("td",[_._v("int")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("配送にかかる日数")])]),_._v(" "),v("tr",[v("td",[_._v("subscription")]),_._v(" "),v("td",[_._v("tinyint(1)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("定期商品として購入できるか否か")])]),_._v(" "),v("tr",[v("td",[_._v("created_at")]),_._v(" "),v("td",[_._v("datetime(6)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("レコード作成日時")])]),_._v(" "),v("tr",[v("td",[_._v("updated_at")]),_._v(" "),v("td",[_._v("datetime(6)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("レコード更新日時")])]),_._v(" "),v("tr",[v("td",[_._v("movie_url")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("商品の使い方動画のURL")])]),_._v(" "),v("tr",[v("td",[_._v("maximum_number_of_purchases")]),_._v(" "),v("td",[_._v("int")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("10")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("１回の注文で可能な最大購入数")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);