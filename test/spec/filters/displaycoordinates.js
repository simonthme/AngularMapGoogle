'use strict';

describe('Filter: displayLat', function () {
  var displayLat;
// load the filter's module
beforeEach(module('angularMapGoogleApp'));

// initialize a new instance of the filter before each test

beforeEach(inject(function (_displayLat_) {
  displayLat = _displayLat_ ;
}));

it('should return the input prefixed with "displayLat filter"', function () {
  var lat = 35.56478304;
  expect(displayLat(lat)).toBe("35°33'52''E");
});

});


describe('Filter: displayLong', function () {
  var displayLong;
// load the filter's module
  beforeEach(module('angularMapGoogleApp'));

// initialize a new instance of the filter before each test

  beforeEach(inject(function (_displayLong_) {
    displayLong = _displayLong_ ;
  }));

  it('should return the input prefixed with "displayLong filter"', function () {
    var lat = 35.56478304;
    expect(displayLat(lat)).toBe("35°33'52''");
  });

});
