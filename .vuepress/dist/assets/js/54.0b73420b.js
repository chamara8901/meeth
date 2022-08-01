(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{318:function(_,v,t){"use strict";t.r(v);var d=t(13),e=Object(d.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h3",{attrs:{id:"customers-t"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#customers-t"}},[_._v("#")]),_._v(" "),v("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1lUmvenkr5ejjbUE94PmhqNayrkiqSJutftjH3E-JnaU/edit#gid=0&range=2:2",target:"_blank",rel:"noopener noreferrer"}},[_._v("customers(T)"),v("OutboundLink")],1)]),_._v(" "),v("p",[_._v("顧客情報")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("カラム名")]),_._v(" "),v("th",[_._v("データ型")]),_._v(" "),v("th",[_._v("NULL許容")]),_._v(" "),v("th",[_._v("デフォルト値")]),_._v(" "),v("th",[_._v("Key")]),_._v(" "),v("th",[_._v("属性")]),_._v(" "),v("th",[_._v("説明")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("id")]),_._v(" "),v("td",[_._v("bigint")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("PRI")]),_._v(" "),v("td",[_._v("auto_increment")]),_._v(" "),v("td",[_._v("id")])]),_._v(" "),v("tr",[v("td",[_._v("email")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("メールアドレス")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("password_digest")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("暗号化されたパスワード文字列")])]),_._v(" "),v("tr",[v("td",[_._v("remember_token")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("暗号化されたセッション管理文字列")])]),_._v(" "),v("tr",[v("td",[_._v("family_name")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("姓")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("first_name")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("名")])]),_._v(" "),v("tr",[v("td",[_._v("birthday")]),_._v(" "),v("td",[_._v("date")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("誕生日")])]),_._v(" "),v("tr",[v("td",[_._v("gender")]),_._v(" "),v("td",[_._v("int")]),_._v(" "),v("td",[_._v("unsigned")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("90")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("dm_agreed")]),_._v(" "),v("td",[_._v("tinyint(1)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("MUL")]),_._v(" "),v("td",[_._v("DM送信の可否")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("status")]),_._v(" "),v("td",[_._v("int")]),_._v(" "),v("td",[_._v("unsigned")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("10")]),_._v(" "),v("td",[_._v("MUL")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("password_reset_digest")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td",[_._v("MUL")]),_._v(" "),v("td",[_._v("暗号化されたパスワードリセット時の認証用文字列")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("password_reset_issued_at")]),_._v(" "),v("td",[_._v("datetime")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("パスワードリセット用メール送信が行われた時刻")])]),_._v(" "),v("tr",[v("td",[_._v("created_at")]),_._v(" "),v("td",[_._v("datetime(6)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("レコード生成時刻")])]),_._v(" "),v("tr",[v("td",[_._v("updated_at")]),_._v(" "),v("td",[_._v("datetime(6)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("レコード更新時刻")])]),_._v(" "),v("tr",[v("td",[_._v("activation_digest")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("暗号化されたアカウント有効化の認証用文字列")])]),_._v(" "),v("tr",[v("td",[_._v("activated")]),_._v(" "),v("td",[_._v("tinyint(1)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("アカウントが有効化されているか否か")])]),_._v(" "),v("tr",[v("td",[_._v("activation_issued_at")]),_._v(" "),v("td",[_._v("datetime")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("アカウント有効化（アカウント作成）用メールが送信された時刻")])]),_._v(" "),v("tr",[v("td",[_._v("mail_address_update_digest")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("暗号化されたメールアドレス変更時の認証用文字列")])]),_._v(" "),v("tr",[v("td",[_._v("mail_address_update_issued_at")]),_._v(" "),v("td",[_._v("datetime")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("メールアドレス変更用メールが送信された時刻")])]),_._v(" "),v("tr",[v("td",[_._v("temporary_email_address")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("メールアドレス変更処理を行う際、実際に変更されるまでの間、一時的に変更したいアドレスを保持しておく用のカラム")])]),_._v(" "),v("tr",[v("td",[_._v("card_registered")]),_._v(" "),v("td",[_._v("tinyint(1)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("from_shopify")]),_._v(" "),v("td",[_._v("tinyint(1)")]),_._v(" "),v("td",[_._v("NO")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("旧Shopifyサイト会員であるか否か")])]),_._v(" "),v("tr",[v("td",[_._v("pw_update_completed")]),_._v(" "),v("td",[_._v("tinyint(1)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("旧サイト会員が新サイトへ移行時に、パスワード更新が完了しているか否か")])]),_._v(" "),v("tr",[v("td",[_._v("delivery_plan_reset_completed")]),_._v(" "),v("td",[_._v("tinyint(1)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("旧サイト会員が新サイトへ移行時に、定期お届け日設定が完了しているか否か")])]),_._v(" "),v("tr",[v("td",[_._v("movement_digest")]),_._v(" "),v("td",[_._v("varchar(255)")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("未使用")])]),_._v(" "),v("tr",[v("td",[_._v("movement_issued_at")]),_._v(" "),v("td",[_._v("datetime")]),_._v(" "),v("td",[_._v("YES")]),_._v(" "),v("td",[_._v("NULL")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("未使用")])])])]),_._v(" "),v("p",[_._v("※退会ステータス：退会機能自体はありません。引き継ぎ時に既に存在していたカラムです")])])}),[],!1,null,null,null);v.default=e.exports}}]);