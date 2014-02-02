$$.on = function(a,cb){
	this.el.addEventListener(a,cb,false);
	return this;
}

$$.off = function(a,b){
	this.el.removeEventListener(a,b,false);
	return this;
}