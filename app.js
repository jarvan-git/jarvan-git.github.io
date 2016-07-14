(function(){
	angular.module('ptso', ['ngMessages']);
	var app = angular.module('ptso', ['ngMaterial']);
app.controller('TitleController', function($scope) {
  $scope.title = 'PTSO';
});
app.controller('AppCtrl', function($scope) {
  $scope.todos = [];
  for (var i = 0; i < 15; i++) {
    $scope.todos.push({
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      notes: "I'll be in your neighborhood doing errands."
    });
  }
});
})();