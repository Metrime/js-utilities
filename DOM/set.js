require('DOM/core')

dom.set = function(a,c){
	var s = this.el;

	a = this.shortcuts(a);

	s.forEach(function(el){
		el[a] != undefined ? el[a] = c : el.setAttribute(a,c);
	});

	return this;
}