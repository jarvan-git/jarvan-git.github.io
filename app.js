(function(){
	angular.module('ptso', ['ngMessages']);
	var app = angular.module('ptso', ['ngMaterial']);
app.controller('TitleController', function($scope) {
  $scope.title = 'PTSO';
});

})();