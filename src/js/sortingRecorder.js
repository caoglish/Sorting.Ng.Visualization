 var _=require("underscore");


 var sortingRecorder = {};

 sortingRecorder._stepList = [];
 sortingRecorder.size = function() {
 	return this._stepList.length;
 }
 sortingRecorder.addStep = function(list, position) {
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

 sortingRecorder.record = function(sorting, data) {
 	sorting(data, this);
 }

 sortingRecorder.empty = function() {
 	this._stepList.length = 0;
 }

 sortingRecorder.getStep = function(i) {
 	return this._stepList[i].step;
 }

 sortingRecorder.getLastStep = function() {
 	return this.getStep(this.size() - 1);
 }

 sortingRecorder.getPos = function(i) {
 	return this._stepList[i].position;
 }

 sortingRecorder.get=function(i,field){
 	return this._stepList[i][field];
 }


 module.exports = (function() {
 	return sortingRecorder;
 })();