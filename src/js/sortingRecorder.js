 var _=require("underscore");


 var sortingRecorder =function(){
 	this._stepList = [];


 };


 sortingRecorder.prototype.size = function() {
 	return this._stepList.length;
 }
 sortingRecorder.prototype.addStep = function(list, position) {
 	var args = Array.prototype.slice.call(arguments);
 	
 	var step = {
 		step: list.map(function(i) {
 			return i;
 		}),
 		position: position
 	};

 	if(args.length==3&&_.isObject(args[2])){
 		step=_.extend(step,args[2]);
 	}else if(args.length>3){
 		throw new Error("args cannot be more than 3");
 	}


 	this._stepList.push(step);
 }

 sortingRecorder.prototype.record = function(sorting, data) {
 	sorting(data, this);
 }

 sortingRecorder.prototype.empty = function() {
 	this._stepList.length = 0;
 }

 sortingRecorder.prototype.getStep = function(i) {
 	return this._stepList[i].step;
 }

 sortingRecorder.prototype.getLastStep = function() {
 	return this.getStep(this.size() - 1);
 }

 sortingRecorder.prototype.getPos = function(i) {
 	return this._stepList[i].position;
 }

 sortingRecorder.prototype.get=function(i,field){
 	return this._stepList[i][field];
 }


 module.exports = sortingRecorder;
 