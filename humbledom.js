//humbleDOM - Minimalist and modular JavaScript library for DOM manipulation
//README.md - https://github.com/humblecrew/humbleDOM/blob/master/README.md
//Created by @jonkvix (jonkvix@gmail.com) and @theavish (avi.samloff@gmail.com)

//Returns an array containing all elements matching target selector
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