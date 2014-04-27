var app = angular.module("myApp",[])
app.controller("MainController", function ($scope ){
    $scope.num = 1;
    $scope.increment = function(){
        $scope.num = $scope.num +1 ;
    }
});
