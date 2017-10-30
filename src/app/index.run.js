(function() {
  'use strict';

  angular
    .module('akash')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
