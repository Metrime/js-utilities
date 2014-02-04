require('DOM/core')
require('DOM/get')
require('DOM/set')

$.prototype.remove = function(a,b){
	var s = this.el;
	if(!s) return;

	if(!a && !b){
		s.parentNode.removeChild(s)
	}else{
		if(b && $(s).has(a,b)){
			$(s).set(a, $(s).get(a).replace(new RegExp('(\\s|^)'+b+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, ''));
		}else{
			s.removeAttribute(a);
		}
	}

	return this;
}