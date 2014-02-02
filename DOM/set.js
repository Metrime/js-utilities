$$.set = function(a,c){
	var s = this.el;
	if(!s) return;

	a = this.shortcuts(a);

	s[a] != undefined ? s[a] = c
	: s.setAttribute(a,c);

	return this;
}