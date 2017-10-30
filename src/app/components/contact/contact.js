(function() {
  'use strict';

  angular
    .module('akash')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/components/contact/contact.html',
        controller: 'AboutController'
      });

  }

})();
