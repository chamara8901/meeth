(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{270:function(t,e,r){"use strict";r.r(e);var a={computed:{posts(){return this.$site.pages.filter(t=>t.path.startsWith("/lessons/")&&!t.frontmatter.blog_index).sort((t,e)=>new Date(e.frontmatter.date)-new Date(t.frontmatter.date))}}},n=r(13),s=Object(n.a)(a,(function(){var t=this,e=t._self._c;return e("div",t._l(t.posts,(function(r){return e("div",[e("div",[r.frontmatter.image?e("img",{attrs:{src:t.$withBase(r.frontmatter.image),alt:""}}):t._e()]),t._v(" "),e("h2",[e("router-link",{attrs:{to:r.path}},[t._v(t._s(r.frontmatter.title))])],1),t._v(" "),e("p",[t._v(t._s(r.frontmatter.description))]),t._v(" "),e("p",[e("router-link",{attrs:{to:r.path}},[t._v("Read More...")])],1)])})),0)}),[],!1,null,null,null);e.default=s.exports}}]);