!function(i){function e(e){for(var t,n,r=e[0],o=e[1],l=e[2],a=0,u=[];a<r.length;a++)n=r[a],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&u.push(c[n][0]),c[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(i[t]=o[t]);for(s&&s(e);u.length;)u.shift()();return f.push.apply(f,l||[]),p()}function p(){for(var e,t=0;t<f.length;t++){for(var n=f[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==c[l]&&(r=!1)}r&&(f.splice(t--,1),e=a(a.s=n[0]))}return e}var n={},c={47:0},f=[];function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=i,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var s=r;f.push([830,0]),p()}({830:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),l=n(1),a=n.n(l),u=n(68),i=n.n(u),p=n(92);new(function(){function t(e){o()(this,t),this.player={},this.container=e}return a()(t,[{key:"play",value:function(){$("#swf-player").length?this._playerSwf():this._playVideo()}},{key:"_playerSwf",value:function(){var e="swf-player";i.a.embedSWF($("#"+e).data("url"),e,"100%","100%","9.0.0",null,null,{wmode:"opaque",allowFullScreen:"true"})}},{key:"_playVideo",value:function(){new p.a({name:"partner",project:"PlayerProject",children:[],type:"parent"}).on("ended",function(){$("#task-preview-player").html($(".js-time-limit-dev").html())})}}]),t}())("#video-content").play()}});