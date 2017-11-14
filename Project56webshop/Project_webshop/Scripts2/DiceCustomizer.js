<script>
    angular.module('DiceCustomizer', [])
        .controller('ExampleController', ['$scope',function($scope)]){
        $scope.color = {
            name: 'something something'
        };
            $scope.specialValue = {
                "id": "customized dice 1"
                "value": "something something 2"
            };
        }]);
</script>
<form name="somethingsomething form" ng-controller="Dicecustomizer">
    <label>
        <input type="Radio" ng-model="color.name" value="red">
      1331      Red
    </label><br/>
    <label>
        <input type="Radio" ng-model="color.name" ng-value="specialValue">
            Green
    </label><br/>
    <label>
        <input type="Radio" ng-model="color.name" value="blue">
            Blue
    </label><br />
    <tt>color = {{ color.name | JSON }}<tt><br />

</form>