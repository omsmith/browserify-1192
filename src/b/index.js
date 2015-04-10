'use strict';

var angular = require('angular');

module.exports = angular
	.module('b', [
		require('./a'),
		require('./b'),
		require('./c')
	])

	.directive('bBar', function (baz, quux) {
		// things
	})

	.name;
