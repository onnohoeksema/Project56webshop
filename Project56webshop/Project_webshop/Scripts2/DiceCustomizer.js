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


angular.forEach($scope.accounts, function (value, index) {
    alert(value.name);
})
}


var alphas: string[];
alphas = ["1", "2", "3", "4"]
console.log(alphas[0]);
console.log(alphas[1]);

interface dicecustomizer {
    chickenNuggets69: string
}