(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(39)},18:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(10),l=t.n(r),o=(t(18),t(3)),s=t(11),m=t.n(s);t(38);var i=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),i=s[0],u=s[1];return c.a.createElement("div",null,c.a.createElement("nav",{style:{backgroundColor:"rgb(239, 100, 55)"},className:"navbar navbar-light"},c.a.createElement("p",{className:"text-white h4"},c.a.createElement("b",null,"Similiar Tv shows"))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card mt-5"},c.a.createElement("div",{className:"card-body"},c.a.createElement("b",null,"Search similar shows like the one you like most search below in text box"),c.a.createElement("center",null,c.a.createElement("input",{className:"form-control mt-3 ",onKeyUp:function(e){r(e.target.value)},autoFocus:!0}),c.a.createElement("button",{type:"button",onClick:function(){m.a.get("https://similar.tv/api/v1/shows/search",{params:{search:t}}).then(function(e){u(e.data.shows)})},className:" mt-3 btn btn-primary"},"Get shows")))),c.a.createElement("div",{className:"mt-5 row"},i.map(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col xl-4 lg-4 sm-12 md-6 xs-12"},c.a.createElement("div",{className:"card",style:{width:"18rem"}},c.a.createElement("img",{className:"card-img-top",src:"https://similar.tv".concat(e.image_path),alt:e.name}),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},e.name)))))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(i,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.1dc7c6e0.chunk.js.map