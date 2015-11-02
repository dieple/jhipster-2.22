/* globals $ */
'use strict';

angular.module('devopsApp')
    .directive('devopsAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
