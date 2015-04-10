'use strict';

var angular = require('angular');

angular
	.module('foo', [
		require('./a'),
		require('./b'),
		require('./c')
	])

	.directive('bar', function (baz, quux) {
		// things
	});
