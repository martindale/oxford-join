var oxfordJoin = require('../');
var assert = require('assert');

describe('oxfordJoin', function() {
  describe('#join()', function () {
    it('should return handle three items correctly.', function () {
      var invitations = ['the strippers', 'JFK', 'Stalin'];
      assert.equal('the strippers, JFK, and Stalin', oxfordJoin(invitations));
    });
    it('should return handle two items correctly.', function () {
      var invitations = ['the strippers', 'JFK'];
      assert.equal('the strippers and JFK', oxfordJoin(invitations));
    });
    it('should return handle one item correctly.', function () {
      var invitations = ['the strippers'];
      assert.equal('the strippers', oxfordJoin(invitations));
    });
    it('should return handle zero items correctly.', function () {
      var invitations = [];
      assert.equal('', oxfordJoin(invitations));
    });
  });
});
