(function () {
  'use strict';

  angular
    .module('akash')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/components/about/about.html'
      });

  }

})();
