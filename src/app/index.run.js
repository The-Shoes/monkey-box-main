(function() {
  'use strict';

  angular
    .module('mkboxV01')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
