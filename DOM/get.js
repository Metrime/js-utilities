require('DOM/core')

$.prototype.get = function(a){
	var s = this.el;
	if(!s) return;

	if(typeof a==="number") return $(s[a]);

	a = this.shortcuts(a);

	if(s[a] != undefined){ return s[a] }
	else if(s.getAttribute(a)){ return s.getAttribute(a) }
	else{ return null }
}