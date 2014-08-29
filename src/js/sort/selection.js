module.exports = function(array, sortingRecorder) {
	for (var i = 0; i < array.length; i++) {
		var min = i;
		for (var j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
			sortingRecorder.addStep(array, j,{min:min});
		}
		var temp = array[i];
		array[i] = array[min];
		array[min] = temp;
	}
	sortingRecorder.addStep(array,j,{min:min});
};