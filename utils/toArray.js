_toArray = function(x){
	if (!x.length || typeof x != 'object') {
		return x;
	}
	return Array.prototype.slice.call(x);
}