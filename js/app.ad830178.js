(function(e){function t(t){for(var s,i,a=t[0],u=t[1],l=t[2],p=0,f=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},o=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12e8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("router-view")],1)},o=[],i=(n("7c55"),n("2877")),a={},u=Object(i["a"])(a,r,o,!1,null,null,null),l=u.exports,c=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Bienvenue sur notre Questionnaire !")]),n("div",[n("h3",[e._v("Nombre de questions")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nbQuestions,expression:"nbQuestions"}],staticClass:"slider",attrs:{type:"range",min:"1",max:"5",value:"5"},domProps:{value:e.nbQuestions},on:{__r:function(t){e.nbQuestions=t.target.value}}})]),n("el-button",{attrs:{type:"submit"},on:{click:e.parametre}},[e._v("Commencer le Questionnaire !")])],1)},f=[],d={name:"home",data:function(){return{nbQuestions:3}},methods:{parametre:function(){this.$router.push({name:"questions",query:{nbQuestions:this.nbQuestions}})}}},m=d,v=Object(i["a"])(m,p,f,!1,null,null,null),h=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Accueil",{attrs:{monmessage:"Inscription"}})],1)},_=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{},attrs:{id:"Main"}},[n("h2",[e._v("App Questionnaire")]),n("form",{attrs:{id:"app",action:"https://vuejs.org/",method:"post"},on:{submit:e.checkForm}},[n("el-card",{staticStyle:{width:"500px","margin-left":"auto","margin-right":"auto"}},[n("p",[n("label",{attrs:{for:"nom"}},[e._v("Nom ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nom,expression:"nom"}],attrs:{id:"nom",type:"text",name:"nom",required:""},domProps:{value:e.nom},on:{input:function(t){t.target.composing||(e.nom=t.target.value)}}})]),n("p",[n("label",{attrs:{for:"prenom"}},[e._v("Prénom ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.prenom,expression:"prenom"}],attrs:{id:"prenom",type:"text",name:"prenom",required:""},domProps:{value:e.prenom},on:{input:function(t){t.target.composing||(e.prenom=t.target.value)}}})]),n("p",[n("label",{attrs:{for:"entreprise"}},[e._v("Entreprise ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.entreprise,expression:"entreprise"}],attrs:{id:"entreprise",type:"text",name:"entreprise",required:""},domProps:{value:e.entreprise},on:{input:function(t){t.target.composing||(e.entreprise=t.target.value)}}})]),n("router-link",{attrs:{to:"/accueil",tag:"accueil"}},[n("el-button",{attrs:{value:"accueil",type:"submit"}},[e._v("Enregistrer")])],1)],1)],1)])},y=[],Q={name:"Accueil",props:{msg:String},data:function(){return{monmessage:this.msg}}},x=Q,j=(n("f894"),Object(i["a"])(x,g,y,!1,null,"07ade64c",null)),w=j.exports,q={name:"home",components:{Accueil:w}},O=q,P=Object(i["a"])(O,b,_,!1,null,null,null),k=P.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question",attrs:{id:"question"}},[n("question",{attrs:{jsonQuestion:e.jsonQuestions[e.index]},on:{reponseQuestionnaire:e.reponsesUtilisateur}})],1)},$=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question",staticStyle:{}},[n("el-card",{staticStyle:{width:"500px","margin-left":"auto","margin-right":"auto"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("h2",[e._v(e._s(e.jsonQuestion.libelle))])]),e._l(e.jsonQuestion.reponses,(function(t,s){return n("div",{key:t,staticClass:"text item",staticStyle:{"text-align":"left","margin-top":"10px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.jsonQuestion.reponses_utilisateur[s],expression:"jsonQuestion.reponses_utilisateur[index]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.jsonQuestion.reponses_utilisateur[s])?e._i(e.jsonQuestion.reponses_utilisateur[s],null)>-1:e.jsonQuestion.reponses_utilisateur[s]},on:{change:function(t){var n=e.jsonQuestion.reponses_utilisateur[s],r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=null,a=e._i(n,i);r.checked?a<0&&e.$set(e.jsonQuestion.reponses_utilisateur,s,n.concat([i])):a>-1&&e.$set(e.jsonQuestion.reponses_utilisateur,s,n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.jsonQuestion.reponses_utilisateur,s,o)}}}),e._v(e._s(t)+"\n    ")])})),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{on:{click:function(t){return e.$emit("reponseQuestionnaire",e.jsonQuestion.reponses_utilisateur)}}},[e._v("Question suivante")])],1)],2)],1)},A=[],C={data:function(){return{}},props:{jsonQuestion:Object}},E=C,M=Object(i["a"])(E,N,A,!1,null,null,null),J=M.exports,L=n("b476"),U={name:"questions",components:{question:J},data:function(){return{nbPoints:0,index:0,jsonQuestions:L,tabReponseUtilisateur:[]}},methods:{suivante:function(){var e=this.$route.query.nbQuestions;this.index<e-1?this.index++:this.$router.push({name:"resultat",query:{totalPoints:this.nbPoints,nbQuestions:this.$route.query.nbQuestions,tabReponseUtilisateur:this.tabReponseUtilisateur}})},reponsesUtilisateur:function(e){null!=e&&(JSON.stringify(e)===JSON.stringify(this.jsonQuestions[this.index].reponses_utilisateur)&&this.nbPoints++,this.tabReponseUtilisateur[this.index]=this.jsonQuestions[this.index],this.suivante())}}},R=U,F=Object(i["a"])(R,S,$,!1,null,null,null),B=F.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"resultat"},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("h1",[e._v("Votre Résultat")])]),n("div",[n("h3",{staticClass:"resultat"},[e._v(e._s(e.totalPoints)+" / "+e._s(e.nbQuestions))])]),n("p",[e._v("Cliquez sur le bouton Home pour revenir à l'accueil")])])],1)},H=[],I=(n("c5f6"),{name:"resultat",data:function(){return{totalPoints:Number,nbQuestions:Number}},mounted:function(){this.totalPoints=this.$route.query.totalPoints,this.nbQuestions=this.$route.query.nbQuestions},methods:{}}),V=I,W=Object(i["a"])(V,T,H,!1,null,null,null),z=W.exports;s["default"].use(c["a"]);var G=new c["a"]({routes:[{path:"/",name:"inscription",component:k},{path:"/accueil",name:"accueil",component:h},{path:"/questionnaire",name:"questions",component:B},{path:"/resultat",name:"resultat",component:z}]}),D=n("9483");Object(D["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var K=n("5c96"),X=n.n(K);n("0fae");s["default"].use(X.a),s["default"].config.productionTip=!1,new s["default"]({router:G,render:function(e){return e(l)}}).$mount("#app")},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var s=n("5c48"),r=n.n(s);r.a},b476:function(e){e.exports=JSON.parse('[{"libelle":"Capitale de l\'Autriche","reponses":["Vienne","Prague","Toulouse","Guéret"],"bonne_reponses":[true,false,false,false],"reponses_utilisateur":[false,false,false,false]},{"libelle":"Le Brexit concerne quel pays ?","reponses":["France","Allemagne","Royaume-Uni","Islande"],"bonne_reponses":[false,false,true,false],"reponses_utilisateur":[false,false,false,false]},{"libelle":"La bataille de Marignan s\'est déroulé en quelle année ?","reponses":["1487","1515","2001","1200"],"bonne_reponses":[false,true,false,false],"reponses_utilisateur":[false,false,false,false]},{"libelle":"Qui raconte les histoires de Sherlock Holmes ?","reponses":["Watson","James Moriarty","Winston Churchill","Jacob Frye"],"bonne_reponses":[true,false,false,false],"reponses_utilisateur":[false,false,false,false]},{"libelle":"Qu\'est-ce qui provoque les marées","reponses":["Le souffle d\'un enfant","La Lune","Le Soleil","Le Mont-Blanc"],"bonne_reponses":[false,true,false,false],"reponses_utilisateur":[false,false,false,false]}]')},f894:function(e,t,n){"use strict";var s=n("12e8"),r=n.n(s);r.a}});
//# sourceMappingURL=app.ad830178.js.map