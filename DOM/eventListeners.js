require('DOM/core')

$.prototype.on = function(a,cb){
	this.el.addEventListener(a,cb,false);
	return this;
}

$.prototype.off = function(a,b){
	this.el.removeEventListener(a,b,false);
	return this;
}