(function() {
    'use strict';

    angular
        .module('app.tasks')
        .controller('TaskTwo', TaskTwo);

    TaskTwo.$inject = ['dataservice', 'logger'];
    /* @ngInject */
    function TaskTwo(dataservice, logger) {
        var vm = this;
        vm.problem2Solved = problem2Solved;
		vm.checkBoxes;
		
        activate();

        function activate(){
            return dataservice.getTaskTwo().then(function(data){
                vm.checkBoxes = data;
                return vm.checkBoxes;
            });
        }
        function problem2Solved(){
            logger.success('Hurray!', '');
        }
		
		vm.checkValidity = function(testForm){
			var valid = false;
			for(var a in vm.checkBoxes){
				if(vm.checkBoxes[a].id==true) {
					valid = true;
					break;
				}
			}
			testForm.checkBox.$valid = valid;
			testForm.checkBox.$invalid = !valid;

			testForm.dropDown.$valid = vm.dropDown!=undefined;
			
			testForm.$valid = testForm.checkBox.$valid && testForm.dropDown.$valid;
		}
    }

})();
