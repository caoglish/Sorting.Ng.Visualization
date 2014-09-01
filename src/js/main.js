var ctrl = require("./ctrl.js");
var ngFactorySort = require("./sortFactory");
//var directive = require("./directive");

//var SortVisual = angular.module("SortVisual", ['sortFactory','sortDirective'])
var SortVisual = angular.module("SortVisual", ['sortFactory'])


SortVisual.controller("ctrl", ctrl);

module.exports = SortVisual;