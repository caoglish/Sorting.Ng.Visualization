var ngFactorySort = require("./sortFactory");
var ctrl = require("./ctrl.js");

var sortModule = angular.module("sortDirective", ['sortFactory']);

sortModule.directive("sv", function() {

    return {
        restrict: 'E',
        scope: {},
        controller: ['$scope', '$timeout','$attrs', 'sortFactory',
            ctrl
        ],

        
        templateUrl: 'sv.html'
    };

});