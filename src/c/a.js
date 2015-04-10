'use strict';

var angular = require('angular');

module.exports = angular
	.module('c-a', [])

	.directive('cABar', function (baz, quux) {
		// things
	})

	.name;
