(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(152),o=n(186),c=n(164);t.default=function(e){var t=e.location;return r.a.createElement(o.a,{location:t},r.a.createElement(i.Box,{py:2},r.a.createElement(c.a,null,"PAGE_NOT_FOUND")))}},155:function(e,t,n){"use strict";var a=n(154),r=n.n(a),i=(n(34),n(153)),o=n(75),c=n.n(o),l=n(0),u=n.n(l),s=n(152),m=n(156);function d(){var e=r()(["",""]);return d=function(){return e},e}var f=function(e){var t,n=e.children,a=e.to,r=e.withTextDecoration,i=c()(e,["children","to","withTextDecoration"]),o=/^\/(?!\/)/.test(a),l=((t={})[o?"to":"href"]=a,t);return u.a.createElement(p,Object.assign({},i,l,{target:o?void 0:"_blank",as:o?m.a:"a",color:"black",_css:{"text-decoration":r?void 0:"none"}}),n)};f.defaultProps={withTextDecoration:!0},t.a=f;var p=Object(i.default)(s.Link)(d(),function(e){return e._css})},156:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),l=n.n(c);n.d(t,"a",function(){return l.a});n(163);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(e,t,n){"use strict";n(34);var a=n(0),r=n.n(a),i=n(171),o=n.n(i);t.a=function(e){return r.a.createElement(o.a,Object.assign({},e,{maxWidth:"64em"}))}},163:function(e,t,n){var a;e.exports=(a=n(179))&&a.default||a},164:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(152);t.a=function(e){var t=e.children;return r.a.createElement(i.Box,{px:3,alignSelf:"center",width:[1,1,.5]},t)}},178:function(e){e.exports={data:{site:{siteMetadata:{title:"Catatan Detik"}}}}},179:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},180:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"anime"},{fieldValue:"lifehack"},{fieldValue:"opini"},{fieldValue:"playground"}]}}}},181:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"anime"},{fieldValue:"lifehack"},{fieldValue:"opini"},{fieldValue:"playground"}]},site:{siteMetadata:{title:"Catatan Detik"}}}}},182:function(e){e.exports={data:{site:{siteMetadata:{title:"Catatan Detik",description:"Just a Note",host:"https://detikpw.github.io",social:{twitter:{username:"@2nd_frozenheart"}}}}}}},186:function(e,t,n){"use strict";var a=n(153),r=n(154),i=n.n(r),o=n(0),c=n.n(o),l=n(152),u=n(7),s=n.n(u),m=n(178),d=n(156),f=function(){return c.a.createElement("svg",{width:"16",height:"14",viewBox:"0 0 20 14",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M0 0h20v2H0V0zm0 6h20v2H0V6zm0 6h20v2H0v-2z",fill:"#000000",fillRule:"evenodd"}))},p=n(155);function h(){var e=i()(["",""]);return h=function(){return e},e}var b=function(e){var t=e.onOpenSidebar;return function(e){return c.a.createElement(g,{width:1,boxShadow:"0 1px 0 rgba(0,0,0,0.15)",bg:"white",_css:{position:"fixed"}},c.a.createElement(x,{px:3,alignItems:"center",justifyContent:"start",flexDirection:"row",_css2:{height:"40px"}},c.a.createElement(l.Box,{alignSelf:"center",width:1/12},c.a.createElement(l.Button,{px:0,bg:"white",onClick:t},c.a.createElement(f,null))),c.a.createElement(l.Box,{alignSelf:"center",width:5/6},c.a.createElement(p.a,{to:"/",withTextDecoration:!1},c.a.createElement(l.Text,{fontFamily:"Exo",fontWeight:"bold"},e.site.siteMetadata.title)))))}},E=function(e){var t=e.onOpenSidebar;return c.a.createElement(d.b,{query:"1784012146",render:b({onOpenSidebar:t}),data:m})},g=Object(a.default)(l.Card).withConfig({displayName:"HeaderMobile___StyledCard",componentId:"rwat9b-0"})(["",""],function(e){return e._css}),x=Object(a.default)(l.Flex)(h(),function(e){return e._css2}),v=n(164),w=function(){return c.a.createElement(v.a,null,c.a.createElement(l.Flex,{py:4},c.a.createElement(l.Text,{fontFamily:400,fontSize:".625rem",lineHeight:1.2},"Powered by ",c.a.createElement(p.a,{to:"https://www.gatsbyjs.org/"},"Gatsby"),"  inspired by jekyll theme ",c.a.createElement(p.a,{to:"https://github.com/mmistakes/so-simple-theme"},"So Simple Theme ")," and ",c.a.createElement(p.a,{to:"https://www.vice.com"},"vice.com"))))},y=n(180),_=n(338),k=n(160),S=function(e){var t=e.children;return c.a.createElement(l.Box,{as:"ul",mb:2,pl:0},t)},O=function(e){var t=e.children,n=e.title;return c.a.createElement(j,{pt:4,_css:{fontFamily:"HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif",textTransform:"uppercase"}},n&&c.a.createElement(l.Text,{fontFamily:400,fontSize:".625rem",lineHeight:1.2},n),c.a.createElement(S,null,t))},j=Object(a.default)(l.Box).withConfig({displayName:"Navbar___StyledBox",componentId:"d98k89-0"})(["",""],function(e){return e._css}),T=function(e){var t=e.children;return c.a.createElement(C,{as:"li",mb:2,pl:0,_css:{"list-style-type":"none"}},t)},C=Object(a.default)(l.Box).withConfig({displayName:"ListItem___StyledBox",componentId:"sc-15j5pjv-0"})(["",""],function(e){return e._css}),D=function(e){var t=e.children,n=e.to;return c.a.createElement(T,null,c.a.createElement(p.a,{to:n,withTextDecoration:!1},c.a.createElement(l.Text,{fontWeight:600,lineHeight:1.2},t)))},B=function(){return c.a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",width:"24px"},c.a.createElement("title",null),c.a.createElement("g",{id:"cross",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}},c.a.createElement("line",{x1:"7",x2:"25",y1:"7",y2:"25"}),c.a.createElement("line",{x1:"7",x2:"25",y1:"25",y2:"7"})))};function F(){var e=i()(["",""]);return F=function(){return e},e}function H(){var e=i()(["",""]);return H=function(){return e},e}var N=function(e){var t=e.fieldValue;return c.a.createElement(D,{key:t,to:"/"+t},Object(k.sentence)(t))},V=function(e){var t=e.onCloseSidebar,n=e.isSidebarOpen;return function(e){return c.a.createElement(l.Box,{onClick:t},n&&c.a.createElement(z,{bg:"white",width:1,px:3,flexDirection:"column",_css:{position:"fixed",top:"0",left:"0",zIndex:250,height:"100vh"}},c.a.createElement(I,{bg:"white",onClick:t,px:0,width:1/6,_css2:{height:"60px",textAlign:"left"}},c.a.createElement(B,null)),c.a.createElement(O,null,c.a.createElement(D,{to:"/"},"Home")),c.a.createElement(O,{title:"category"},Object(_.a)(N,e.allMarkdownRemark.group),c.a.createElement(D,{to:"/tags/til"},"TIL"))))}},q=function(e){var t=e.onCloseSidebar,n=e.isSidebarOpen;return c.a.createElement(d.b,{query:"2695456878",render:V({onCloseSidebar:t,isSidebarOpen:n}),data:y})},z=Object(a.default)(l.Flex)(H(),function(e){return e._css}),I=Object(a.default)(l.Button)(F(),function(e){return e._css2}),M=n(159);function R(){var e=i()(["",""]);return R=function(){return e},e}function W(){var e=i()(["",""]);return W=function(){return e},e}var A=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isSidebarOpen:!1},t.openSidebar=function(){return t.setState({isSidebarOpen:!0})},t.closeSidebar=function(){return t.setState({isSidebarOpen:!1})},t}return s()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.state.isSidebarOpen;return c.a.createElement(M.a,null,c.a.createElement(q,{onCloseSidebar:this.closeSidebar,isSidebarOpen:t}),c.a.createElement(L,{flexDirection:"column",_css:{height:"100%"}},c.a.createElement(E,{onOpenSidebar:this.openSidebar,onCloseSidebar:this.closeSidebar}),c.a.createElement(G,{pt:"40px",_css2:{flexGrow:1,overflowY:"auto"}},e),c.a.createElement(w,null)))},t}(o.Component),L=Object(a.default)(l.Flex)(W(),function(e){return e._css}),G=Object(a.default)(l.Box)(R(),function(e){return e._css2}),J=n(181),P=function(e){var t=e.children,n=e.to;return c.a.createElement(p.a,{to:n,mx:2},c.a.createElement(l.Text,{color:"white",lineHeight:1.2},t))};function Q(){var e=i()(["",""]);return Q=function(){return e},e}function U(){var e=i()(["",""]);return U=function(){return e},e}var Y=function(e){var t=e.fieldValue;return c.a.createElement(P,{key:t,to:"/"+t},Object(k.sentence)(t))},K=function(){return c.a.createElement(d.b,{query:"3370774989",render:function(e){return c.a.createElement(l.Flex,{flexDirection:"column",justifyContent:"center",alignItems:"center"},c.a.createElement(X,{bg:"black",py:2,px:3,mb:4,_css:{textTransform:"uppercase",borderRadius:"0 0 10px 10px"}},Object(_.a)(Y,e.allMarkdownRemark.group),c.a.createElement(P,{to:"/tags/til"},"TIL")),c.a.createElement(p.a,{to:"/",withTextDecoration:!1},c.a.createElement(l.Text,{fontFamily:"Exo",fontSize:"2.25rem"},e.site.siteMetadata.title)),c.a.createElement(Z,{fontFamily:"Exo",fontSize:"1.25rem",_css2:{fontStyle:"italic"}},"Just A Note"))},data:J})},X=Object(a.default)(l.Flex)(U(),function(e){return e._css}),Z=Object(a.default)(l.Text)(Q(),function(e){return e._css2}),$=(n(34),n(171)),ee=n.n($),te=function(e){return c.a.createElement(ee.a,Object.assign({},e,{minWidth:"64em"}))},ne=function(e){var t=e.children;return c.a.createElement(te,null,c.a.createElement(ae,{flexDirection:"column",alignItems:"center",_css:{borderTop:"5px solid #000"}},c.a.createElement(K,null),t,c.a.createElement(w,null)))},ae=Object(a.default)(l.Flex).withConfig({displayName:"Desktop___StyledFlex",componentId:"sc-15jbbmv-0"})(["",""],function(e){return e._css}),re=n(182),ie=n(334),oe=n(271),ce=n(196),le=n.n(ce),ue=function(e){var t=e.pageData,n=e.location,a=e.children;return function(e){var r=e.site.siteMetadata,i=Object(ie.a)("title"),o=Object(ie.a)("description"),l=Object(oe.a)(["social","twitter","username"]),u=i(t)||i(r),s=o(t)||o(r),m=Object(oe.a)(["image","src"])(t),d=Object(oe.a)(["image","caption"])(t);return c.a.createElement(le.a,{titleTemplate:"%s | "+i(r)},c.a.createElement("title",null,u),c.a.createElement("meta",{name:"description",content:s}),c.a.createElement("meta",{property:"og:url",content:n.href}),c.a.createElement("meta",{property:"og:title",content:u}),c.a.createElement("meta",{property:"og:description",content:s}),c.a.createElement("meta",{property:"og:image",content:m}),c.a.createElement("meta",{property:"og:image:alt",content:d}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.a.createElement("meta",{name:"twitter:creator",content:l(r)}),c.a.createElement("meta",{name:"twitter:title",content:u}),c.a.createElement("meta",{name:"twitter:description",content:s}),c.a.createElement("meta",{name:"twitter:image",content:m}),c.a.createElement("meta",{name:"twitter:image:alt",content:d}),a)}},se=function(e){var t=e.pageData,n=e.location,a=e.children;return c.a.createElement(d.b,{query:"2038369060",render:ue({pageData:t,location:n,children:a}),data:re})};function me(){var e=i()(['\n  body {\n    margin: 0;\n    height: 100%;\n  }\n  ::-webkit-scrollbar {\n    width: 0px;  /* remove scrollbar space */\n    background: transparent;  /* optional: just make scrollbar invisible */\n  }\n  blockquote {\n    font-family: "volkhov",serif;\n    font-style: italic;\n    font-size: 1rem;\n    line-height: 1.5;\n    margin-bottom: 1.5rem;\n    padding-left: 20px;\n    border-left: 8px solid #000;\n  }\n  a {\n    color: black;\n  }\n']);return me=function(){return e},e}var de=Object(a.createGlobalStyle)(me()),fe=(t.a=function(e){var t=e.children,n=e.location,a=e.pageData;return c.a.createElement(fe,{_css:{fontFamily:"HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif"}},c.a.createElement(se,{location:n,pageData:a},c.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Exo",rel:"stylesheet"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Volkhov",rel:"stylesheet"})),c.a.createElement(de,null),c.a.createElement(A,null,t),c.a.createElement(ne,null,t))},Object(a.default)(l.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-1dhfl9g-0"})(["",""],function(e){return e._css}))}}]);
//# sourceMappingURL=component---src-pages-404-js-0cd7562c5c6eee218619.js.map