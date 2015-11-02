'use strict';

describe('duskyStar.version module', function() {
  beforeEach(module('duskyStar.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
