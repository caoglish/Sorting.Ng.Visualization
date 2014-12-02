var sortList = {
	bubble: require("./sort/bubble"),
	insertion: require("./sort/insertion"),
	selection: require("./sort/selection")
};

var sortModule = angular.module("sortFactory", []);

sortModule.factory("sortFactory", function() {
	return function(type) {
		return sortList[type]
	};
})

module.exports = sortModule;