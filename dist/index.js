/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first element in a strided array which is less than or equal to a corresponding element in another strided array.
*
* @module @stdlib/blas-ext-base-gfirst-index-less-than-equal
*
* @example
* var gfirstIndexLessThanEqual = require( '@stdlib/blas-ext-base-gfirst-index-less-than-equal' );
*
* var x = [ 3.0, 5.0, 4.0, 6.0 ];
* var y = [ 2.0, 4.0, 4.0, 5.0 ];
*
* var idx = gfirstIndexLessThanEqual( x.length, x, 1, y, 1 );
* // returns 2
*
* @example
* var gfirstIndexLessThanEqual = require( '@stdlib/blas-ext-base-gfirst-index-less-than-equal' );
*
* var x = [ 3.0, 5.0, 4.0, 6.0 ];
* var y = [ 2.0, 4.0, 4.0, 5.0 ];
*
* var idx = gfirstIndexLessThanEqual.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // returns 2
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
