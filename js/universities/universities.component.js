'use strict';

angular.
    module('universities').
    component('universities', {
    templateUrl: 'js/universities/universities.html',
    controller: ['$http', function UniversityController($http) {
        var self = this;
        $http.get('js/faculties/faculties.json').then(function(response) {
                self.faculties = response.data;
                });
    }]
});