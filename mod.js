// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol.toStringTag:"";var i=r()?function(e){var r,i,o,u,l;if(null==e)return t.call(e);i=e[a],l=a,r=null!=(u=e)&&n.call(u,l);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=i:delete e[a],o}:function(e){return t.call(e)},o=Date.prototype.getDay;var u=r();function l(e){return"object"==typeof e&&(e instanceof Date||(u?function(e){try{return o.call(e),!0}catch(e){return!1}}(e):"[object Date]"===i(e)))}var c="function"==typeof Object.defineProperty?Object.defineProperty:null;var s=Object.defineProperty,g=Object.prototype,p=g.toString,f=g.__defineGetter__,h=g.__defineSetter__,d=g.__lookupGetter__,v=g.__lookupSetter__;var m=function(){try{return c({},"x",{}),!0}catch(e){return!1}}()?s:function(e,r,t){var n,a,i,o;if("object"!=typeof e||null===e||"[object Array]"===p.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===p.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((a="value"in t)&&(d.call(e,r)||v.call(e,r)?(n=e.__proto__,e.__proto__=g,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,o="set"in t,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&f&&f.call(e,r,t.get),o&&h&&h.call(e,r,t.set),e};function b(e,r,t){m(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function w(e){return"string"==typeof e}var y=String.prototype.valueOf;var j=r();function E(e){return"object"==typeof e&&(e instanceof String||(j?function(e){try{return y.call(e),!0}catch(e){return!1}}(e):"[object String]"===i(e)))}function S(e){return w(e)||E(e)}function _(e){return"number"==typeof e}b(S,"isPrimitive",w),b(S,"isObject",E);var T=Number,V=T.prototype.toString;var F=r();function I(e){return"object"==typeof e&&(e instanceof T||(F?function(e){try{return V.call(e),!0}catch(e){return!1}}(e):"[object Number]"===i(e)))}function x(e){return _(e)||I(e)}b(x,"isPrimitive",_),b(x,"isObject",I);var k=Number.POSITIVE_INFINITY,D=T.NEGATIVE_INFINITY,O=Math.floor;function M(e){return e<k&&e>D&&O(r=e)===r;var r}function A(e){return _(e)&&M(e)}function Y(e){return I(e)&&M(e.valueOf())}function N(e){return A(e)||Y(e)}function P(e){return"number"==typeof e}function R(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function $(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+R(a):R(a)+e,n&&(e="-"+e)),e}b(N,"isPrimitive",A),b(N,"isObject",Y);var C=String.prototype.toLowerCase,G=String.prototype.toUpperCase;function Z(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!P(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=$(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=$(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===G.call(e.specifier)?G.call(t):C.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function L(e){return"string"==typeof e}var W=Math.abs,z=String.prototype.toLowerCase,U=String.prototype.toUpperCase,B=String.prototype.replace,X=/e\+(\d)$/,q=/e-(\d)$/,H=/^(\d+)$/,J=/^(\d+)e/,K=/\.0$/,Q=/\.0*e/,ee=/(\..*[^0])0*e/;function re(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!P(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":W(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=B.call(t,ee,"$1e"),t=B.call(t,Q,"e"),t=B.call(t,K,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=B.call(t,X,"e+0$1"),t=B.call(t,q,"e-0$1"),e.alternate&&(t=B.call(t,H,"$1."),t=B.call(t,J,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===U.call(e.specifier)?U.call(t):z.call(t)}function te(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ne(e,r,t){var n=r-e.length;return n<0?e:e=t?e+te(n):te(n)+e}var ae=String.fromCharCode,ie=isNaN,oe=Array.isArray;function ue(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function le(e){var r,t,n,a,i,o,u,l,c;if(!oe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,l=0;l<e.length;l++)if(L(n=e[l]))o+=n;else{if(r=void 0!==n.precision,!(n=ue(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(a=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ie(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,ie(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Z(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!ie(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ie(i)?String(n.arg):ae(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=re(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=$(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ne(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var ce=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function se(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ge(e){var r,t,n,a;for(t=[],a=0,n=ce.exec(e);n;)(r=e.slice(a,ce.lastIndex-n[0].length)).length&&t.push(r),t.push(se(n)),a=ce.lastIndex,n=ce.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function pe(e){return"string"==typeof e}function fe(e){var r,t,n;if(!pe(e))throw new TypeError(fe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ge(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return le.apply(null,t)}function he(e){if(!w(e))throw new TypeError(fe("invalid argument. Must provide a string. Value: `%s`.",e));return e.toLowerCase()}function de(e){var r;if(arguments.length)if(l(e))r=e.getFullYear();else{if(!A(e))return!1;r=e}else r=(new Date).getFullYear();return r%100==0?r%400==0:r%4==0}var ve={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,jan:31,january:31,feb:28,february:28,mar:31,march:31,apr:30,april:30,may:31,jun:30,june:30,jul:31,july:31,aug:31,august:31,sep:30,september:30,oct:31,october:31,nov:30,november:30,dec:31,december:31};function me(e,r){var t,n,a,i;if(0===arguments.length)n=(i=new Date).getMonth()+1,a=i.getFullYear();else if(1===arguments.length)if(l(e))n=(i=e).getMonth()+1,a=i.getFullYear();else{if(!w(e)&&!A(e))throw new TypeError(fe("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));a=(new Date).getFullYear(),n=e}else{if(!w(e)&&!A(e))throw new TypeError(fe("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!A(r))throw new TypeError(fe("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,a=r}if(A(n)&&(n<1||n>12))throw new RangeError(fe("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=he(n.toString()),void 0===(t=ve[n]))throw new Error(fe("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 28===t&&de(a)&&(t+=1),t}var be={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},we=[31,28,31,30,31,30,31,31,30,31,30,31];function ye(e,r,t){var n,a,i,o,u,c,s;if(0===arguments.length)o=(n=new Date).getMonth()+1,u=n.getFullYear(),c=n.getDate();else if(1===arguments.length){if(!l(e))throw new TypeError(fe("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));o=(n=e).getMonth()+1,u=n.getFullYear(),c=n.getDate()}else{if(!w(e)&&!A(e))throw new TypeError(fe("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!A(r))throw new TypeError(fe("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(!A(t))throw new TypeError(fe("invalid argument. Third argument must be an integer. Value: `%s`.",t));o=e,c=r,u=t}if(a=me(o,u),c<1||c>a)throw new RangeError(fe("invalid argument. Day number must be on the interval: [1, %u]. Value: `%d`.",a,c));for(o=he(o.toString()),o=be[o],i=0,s=0;s<o-1;s++)i+=we[s],1===s&&de(u)&&(i+=1);return i+=c}var je={1:1,2:1,3:1,4:2,5:2,6:2,7:3,8:3,9:3,10:4,11:4,12:4,jan:1,january:1,feb:1,february:1,mar:1,march:1,apr:2,april:2,may:2,jun:2,june:2,jul:3,july:3,aug:3,august:3,sep:3,september:3,oct:4,october:4,nov:4,november:4,dec:4,december:4};function Ee(e){var r,t;if(arguments.length)if(l(e))r=e.getMonth()+1;else{if(!w(e)&&!A(e))throw new TypeError(fe("invalid argument. Must provide either a string, integer, or Date object. Value: `%s`.",e));r=e}else r=(new Date).getMonth()+1;if(A(r)&&(r<1||r>12))throw new RangeError(fe("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",r));if(r=he(r.toString()),void 0===(t=je[r]))throw new Error(fe("invalid argument. Must provide a recognized month. Value: `%s`.",e));return t}function Se(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var _e=[0,90,181,273],Te=[0,91,182,274];function Ve(e,r,t){var n,a,i,o;if(0===arguments.length)i=Ee(n=new Date),o=ye(n),a=n.getFullYear();else if(1===arguments.length){if(!l(e))throw new TypeError(Se("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",e));i=Ee(n=e),o=ye(n),a=n.getFullYear()}else{if(!w(e)&&!A(e))throw new TypeError(Se("0huBF",e));if(!A(r))throw new TypeError(Se("0hu7x",r));if(!A(t))throw new TypeError(Se("0hu3B",t));i=Ee(e),o=ye(e,r,t),a=t}return de(a)?o-Te[i-1]:o-_e[i-1]}export{Ve as default};
//# sourceMappingURL=mod.js.map
