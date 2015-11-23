var oxfordJoin = require('../');
var assert = require('assert');

describe('oxfordJoin', function() {
  describe('#join()', function () {
    it('should return an appropriate test string.', function () {
      var invitations = ['the strippers', 'JFK', 'Stalin'];
      assert.equal('the strippers, JFK, and Stalin', oxfordJoin(invitations));
    });
  });
});
