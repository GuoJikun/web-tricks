(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{186:function(t,n,s){var a=s(70)("wks"),e=s(71),r=s(10).Symbol,o="function"==typeof r;(t.exports=function(t){return a[t]||(a[t]=o&&r[t]||(o?r:e)("Symbol."+t))}).store=a},187:function(t,n){t.exports={}},188:function(t,n,s){var a=s(66);t.exports=function(t){return Object(a(t))}},189:function(t,n,s){var a=s(186)("unscopables"),e=Array.prototype;null==e[a]&&s(65)(e,a,{}),t.exports=function(t){e[a][t]=!0}},190:function(t,n,s){var a=s(37).f,e=s(22),r=s(186)("toStringTag");t.exports=function(t,n,s){t&&!e(t=s?t:t.prototype,r)&&a(t,r,{configurable:!0,value:n})}},192:function(t,n,s){var a=s(16),e=s(68),r=s(186)("match");t.exports=function(t){var n;return a(t)&&(void 0!==(n=t[r])?!!n:"RegExp"==e(t))}},193:function(t,n,s){for(var a=s(197),e=s(101),r=s(67),o=s(10),p=s(65),c=s(187),u=s(186),i=u("iterator"),v=u("toStringTag"),l=c.Array,_={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},k=e(_),f=0;f<k.length;f++){var g,d=k[f],h=_[d],x=o[d],y=x&&x.prototype;if(y&&(y[i]||p(y,i,l),y[v]||p(y,v,d),c[d]=l,h))for(g in a)y[g]||r(y,g,a[g],!0)}},196:function(t,n,s){"use strict";var a,e,r=s(205),o=RegExp.prototype.exec,p=String.prototype.replace,c=o,u=(a=/a/,e=/b*/g,o.call(a,"a"),o.call(e,"a"),0!==a.lastIndex||0!==e.lastIndex),i=void 0!==/()??/.exec("")[1];(u||i)&&(c=function(t){var n,s,a,e,c=this;return i&&(s=new RegExp("^"+c.source+"$(?!\\s)",r.call(c))),u&&(n=c.lastIndex),a=o.call(c,t),u&&a&&(c.lastIndex=c.global?a.index+a[0].length:n),i&&a&&a.length>1&&p.call(a[0],s,(function(){for(e=1;e<arguments.length-2;e++)void 0===arguments[e]&&(a[e]=void 0)})),a}),t.exports=c},197:function(t,n,s){"use strict";var a=s(189),e=s(198),r=s(187),o=s(39);t.exports=s(199)(Array,"Array",(function(t,n){this._t=o(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,s=this._i++;return!t||s>=t.length?(this._t=void 0,e(1)):e(0,"keys"==n?s:"values"==n?t[s]:[s,t[s]])}),"values"),r.Arguments=r.Array,a("keys"),a("values"),a("entries")},198:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},199:function(t,n,s){"use strict";var a=s(103),e=s(99),r=s(67),o=s(65),p=s(187),c=s(200),u=s(190),i=s(201),v=s(186)("iterator"),l=!([].keys&&"next"in[].keys()),_=function(){return this};t.exports=function(t,n,s,k,f,g,d){c(s,n,k);var h,x,y,m=function(t){if(!l&&t in I)return I[t];switch(t){case"keys":case"values":return function(){return new s(this,t)}}return function(){return new s(this,t)}},b=n+" Iterator",w="values"==f,S=!1,I=t.prototype,C=I[v]||I["@@iterator"]||f&&I[f],E=C||m(f),R=f?w?m("entries"):E:void 0,L="Array"==n&&I.entries||C;if(L&&(y=i(L.call(new t)))!==Object.prototype&&y.next&&(u(y,b,!0),a||"function"==typeof y[v]||o(y,v,_)),w&&C&&"values"!==C.name&&(S=!0,E=function(){return C.call(this)}),a&&!d||!l&&!S&&I[v]||o(I,v,E),p[n]=E,p[b]=_,f)if(h={values:w?E:m("values"),keys:g?E:m("keys"),entries:R},d)for(x in h)x in I||r(I,x,h[x]);else e(e.P+e.F*(l||S),n,h);return h}},200:function(t,n,s){"use strict";var a=s(104),e=s(72),r=s(190),o={};s(65)(o,s(186)("iterator"),(function(){return this})),t.exports=function(t,n,s){t.prototype=a(o,{next:e(1,s)}),r(t,n+" Iterator")}},201:function(t,n,s){var a=s(22),e=s(188),r=s(73)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=e(t),a(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},202:function(t,n,s){"use strict";var a=s(216)(!0);t.exports=function(t,n,s){return n+(s?a(t,n).length:1)}},203:function(t,n,s){"use strict";var a=s(217),e=RegExp.prototype.exec;t.exports=function(t,n){var s=t.exec;if("function"==typeof s){var r=s.call(t,n);if("object"!=typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return e.call(t,n)}},204:function(t,n,s){"use strict";s(218);var a=s(67),e=s(65),r=s(20),o=s(66),p=s(186),c=s(196),u=p("species"),i=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),v=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var s="ab".split(t);return 2===s.length&&"a"===s[0]&&"b"===s[1]}();t.exports=function(t,n,s){var l=p(t),_=!r((function(){var n={};return n[l]=function(){return 7},7!=""[t](n)})),k=_?!r((function(){var n=!1,s=/a/;return s.exec=function(){return n=!0,null},"split"===t&&(s.constructor={},s.constructor[u]=function(){return s}),s[l](""),!n})):void 0;if(!_||!k||"replace"===t&&!i||"split"===t&&!v){var f=/./[l],g=s(o,l,""[t],(function(t,n,s,a,e){return n.exec===c?_&&!e?{done:!0,value:f.call(n,s,a)}:{done:!0,value:t.call(s,n,a)}:{done:!1}})),d=g[0],h=g[1];a(String.prototype,t,d),e(RegExp.prototype,l,2==n?function(t,n){return h.call(t,this,n)}:function(t){return h.call(t,this)})}}},205:function(t,n,s){"use strict";var a=s(21);t.exports=function(){var t=a(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},208:function(t,n,s){"use strict";var a=s(21),e=s(188),r=s(100),o=s(69),p=s(202),c=s(203),u=Math.max,i=Math.min,v=Math.floor,l=/\$([$&`']|\d\d?|<[^>]*>)/g,_=/\$([$&`']|\d\d?)/g;s(204)("replace",2,(function(t,n,s,k){return[function(a,e){var r=t(this),o=null==a?void 0:a[n];return void 0!==o?o.call(a,r,e):s.call(String(r),a,e)},function(t,n){var e=k(s,t,this,n);if(e.done)return e.value;var v=a(t),l=String(this),_="function"==typeof n;_||(n=String(n));var g=v.global;if(g){var d=v.unicode;v.lastIndex=0}for(var h=[];;){var x=c(v,l);if(null===x)break;if(h.push(x),!g)break;""===String(x[0])&&(v.lastIndex=p(l,r(v.lastIndex),d))}for(var y,m="",b=0,w=0;w<h.length;w++){x=h[w];for(var S=String(x[0]),I=u(i(o(x.index),l.length),0),C=[],E=1;E<x.length;E++)C.push(void 0===(y=x[E])?y:String(y));var R=x.groups;if(_){var L=[S].concat(C,I,l);void 0!==R&&L.push(R);var T=String(n.apply(void 0,L))}else T=f(S,l,I,C,R,n);I>=b&&(m+=l.slice(b,I)+T,b=I+S.length)}return m+l.slice(b)}];function f(t,n,a,r,o,p){var c=a+t.length,u=r.length,i=_;return void 0!==o&&(o=e(o),i=l),s.call(p,i,(function(s,e){var p;switch(e.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,a);case"'":return n.slice(c);case"<":p=o[e.slice(1,-1)];break;default:var i=+e;if(0===i)return s;if(i>u){var l=v(i/10);return 0===l?s:l<=u?void 0===r[l-1]?e.charAt(1):r[l-1]+e.charAt(1):s}p=r[i-1]}return void 0===p?"":p}))}}))},216:function(t,n,s){var a=s(69),e=s(66);t.exports=function(t){return function(n,s){var r,o,p=String(e(n)),c=a(s),u=p.length;return c<0||c>=u?t?"":void 0:(r=p.charCodeAt(c))<55296||r>56319||c+1===u||(o=p.charCodeAt(c+1))<56320||o>57343?t?p.charAt(c):r:t?p.slice(c,c+2):o-56320+(r-55296<<10)+65536}}},217:function(t,n,s){var a=s(68),e=s(186)("toStringTag"),r="Arguments"==a(function(){return arguments}());t.exports=function(t){var n,s,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(s=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),e))?s:r?a(n):"Object"==(o=a(n))&&"function"==typeof n.callee?"Arguments":o}},218:function(t,n,s){"use strict";var a=s(196);s(99)({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},221:function(t,n,s){var a=s(10),e=s(106),r=s(37).f,o=s(108).f,p=s(192),c=s(205),u=a.RegExp,i=u,v=u.prototype,l=/a/g,_=/a/g,k=new u(l)!==l;if(s(12)&&(!k||s(20)((function(){return _[s(186)("match")]=!1,u(l)!=l||u(_)==_||"/a/i"!=u(l,"i")})))){u=function(t,n){var s=this instanceof u,a=p(t),r=void 0===n;return!s&&a&&t.constructor===u&&r?t:e(k?new i(a&&!r?t.source:t,n):i((a=t instanceof u)?t.source:t,a&&r?c.call(t):n),s?this:v,u)};for(var f=function(t){t in u||r(u,t,{configurable:!0,get:function(){return i[t]},set:function(n){i[t]=n}})},g=o(i),d=0;g.length>d;)f(g[d++]);v.constructor=u,u.prototype=v,s(67)(a,"RegExp",u)}s(222)("RegExp")},222:function(t,n,s){"use strict";var a=s(10),e=s(37),r=s(12),o=s(186)("species");t.exports=function(t){var n=a[t];r&&n&&!n[o]&&e.f(n,o,{configurable:!0,get:function(){return this}})}},307:function(t,n,s){"use strict";var a=s(192),e=s(21),r=s(308),o=s(202),p=s(100),c=s(203),u=s(196),i=s(20),v=Math.min,l=[].push,_=!i((function(){RegExp(4294967295,"y")}));s(204)("split",2,(function(t,n,s,i){var k;return k="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var e=String(this);if(void 0===t&&0===n)return[];if(!a(t))return s.call(e,t,n);for(var r,o,p,c=[],i=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,_=void 0===n?4294967295:n>>>0,k=new RegExp(t.source,i+"g");(r=u.call(k,e))&&!((o=k.lastIndex)>v&&(c.push(e.slice(v,r.index)),r.length>1&&r.index<e.length&&l.apply(c,r.slice(1)),p=r[0].length,v=o,c.length>=_));)k.lastIndex===r.index&&k.lastIndex++;return v===e.length?!p&&k.test("")||c.push(""):c.push(e.slice(v)),c.length>_?c.slice(0,_):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:s.call(this,t,n)}:s,[function(s,a){var e=t(this),r=null==s?void 0:s[n];return void 0!==r?r.call(s,e,a):k.call(String(e),s,a)},function(t,n){var a=i(k,t,this,n,k!==s);if(a.done)return a.value;var u=e(t),l=String(this),f=r(u,RegExp),g=u.unicode,d=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(_?"y":"g"),h=new f(_?u:"^(?:"+u.source+")",d),x=void 0===n?4294967295:n>>>0;if(0===x)return[];if(0===l.length)return null===c(h,l)?[l]:[];for(var y=0,m=0,b=[];m<l.length;){h.lastIndex=_?m:0;var w,S=c(h,_?l:l.slice(m));if(null===S||(w=v(p(h.lastIndex+(_?0:m)),l.length))===y)m=o(l,m,g);else{if(b.push(l.slice(y,m)),b.length===x)return b;for(var I=1;I<=S.length-1;I++)if(b.push(S[I]),b.length===x)return b;m=y=w}}return b.push(l.slice(y)),b}]}))},308:function(t,n,s){var a=s(21),e=s(114),r=s(186)("species");t.exports=function(t,n){var s,o=a(t).constructor;return void 0===o||null==(s=a(o)[r])?n:e(s)}},316:function(t,n,s){"use strict";s.r(n);s(193),s(307),s(113),s(221),s(208);var a={getItem:function(t){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[-.+*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(t,n,s,a,e,r){if(!t||/^(?:expires|max\-age|path|domain|secure)$/i.test(t))return!1;var o="";if(s)switch(s.constructor){case Number:o=s===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+s;break;case String:o="; expires="+s;break;case Date:o="; expires="+s.toUTCString()}return document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(n)+o+(e?"; domain="+e:"")+(a?"; path="+a:"")+(r?"; secure":""),!0},removeItem:function(t,n,s){return!(!t||!this.hasItem(t))&&(document.cookie=encodeURIComponent(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(s?"; domain="+s:"")+(n?"; path="+n:""),!0)},hasItem:function(t){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(t).replace(/[-.+*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var t=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),n=0;n<t.length;n++)t[n]=decodeURIComponent(t[n]);return t}},e={data:function(){return{formItem:{key:"",value:""}}},mounted:function(){console.log(a.keys(),"123")}},r=s(9),o=Object(r.a)(e,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"新增"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新增"}},[t._v("#")]),t._v(" 新增")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("sKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vEnd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sDomain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bSecure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("sKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(?:expires|max\\-age|path|domain|secure)$/i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sExpires "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vEnd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vEnd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                sExpires "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n                    vEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; expires=Fri, 31 Dec 9999 23:59:59 GMT"')]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; max-age="')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" vEnd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                sExpires "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; expires="')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" vEnd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                sExpires "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; expires="')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" vEnd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUTCString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"="')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        sExpires "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sDomain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; domain="')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sDomain "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; path="')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sPath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bSecure "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; secure"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"判断-cookie-是否存在"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断-cookie-是否存在"}},[t._v("#")]),t._v(" 判断 cookie 是否存在")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("sKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(?:^|;\\\\s*)"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[-.+*]/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\$&"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\s*\\\\="')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("sKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sDomain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("sKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sDomain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; domain="')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sDomain "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; path="')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sPath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"获取-cookie-的-key-的集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取-cookie-的-key-的集合"}},[t._v("#")]),t._v(" 获取 cookie 的 key 的集合")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" aKeys "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/((?:^|\\s*;)[^\\=]+)(?=;|$)|^\\s*|\\s*(?:\\=[^;]*)?(?:\\1|$)/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\s*(?:\\=[^;]*)?;\\s*/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" nIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" aKeys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" nIdx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        aKeys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aKeys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" aKeys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("cookie 相关的函数来源于 MDN")])])])}),[],!1,null,null,null);n.default=o.exports}}]);