'use strict';

angular.module('shellControlCenterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell', {
        url: '/shell',
		views:{
			'': { templateUrl: 'app/shell/shell.html',
					controller: 'ShellCtrl'
			},
			'proxy@shell': { templateUrl: 'app/shell/shellProxy/proxy-partial.html',
							controller: 'ShellProxyCtrl'}
		}
      });
});
