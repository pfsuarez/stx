(function (app) {
    'use strict';

    app.controller('projectAddCtrl', projectAddCtrl);
    projectAddCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$timeout', '$location']

    function projectAddCtrl($scope, apiService, notificationService, $timeout, $location) {
        $scope.project = {
            startDate: new Date(),
            endDate: new Date()
        };

        $scope.AddProject = function () {
            console.log($scope.project);
            apiService.post('/api/projects/', $scope.project, saveCompleted, saveFailed);
        }

        function saveCompleted(result) {
            notificationService.displaySuccess("Save success!!");
            $timeout(function () {
                $location.path('/');
            }, 1500);
        }

        function saveFailed(response) {
            notificationService.displayError(response.data);
        }
    }

})(angular.module('stxProjects'));