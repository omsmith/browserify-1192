'use strict';

var angular = require('angular');

module.exports = angular
	.module('a-c', [])

	.directive('aCBar', function (baz, quux) {
		// things
	})

	.name;
