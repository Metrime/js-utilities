require('DOM/core')

dom.filter = function(a){
	var result = this.el.filter(function(el){
		return selector(['*'+a],el.parentNode).indexOf(el) > -1;
	});
	return $(result);
}