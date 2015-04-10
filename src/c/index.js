'use strict';

var angular = require('angular');

module.exports = angular
	.module('c', [
		require('./a'),
		require('./b'),
		require('./c')
	])

	.directive('cBar', function (baz, quux) {
		// things
	})

	.name;
