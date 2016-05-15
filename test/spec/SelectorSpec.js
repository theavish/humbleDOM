describe('humbleDOM', function() {
  'use strict';

  beforeEach(function() {
    affix('test')
  });

  it('should return a humbleDOM object', function() {
    var h = new humbleDOM();
    expect(h).not.toBe(null);
  });
});
