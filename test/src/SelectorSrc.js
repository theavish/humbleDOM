var humbleDOM = function(selector) {
  return true;
};

var _h = function(selector) {
	var elements = document.querySelectorAll(selector);
	var elementArray = [];
	for (var i = 0; i < elements.length; i++) {
		var node = elements[i];
		elementArray.push(node);
	}
	return elementArray;
	// return Array.prototype.slice.call(elements);
};