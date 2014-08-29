module.exports = function(array, sortingRecorder) {
    for (var i = 1; i < array.length; i++) {
        for (var j = i; j - 1 >= 0; j--) {
            sortingRecorder.addStep(array,j);
            if (array[j] < array[j - 1]) {
                var temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
            
        }
    }
    sortingRecorder.addStep(array,j);
};