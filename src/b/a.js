'use strict';

var angular = require('angular');

module.exports = angular
	.module('b-a', [])

	.directive('bABar', function (baz, quux) {
		// things
	})

	.name;
