(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{301:function(n,s,t){"use strict";t.r(s);var e=t(13),a=Object(e.a)({},(function(){var n=this._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("・CSV全読みして、{shopify_display_id => shopify_order_id } のハッシュ作成\n・CSV1行ずつ処理\n　・メールアドレスの存在チェック\n　・注文のトータル金額がCSVに存在するか\n　　・ある場合\n　　　・注文データ新規作成\n　　　・定期購入の注文かどうか\n　　　　・定期購入IDと注文データ紐付け\n　　　　・定期購入テーブルのprocessing_statusを更新 ※ 配送完了の場合\n　　　・注文住所、配送先住所、注文詳細、Paymentテーブルにレコード新規作成\n　　・ない場合\n　　　既に登録されているshopify_order_idに紐づく注文データの注文詳細データを追加\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);