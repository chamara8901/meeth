(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{331:function(_,v,t){"use strict";t.r(v);var d=t(13),r=Object(d.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h3",{attrs:{id:"products-m"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#products-m"}},[_._v("#")]),_._v(" products(M)")]),_._v(" "),v("p",[_._v("商品")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("カラム名")]),_._v(" "),v("th",[_._v("データ型")]),_._v(" "),v("th",[_._v("NULL許容")]),_._v(" "),v("th",[_._v("デフォルト値")]),_._v(" "),v("th",[_._v("Key")]),_._v(" "),v("th",[_._v("属性")]),_._v(" "),v("th",[_._v("説明")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("id")]),_._v(" "),v("td",[_._v("bigint")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("PRI")]),_._v(" "),v("td",[_._v("auto_increment")]),_._v(" "),v("td",[_._v("id")])]),_._v(" "),v("tr",[v("td",[_._v("name")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("MUL")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("商品名")])]),_._v(" "),v("tr",[v("td",[_._v("brand_id")]),_._v(" "),v("td",[_._v("bigint")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("MUL")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("ブランドid（不使用）")])]),_._v(" "),v("tr",[v("td",[_._v("category_id")]),_._v(" "),v("td",[_._v("bigint")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("MUL")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("カテゴリーid（不使用）")])]),_._v(" "),v("tr",[v("td",[_._v("delivery_terms")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("配送条件")])]),_._v(" "),v("tr",[v("td",[_._v("description_title")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("商品説明タイトル")])]),_._v(" "),v("tr",[v("td",[_._v("description")]),_._v(" "),v("td",[_._v("text")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("商品説明本文")])]),_._v(" "),v("tr",[v("td",[_._v("caution")]),_._v(" "),v("td",[_._v("text")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("ご注意")])]),_._v(" "),v("tr",[v("td",[_._v("effect")]),_._v(" "),v("td",[_._v("text")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("効果")])]),_._v(" "),v("tr",[v("td",[_._v("capacity")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("容量")])]),_._v(" "),v("tr",[v("td",[_._v("how_to")]),_._v(" "),v("td",[_._v("text")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("使用方法")])]),_._v(" "),v("tr",[v("td",[_._v("ingredient")]),_._v(" "),v("td",[_._v("text")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("成分")])]),_._v(" "),v("tr",[v("td",[_._v("status")]),_._v(" "),v("td",[_._v("tinyint")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("ステータスdraft: 下書き(0),published: 公開中(1),closed: 公開終了(2)（サイトに表示する場合はステータスがpublishedである必要があります)")])]),_._v(" "),v("tr",[v("td",[_._v("created_at")]),_._v(" "),v("td",[_._v("datetime(6)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("レコード作成日時")])]),_._v(" "),v("tr",[v("td",[_._v("updated_at")]),_._v(" "),v("td",[_._v("datetime(6)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("レコード更新日時")])]),_._v(" "),v("tr",[v("td",[_._v("campaign")]),_._v(" "),v("td",[_._v("tinyint(1)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("キャンペーン商品であるか否か")])]),_._v(" "),v("tr",[v("td",[_._v("display_order")]),_._v(" "),v("td",[_._v("int")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("通常商品表示順番")])]),_._v(" "),v("tr",[v("td",[_._v("campaign_display_order")]),_._v(" "),v("td",[_._v("int")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("キャンペーン商品表示順番")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);