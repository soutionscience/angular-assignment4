(function(){


	angular.module('MenuApp')
	.component('categories', {
		templateUrl: 'templates/categoriesList.template.html',
	   bindings:{
		 	mycategories: '<'
		 }
	})

})();