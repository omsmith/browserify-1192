'use strict';

var angular = require('angular');

module.exports = angular
	.module('a', [
		require('./a'),
		require('./b'),
		require('./c')
	])

	.directive('aBar', function (baz, quux) {
		// things
	})

	.name;
