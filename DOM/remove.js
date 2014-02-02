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