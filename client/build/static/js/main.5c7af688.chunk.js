(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(t,e,n){t.exports=n(43)},35:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(21),i=n.n(r),c=(n(35),n(22));function u(){var t=Object(c.a)(["\n    background: #333;\n    color: #f4f4f4;\n    padding: 5px 10px;\n    text-align: center;\n"]);return u=function(){return t},t}var l=n(23).a.div(u()),s=function(){return o.a.createElement(l,null,o.a.createElement("h1",null,"Pokedex"))},m=n(9),h=n(10),p=n(13),f=n(11),d=n(14),k=n(12),g=function(t){function e(t){var n;return Object(m.a)(this,e),(n=Object(p.a)(this,Object(f.a)(e).call(this,t))).fetchData=function(){fetch("https://pokeapi.co/api/v2/pokemon/".concat(n.props.name)).then((function(t){return t.json()})).then((function(t){return n.setState({pokemon:{id:t.id,name:t.name,stats:t.stats,height:t.height,weight:t.weight,sprites:t.sprites}},(function(){return console.log(n.state.pokemon)}))}))},n.state={pokemon:{id:0,name:"",stats:[],height:"",weight:"",sprites:[]},isLoading:!1},n}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var t,e=this.props,n=e.name,a=(e.url,e.id),r=this.state.pokemon,i=r.stats,c=r.height,u=r.weight,l=r.sprites;return o.a.createElement("div",{key:n,style:v,stats:i,height:c,weight:u},o.a.createElement("p",null,(t=n).charAt(0).toUpperCase()+t.slice(1)),o.a.createElement(k.b,{to:"/poke/".concat(n)},"View"),o.a.createElement("p",null,a),o.a.createElement("img",{src:l.front_default,alt:n}))}}]),e}(o.a.Component),v={width:"60%",padding:"5px 10px",textAlign:"center",alignSelf:"center",border:"1px #333 dotted"},E=g,b=function(t){function e(t){var n;return Object(m.a)(this,e),(n=Object(p.a)(this,Object(f.a)(e).call(this,t))).loadMore=function(){n.setState((function(t){return{currentLimit:t.currentLimit+20}}),(function(){return n.fetchData()}))},n.state={pokemonList:[],isLoading:!1,currentLimit:0,currentOffset:0},n}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this,e=this.state,n=e.currentLimit,a=e.currentOffset;fetch("https://pokeapi.co/api/v2/pokemon/?limit=".concat(n,"&offset=").concat(a)).then((function(t){return t.json()})).then((function(t){return t.results.map((function(t){return{name:"".concat(t.name),url:"".concat(t.url)}}))})).then((function(e){return t.setState({pokemonList:e})})).catch((function(t){return console.log("parsing failed",t)}))}},{key:"render",value:function(){var t=this.state,e=t.pokemonList,n=t.isLoading;return o.a.createElement("div",{className:"container"},n?null:e.map((function(t){var e=t.name,n=t.url,a=t.id;return o.a.createElement(E,{key:e,name:e,id:a,url:n})})),o.a.createElement("button",{className:"loadMore",onClick:this.loadMore},"Load More"))}}]),e}(o.a.Component),w=function(){return o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(b,null))},j=function(){return o.a.createElement("div",null,"Hello from PokeSummary")},O=n(5),y=(n(42),function(){return o.a.createElement(k.a,null,o.a.createElement("div",{className:"App"}),o.a.createElement(O.a,{exact:!0,path:"/",component:w}),o.a.createElement(O.a,{path:"/poke",component:j}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.5c7af688.chunk.js.map