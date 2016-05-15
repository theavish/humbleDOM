describe('humbleDOM', function() {
  'use strict';

  beforeEach(function() {
    affix('test')
  });

  it('should return a humbleDOM object', function() {
    var h = new humbleDOM();
    expect(h).not.toBe(null);
  });

  it('should return elements matching selector', function() {
  	var h = new _h('div');
  	console.log(h);
  	var j = $.makeArray($('div'));
  	console.log(j);
  	expect(j).toEqual(h);
  })
});
