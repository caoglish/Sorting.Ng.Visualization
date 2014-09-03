var ctrl = require("./ctrl.js");
var ngFactorySort = require("./sortFactory");
var directive = require("./directive");

var SortVisual = angular.module("SortVisual", ['sortFactory','sortDirective','ui.bootstrap']);
//var SortVisual = angular.module("SortVisual", ['sortFactory'])

SortVisual.run(function($rootScope){
	$rootScope.templateFile=localStorage.getItem("templateFile")?localStorage.getItem("templateFile"):'sv';
	var watchTemplateFileTimes=0;
	$rootScope.$watch("templateFile",function(){
		localStorage.setItem("templateFile",$rootScope.templateFile);
		if(watchTemplateFileTimes++!=0){
			location.reload();
		}
	})
});
module.exports = SortVisual;