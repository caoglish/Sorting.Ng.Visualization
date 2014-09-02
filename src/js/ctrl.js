var defaultData = require("./defaultData");
var sortingRecorderConstructor = require("./sortingRecorder");

function ctrl($scope, $timeout,$attrs,sortFactory) {
    var sortingRecorder=new sortingRecorderConstructor();
    console.log(sortingRecorder);
    var i = 0;
    $scope.sortType=$attrs.sort||"bubble";
    var sorting=sortFactory( $scope.sortType);
    $scope.reset = function() {
        targetData = defaultData.map(function(item) {
            return item;
        });
        $scope.data = defaultData.map(function(item) {
            return item;
        });
         $scope.isSorted=false;
        i = 0;
    }
  
    $scope.start = function() {
        $scope.reset();
        sortingRecorder.empty();
        //console.log(sortingRecorder);
        sortingRecorder.record(sorting, targetData);
        console.log(sortingRecorder);

        var len = sortingRecorder.size();

        var sleepTime = 100;

        $timeout(function sortAnimation() {
            if (i < len) {
                //console.log("i", i);
                $scope.data = sortingRecorder.getStep(i);
                $scope.currentPorsition = sortingRecorder.getPos(i) ;
               // console.log($scope.currentPorsition);
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
module.exports = ctrl;