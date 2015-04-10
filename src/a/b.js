'use strict';

var angular = require('angular');

module.exports = angular
	.module('a-b', [])

	.directive('aBBar', function (baz, quux) {
		// things
	})

	.name;
