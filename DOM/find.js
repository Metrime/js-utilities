require('DOM/core')

$.prototype.find = function(a){
	var s = this.el;
	if(!s) return;

	if(s.length){
		return $(s.querySelectorAll(a));
	}else{
		return $(s.querySelector(a));
	}
}