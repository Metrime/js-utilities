$$.find = function(a){
	var s = this.el;
	if(!s) return;

	if(a.length){
		return $(s.querySelectorAll(a));
	}else{
		return $(s.querySelector(a));
	}
}