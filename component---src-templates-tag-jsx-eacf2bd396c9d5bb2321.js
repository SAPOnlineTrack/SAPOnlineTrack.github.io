(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Qa7F:function(e,t,a){"use strict";a("pJf4");var n=a("VbXa"),r=a.n(n),o=a("q1tI"),s=a.n(o),i=a("Wbzz"),p=(a("oEGL"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.avatar,a=e.name;return t&&a?s.a.createElement("img",{className:"author-thumb",src:t,alt:a,"data-pin-nopin":"true"}):null},t}(s.a.Component)),l=a("5jRm"),c=a("IpnI"),u=a.n(c),m=a("r8uE"),h=a("meSL"),f=a("w17c"),d=a("i9b2"),g=a("kEWb"),E=(a("ELO7"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a=(e=this.props.postEdges,t=this.props.postAuthors,e.map((function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,author:g.a.getAuthor(t,e.node.frontmatter.author,u.a.blogAuthorId),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}})));return s.a.createElement("div",null,a.map((function(e){var t=e.title,a=e.path,n=e.excerpt,r=e.author,o=e.tags,c=e.date,u=e.post_class?e.post_class:"post";return s.a.createElement(h.a,{className:u,key:t},s.a.createElement(f.a,null,s.a.createElement("h2",{className:"post-title"},s.a.createElement(i.Link,{to:a},t))),s.a.createElement("section",{className:"post-excerpt"},s.a.createElement("p",null,n," ",s.a.createElement(i.Link,{className:"read-more",to:a},"»"))),s.a.createElement("footer",{className:"post-meta"},s.a.createElement(p,{avatar:r.image,name:r.name}),s.a.createElement(m.a,{url:"/author/"+r.uid,name:r.name}),s.a.createElement(l.a,{prefix:" on ",tags:o}),s.a.createElement(d.a,{date:c})))})))},t}(s.a.Component));t.a=E},ZUrO:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return w}));var n=a("VbXa"),r=a.n(n),o=a("q1tI"),s=a.n(o),i=a("TJpk"),p=a.n(i),l=a("Qa7F"),c=a("IpnI"),u=a.n(c),m=a("tqR9"),h=a("TiAl"),f=a("8u8u"),d=a("eCt4"),g=a("5wwA"),E=a("ZHZf"),v=a("eff2"),y=a("nGjg"),N=a("y4qz"),x=a("CN8t"),b=a("tQ7e"),O=a("Bl7J"),C=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.tag,a=e.nodes,n=e.page,r=e.pages,o=e.total,i=e.limit,c=e.prev,C=e.next,w=this.props.data.authors.edges;return s.a.createElement(O.a,{location:this.props.location},s.a.createElement(m.a,{isOpen:this.state.menuOpen},s.a.createElement(p.a,{title:'Posts tagged as "'+t+'" | '+u.a.siteTitle}),s.a.createElement(h.a,{config:u.a,onClose:this.handleOnClose}),s.a.createElement(f.a,null,s.a.createElement("div",{className:"tag-template"},s.a.createElement(d.a,{className:"tag-head",cover:t.featureImage},s.a.createElement(g.a,null,s.a.createElement(E.a,{logo:u.a.siteLogo,title:u.a.siteTitle}),s.a.createElement(v.a,{navigation:u.a.siteNavigation,onClick:this.handleOnClick})),s.a.createElement("div",{className:"vertical"},s.a.createElement("div",{className:"main-header-content inner"},s.a.createElement(y.a,{text:t}),s.a.createElement(N.a,{text:t.description||"A "+o+"-post collection"})))),s.a.createElement(b.a,{page:n,pages:r,total:o,limit:i,prev:c,next:C},s.a.createElement(l.a,{postEdges:a,postAuthors:w}))),s.a.createElement(x.a,{copyright:u.a.copyright,promoteGatsby:u.a.promoteGatsby}))))},t}(s.a.Component),w="333490751";t.default=C},eG8B:function(e,t,a){"use strict";var n=a("VbXa"),r=a.n(n),o=a("q1tI"),s=a.n(o),i=a("TSYQ"),p=a.n(i),l=(a("2Tzu"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=p()("content",this.props.className);return s.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(s.a.Component));t.a=l},nGjg:function(e,t,a){"use strict";var n=a("VbXa"),r=a.n(n),o=a("q1tI"),s=a.n(o),i=(a("I40e"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?s.a.createElement("h1",{className:"page-title"},e):null},t}(s.a.Component));t.a=i},tQ7e:function(e,t,a){"use strict";var n=a("VbXa"),r=a.n(n),o=a("q1tI"),s=a.n(o),i=a("eG8B"),p=(a("E5k/"),a("4DPX"),a("Wbzz")),l=(a("rVe6"),function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a}),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){if(this.props.url){var e="nav-link";this.props.className&&(e=e+" "+this.props.className);var t=l(this.props,[]);return delete t.style,delete t.className,delete t.text,delete t.url,s.a.createElement(p.Link,Object.assign({to:this.props.url},t,{className:e}),this.props.text)}return null},t}(s.a.Component),u=(a("iPNO"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,a=e.pages,n=e.prev,r=e.next;return s.a.createElement("nav",{className:"pagination"},s.a.createElement(c,{className:"newer-posts",url:n,text:"← Newer Posts"}),s.a.createElement("span",{className:"page-number"},"Page ",t," of ",a),s.a.createElement(c,{className:"older-posts",url:r,text:"Older Posts →"}))},t}(s.a.Component)),m=(a("QweS"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,a=e.pages,n=e.prev,r=e.next,o=e.children,p="";return t>1&&(p+=" paged"),s.a.createElement(i.a,{className:p},s.a.createElement("div",{className:"extra-pagination inner"},s.a.createElement(u,{page:t,pages:a,prev:n,next:r})),o,s.a.createElement(u,{page:t,pages:a,prev:n,next:r}))},t}(s.a.Component));t.a=m},y4qz:function(e,t,a){"use strict";var n=a("VbXa"),r=a.n(n),o=a("q1tI"),s=a.n(o),i=(a("FxiC"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?s.a.createElement("h2",{className:"page-description"},e):null},t}(s.a.Component));t.a=i}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-eacf2bd396c9d5bb2321.js.map