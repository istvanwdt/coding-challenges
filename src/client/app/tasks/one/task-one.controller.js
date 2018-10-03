(function() {
    'use strict';

    angular
        .module('app.tasks')
        .controller('TaskOne', TaskOne);

    TaskOne.$inject = ['dataservice', 'logger'];

    function TaskOne(dataservice, logger) {
        var vm = this;
        vm.title = "Problem 1";
        vm.bowerJsonData = { test: "hello" };
		vm.boxAClass = "box-red";
		vm.boxBClass = "box-blue";
        activate();

        function activate(){
            dataservice.getTaskOne().then(function(data){
                vm.boxes = data;
            });
        }
		
		vm.activateBox = function(target){
			switch(target){
				case 'A': 
					vm.boxAClass = "box-green";
					vm.boxBClass = "box-red";
					break;
				case 'B':
					vm.boxAClass = "box-blue";
					vm.boxBClass = "box-green";
					break;
			}
		}
    }
})();