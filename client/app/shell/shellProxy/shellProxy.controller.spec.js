'use strict';

describe('Controller: ShellProxyCtrl', function () {

  // load the controller's module
  beforeEach(module('shellControlCenterApp'));

  var ShellProxyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShellProxyCtrl = $controller('ShellProxyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
