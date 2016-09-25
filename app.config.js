'use strict';

angular
    .module('app')
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
        // страница по умолчанию
        .when('/universities',{
            template: '<universities></universities>',
            //controller : 'Universities'
        })
        // страница о предметах
        .when('/subjects',{
            templateUrl : 'js/pages/subjects.html',
            //controller : 'Subjects'
        })
        // страница с работами
        .when('/workTypes',{
            templateUrl : 'js/pages/workTypes.html',
            //controller : 'WorkTypes'
    })
        .otherwise('/')
}]);