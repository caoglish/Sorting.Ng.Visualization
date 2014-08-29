module.exports = function(array, sortingRecorder) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - i -1 ; j++) {
            sortingRecorder.addStep(array,j);
            if (array[j] > array[j + 1]) {
                var tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    sortingRecorder.addStep(array,j);
}