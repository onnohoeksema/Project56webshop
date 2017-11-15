app1.controller("ctrlDC",
    function($scope) {
        angular.module("DiceCustomizer", [])
            .controller("ExampleController", ["$scope", function ($scope){}]);

            $scope.color = {
                name: "something something"
            };
            $scope.specialValue = {
                "id": "customized dice 1",
                "value": "something something 2"
            };
        $scope.selection = [];
    });