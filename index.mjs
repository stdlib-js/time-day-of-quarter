// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/time-day-of-year@v0.0.9-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/time-quarter-of-year@v0.0.9-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";var d=[0,90,181,273],o=[0,91,182,274];function l(l,j,p){var a,h,f,g;if(0===arguments.length)a=new Date,f=i(a),g=r(a),h=a.getFullYear();else if(1===arguments.length){if(!e(l))throw new TypeError(n("1Q7AW,La",l));f=i(a=l),g=r(a),h=a.getFullYear()}else{if(!s(l)&&!t(l))throw new TypeError(n("1Q7AX,LV",l));if(!t(j))throw new TypeError(n("1Q77f,LW",j));if(!t(p))throw new TypeError(n("1Q72z,GL",p));f=i(l),g=r(l,j,p),h=p}return m(h)?g-o[f-1]:g-d[f-1]}export{l as default};
//# sourceMappingURL=index.mjs.map
