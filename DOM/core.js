require('utils/toArray')
require('utils/flatten')

function $(){
	var sel = arguments;
	if(this === window) return new $(sel);
	
	this.el = selector(_toArray(sel[0]))

	this.shortcuts = function(a){
		if 			(a==="html")	{ a="innerHTML" }
		else if 	(a==="text")	{ a=Element.prototype.innerText != undefined ? "innerText" : "textContent" }
		else if 	(a==="class")	{ a="className" }
		return a;
	}

	return;
};

function selector(els,doc){
	return _flatten(
		els.map(function(el){
			return typeof el == 'string' 
			? (/\*/.test(el) ? _toArray((doc||document).querySelectorAll(el.split('*')[1])) : (doc||document).querySelector(el)) 
			: el;
		})
	).filter(function(el){
		return el != null && !(el instanceof NodeList);
	});
}

var dom = $.prototype;