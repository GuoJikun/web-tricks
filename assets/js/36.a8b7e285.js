(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{539:function(e,t,r){"use strict";r.r(t);var a={mounted:function(){this.drawDot()},methods:{drawDot:function(){var e=document.querySelector("#canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl"),r=t.createShader(t.VERTEX_SHADER);t.shaderSource(r,"void main(){gl_Position = vec4(0.0, 0.0, 0.0, 1.0);gl_PointSize = 10.0;}"),t.compileShader(r);var a=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(a,"void main(){gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); }"),t.compileShader(a);var o=t.createProgram();t.attachShader(o,r),t.attachShader(o,a),t.linkProgram(o),t.useProgram(o),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.POINTS,0,1)}}},o=r(35),n=Object(o.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[t("canvas",{attrs:{id:"canvas"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);