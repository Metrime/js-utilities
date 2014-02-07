require('DOM/core')
require('DOM/has')
require('DOM/set')

dom.add = function(a,b){
	var s = this.el;

	a = this.shortcuts(a);

	if(a === 'innerHTML' || a === 'innerText'){
		s.forEach(function(el){
			if(el) el[a] += b;
		})
	}else{
		s.forEach(function(el){
			if($(el).has(a,b)) return;
			var value = $(el).get(a);
			$(el).set(a,(value ? value+' ' : '')+b)
		})
	}

	return this;

	// if(a === "append" || a === "prepend"){
	// 	if(typeof b === "object"){
	// 		var frag = b;
	// 	}else{
	// 		var frag = document.createDocumentFragment(), t = document.createElement("div"), c;
	// 		t.innerHTML = b;
	// 		while(c = t.firstChild) frag.appendChild(c);
	// 	}

	// 	if(a === 'append'){ this.el.appendChild(frag); }
	// 	else{ this.el.insertBefore(frag, this.el.firstChild) }
	// }

}