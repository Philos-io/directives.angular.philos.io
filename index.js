angular.module('app', [])


.controller('MainController', function(){

	this.display = true;

})
.directive('pgIf', function(){
	return {
		restrict: 'A',
		link: function(){
			
		}	
	};
});
