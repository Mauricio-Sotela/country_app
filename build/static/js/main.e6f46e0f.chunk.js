(this["webpackJsonploading-spinner"]=this["webpackJsonploading-spinner"]||[]).push([[0],{24:function(e,t,n){e.exports=n(51)},29:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(19),c=n.n(l),u=(n(29),n(30),n(3)),o=n(20),i=n(21);u.b.add(o.a,i.a);var s=n(4),m=n(5),p=n(7),g=n(6),h=n(22);var d=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement(h.a,{icon:"spinner",className:"icon",spin:!0}))},f=n(23),y=n.n(f),E=function(e){if(e){var t=e.toString();return"".concat(t.slice(0,2),".").concat(t.slice(2,5),".").concat(t.slice(5))}},v=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={country:"Germany"},e.handleChange=function(t){e.setState({country:t.target.value,map:"https://www.google.com/maps/place/".concat(t.target.value,"/")})},e.handleSubmit=function(t){"Germany"!==e.state.country&&t.preventDefault();var n={country:e.state.country};y.a.get("https://restcountries.eu/rest/v2/name/".concat(n.country)).then((function(t){var n=t.data[0];console.log(n);var a=n.name,l=n.capital,c=n.population,u=n.subregion,o=n.timezones,i=n.flag;e.setState({name:a,capital:l,population:c,subregion:u,timezones:o,languages:[n.languages.map((function(e){return r.a.createElement("span",null,e.name,", ")}))],flag:i,curName:n.currencies[0].name,curSymbol:n.currencies[0].symbol})}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({country:"Germany"}),e.handleSubmit()}),100)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Country Name:",r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,placeholder:"Write a country name"})),r.a.createElement("button",{type:"submit"},"Search")),r.a.createElement("h2",null,this.state.name),r.a.createElement("img",{src:this.state.flag,alt:this.state.country,width:"200px"}),r.a.createElement("p",null,r.a.createElement("strong",null,"Region: "),"(",this.state.subregion,")"),r.a.createElement("p",null,r.a.createElement("strong",null,"Capital: "),this.state.capital),r.a.createElement("p",null,r.a.createElement("strong",null,"population: "),E(this.state.population)),r.a.createElement("p",null,r.a.createElement("strong",null,"currency: "),this.state.curName,"(",this.state.curSymbol,")"),r.a.createElement("p",null,r.a.createElement("strong",null,"language(s): "),this.state.languages))}}]),n}(r.a.Component),b=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={userInput:"",loading:!0},a.handleChange=function(e){a.setState({userInput:e.target.value.trim()})},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({loading:!1})}),2e3)}},{key:"render",value:function(){return this.state.loading?r.a.createElement(d,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Country App"),r.a.createElement(v,{data:"sendSomething"}))}}]),n}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e6f46e0f.chunk.js.map