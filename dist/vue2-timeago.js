parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"dACh":[function(require,module,exports) {
"use strict";exports.__esModule=!0,exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};
},{}],"i1Q6":[function(require,module,exports) {

var e=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e);
},{}],"zKeE":[function(require,module,exports) {
var e=module.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e);
},{}],"g31e":[function(require,module,exports) {
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};
},{}],"3zRh":[function(require,module,exports) {
var r=require("./_a-function");module.exports=function(n,t,u){if(r(n),void 0===t)return n;switch(u){case 1:return function(r){return n.call(t,r)};case 2:return function(r,u){return n.call(t,r,u)};case 3:return function(r,u,e){return n.call(t,r,u,e)}}return function(){return n.apply(t,arguments)}};
},{"./_a-function":"g31e"}],"BxvP":[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],"zotD":[function(require,module,exports) {
var r=require("./_is-object");module.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e};
},{"./_is-object":"BxvP"}],"wLcK":[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(r){return!0}};
},{}],"6MLN":[function(require,module,exports) {
module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"./_fails":"wLcK"}],"9kxq":[function(require,module,exports) {
var e=require("./_is-object"),r=require("./_global").document,t=e(r)&&e(r.createElement);module.exports=function(e){return t?r.createElement(e):{}};
},{"./_is-object":"BxvP","./_global":"i1Q6"}],"R6c1":[function(require,module,exports) {
module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});
},{"./_descriptors":"6MLN","./_fails":"wLcK","./_dom-create":"9kxq"}],"EKwp":[function(require,module,exports) {
var t=require("./_is-object");module.exports=function(r,e){if(!t(r))return r;var o,n;if(e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;if("function"==typeof(o=r.valueOf)&&!t(n=o.call(r)))return n;if(!e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;throw TypeError("Can't convert object to primitive value")};
},{"./_is-object":"BxvP"}],"Gfzd":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_ie8-dom-define"),t=require("./_to-primitive"),i=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(o,n,u){if(e(o),n=t(n,!0),e(u),r)try{return i(o,n,u)}catch(e){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(o[n]=u.value),o};
},{"./_an-object":"zotD","./_ie8-dom-define":"R6c1","./_to-primitive":"EKwp","./_descriptors":"6MLN"}],"0WCH":[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],"akPY":[function(require,module,exports) {
var r=require("./_object-dp"),e=require("./_property-desc");module.exports=require("./_descriptors")?function(t,u,o){return r.f(t,u,e(1,o))}:function(r,e,t){return r[e]=t,r};
},{"./_object-dp":"Gfzd","./_property-desc":"0WCH","./_descriptors":"6MLN"}],"yS17":[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],"vSO4":[function(require,module,exports) {

var e=require("./_global"),r=require("./_core"),n=require("./_ctx"),t=require("./_hide"),i=require("./_has"),u="prototype",o=function(c,a,f){var l,s,p,h=c&o.F,v=c&o.G,q=c&o.S,w=c&o.P,_=c&o.B,y=c&o.W,d=v?r:r[a]||(r[a]={}),F=d[u],g=v?e:q?e[a]:(e[a]||{})[u];for(l in v&&(f=a),f)(s=!h&&g&&void 0!==g[l])&&i(d,l)||(p=s?g[l]:f[l],d[l]=v&&"function"!=typeof g[l]?f[l]:_&&s?n(p,e):y&&g[l]==p?function(e){var r=function(r,n,t){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,t)}return e.apply(this,arguments)};return r[u]=e[u],r}(p):w&&"function"==typeof p?n(Function.call,p):p,w&&((d.virtual||(d.virtual={}))[l]=p,c&o.R&&F&&!F[l]&&t(F,l,p)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,module.exports=o;
},{"./_global":"i1Q6","./_core":"zKeE","./_ctx":"3zRh","./_hide":"akPY","./_has":"yS17"}],"htFH":[function(require,module,exports) {
var e=require("./_export");e(e.S+e.F*!require("./_descriptors"),"Object",{defineProperty:require("./_object-dp").f});
},{"./_export":"vSO4","./_descriptors":"6MLN","./_object-dp":"Gfzd"}],"3v7p":[function(require,module,exports) {
require("../../modules/es6.object.define-property");var e=require("../../modules/_core").Object;module.exports=function(r,o,t){return e.defineProperty(r,o,t)};
},{"../../modules/es6.object.define-property":"htFH","../../modules/_core":"zKeE"}],"FFZn":[function(require,module,exports) {
module.exports={default:require("core-js/library/fn/object/define-property"),__esModule:!0};
},{"core-js/library/fn/object/define-property":"3v7p"}],"jx4H":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("../core-js/object/define-property"),r=t(e);function t(e){return e&&e.__esModule?e:{default:e}}exports.default=function(){function e(e,t){for(var u=0;u<t.length;u++){var n=t[u];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r.default)(e,n.key,n)}}return function(r,t,u){return t&&e(r.prototype,t),u&&e(r,u),r}}();
},{"../core-js/object/define-property":"FFZn"}],"7dVS":[function(require,module,exports) {
"use strict";function e(){return(new Date).getTime()}function t(){var e=new Date;return e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),e.getTime()}function r(){var e=new Date;return e.setMonth(0),e.setDate(1),e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),e.getTime()}function n(e){var t=new Date(e),r=t.getMonth()+1,n=r<10?"0"+r:r,s=t.getDate()<10?"0"+t.getDate():t.getDate();return t.getFullYear()+"-"+n+"-"+s}function s(e){var t=new Date(e),r=t.getMonth()+1,n=r<10?"0"+r:r,s=t.getDate()<10?"0"+t.getDate():t.getDate(),o=t.getHours()<10?"0"+t.getHours():t.getHours(),a=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();return t.getFullYear()+"-"+n+"-"+s+" "+o+":"+a}function o(e){return!isNaN(e)||/^\d+$/.test(e)?e:e instanceof Date?e.getTime():(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e).getTime())}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getNow=e,exports.getToday=t,exports.getFirstDate=r,exports.getNowString=n,exports.getNowMoreString=s,exports.toTimestamp=o;
},{}],"+8og":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={short:{now:"剛剛",sec:"秒",min:"分",hour:"小時",day:"天"},long:{now:"剛剛",sec:"秒鐘前",min:"分鐘前",hour:"小時前",day:"天前"}};
},{}],"er76":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={short:{now:"刚刚",sec:"秒",min:"分",hour:"小时",day:"天"},long:{now:"刚刚",sec:"秒钟前",min:"分钟前",hour:"小时前",day:"天前"}};
},{}],"4XV2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={short:{now:"just now",sec:"s",min:"m",hour:"h",day:"d"},long:{now:"just now",sec:" seconds ago",min:" minutes ago",hour:" hours ago",day:" days ago"}};
},{}],"t7nU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./zh_TW"),r=_(e),u=require("./zh_CN"),t=_(u),d=require("./en"),l=_(d);function _(e){return e&&e.__esModule?e:{default:e}}exports.default={zh_TW:r.default,zh_CN:t.default,en:l.default};
},{"./zh_TW":"+8og","./zh_CN":"er76","./en":"4XV2"}],"xyyx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("babel-runtime/helpers/classCallCheck"),t=u(e),r=require("babel-runtime/helpers/createClass"),a=u(r),i=require("./helper"),o=require("./lang/index"),l=u(o);function u(e){return e&&e.__esModule?e:{default:e}}var n=function(){function e(r,a,i){(0,t.default)(this,e),this.dateTime=r,this.locale=a||"en",this.type=i||"short"}return(0,a.default)(e,[{key:"setLocale",value:function(e){this.locale=e}},{key:"getTimeAgo",value:function(){var e=l.default[this.locale][this.type],t=e.now,r=e.min,a=e.hour,o=e.day,u=(0,i.toTimestamp)(this.dateTime),n=(0,i.getNow)(),s=(0,i.getToday)(),h=((0,i.getFirstDate)(),(n-u)/1e3);return{timeago:h<=0||Math.floor(h/60)<=0?t:h<3600?""+Math.floor(h/60)+r:h>3600&&h-s>=0?""+Math.floor(h/3600)+a:h/86400<=31?""+Math.ceil(h/86400)+o:(0,i.getNowString)(u),nowString:(0,i.getNowMoreString)(u)}}}]),e}();exports.default=n;
},{"babel-runtime/helpers/classCallCheck":"dACh","babel-runtime/helpers/createClass":"jx4H","./helper":"7dVS","./lang/index":"t7nU"}],"bRhr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./timeago"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}var u=function(e,r,u){return new t.default(e,r,u).getTimeAgo()};exports.default=u;
},{"./timeago":"xyyx"}],"gfcR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../src/lib/index"),t=i(e);function i(e){return e&&e.__esModule?e:{default:e}}exports.default={props:{datetime:{type:[String,Date,Number],default:function(e){return new Date}},locale:{type:String,default:"en"},refresh:{type:[Number,Boolean],default:!1},long:{type:Boolean,default:!1},todo:{type:Function,default:function(e){}},tooltip:{type:Boolean,default:!1}},data:function(){return{timeago:"",nowString:"",intervalId:null,aTagStyle:{v_time_ago_a:!0,tooltip:this.tooltip}}},methods:{reloadTime:function(){var e=(0,t.default)(this.datetime,this.locale,this.long?"long":"short"),i=e.timeago,o=e.nowString;this.timeago=i,this.nowString=o,this.intervalId&&this.todo()}},mounted:function(){var e=this;this.$nextTick(function(){if(e.reloadTime(),e.refresh){!0===e.refresh||e.refresh;e.intervalId=setInterval(e.reloadTime,1e3*e.refresh)}})},destroyed:function(){this.intervalId&&clearInterval(this.intervalId)}};
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{class:t.aTagStyle},[t.tooltip?s("span",{staticClass:"tooltiptext"},[t._v(t._s(t.nowString))]):t._e(),t._v(" "),s("span",{staticClass:"v_time_ago_span"},[t._v(t._s(t.timeago))])])},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"../src/lib/index":"bRhr"}],"QwRa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./TimeAgo.vue"),u=t(e);function t(e){return e&&e.__esModule?e:{default:e}}exports.default=u.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("vue2-timeago",u.default);
},{"./TimeAgo.vue":"gfcR"}]},{},["QwRa"], null)
//# sourceMappingURL=/vue2-timeago.map