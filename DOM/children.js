require('DOM/core')

dom.children = function(){
	var result = _flatten(this.el.map(function(el){
		return _toArray(el.children);
	}));
	return $(result);
}