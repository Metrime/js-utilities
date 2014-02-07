require('DOM/core')

dom.get = function(a){
	var s = this.el;

	if(typeof a=="number") return $([s[a]]);

	a = this.shortcuts(a);

	var map = s.map(function(el){
		return el[a] != undefined ? el[a] : el.getAttribute(a);
	});

	return map.length > 1 ? map : map[0];
}