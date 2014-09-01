var sortModule = angular.module("sortDirective", []);

sortModule.directive("sv", function() {
    return {
        restrict: 'E',
        scope: {
            dataSort: '@'
        },
        controller:['$scope',] function ($scope, $element) {
         }
        link: function(scope, element, attrs) {
                scope.sortType=attrs.sort;
        },
        templateUrl: 'sv.html'
    };

});