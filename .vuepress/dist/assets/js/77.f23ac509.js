(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{341:function(s,t,e){"use strict";e.r(t);var a=e(13),i=Object(a.a)({},(function(){var s=this._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("bundle exec rake csv_import:shopify_subscriptions[./tmp/xxxx.csv]\n")])])]),s("p",[this._v("log/production.log に出る (例外エラーのみ標準も)\n別のファイルに出したい場合: (他にも方法はあります)")]),this._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("RAILS_LOG_TO_STDOUT=1 bundle exec rake csv_import:shopify_subscriptions[./tmp/xxxx.csv] > /tmp/subscription.log\n")])])]),s("p",[this._v("log/production.log の出力内容が /tmp/subscription.logに(標準出力)\nwarnログも消したい場合: (rails6の影響か何かversionの問題か)\n=> type/integer.rb:13: warning:  こういうようなログ")]),this._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('RUBYOPT="-W0" RAILS_LOG_TO_STDOUT=1 bundle exec rake csv_import:shopify_subscriptions[./tmp/xxxx.csv]\n')])])])])}),[],!1,null,null,null);t.default=i.exports}}]);