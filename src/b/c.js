'use strict';

var angular = require('angular');

module.exports = angular
	.module('b-c', [])

	.directive('bCBar', function (baz, quux) {
		// things
	})

	.name;
