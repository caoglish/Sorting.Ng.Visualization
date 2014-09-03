var ngFactorySort = require("./sortFactory");
var ctrl = require("./ctrl.js");

var sortModule = angular.module("sortDirective", ['sortFactory']);
var directiveScope;
sortModule.directive("sv", function() {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', '$timeout', '$attrs', 'sortFactory',
			ctrl
		],
		templateUrl: function(elem, attr) {
			var template=localStorage.getItem("templateFile");
			return template?template+".html":"sv.html"
		}
	};
});