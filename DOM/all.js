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
		else if 	(a==="text")	{ a="innerText" }
		else if 	(a==="class")	{ a="className" }
		return a;
	}

	return this;
};

var $$ = $.prototype;
$$.add = function(a,b){
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
$$.each = function(cb){
	var max = this.el.length, i = 0;
	while (i<max){
		cb($(this.el[i]),i);
		i++;
	};
};
$$.on = function(a,cb){
	this.el.addEventListener(a,cb,false);
	return this;
}

$$.off = function(a,b){
	this.el.removeEventListener(a,b,false);
	return this;
}
$$.find = function(a){
	var s = this.el;
	if(!s) return;

	if(a.length){
		return $(s.querySelectorAll(a));
	}else{
		return $(s.querySelector(a));
	}
}
$$.get = function(a){
	var s = this.el;
	if(!s) return;

	if(typeof a==="number") return $(s[a]);

	a = this.shortcuts(a);

	if(s[a] != undefined){ return s[a] }
	else if(s.getAttribute(a)){ return s.getAttribute(a) }
	else{ return null }
}
$$.has = function(a,b){
	return new RegExp('(\\s|^)'+b+'(\\s|$)').test($(this.el).get(a));
}
$$.parent = function(a){
	var s = this.el;
	if(!s) return;

	if(!a){ return $(s.parentNode);}
	else{
		if(typeof a === "string"){
			a = a.toUpperCase();
			while(s.nodeName != a && s.nodeName != "BODY"){ 
				s = s.parentNode;
			}
			return $(s);
		}else{
			while(a-- && s.nodeName != "BODY") s = s.parentNode;
			return $(s);
		}
	}
}
$$.remove = function(a,b){
	var s = this.el;
	if(!s) return;

	if(!a && !b){
		s.parentNode.removeChild(s)
	}else{
		if(b){
			var value = $(s).get(a);
			if(!value) return;
			$(s).set(a, value.replace(new RegExp('(\\s|^)'+b+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, ''));
		}else{
			s.removeAttribute(a);
		}
	}

	return this;
}
$$.set = function(a,c){
	var s = this.el;
	if(!s) return;

	a = this.shortcuts(a);

	s[a] != undefined ? s[a] = c
	: s.setAttribute(a,c);

	return this;
}