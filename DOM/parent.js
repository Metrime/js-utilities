require('DOM/core')
require('utils/unique')

dom.parent = function(a){
	this.el = this.el.map(function(el){
		var s = el.parentNode;
		while(a && s.nodeName != a.toUpperCase() && s.nodeName != 'BODY'){
			s = s.parentNode;
		}
		return s;
	});

	this.el = _unique(this.el);

	return this;
}