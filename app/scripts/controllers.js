'use strict';
angular.module('videoStore')
    .controller('HomeController', ['$scope', 'filmService', function ($scope, filmService) {
        $scope.showDetails = false;
        $scope.films = filmService.getFilms()
            .then(
                function (response) {
                    $scope.films = response.data;
                },
                function(err){
                    console.log(err);
                }
            );
        $scope.toggleDetails = function () {
            $scope.showDetails = !$scope.showDetails;
        };
    }])