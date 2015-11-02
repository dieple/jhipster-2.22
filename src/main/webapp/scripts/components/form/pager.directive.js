/* globals $ */
'use strict';

angular.module('devopsApp')
    .directive('devopsAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
