require('DOM/core')

dom.find = function(a){
	this.el = _flatten(this.el.map(function(el){
		return selector([a],el);
	}));
	return this;
}