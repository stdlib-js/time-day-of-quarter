<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dayOfQuarter

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine the day of the quarter.



<section class="usage">

## Usage

```javascript
import dayOfQuarter from 'https://cdn.jsdelivr.net/gh/stdlib-js/time-day-of-quarter@v0.1.0-esm/index.mjs';
```

#### dayOfQuarter( \[month\[, day, year]] )

Returns the day of the quarter.

```javascript
var num = dayOfQuarter();
// returns <number>
```

By default, the function returns the day of the quarter for the current date (according to local time). To determine the day of the quarter for a particular day, provide `month`, `day`, and `year` arguments.

```javascript
var num = dayOfQuarter( 12, 31, 2016 );
// returns 92
```

A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).

```javascript
var num = dayOfQuarter( 12, 31, 2016 );
// returns 92

num = dayOfQuarter( 'dec', 31, 2016 );
// returns 92

num = dayOfQuarter( 'december', 31, 2016 );
// returns 92
```

The function also supports providing a [`Date`][date-object] object.

```javascript
var num = dayOfQuarter( new Date() );
// returns <number>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import quarterOfYear from 'https://cdn.jsdelivr.net/gh/stdlib-js/time-quarter-of-year@esm/index.mjs';
import dayOfQuarter from 'https://cdn.jsdelivr.net/gh/stdlib-js/time-day-of-quarter@v0.1.0-esm/index.mjs';

var months;
var day;
var yr;
var q;
var v;
var i;

months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

yr = 2016;
day = 9;

for ( i = 0; i < months.length; i++ ) {
    q = quarterOfYear( months[ i ] );
    v = dayOfQuarter( months[ i ], day, yr );
    console.log( 'In the year %d, %s %d is day number %d of Q%d.', yr, months[ i ], day, v, q );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/time-day-of-year`][@stdlib/time/day-of-year]</span><span class="delimiter">: </span><span class="description">determine the day of the year.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-day-of-quarter.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-day-of-quarter

[test-image]: https://github.com/stdlib-js/time-day-of-quarter/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/time-day-of-quarter/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-day-of-quarter/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-day-of-quarter?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-day-of-quarter.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time-day-of-quarter/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/time-day-of-quarter#cli
[cli-url]: https://github.com/stdlib-js/time-day-of-quarter/tree/cli
[@stdlib/time-day-of-quarter]: https://github.com/stdlib-js/time-day-of-quarter/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/time-day-of-quarter/tree/deno
[umd-url]: https://github.com/stdlib-js/time-day-of-quarter/tree/umd
[esm-url]: https://github.com/stdlib-js/time-day-of-quarter/tree/esm
[branches-url]: https://github.com/stdlib-js/time-day-of-quarter/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-day-of-quarter/main/LICENSE

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

<!-- <related-links> -->

[@stdlib/time/day-of-year]: https://github.com/stdlib-js/time-day-of-year/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
