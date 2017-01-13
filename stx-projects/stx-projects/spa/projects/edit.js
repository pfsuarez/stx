(function (app) {
    'use strict';

    app.controller('projectEditCtrl', projectEditCtrl);
    projectEditCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$timeout', '$location', '$routeParams']

    function projectEditCtrl($scope, apiService, notificationService, $timeout, $location, $routeParams) {
        $scope.id = $routeParams.id;

        $scope.project = {
            startDate: new Date(),
            endDate: new Date()
        };

        $scope.edit = function () {
            console.log($scope.project);
            apiService.put('/api/projects/' + $scope.id, $scope.project,
                function (result) {
                    notificationService.displaySuccess("Save success!!");
                    $timeout(function () {
                        $location.path('/');
                    }, 1500);
                }, 
                function (response) {
                    notificationService.displayError(response.data);
                });
        }

        function getProject() {
            apiService.get('/api/projects/' + $scope.id, null,
                function (result) {
                    $scope.project = result.data;
                    $scope.project.startDate = new Date($scope.project.startDate);
                    $scope.project.endDate = new Date($scope.project.endDate);
                },
                function (response) {
                    console.error(response);
                    notificationService.displayError(response.data);
                });
        }

        getProject();
    }

})(angular.module('stxProjects'));