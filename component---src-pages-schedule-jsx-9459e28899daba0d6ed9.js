(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Fgx0:function(e,t,n){"use strict";var r=n("rjfK"),a=n("pSXQ");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},KhQJ:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.Consumer=t.Provider=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({}),o=a.Provider,l=a.Consumer;t.Consumer=l,t.Provider=o},WFLp:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return g}));var r=n("VbXa"),a=n.n(r),o=n("q1tI"),l=n.n(o),u=n("TJpk"),c=n.n(u),i=n("IpnI"),s=n.n(i),f=n("tqR9"),p=n("TiAl"),d=n("8u8u"),m=n("eCt4"),h=n("5wwA"),y=n("ZHZf"),b=n("eff2"),v=n("CN8t"),E=n("Bl7J"),O=n("eAel"),T=(n("7KWQ"),n("CwJo"),function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return a()(t,e),t.prototype.render=function(){var e=this.props.data.allGoogleSheetSpeakersRow.nodes;return l.a.createElement("div",{className:"sessions-container"},l.a.createElement(c.a,{title:"Sessions | "+s.a.siteTitle}),l.a.createElement(E.a,{location:this.props.location},l.a.createElement(f.a,{className:"sessions-template",isOpen:this.state.menuOpen},l.a.createElement(c.a,{title:"Speaker Sessions | "+s.a.siteTitle}),l.a.createElement(p.a,{config:s.a,onClose:this.handleOnClose}),l.a.createElement(d.a,null,l.a.createElement(m.a,{className:"post-head",cover:s.a.blogPostHeaders},l.a.createElement(h.a,null,l.a.createElement(y.a,{logo:s.a.siteLogo,title:s.a.siteTitle}),l.a.createElement(b.a,{navigation:s.a.siteNavigation,onClick:this.handleOnClick}))),l.a.createElement("div",{className:"schedule-page"},l.a.createElement("h2",null,"SAP Online Track Schedule"),l.a.createElement("div",{className:"schedule-text"},"This is the latest list of registered sessions for SAP Online Track. If you are keen to run your own session, please register via our ",l.a.createElement("a",{href:"/keen-to-speak"},"google form"),"."),l.a.createElement("div",null,l.a.createElement(O.Table,{className:"schedule-table"},l.a.createElement(O.Thead,null,l.a.createElement(O.Tr,null,l.a.createElement(O.Th,null,"Time (UTC)"),l.a.createElement(O.Th,null,"Track 1"),l.a.createElement(O.Th,null,"Track 2"),l.a.createElement(O.Th,null,"Track 3"))),l.a.createElement(O.Tbody,null,e.map((function(e,t){return l.a.createElement(O.Tr,{key:t},l.a.createElement(O.Td,null,"10:00"),l.a.createElement(O.Td,null,e.titleofthesession),l.a.createElement(O.Td,null,e.yourname),l.a.createElement(O.Td,null,e.howlongisyoursession))})))))),l.a.createElement(v.a,{copyright:s.a.copyright,promoteGatsby:s.a.promoteGatsby})))))},t}(o.Component)),g="1813736436";t.default=T},eAel:function(e,t,n){"use strict";n("xtjI"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("LagC"),n("E5k/"),n("m210"),n("4DPX"),Object.defineProperty(t,"__esModule",{value:!0}),t.Td=t.Tbody=t.Th=t.Tr=t.Thead=t.Table=void 0;var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("KhQJ");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e,t){return Object.keys(e).filter((function(e){return-1===t.indexOf(e)})).reduce((function(t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,y({},n,e[n]))}),{})},v=function(e){return b(e,["inHeader","columnKey","headers"])},E=function(e){function t(e){var n;return c(this,t),(n=f(this,p(t).call(this,e))).state={headers:{}},n}return d(t,e),s(t,[{key:"render",value:function(){var e=this.state.headers,t=(this.props.className||"")+" responsiveTable";return a.default.createElement(o.Provider,{value:e},a.default.createElement("table",u({},v(this.props),{className:t})))}}]),t}(a.default.Component);t.Table=E;t.Thead=function(e){return a.default.createElement("thead",v(e),a.default.cloneElement(e.children,{inHeader:!0}))};var O=function(e){function t(e){var n;c(this,t),n=f(this,p(t).call(this,e));var r=e.headers;return r&&e.inHeader&&a.default.Children.map(e.children,(function(e,t){e&&(r[t]=e.props.children)})),n}return d(t,e),s(t,[{key:"render",value:function(){var e=this.props.children;return a.default.createElement("tr",v(this.props),e&&a.default.Children.map(e,(function(e,t){return e&&a.default.cloneElement(e,{key:t,columnKey:t})})))}}]),t}(a.default.Component);t.Tr=function(e){return a.default.createElement(o.Consumer,null,(function(t){return a.default.createElement(O,u({},e,{headers:t}))}))};t.Th=function(e){return a.default.createElement("th",v(e))};t.Tbody=function(e){return a.default.createElement("tbody",v(e))};var T=function(e){function t(){return c(this,t),f(this,p(t).apply(this,arguments))}return d(t,e),s(t,[{key:"render",value:function(){if(this.props.colSpan)return a.default.createElement("td",v(this.props));var e=this.props,t=e.headers,n=e.children,r=e.columnKey,o=(this.props.className||"")+" pivoted";return a.default.createElement("td",u({},v(this.props),{className:o}),a.default.createElement("div",{className:"tdBefore"},t[r]),n||a.default.createElement("div",null," "))}}]),t}(a.default.Component);t.Td=function(e){return a.default.createElement(o.Consumer,null,(function(t){return a.default.createElement(T,u({},e,{headers:t}))}))}},uSBc:function(e,t,n){var r=n("chL8"),a=n("lHo0"),o=n("1a8y"),l=n("emib").Reflect;e.exports=l&&l.ownKeys||function(e){var t=r.f(o(e)),n=a.f;return n?t.concat(n(e)):t}},xtjI:function(e,t,n){var r=n("P8UN"),a=n("uSBc"),o=n("5SQf"),l=n("Drra"),u=n("Fgx0");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=o(e),c=l.f,i=a(r),s={},f=0;i.length>f;)void 0!==(n=c(r,t=i[f++]))&&u(s,t,n);return s}})}}]);
//# sourceMappingURL=component---src-pages-schedule-jsx-9459e28899daba0d6ed9.js.map