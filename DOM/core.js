function $(selector){
	if(this === window) return new $(selector);

	if(typeof selector === "object"){
		if(selector.length){
			this.el = document.querySelectorAll(selector);
		}else{
			this.el = selector;
		}
	}else{
		this.el = document.querySelector(selector);
	}

	this.shortcuts = function(a){
		if 			(a==="html")	{ a="innerHTML" }
		else if 	(a==="text")	{ a=Element.prototype.innerText != undefined ? "innerText" : "textContent" }
		else if 	(a==="class")	{ a="className" }
		return a;
	}

	return this;
};

var $$ = $.prototype;