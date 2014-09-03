var _=require('underscore');
var numberList=_.range(1,100);
var numForSort=[];
for(var i = 0; i < 20; i++) {
	numForSort.push(numberList.splice(_.random(numberList.length-1),1)[0]);
}


module.exports = numForSort;