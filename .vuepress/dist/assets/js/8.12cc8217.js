(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{274:function(t,e,r){"use strict";r.r(e);var a={computed:{categories(){let t={};for(let e of this.$site.pages)for(let r in e.frontmatter.categories){const a=e.frontmatter.categories[r];a in t?t[a].push(e):t[a]=[e]}return t}}},n=r(13),i=Object(n.a)(a,(function(){var t=this,e=t._self._c;return e("div",t._l(Object.keys(t.categories),(function(r){return e("span",[e("h3",{attrs:{id:r}},[e("router-link",{staticClass:"header-anchor",attrs:{to:{path:"/categories/#"+r},"aria-hidden":"true"}},[t._v("#")]),t._v("\n      "+t._s(r)+"\n    ")],1),t._v(" "),t._l(t.categories[r],(function(r){return e("div",[e("div",[r.frontmatter.image?e("img",{attrs:{src:t.$withBase(r.frontmatter.image),alt:""}}):t._e()]),t._v(" "),e("h2",[e("router-link",{attrs:{to:{path:r.path}}},[t._v(t._s(r.title))])],1)])}))],2)})),0)}),[],!1,null,null,null);e.default=i.exports}}]);