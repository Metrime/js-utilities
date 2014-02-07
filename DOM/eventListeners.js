require('DOM/core')

dom.on = function(a,cb){
	this.el.forEach(function(b){
		b.addEventListener(a,cb,false);
	})
	return this;
}

dom.off = function(a,b){
	this.el.forEach(function(b){
		b.removeEventListener(a,cb,false);
	})
	return this;
}