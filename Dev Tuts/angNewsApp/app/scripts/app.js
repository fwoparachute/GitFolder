'use strict';

var app = angular.module('angNewsAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/post.html',
            controller: 'PostCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});