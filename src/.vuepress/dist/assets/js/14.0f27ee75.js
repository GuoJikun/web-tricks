(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{313:function(t,e,n){"use strict";n.r(e);n(300),n(301);var i=n(302),c=n.n(i),a={name:"VueGittalk",data:function(){return{clientId:"f510b99ce0977fa9d1b1",clientSecret:"7fe1d570c1346f8067bd48c819cd0b308b7f4469",id:this.$route.name}},mounted:function(){this.createGitTalk()},methods:{createGitTalk:function(){new c.a({clientID:this.clientId,clientSecret:this.clientSecret,repo:"web-tricks",owner:"jikunguo",admin:["jikunguo"],id:location.pathname,distractionFreeMode:!1}).render(this.id)}},computed:{}},r=n(16),d=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.id}})}),[],!1,null,null,null);e.default=d.exports}}]);