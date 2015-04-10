'use strict';

var angular = require('angular');

module.exports = angular
	.module('c-b', [])

	.directive('cBBar', function (baz, quux) {
		// things
	})

	.name;
