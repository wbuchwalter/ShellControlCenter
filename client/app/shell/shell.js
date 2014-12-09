'use strict';

angular.module('shellControlCenterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell', {
        url: '/shell',
        templateUrl: 'app/shell/shell.html',
        controller: 'ShellCtrl'
      });
  });