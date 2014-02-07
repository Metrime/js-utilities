require('DOM/core')
require('utils/dot')

dom.next = function(a){
	return $(this.el.map(_dot('nextElementSibling')));
}

dom.prev = function(a){
	return $(this.el.map(_dot('previousElementSibling')));
}