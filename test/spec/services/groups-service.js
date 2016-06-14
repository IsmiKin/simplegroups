'use strict';

describe('Service: groupsService', function () {

  // load the service's module
  beforeEach(module('ngSimpleGroupsApp'));

  // instantiate service
  var groupsService;
  beforeEach(inject(function (_groupsService_) {
    groupsService = _groupsService_;
  }));

  it('should do something', function () {
    expect(!!groupsService).toBe(true);
  });

});
