(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{153:function(e,t,n){"use strict";var a=n(152),r=n.n(a),i=(n(33),n(151)),c=n(75),l=n.n(c),o=n(0),u=n.n(o),s=n(150),m=n(154);function f(){var e=r()(["",""]);return f=function(){return e},e}var d=function(e){var t,n=e.children,a=e.to,r=e.withTextDecoration,i=l()(e,["children","to","withTextDecoration"]),c=/^\/(?!\/)/.test(a),o=((t={})[c?"to":"href"]=a,t);return u.a.createElement(p,Object.assign({},i,o,{target:c?void 0:"_blank",as:c?m.a:"a",color:"black",_css:{"text-decoration":r?void 0:"none"}}),n)};d.defaultProps={withTextDecoration:!0},t.a=d;var p=Object(i.default)(s.Link)(f(),function(e){return e._css})},154:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=n(32),o=n.n(l);n.d(t,"a",function(){return o.a});n(174);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},159:function(e,t,n){"use strict";n(33);var a=n(0),r=n.n(a),i=n(179),c=n.n(i);t.a=function(e){return r.a.createElement(c.a,Object.assign({},e,{maxWidth:"64em"}))}},174:function(e,t,n){var a;e.exports=(a=n(188))&&a.default||a},175:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(150);t.a=function(e){var t=e.children;return r.a.createElement(i.Box,{px:3,alignSelf:"center",width:[1,1,.5]},t)}},176:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(150);t.a=function(e){var t=e.children,n=e.textAlign,a=e.px;return r.a.createElement(i.Text,{fontSize:".625rem",fontWeight:400,lineHeight:1.6,my:0,px:a,textAlign:n},t)}},187:function(e){e.exports={data:{site:{siteMetadata:{title:"Catatan Detik"}}}}},188:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=n(55),o=n(2),u=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},189:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:""},{fieldValue:"lifehack"},{fieldValue:"opini"},{fieldValue:"playground"}]}}}},193:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:""},{fieldValue:"lifehack"},{fieldValue:"opini"},{fieldValue:"playground"}]},site:{siteMetadata:{title:"Catatan Detik"}}}}},194:function(e){e.exports={data:{site:{siteMetadata:{title:"Catatan Detik",description:"Just a Note",host:"https://detikpw.github.io",social:{twitter:{username:"@2nd_frozenheart"}}}}}}},195:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),c=n(150),l=n(159);t.a=function(e){var t=e.children;return i.a.createElement(l.a,null,function(e){return i.a.createElement(o,{py:2,_css:{borderTop:e?"3px solid rgb(0, 0, 0)":void 0}},t)})};var o=Object(a.default)(c.Box).withConfig({displayName:"HeaderSection___StyledBox",componentId:"eltv8w-0"})(["",""],function(e){return e._css})},196:function(e,t,n){"use strict";var a=n(152),r=n.n(a),i=n(151),c=n(0),l=n.n(c),o=n(150),u=n(159);function s(){var e=r()(["",""]);return s=function(){return e},e}t.a=function(e){var t=e.children;return l.a.createElement(u.a,null,function(e){return(e?function(e){return l.a.createElement(o.Text,{as:"h1",fontSize:"1.25rem",fontWeight:600,lineHeight:1.2,my:0},e)}:function(e){return l.a.createElement(m,{as:"h1",fontFamily:"'Volkhov', serif",fontSize:"3.25rem",fontWeight:400,lineHeight:1,mt:4,mb:3,textAlign:"center",_css:{fontStyle:"italic"}},e)})(t)})};var m=Object(i.default)(o.Text)(s(),function(e){return e._css})},197:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),c=n(150),l=function(e){var t=e.children,n=e.as;return i.a.createElement(o,{as:n,fontSize:".75rem",fontWeight:600,lineHeight:1.2,my:0,_css:{textTransform:"uppercase"}},t)};l.defaultProps={as:"h2"},t.a=l;var o=Object(a.default)(c.Text).withConfig({displayName:"Topic___StyledText",componentId:"gznimx-0"})(["",""],function(e){return e._css})},198:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(150),c=n(176),l=n(153);t.a=function(e){var t=e.src,n=e.caption,a=e.captionUrl,o=e.url,u=e.captionPx,s=r.a.createElement(c.a,{textAlign:"right",px:u},n),m=a?r.a.createElement(l.a,{to:a,withTextDecoration:!1},s):s,f=r.a.createElement(i.Image,{src:t,width:1});return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(l.a,{to:o},f):f,r.a.createElement(i.Box,{alignSelf:"flex-end"},m))}},215:function(e,t,n){"use strict";var a=n(151),r=n(152),i=n.n(r),c=n(0),l=n.n(c),o=n(150),u=n(7),s=n.n(u),m=n(187),f=n(154),d=function(){return l.a.createElement("svg",{width:"16",height:"14",viewBox:"0 0 20 14",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M0 0h20v2H0V0zm0 6h20v2H0V6zm0 6h20v2H0v-2z",fill:"#000000",fillRule:"evenodd"}))},p=n(153);function h(){var e=i()(["",""]);return h=function(){return e},e}var E=function(e){var t=e.onOpenSidebar;return function(e){return l.a.createElement(x,{width:1,boxShadow:"0 1px 0 rgba(0,0,0,0.15)",bg:"white",_css:{position:"fixed"}},l.a.createElement(b,{px:3,alignItems:"center",justifyContent:"start",flexDirection:"row",_css2:{height:"40px"}},l.a.createElement(o.Box,{alignSelf:"center",width:1/12},l.a.createElement(o.Button,{px:0,bg:"white",onClick:t},l.a.createElement(d,null))),l.a.createElement(o.Box,{alignSelf:"center",width:5/6},l.a.createElement(p.a,{to:"/",withTextDecoration:!1},l.a.createElement(o.Text,{fontFamily:"Exo",fontWeight:"bold"},e.site.siteMetadata.title)))))}},g=function(e){var t=e.onOpenSidebar;return l.a.createElement(f.b,{query:"1784012146",render:E({onOpenSidebar:t}),data:m})},x=Object(a.default)(o.Card).withConfig({displayName:"HeaderMobile___StyledCard",componentId:"rwat9b-0"})(["",""],function(e){return e._css}),b=Object(a.default)(o.Flex)(h(),function(e){return e._css2}),v=n(175),y=function(){return l.a.createElement(v.a,null,l.a.createElement(o.Flex,{py:4},l.a.createElement(o.Text,{fontFamily:400,fontSize:".625rem",lineHeight:1.2},"Powered by ",l.a.createElement(p.a,{to:"https://www.gatsbyjs.org/"},"Gatsby"),"  inspired by jekyll theme ",l.a.createElement(p.a,{to:"https://github.com/mmistakes/so-simple-theme"},"So Simple Theme ")," and ",l.a.createElement(p.a,{to:"https://www.vice.com"},"vice.com"))))},w=n(189),_=n(341),S=n(161),k=function(e){var t=e.children;return l.a.createElement(o.Box,{as:"ul",mb:2,pl:0},t)},O=function(e){var t=e.children,n=e.title;return l.a.createElement(j,{pt:4,_css:{fontFamily:"HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif",textTransform:"uppercase"}},n&&l.a.createElement(o.Text,{fontFamily:400,fontSize:".625rem",lineHeight:1.2},n),l.a.createElement(k,null,t))},j=Object(a.default)(o.Box).withConfig({displayName:"Navbar___StyledBox",componentId:"d98k89-0"})(["",""],function(e){return e._css}),T=function(e){var t=e.children;return l.a.createElement(D,{as:"li",mb:2,pl:0,_css:{"list-style-type":"none"}},t)},D=Object(a.default)(o.Box).withConfig({displayName:"ListItem___StyledBox",componentId:"sc-15j5pjv-0"})(["",""],function(e){return e._css}),H=function(e){var t=e.children,n=e.to;return l.a.createElement(T,null,l.a.createElement(p.a,{to:n,withTextDecoration:!1},l.a.createElement(o.Text,{fontWeight:600,lineHeight:1.2},t)))},C=function(){return l.a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",width:"24px"},l.a.createElement("title",null),l.a.createElement("g",{id:"cross",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}},l.a.createElement("line",{x1:"7",x2:"25",y1:"7",y2:"25"}),l.a.createElement("line",{x1:"7",x2:"25",y1:"25",y2:"7"})))};function B(){var e=i()(["",""]);return B=function(){return e},e}function z(){var e=i()(["",""]);return z=function(){return e},e}var F=function(e){var t=e.fieldValue;return l.a.createElement(H,{key:t,to:"/"+t},Object(S.sentence)(t))},I=function(e){var t=e.onCloseSidebar,n=e.isSidebarOpen;return function(e){return l.a.createElement(o.Box,{onClick:t},n&&l.a.createElement(W,{bg:"white",width:1,px:3,flexDirection:"column",_css:{position:"fixed",top:"0",left:"0",zIndex:250,height:"100vh"}},l.a.createElement(N,{bg:"white",onClick:t,px:0,width:1/6,_css2:{height:"60px",textAlign:"left"}},l.a.createElement(C,null)),l.a.createElement(O,null,l.a.createElement(H,{to:"/"},"Home"),l.a.createElement(H,{to:"/about-me"},"About Me")),l.a.createElement(O,{title:"category"},Object(_.a)(F,e.allMarkdownRemark.group),l.a.createElement(H,{to:"/tags/til"},"TIL"))))}},M=function(e){var t=e.onCloseSidebar,n=e.isSidebarOpen;return l.a.createElement(f.b,{query:"2398308108",render:I({onCloseSidebar:t,isSidebarOpen:n}),data:w})},W=Object(a.default)(o.Flex)(z(),function(e){return e._css}),N=Object(a.default)(o.Button)(B(),function(e){return e._css2}),V=n(159);function q(){var e=i()(["",""]);return q=function(){return e},e}function A(){var e=i()(["",""]);return A=function(){return e},e}var R=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isSidebarOpen:!1},t.openSidebar=function(){return t.setState({isSidebarOpen:!0})},t.closeSidebar=function(){return t.setState({isSidebarOpen:!1})},t}return s()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.state.isSidebarOpen;return l.a.createElement(V.a,null,l.a.createElement(M,{onCloseSidebar:this.closeSidebar,isSidebarOpen:t}),l.a.createElement(L,{flexDirection:"column",_css:{height:"100%"}},l.a.createElement(g,{onOpenSidebar:this.openSidebar,onCloseSidebar:this.closeSidebar}),l.a.createElement(P,{pt:"40px",_css2:{flexGrow:1,overflowY:"auto"}},e),l.a.createElement(y,null)))},t}(c.Component),L=Object(a.default)(o.Flex)(A(),function(e){return e._css}),P=Object(a.default)(o.Box)(q(),function(e){return e._css2}),G=n(193),J=function(e){var t=e.children,n=e.to;return l.a.createElement(p.a,{to:n,mx:2},l.a.createElement(o.Text,{color:"white",lineHeight:1.2},t))};function U(){var e=i()(["",""]);return U=function(){return e},e}function Q(){var e=i()(["",""]);return Q=function(){return e},e}var Y=function(e){var t=e.fieldValue;return l.a.createElement(J,{key:t,to:"/"+t},Object(S.sentence)(t))},K=function(){return l.a.createElement(f.b,{query:"158742571",render:function(e){return l.a.createElement(o.Flex,{flexDirection:"column",justifyContent:"center",alignItems:"center"},l.a.createElement(X,{bg:"black",py:2,px:3,mb:4,_css:{textTransform:"uppercase",borderRadius:"0 0 10px 10px"}},Object(_.a)(Y,e.allMarkdownRemark.group),l.a.createElement(J,{to:"/tags/til"},"TIL"),l.a.createElement(J,{to:"/about-me"},"About Me")),l.a.createElement(p.a,{to:"/",withTextDecoration:!1},l.a.createElement(o.Text,{fontFamily:"Exo",fontSize:"2.25rem"},e.site.siteMetadata.title)),l.a.createElement(Z,{fontFamily:"Exo",fontSize:"1.25rem",_css2:{fontStyle:"italic"}},"Just A Note"))},data:G})},X=Object(a.default)(o.Flex)(Q(),function(e){return e._css}),Z=Object(a.default)(o.Text)(U(),function(e){return e._css2}),$=(n(33),n(179)),ee=n.n($),te=function(e){return l.a.createElement(ee.a,Object.assign({},e,{minWidth:"64em"}))},ne=function(e){var t=e.children;return l.a.createElement(te,null,l.a.createElement(ae,{flexDirection:"column",alignItems:"center",_css:{borderTop:"5px solid #000"}},l.a.createElement(K,null),t,l.a.createElement(y,null)))},ae=Object(a.default)(o.Flex).withConfig({displayName:"Desktop___StyledFlex",componentId:"sc-15jbbmv-0"})(["",""],function(e){return e._css}),re=n(194),ie=n(337),ce=n(274),le=n(227),oe=n.n(le),ue=function(e){var t=e.pageData,n=e.location,a=e.children;return function(e){var r=e.site.siteMetadata,i=Object(ie.a)("title"),c=Object(ie.a)("description"),o=Object(ce.a)(["social","twitter","username"]),u=i(t)||i(r),s=c(t)||c(r),m=Object(ce.a)(["image","src"])(t),f=Object(ce.a)(["image","caption"])(t);return l.a.createElement(oe.a,{titleTemplate:"%s | "+i(r)},l.a.createElement("title",null,u),l.a.createElement("meta",{name:"description",content:s}),l.a.createElement("meta",{property:"og:url",content:n.href}),l.a.createElement("meta",{property:"og:title",content:u}),l.a.createElement("meta",{property:"og:description",content:s}),l.a.createElement("meta",{property:"og:image",content:m}),l.a.createElement("meta",{property:"og:image:alt",content:f}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.a.createElement("meta",{name:"twitter:creator",content:o(r)}),l.a.createElement("meta",{name:"twitter:title",content:u}),l.a.createElement("meta",{name:"twitter:description",content:s}),l.a.createElement("meta",{name:"twitter:image",content:m}),l.a.createElement("meta",{name:"twitter:image:alt",content:f}),a)}},se=function(e){var t=e.pageData,n=e.location,a=e.children;return l.a.createElement(f.b,{query:"2038369060",render:ue({pageData:t,location:n,children:a}),data:re})};function me(){var e=i()(['\n  body {\n    margin: 0;\n    height: 100%;\n  }\n  ::-webkit-scrollbar {\n    width: 0px;  /* remove scrollbar space */\n    background: transparent;  /* optional: just make scrollbar invisible */\n  }\n  blockquote {\n    font-family: "volkhov",serif;\n    font-style: italic;\n    font-size: 1rem;\n    line-height: 1.5;\n    margin-bottom: 1.5rem;\n    padding-left: 20px;\n    border-left: 8px solid #000;\n  }\n  a {\n    color: black;\n  }\n']);return me=function(){return e},e}var fe=Object(a.createGlobalStyle)(me()),de=(t.a=function(e){var t=e.children,n=e.location,a=e.pageData;return l.a.createElement(de,{_css:{fontFamily:"HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif"}},l.a.createElement(se,{location:n,pageData:a},l.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Exo",rel:"stylesheet"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Volkhov",rel:"stylesheet"})),l.a.createElement(fe,null),l.a.createElement(R,null,t),l.a.createElement(ne,null,t))},Object(a.default)(o.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-1dhfl9g-0"})(["",""],function(e){return e._css}))},216:function(e,t,n){"use strict";n(33);var a=n(0),r=n.n(a),i=n(150),c=n(337),l=n(215),o=n(195),u=n(175),s=function(e){var t=e.children;return r.a.createElement(i.Box,{pt:2},t)},m=function(e){var t=e.children;return r.a.createElement(i.Box,{py:3},t)},f=n(196),d=n(197),p=function(e){var t=e.children;return r.a.createElement(i.Text,{as:"h2",fontSize:"1rem",fontWeight:600,lineHeight:1.2,mt:0,mb:2},t)},h=function(e){var t=e.children;return r.a.createElement(i.Text,{fontSize:".875rem",fontWeight:400,lineHeight:1.6,mt:0,mb:2,color:"rgb(85, 85, 85)"},t)},E=n(176),g=n(153),x=n(198),b=n(159),v=function(e){var t=e.frontmatter,n=e.id,a=e.excerpt,i=e.fields,l=t.topic,o=t.image,u=t.title,f=t.date,b=i.path;return r.a.createElement(s,{key:n},l&&r.a.createElement(d.a,null,l),Object(c.a)("src",o)&&r.a.createElement(x.a,Object.assign({},o,{url:b})),r.a.createElement(g.a,{withTextDecoration:!1,to:b},r.a.createElement(m,null,r.a.createElement(p,null,u),r.a.createElement(h,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))),r.a.createElement(E.a,null,f),r.a.createElement("hr",null))};t.a=function(e){var t=e.posts,n=e.pageTitle,a=e.pageData,c=e.location;return r.a.createElement(l.a,{location:c,pageData:a},r.a.createElement(i.Flex,{flexDirection:"column"},r.a.createElement(b.a,null,r.a.createElement(x.a,{src:"https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",url:"https://unsplash.com/photos/IuLgi9PWETU",caption:"Photo By Danielle Maclnnes",captionUrl:"https://unsplash.com/@dsmacinnes",captionPx:3})),r.a.createElement(u.a,null,r.a.createElement(o.a,null,r.a.createElement(f.a,null,n)),t.map(v))))}}}]);
//# sourceMappingURL=1-1aebb8235864c2796434.js.map