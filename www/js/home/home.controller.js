(function() {
	"use strict";

	angular.module('app.home')
		.controller('HomeCtrl', HomeCtrl)

	function HomeCtrl($ionicHistory) {
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
	};		

	
})();