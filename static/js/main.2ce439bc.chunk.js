(this["webpackJsonprobo-friends"]=this["webpackJsonprobo-friends"]||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=n(5),i=n(1),l=n(14),u=n(15);n(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h={searchField:""},d={isPending:!1,robots:[],error:""},b=(n(27),n(3)),m=n(4),E=n(7),p=n(6),g=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"profileImage"}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},f=function(e){var t=e.robots.map((function(e){return a.a.createElement(g,{key:e.id,id:e.id,name:e.name,email:e.email})}));return a.a.createElement("div",null,t)},v=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa1"},a.a.createElement("input",{className:"pa3 ba2 b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},O=(n(28),function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid white",height:"500px"}},e.children)}),R=function(e){Object(E.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(m.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h2",null,"Oops. That is not good!"):this.props.children}}]),n}(r.Component),S=(n(29),function(e){Object(E.a)(n,e);var t=Object(p.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h2",null,"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"Robo Friends"),a.a.createElement(v,{searchChange:n}),a.a.createElement(O,null,a.a.createElement(R,null,a.a.createElement(f,{robots:c}))))}}]),n}(r.Component)),y=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(S),j=Object(l.createLogger)(),C=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),w=Object(i.d)(C,Object(i.a)(u.a,j));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:w},a.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.2ce439bc.chunk.js.map