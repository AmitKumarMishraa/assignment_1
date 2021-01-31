(function() {
  'use strict'

  angular.module('diet', [])

    .controller('MyFoodCalculator', function($scope) {
      $scope.foodCount = function() {
        if ($scope.food == null || $scope.food == "") {
          $scope.message = "Please enter data first"
        } else {
          $scope.foods = $scope.food.split(",")
          if ($scope.foods.length <= 3) {
            $scope.message = "Enjoy!"
          } else if ($scope.foods.length > 3) {
            $scope.message = "Too much!"
          }
        }
      }
    })
})();
