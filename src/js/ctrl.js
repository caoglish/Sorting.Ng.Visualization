
var defaultData = require("./defaultData");
var sortingRecorder = require("./sortingRecorder");



function ctrl($scope, $timeout,sortFactory) {

    if(!$scope.sortType){
        $scope.sortType="bubble";
    }
    var sorting=sortFactory( $scope.sortType);
    
    $scope.reset = function() {
        targetData = defaultData.map(function(i) {
            return i;
        });
        $scope.data = defaultData.map(function(i) {
            return i;
        });
        i = 0;
    }

    var i = 0;
    $scope.start = function() {
        $scope.reset();
        sortingRecorder.empty();
        //console.log(sortingRecorder);
        sortingRecorder.record(sorting, targetData);
        //console.log(sortingRecorder);

        var len = sortingRecorder.size();

        var sleepTime = 50;

        $timeout(function sortAnimation() {
            if (i < len) {
                //console.log("i", i);
                $scope.data = sortingRecorder.getStep(i);
                $scope.currentPorsition = sortingRecorder.getPos(i) ;
                console.log($scope.currentPorsition);
                $scope.highlight = sortingRecorder.get(i, "min");
                //console.log($scope.highlight);
                i++;
                $timeout(sortAnimation, sleepTime);
            } else {
                $scope.isSorted = true;
                $scope.data = sortingRecorder.getLastStep();
            }

        }, sleepTime);
    }
    $scope.reset();
    $scope.start();
}

ctrl.$inject=['$scope','$timeout','sortFactory'];

module.exports = ctrl;