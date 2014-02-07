require('DOM/core')
require('DOM/get')
require('DOM/set')

dom.remove = function(a,b){
	this.el.forEach(function(s){
		if(!a && !b){
			s.parentNode.removeChild(s)
		}else{
			if(b && $(s).has(a,b)){
				$(s).set(a, $(s).get(a).replace(new RegExp('(\\s|^)'+b+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, ''));
			}else{
				s.removeAttribute(a);
			}
		}
	})

	return this;
}