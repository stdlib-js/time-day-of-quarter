// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/time-day-of-year@v0.0.9-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/time-quarter-of-year@v0.0.9-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";var d=[0,90,181,273],o=[0,91,182,274];function l(l,a,h){var j,p,f,g;if(0===arguments.length)j=new Date,f=i(j),g=r(j),p=j.getFullYear();else if(1===arguments.length){if(!e(l))throw new TypeError(m("invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.",l));f=i(j=l),g=r(j),p=j.getFullYear()}else{if(!t(l)&&!s(l))throw new TypeError(m("0huBF",l));if(!s(a))throw new TypeError(m("0hu7x",a));if(!s(h))throw new TypeError(m("0hu3B",h));f=i(l),g=r(l,a,h),p=h}return n(p)?g-o[f-1]:g-d[f-1]}export{l as default};
//# sourceMappingURL=index.mjs.map