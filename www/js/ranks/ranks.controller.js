(function() {
	"use strict";

	angular.module('app.ranks')
		.controller('RanksCtrl', RanksCtrl);

	function RanksCtrl(dataservice) {
		var vm = this;
		vm.datas = [];
		vm.weeks = [];
		vm.currentWeek = null;

		vm.changeWeek = changeWeek;

		activate();
		function activate() {
			fetchPageData();	
		};

		function changeWeek(value) {
			var newValue = vm.currentWeek + value;
			if (newValue < 1) {
				newValue = 1;
			} else if (newValue > vm.weeks.length) {
				newValue = vm.weeks.length;
			}
			vm.currentWeek = newValue;
			dataservice.fetchRanks(vm.currentWeek).then(processRanksData);
		}

		function processRanksData(result) {
			if (200 === result.status) {
				vm.datas = result.data.ranks;
			}
		}

		function fetchPageData() {
			dataservice.fetchPageData('rank').then(processPageData);
		};

		function processPageData(result) {
			if (200 === result.status) {
				vm.datas = result.data.ranks;
				vm.weeks = result.data.weeks;
				vm.currentWeek = vm.weeks.length;
			}
		};
		
	};
})();