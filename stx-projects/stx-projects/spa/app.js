(function () {
    'use strict';

    angular.module("stxProjects", ['ngRoute', 'ngMessages'])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'spa/projects/index.html',
                controller: 'projectsCtrl'
            })
            //.when("/login", {
            //    templateUrl: "/spa/account/login.html",
            //    controller: "loginCtrl"
            //})
            //.when("/register", {
            //    templateUrl: "/spa/account/register.html",
            //    controller: "registerCtrl"
            //})
            .when("/projects/add", {
                templateUrl: "spa/projects/add.html",
                controller: "projectAddCtrl"
            })
            .when("/projects/edit/:id", {
                templateUrl: "spa/projects/edit.html",
                controller: "projectEditCtrl"
            })
            .otherwise({ redirectTo: "/" });
    }
})();