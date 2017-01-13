(function (app) {
    'use strict';

    app.controller('projectsCtrl', indexCtrl);
    indexCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$window', '$location']

    function indexCtrl($scope, apiService, notificationService, $window, $location) {
        $scope.loadingProjects = true;
        $scope.projects = [];

        function loadData() {
            apiService.get('/api/projects/', null,
                projectsLoadCompleted,
                projectsLoadFailed);
        }

        function projectsLoadCompleted(result) {
            $scope.projects = result.data;
            $scope.loadingProjects = false;
        }

        function projectsLoadFailed(response) {
            console.error(response);
            notificationService.displayError(response.data);
        }

        loadData();

        $scope.remove = function (projectId) {
            console.log(projectId);
            if ($window.confirm('Desea eliminar el proyecto?')) {
                apiService.remove('/api/projects/', projectId,
                function () {
                    notificationService.displaySuccess('Projecto eliminado');
                    loadData();
                },
                function (response) {
                    console.error(response);
                    notificationService.displayError(response.data);
                });
            }
        }

        $scope.edit = function (projectId) {
            $location.path('/projects/edit/' + projectId);
        }
    }

})(angular.module('stxProjects'));