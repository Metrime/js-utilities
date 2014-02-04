require('DOM/core')
require('DOM/has')
require('DOM/set')

$.prototype.add = function(a,b){
	if(!this.el) return;
	var s = $(this.el);

	a = this.shortcuts(a);


	//innerHTML, innerText, append && prepend (object, or raw strings)
	if(a === "innerHTML" || a === "innerText"){
		this.el[a] += b;
	}
	else if(a === "append" || a === "prepend"){
		if(typeof b === "object"){
			var frag = b;
		}else{
			var frag = document.createDocumentFragment(), t = document.createElement("div"), c;
			t.innerHTML = b;
			while(c = t.firstChild) frag.appendChild(c);
		}

		if(a === 'append'){ this.el.appendChild(frag); }
		else{ this.el.insertBefore(frag, this.el.firstChild) }
	}


	//attributes etc.
	else if(!s.has(a,b)){
		var value = s.get(a);
		s.set(a,(value ? value+' ' : '')+b)
	};

	return this;
}