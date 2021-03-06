/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isDateObject = require( '@stdlib/assert-is-date-object' );
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;
var dayOfYear = require( '@stdlib/time-day-of-year' );
var quarterOfYear = require( '@stdlib/time-quarter-of-year' );
var isLeapYear = require( '@stdlib/assert-is-leap-year' );
var format = require( '@stdlib/string-format' );


// VARIABLES //

// Quarter days:
var NON_LEAP_YEAR = [ 0, 90, 181, 273 ];
var LEAP_YEAR = [ 0, 91, 182, 274 ];


// MAIN //

/**
* Returns the day of the quarter.
*
* @param {(string|integer|Date)} [month] - month (or `Date`)
* @param {integer} [day] - day
* @param {integer} [year] - year
* @throws {TypeError} first argument must be either a string, integer, or `Date` object
* @throws {Error} must provide a recognized month
* @throws {RangeError} an integer month argument must be on the interval `[1,12]`
* @throws {TypeError} second argument must be an integer
* @throws {RangeError} second argument must be greater than `0` and less than or equal to the maximum number of days in a month
* @throws {TypeError} third argument must be an integer
* @returns {integer} day of the quarter
*
* @example
* var day = dayOfQuarter();
* // returns <number>
*
* day = dayOfQuarter( new Date() );
* // returns <number>
*
* day = dayOfQuarter( 12, 31, 2017 );
* // returns 92
*/
function dayOfQuarter( month, day, year ) {
	var date;
	var yr;
	var q;
	var d;
	if ( arguments.length === 0 ) {
		// Note: cannot cache as application may cross over into a new year:
		date = new Date();
		q = quarterOfYear( date );
		d = dayOfYear( date );
		yr = date.getFullYear();
	} else if ( arguments.length === 1 ) {
		if ( isDateObject( month ) ) {
			date = month;
			q = quarterOfYear( date );
			d = dayOfYear( date );
			yr = date.getFullYear();
		} else {
			throw new TypeError( format( 'invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.', month ) );
		}
	} else {
		if ( !isString( month ) && !isInteger( month ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be either a string or integer. Value: `%s`.', month ) );
		}
		if ( !isInteger( day ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', day ) );
		}
		if ( !isInteger( year ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be an integer. Value: `%s`.', year ) );
		}
		q = quarterOfYear( month );
		d = dayOfYear( month, day, year );
		yr = year;
	}
	if ( isLeapYear( yr ) ) {
		return d - LEAP_YEAR[ q-1 ];
	}
	return d - NON_LEAP_YEAR[ q-1 ];
}


// EXPORTS //

module.exports = dayOfQuarter;
