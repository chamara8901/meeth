(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{400:function(t,_,v){"use strict";v.r(_);var e=v(13),r=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_1-管理画面再構築-m3-5-注文詳細-決済承認・発送処理開始-完了-機能設計書"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-管理画面再構築-m3-5-注文詳細-決済承認・発送処理開始-完了-機能設計書"}},[t._v("#")]),t._v(" 1. "),_("a",{attrs:{href:"https://github.com/grrowjp/Meeth/wiki/%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E5%86%8D%E6%A7%8B%E7%AF%89-%E7%94%BB%E9%9D%A2%E4%B8%80%E8%A6%A7%28ver2.0%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("管理画面再構築"),_("OutboundLink")],1),t._v(" - M3.5:注文詳細.決済承認・発送処理開始/完了 機能設計書")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#1-%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E5%86%8D%E6%A7%8B%E7%AF%89---m35%E6%B3%A8%E6%96%87%E8%A9%B3%E7%B4%B0%E6%B1%BA%E6%B8%88%E6%89%BF%E8%AA%8D%E7%99%BA%E9%80%81%E5%87%A6%E7%90%86%E9%96%8B%E5%A7%8B%E5%AE%8C%E4%BA%86-%E6%A9%9F%E8%83%BD%E8%A8%AD%E8%A8%88%E6%9B%B8"}},[t._v("1. 管理画面再構築 - M3.5:注文詳細.決済承認・発送処理開始/完了 機能設計書")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#11-%E5%87%A6%E7%90%86%E6%A6%82%E8%A6%81"}},[t._v("1.1. 処理概要")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#111-%E6%A9%9F%E8%83%BD%E5%90%8D"}},[t._v("1.1.1. 機能名")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#112-%E6%A9%9F%E8%83%BD%E6%A6%82%E8%A6%81"}},[t._v("1.1.2. 機能概要")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#113-%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6"}},[t._v("1.1.3. 前提条件")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#114-%E5%87%A6%E7%90%86%E6%A6%82%E8%A6%81"}},[t._v("1.1.4. 処理概要")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#115-%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E4%B8%80%E8%A6%A7"}},[t._v("1.1.5. パラメータ一覧")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#116-%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E4%B8%80%E8%A6%A7"}},[t._v("1.1.6. テーブル一覧")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#117-%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%B8%80%E8%A6%A7"}},[t._v("1.1.7. ファイル一覧")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#12-%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88"}},[t._v("1.2. レイアウト")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#121-%E7%94%BB%E9%9D%A2%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E7%8F%BE%E8%A1%8C"}},[t._v("1.2.1. 画面イメージ（現行）")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#122-1-%E7%94%BB%E9%9D%A2%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E5%86%8D%E6%A7%8B%E7%AF%89%E6%B1%BA%E6%B8%88%E6%89%BF%E8%AA%8D"}},[t._v("1.2.2-1. 画面イメージ（再構築）(決済承認)")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#122-2-%E7%94%BB%E9%9D%A2%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E5%86%8D%E6%A7%8B%E7%AF%89%E7%99%BA%E9%80%81%E5%87%A6%E7%90%86%E9%96%8B%E5%A7%8B%E5%AE%8C%E4%BA%86"}},[t._v("1.2.2-2. 画面イメージ（再構築）(発送処理開始/完了)")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#123-%E7%94%BB%E9%9D%A2%E9%A0%85%E7%9B%AE"}},[t._v("1.2.3. 画面項目")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#124-%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E5%AE%9A%E7%BE%A9"}},[t._v("1.2.4. イベント定義")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#13-api"}},[t._v("1.3. API")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#131-api%E4%B8%80%E8%A6%A7"}},[t._v("1.3.1. API一覧")])])])])])])]),t._v(" "),_("h2",{attrs:{id:"_1-1-処理概要"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-処理概要"}},[t._v("#")]),t._v(" 1.1. 処理概要")]),t._v(" "),_("h3",{attrs:{id:"_1-1-1-機能名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-機能名"}},[t._v("#")]),t._v(" 1.1.1. 機能名")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("No.")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("項目")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("値")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("プロジェクト")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("meeth様ECサイト開発")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("システム")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("管理画面")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("画面プログラム")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("注文詳細")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("画面プログラムID")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("M3.5")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("画面フォーム名")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")])])])]),t._v(" "),_("h3",{attrs:{id:"_1-1-2-機能概要"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-機能概要"}},[t._v("#")]),t._v(" 1.1.2. 機能概要")]),t._v(" "),_("ul",[_("li",[t._v("決済承認処理を行う。")])]),t._v(" "),_("h3",{attrs:{id:"_1-1-3-前提条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-前提条件"}},[t._v("#")]),t._v(" 1.1.3. 前提条件")]),t._v(" "),_("ul",[_("li",[t._v("ログイン済のユーザであること")]),t._v(" "),_("li",[t._v("ログインユーザの"),_("a",{attrs:{href:"https://github.com/grrowjp/Meeth/wiki/%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E5%86%8D%E6%A7%8B%E7%AF%89-%E6%A8%A9%E9%99%90%E4%B8%80%E8%A6%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("権限"),_("OutboundLink")],1),t._v("が条件を満たしていること(総合管理者、許可された作業担当者のみ閲覧・操作可能)")])]),t._v(" "),_("h3",{attrs:{id:"_1-1-4-処理概要"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-処理概要"}},[t._v("#")]),t._v(" 1.1.4. 処理概要")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("No")]),t._v(" "),_("th",[t._v("操作")]),t._v(" "),_("th",[t._v("処理概要")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("「決済承認」ボタン押下時")]),t._v(" "),_("td",[t._v("決済承認モーダルを表示する。")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("「発送処理を開始」ボタン押下時")]),t._v(" "),_("td",[t._v("発送処理開始モーダルを表示する。")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("「発送処理を完了」ボタン押下時")]),t._v(" "),_("td",[t._v("発送処理完了モーダルを表示する。")])])])]),t._v(" "),_("h3",{attrs:{id:"_1-1-5-パラメータ一覧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-5-パラメータ一覧"}},[t._v("#")]),t._v(" 1.1.5. パラメータ一覧")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("No")]),t._v(" "),_("th",[t._v("論理名称")]),t._v(" "),_("th",[t._v("物理名称")]),t._v(" "),_("th",[t._v("I/O")]),t._v(" "),_("th",[t._v("備考")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("注文ID")]),t._v(" "),_("td",[t._v("order_id")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td")])])]),t._v(" "),_("h3",{attrs:{id:"_1-1-6-テーブル一覧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-6-テーブル一覧"}},[t._v("#")]),t._v(" 1.1.6. テーブル一覧")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("No")]),t._v(" "),_("th",[t._v("論理名称")]),t._v(" "),_("th",[t._v("物理名称")]),t._v(" "),_("th",[t._v("I/O")]),t._v(" "),_("th",[t._v("備考")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[_("a",{attrs:{href:"https://github.com/grrowjp/Meeth/wiki/%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E5%AE%9A%E7%BE%A9_payments",target:"_blank",rel:"noopener noreferrer"}},[t._v("支払管理テーブル"),_("OutboundLink")],1)]),t._v(" "),_("td",[t._v("payments")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[_("a",{attrs:{href:"https://github.com/grrowjp/Meeth/wiki/%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E5%AE%9A%E7%BE%A9_orders",target:"_blank",rel:"noopener noreferrer"}},[t._v("注文テーブル"),_("OutboundLink")],1)]),t._v(" "),_("td",[t._v("orders")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td")])])]),t._v(" "),_("h3",{attrs:{id:"_1-1-7-ファイル一覧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-7-ファイル一覧"}},[t._v("#")]),t._v(" 1.1.7. ファイル一覧")]),t._v(" "),_("p",[t._v("なし")]),t._v(" "),_("h2",{attrs:{id:"_1-2-レイアウト"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-レイアウト"}},[t._v("#")]),t._v(" 1.2. レイアウト")]),t._v(" "),_("h3",{attrs:{id:"_1-2-1-画面イメージ-現行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-画面イメージ-現行"}},[t._v("#")]),t._v(" 1.2.1. 画面イメージ（現行）")]),t._v(" "),_("h3",{attrs:{id:"_1-2-2-1-画面イメージ-再構築-決済承認"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-1-画面イメージ-再構築-決済承認"}},[t._v("#")]),t._v(" 1.2.2-1. 画面イメージ（再構築）(決済承認)")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-images.githubusercontent.com/77314669/114837502-bfd3ed80-9e0e-11eb-91c8-9f06ce69e827.png",alt:"image"}}),t._v("\n⇓\n"),_("img",{attrs:{src:"https://user-images.githubusercontent.com/24938069/117916022-55d13a00-b321-11eb-8e83-b155ae077da9.png",alt:"image"}}),t._v("\n⇓\n"),_("img",{attrs:{src:"https://user-images.githubusercontent.com/77314669/114837702-f578d680-9e0e-11eb-8aab-fb8d2b12b2e3.png",alt:"image"}})]),t._v(" "),_("h3",{attrs:{id:"_1-2-2-2-画面イメージ-再構築-発送処理開始-完了"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-2-画面イメージ-再構築-発送処理開始-完了"}},[t._v("#")]),t._v(" 1.2.2-2. 画面イメージ（再構築）(発送処理開始/完了)")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-images.githubusercontent.com/77314669/114837860-1b05e000-9e0f-11eb-8dc0-abe279c5986d.png",alt:"image"}}),t._v("\n⇓\n"),_("img",{attrs:{src:"https://user-images.githubusercontent.com/77314669/114837948-2f49dd00-9e0f-11eb-9da0-ef07297e6886.png",alt:"image"}}),t._v("\n⇓\n"),_("img",{attrs:{src:"https://user-images.githubusercontent.com/77314669/114838010-3f61bc80-9e0f-11eb-91a8-c392a2b0e9fd.png",alt:"image"}}),t._v("\n⇓\n"),_("img",{attrs:{src:"https://user-images.githubusercontent.com/24938069/118097751-0a488a00-b40e-11eb-9909-c6fd62d936cc.png",alt:"image"}}),t._v("\n⇓\n"),_("img",{attrs:{src:"https://user-images.githubusercontent.com/77314669/114838125-59030400-9e0f-11eb-95e3-892a9782d444.png",alt:"image"}})]),t._v(" "),_("h3",{attrs:{id:"_1-2-3-画面項目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-画面項目"}},[t._v("#")]),t._v(" 1.2.3. 画面項目")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("No")]),t._v(" "),_("th",[t._v("名称")]),t._v(" "),_("th",[t._v("対応DB項目")]),t._v(" "),_("th",[t._v("I/O")]),t._v(" "),_("th",[t._v("種別")]),t._v(" "),_("th",[t._v("型")]),t._v(" "),_("th",[t._v("桁数")]),t._v(" "),_("th",[t._v("必須")]),t._v(" "),_("th",[t._v("備考")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("決済承認")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("ボタン")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("決済承認モーダルを表示する"),_("br"),t._v("決済状況が振込待ちの場合のみ出現する")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("確認")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("ラベル")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("決済を承認します")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("テキスト")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("承認")]),t._v(" "),_("td",[t._v("payments.status")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("ボタン")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("決済承認を行う"),_("br"),t._v("決済状況を振込待ちから実売上に変更する"),_("br"),t._v("「決済承認」ボタンが「発送処理を開始」ボタンに変更")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("xボタン")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("ボタン")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("決済承認モーダルを閉じる")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("発送処理を開始")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("ボタン")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("発送処理開始モーダルを表示する")])]),t._v(" "),_("tr",[_("td",[t._v("7")]),t._v(" "),_("td",[t._v("確認")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("ラベル")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("発送処理を開始します")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("テキスト")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("9")]),t._v(" "),_("td",[t._v("開始")]),t._v(" "),_("td",[t._v("orders.shipping_status")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("ボタン")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("発送処理を開始する"),_("br"),t._v("注文状況を未発送から発送処理中に変更する"),_("br"),t._v("「発送処理を開始」ボタンが「発送処理を完了」ボタンに変更する")])]),t._v(" "),_("tr",[_("td",[t._v("10")]),t._v(" "),_("td",[t._v("xボタン")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("ボタン")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("発送処理開始モーダルを閉じる")])]),t._v(" "),_("tr",[_("td",[t._v("11")]),t._v(" "),_("td",[t._v("発送完了")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("ボタン")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("発送処理完了モーダルを表示する")])]),t._v(" "),_("tr",[_("td",[t._v("12")]),t._v(" "),_("td",[t._v("確認")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("ラベル")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("13")]),t._v(" "),_("td",[t._v("発送処理を完了します")]),t._v(" "),_("td",[t._v("ー")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("テキスト")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("14")]),t._v(" "),_("td",[t._v("完了")]),t._v(" "),_("td",[t._v("orders.shipping_status"),_("br"),t._v("orders_detail.product_details.allocated_stock"),_("br"),t._v("orders_detail.product_detail.product_stocks.stock")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("ボタン")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("発送処理を完了する"),_("br"),t._v("注文状況を発送処理中から発送完了に変更する"),_("br"),t._v("在庫数、引当数を減算する")])]),t._v(" "),_("tr",[_("td",[t._v("15")]),t._v(" "),_("td",[t._v("xボタン")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("O")]),t._v(" "),_("td",[t._v("ボタン")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("－")]),t._v(" "),_("td",[t._v("発送処理完了モーダルを閉じる")])])])]),t._v(" "),_("h3",{attrs:{id:"_1-2-4-イベント定義"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-イベント定義"}},[t._v("#")]),t._v(" 1.2.4. イベント定義")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("No")]),t._v(" "),_("th",[t._v("項目")]),t._v(" "),_("th",[t._v("発生条件")]),t._v(" "),_("th",[t._v("遷移先")]),t._v(" "),_("th",[t._v("備考")]),t._v(" "),_("th",[t._v("API")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("「決済承認」ボタン")]),t._v(" "),_("td",[t._v("クリック")]),t._v(" "),_("td",[t._v("決済承認モーダル")]),t._v(" "),_("td",[t._v("銀行振込決済に限る")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("「発送処理を開始」ボタン")]),t._v(" "),_("td",[t._v("クリック")]),t._v(" "),_("td",[t._v("発送処理開始モーダル")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("「発送処理を完了」ボタン")]),t._v(" "),_("td",[t._v("クリック")]),t._v(" "),_("td",[t._v("発送処理完了モーダル")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("「開始」ボタン")]),t._v(" "),_("td",[t._v("クリック")]),t._v(" "),_("td",[_("a",{attrs:{href:"https://github.com/grrowjp/Meeth/wiki/%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E5%86%8D%E6%A7%8B%E7%AF%89-0032.M3.2:%E6%B3%A8%E6%96%87%E8%A9%B3%E7%B4%B0_ver2.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("注文詳細画面"),_("OutboundLink")],1)]),t._v(" "),_("td",[t._v("処理を行い注文詳細画面を再描画する")]),t._v(" "),_("td",[t._v("発送処理状況変更API")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("xボタン")]),t._v(" "),_("td",[t._v("クリック")]),t._v(" "),_("td",[t._v("ー")]),t._v(" "),_("td",[t._v("モーダルを閉じる")]),t._v(" "),_("td")])])]),t._v(" "),_("h2",{attrs:{id:"_1-3-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-api"}},[t._v("#")]),t._v(" 1.3. API")]),t._v(" "),_("h3",{attrs:{id:"_1-3-1-api一覧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-api一覧"}},[t._v("#")]),t._v(" 1.3.1. API一覧")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("NO.")]),t._v(" "),_("th",[t._v("名称")]),t._v(" "),_("th",[t._v("内容")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("発送処理状況変更API")]),t._v(" "),_("td",[t._v("発送処理状況を変更する")])])])])])}),[],!1,null,null,null);_.default=r.exports}}]);