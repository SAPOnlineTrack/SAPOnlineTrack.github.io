(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9/lc":function(e,t,a){"use strict";a.r(t);var n=a("VbXa"),r=a.n(n),l=a("q1tI"),s=a.n(l),o=a("TJpk"),i=a.n(o),c=a("IpnI"),u=a.n(c),p=a("tqR9"),m=a("TiAl"),d=a("8u8u"),f=a("eCt4"),h=a("5wwA"),v=a("ZHZf"),E=a("eff2"),g=a("CN8t"),y=a("Bl7J");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var w=a("TSYQ"),k=a.n(w),O=(a("pJf4"),a("QA0p"),s.a.createContext({}));O.Consumer,O.Provider;function T(e,t){var a=Object(l.useContext)(O);return e||a[t]||t}var N=s.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.striped,l=e.bordered,o=e.borderless,i=e.hover,c=e.size,u=e.variant,p=e.responsive,m=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),d=T(a,"table"),f=k()(n,d,u&&d+"-"+u,c&&d+"-"+c,r&&d+"-striped",l&&d+"-bordered",o&&d+"-borderless",i&&d+"-hover"),h=s.a.createElement("table",b({},m,{className:f,ref:t}));if(p){var v=d+"-responsive";return"string"==typeof p&&(v=v+"-"+p),s.a.createElement("div",{className:v},h)}return h}));a("SnoN");a.d(t,"pageQuery",(function(){return C}));var S=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t.convertTwitterHandleToHRef=function(e){return null===e?"":"https://twitter.com/"+e.substr(1)},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.data.allGoogleSheetSpeakersRow.nodes;return s.a.createElement("div",{className:"sessions-container"},s.a.createElement(i.a,{title:"Sessions | "+u.a.siteTitle}),s.a.createElement(y.a,{location:this.props.location},s.a.createElement(p.a,{className:"sessions-template",isOpen:this.state.menuOpen},s.a.createElement(i.a,{title:"Speaker Sessions | "+u.a.siteTitle}),s.a.createElement(m.a,{config:u.a,onClose:this.handleOnClose}),s.a.createElement(d.a,null,s.a.createElement(f.a,{className:"post-head",cover:u.a.blogPostHeaders},s.a.createElement(h.a,null,s.a.createElement(v.a,{logo:u.a.siteLogo,title:u.a.siteTitle}),s.a.createElement(E.a,{navigation:u.a.siteNavigation,onClick:this.handleOnClick}))),s.a.createElement("div",{className:"sessions-page"},s.a.createElement("h2",null,"SAP Online Track Session List"),s.a.createElement("div",{className:"sessions- text"},"This is the latest list of registered sessions for SAP Online Track. If you are keen to run your own session, please register via our ",s.a.createElement("a",{href:"/keen-to-speak"},"google form"),"."),s.a.createElement("div",null,s.a.createElement(N,{striped:!0,bordered:!0,hover:!0,size:"sm",responsive:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Track"),s.a.createElement("th",null,"Title"),s.a.createElement("th",null,"Duration"),s.a.createElement("th",null,"Language"),s.a.createElement("th",null,"Speaker Twitter Handle"),s.a.createElement("th",null,"Speaker SCN Handle"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,t.track),s.a.createElement("td",null,t.titleofthesession),s.a.createElement("td",null,t.howlongisyoursession),s.a.createElement("td",null,t.languageofyoursession),s.a.createElement("td",null,s.a.createElement("a",{href:e.convertTwitterHandleToHRef(t.twitterhandle)},t.twitterhandle)),s.a.createElement("td",null,s.a.createElement("a",{href:"https://people.sap.com/"+t.useronthesapcommunity},t.useronthesapcommunity)))})))))),s.a.createElement(g.a,{copyright:u.a.copyright,promoteGatsby:u.a.promoteGatsby})))))},t}(l.Component),C="2866342934";t.default=S},QA0p:function(e,t,a){"use strict";a("E5k/"),a("pJf4"),t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.propTypes,l=a.defaultProps,s=a.allowFallback,o=void 0!==s&&s,i=a.displayName,c=void 0===i?e.name||e.displayName:i,u=function(t,a){return e(t,a)};return Object.assign(r.default.forwardRef||!o?r.default.forwardRef(u):function(e){return u(e,null)},{displayName:c,propTypes:n,defaultProps:l})};var n,r=(n=a("q1tI"))&&n.__esModule?n:{default:n}}}]);
//# sourceMappingURL=component---src-pages-sessions-jsx-f6e7da930b1f4ee670b0.js.map