require('DOM/core')

dom.css = function(obj){

	this.el.forEach(function(el){
		for(key in obj){
			el.style[key] = obj[key];
		}
	});

	return this;
}