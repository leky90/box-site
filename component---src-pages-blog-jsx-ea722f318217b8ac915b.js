(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return v});var a=n(0),r=n.n(a),o=n(163),c=n.n(o),i=n(1),l=n.n(i),s=n(157),u=n(159),p=n(250),h=n(251),d=n(252),b=n(180),m=n(170),f=function(e){var t=e.data,n=t.postList?t.postList.edges:[];return r.a.createElement(u.d,null,r.a.createElement(c.a,{title:"Blog"}),r.a.createElement(s.b,{title:"Trang tin tức"},"Theo dõi những bài viết cung cấp thông tin mới nhất từ Box"),r.a.createElement("div",{className:"section section--blog section--white"},r.a.createElement(p.a,null,r.a.createElement(h.a,null,n.length?n.map(function(e,t){var n=e.node;return r.a.createElement(s.a,{key:n.id,cover:n.frontmatter.cover?n.frontmatter.cover.childImageSharp.fluid:{},path:n.frontmatter.path,title:n.frontmatter.title,date:n.frontmatter.date,tags:n.frontmatter.tags,excerpt:n.excerpt,background:t%2==0?"green":"white"})}):r.a.createElement(d.a,{sm:12},r.a.createElement("p",{className:"text-center"},"Hiện Box chưa có bài viết nào. Hãy đón chờ nhé :D"))))),r.a.createElement("div",{className:"section section--banner section--green"},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(d.a,{sm:6},r.a.createElement("h2",null,"Bạn đã tham gia làm thành viên của BOX chưa?")),r.a.createElement(d.a,{sm:6},r.a.createElement(b.a,{bsSize:"large",href:"https://member.box-coworking.space/register"},r.a.createElement(m.b,null)," Trở thành thành viên ngay hôm nay"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,{bsSize:"large",href:"https://member.box-coworking.space/login"},r.a.createElement(m.b,null)," Đăng nhập tài khoản của bạn"))))))};t.default=f,f.propTypes={data:l.a.shape({allMarkdownRemark:l.a.shape({edges:l.a.arrayOf(l.a.shape({node:l.a.shape({excerpt:l.a.string,frontmatter:l.a.shape({cover:l.a.object.isRequired,path:l.a.string.isRequired,title:l.a.string.isRequired,date:l.a.string.isRequired,tags:l.a.array})})}).isRequired)})})};var v="724096254"},164:function(e,t,n){e.exports=n(165)},165:function(e,t,n){n(166),e.exports=n(153).Object.values},166:function(e,t,n){var a=n(158),r=n(169)(!1);a(a.S,"Object",{values:function(e){return r(e)}})},180:function(e,t,n){"use strict";var a=n(164),r=n.n(a),o=n(154),c=n(152),i=n(155),l=n(161),s=n.n(l),u=n(0),p=n.n(u),h=n(1),d=n.n(h),b=n(156),m=n.n(b),f=n(162),v=n(168);function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}},null)},E={href:d.a.string,onClick:d.a.func,onKeyDown:d.a.func,disabled:d.a.bool,role:d.a.string,tabIndex:d.a.oneOfType([d.a.number,d.a.string]),componentClass:m.a};function w(e){return!e||"#"===e.trim()}var k=function(e){function t(t,n){var a;return(a=e.call(this,t,n)||this).handleClick=a.handleClick.bind(g(g(a))),a.handleKeyDown=a.handleKeyDown.bind(g(g(a))),a}Object(i.a)(t,e);var n=t.prototype;return n.handleClick=function(e){var t=this.props,n=t.disabled,a=t.href,r=t.onClick;(n||w(a))&&e.preventDefault(),n?e.stopPropagation():r&&r(e)},n.handleKeyDown=function(e){" "===e.key&&(e.preventDefault(),this.handleClick(e))},n.render=function(){var e=this.props,t=e.componentClass,n=e.disabled,a=e.onKeyDown,r=Object(o.a)(e,["componentClass","disabled","onKeyDown"]);return w(r.href)&&(r.role=r.role||"button",r.href=r.href||"#"),n&&(r.tabIndex=-1,r.style=Object(c.a)({pointerEvents:"none"},r.style)),p.a.createElement(t,Object(c.a)({},r,{onClick:this.handleClick,onKeyDown:y(this.handleKeyDown,a)}))},t}(p.a.Component);k.propTypes=E,k.defaultProps={componentClass:"a"};var O=k,j={active:d.a.bool,disabled:d.a.bool,block:d.a.bool,onClick:d.a.func,componentClass:m.a,href:d.a.string,type:d.a.oneOf(["button","reset","submit"])},C=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var n=t.prototype;return n.renderAnchor=function(e,t){return p.a.createElement(O,Object(c.a)({},e,{className:s()(t,e.disabled&&"disabled")}))},n.renderButton=function(e,t){var n=e.componentClass,a=Object(o.a)(e,["componentClass"]),r=n||"button";return p.a.createElement(r,Object(c.a)({},a,{type:a.type||"button",className:t}))},n.render=function(){var e,t=this.props,n=t.active,a=t.block,r=t.className,i=Object(o.a)(t,["active","block","className"]),l=Object(f.f)(i),u=l[0],p=l[1],h=Object(c.a)({},Object(f.d)(u),((e={active:n})[Object(f.e)(u,"block")]=a,e)),d=s()(r,h);return p.href?this.renderAnchor(p,d):this.renderButton(p,d)},t}(p.a.Component);C.propTypes=j,C.defaultProps={active:!1,block:!1,disabled:!1};t.a=Object(f.a)("btn",Object(f.b)([v.c.LARGE,v.c.SMALL,v.c.XSMALL],Object(f.c)(r()(v.d).concat([v.e.DEFAULT,v.e.PRIMARY,v.e.LINK]),v.e.DEFAULT,C)))}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-ea722f318217b8ac915b.js.map