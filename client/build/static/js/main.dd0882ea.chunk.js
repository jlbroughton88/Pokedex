(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,n){e.exports=n(43)},35:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),c=(n(35),n(9)),u=n(10);function l(){var e=Object(c.a)(["\n    background: #333;\n    color: #f4f4f4;\n    padding: 5px 10px;\n    text-align: center;\n"]);return l=function(){return e},e}var s=u.a.div(l()),p=function(){return r.a.createElement(s,null,r.a.createElement("h1",null,"Pokedex"))},m=n(11),f=n(12),h=n(14),d=n(13),g=n(15),k=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).fetchData=function(){fetch("https://pokeapi.co/api/v2/pokemon/".concat(n.props.name)).then((function(e){return e.json()})).then((function(e){return n.setState({pokemon:{id:e.id,name:e.name,stats:e.stats,height:e.height,weight:e.weight,sprites:e.sprites}})}))},n.state={pokemon:{id:0,name:"",stats:[],height:"",weight:"",sprites:[]},isLoading:!1},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e,t=this.props,n=t.name,a=t.url,o=t.id,i=this.state.pokemon,c=i.stats,u=i.height,l=i.weight,s=i.sprites;return r.a.createElement("div",{key:n,style:v,stats:c,height:u,weight:l},r.a.createElement("p",null,(e=n).charAt(0).toUpperCase()+e.slice(1)),r.a.createElement("a",{style:b,href:a},"View"),r.a.createElement("p",null,o),r.a.createElement("img",{src:s.front_default,alt:n}))}}]),t}(r.a.Component),v={width:"60%",padding:"5px 10px",textAlign:"center",alignSelf:"center",border:"1px #333 dotted",background:"#f4f4f4",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",margin:"1.5%",boxShadow:"0px 3px 15px rgba(0,0,0,0.2)"},b={textDecoration:"none",border:"black solid 1px",padding:"1.5%"},x=k;function E(){var e=Object(c.a)(["\n    height: 50px;\n    width: 80px;\n    align-self: center;\n    margin-top: 2.5%;\n    font-size: 0.8rem;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n"]);return E=function(){return e},e}var w=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).loadMore=function(){n.setState((function(e){return{currentLimit:e.currentLimit+20}}),(function(){return n.fetchData()}))},n.state={pokemonList:[],isLoading:!1,currentLimit:0,currentOffset:0},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this,t=this.state,n=t.currentLimit,a=t.currentOffset;fetch("https://pokeapi.co/api/v2/pokemon/?limit=".concat(n,"&offset=").concat(a)).then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:"".concat(e.name),url:"".concat(e.url)}}))})).then((function(t){return e.setState({pokemonList:t})})).catch((function(e){return console.log("parsing failed",e)}))}},{key:"render",value:function(){var e=this.state,t=e.pokemonList,n=e.isLoading;return r.a.createElement("div",{className:"container"},n?null:t.map((function(e){var t=e.name,n=e.url,a=e.id;return r.a.createElement(x,{key:t,name:t,id:a,url:n})})),r.a.createElement(j,{className:"loadBtn",onClick:this.loadMore},"Load More"))}}]),t}(r.a.Component),j=u.a.button(E()),y=w,O=function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(y,null))},L=function(){return r.a.createElement("div",null,"Hello from PokeSummary")},D=n(17),S=n(5),C=(n(40),function(){return r.a.createElement(D.a,null,r.a.createElement("div",{className:"App"}),r.a.createElement(S.a,{exact:!0,path:"/",component:O}),r.a.createElement(S.a,{path:"/poke",component:L}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.dd0882ea.chunk.js.map