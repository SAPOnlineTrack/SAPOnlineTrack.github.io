(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9/lc":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return S}));var a=n("VbXa"),l=n.n(a),s=n("q1tI"),o=n.n(s),r=n("TJpk"),i=n.n(r),c=n("IpnI"),u=n.n(c),m=n("tqR9"),p=n("TiAl"),h=n("8u8u"),E=n("eCt4"),f=n("5wwA"),d=n("ZHZf"),g=n("eff2"),w=n("CN8t"),k=n("Bl7J"),T=(n("SnoN"),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t.convertTwitterHandleToHRef=function(e){return null===e?"":"https://twitter.com/"+e.substr(1)},t}return l()(t,e),t.prototype.render=function(){var e=this,t=this.props.data.allGoogleSheetSpeakersRow.nodes;return o.a.createElement("div",{className:"sessions-container"},o.a.createElement(i.a,{title:"Sessions | "+u.a.siteTitle}),o.a.createElement(k.a,{location:this.props.location},o.a.createElement(m.a,{className:"sessions-template",isOpen:this.state.menuOpen},o.a.createElement(i.a,{title:"Speaker Sessions | "+u.a.siteTitle}),o.a.createElement(p.a,{config:u.a,onClose:this.handleOnClose}),o.a.createElement(h.a,null,o.a.createElement(E.a,{className:"post-head",cover:u.a.blogPostHeaders},o.a.createElement(f.a,null,o.a.createElement(d.a,{logo:u.a.siteLogo,title:u.a.siteTitle}),o.a.createElement(g.a,{navigation:u.a.siteNavigation,onClick:this.handleOnClick}))),o.a.createElement("div",{class:"sessions-page"},o.a.createElement("h2",null,"SAP Online Track Session List"),o.a.createElement("div",{class:"sessions-text"},"This is the latest list of registered sessions for SAP Online Track. If you are keen to run your own session, please register via our ",o.a.createElement("a",{href:"/keen-to-speak"},"google form"),"."),o.a.createElement("table",{className:"sessions-table"},o.a.createElement("tr",null,o.a.createElement("th",null,"Track"),o.a.createElement("th",null,"Title of Session"),o.a.createElement("th",null,"Twitter Handle"),o.a.createElement("th",null,"SCN Handle")),t.map((function(t,n){return o.a.createElement("tr",null,o.a.createElement("td",null,t.track),o.a.createElement("td",null,t.titleofthesession),o.a.createElement("td",null,o.a.createElement("a",{href:e.convertTwitterHandleToHRef(t.twitterhandle)},t.twitterhandle)),o.a.createElement("td",null,o.a.createElement("a",{href:"https://people.sap.com/"+t.useronthesapcommunity},t.useronthesapcommunity)))})))),o.a.createElement(w.a,{copyright:u.a.copyright,promoteGatsby:u.a.promoteGatsby})))))},t}(s.Component)),S="2866342934";t.default=T}}]);
//# sourceMappingURL=component---src-pages-sessions-jsx-8b30412e6f093d1b8338.js.map