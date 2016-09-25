'use strict';

angular.
    module('universities').
    component('universities', {
    templateUrl: 'js/universities/universities.html',
    controller: ['$http', function UniversityController($http) {
        $http.get('/api/universities/getFaculties').success(function(response) {
            var self = this;
                self.faculties = response.data;
                });
    }]
});