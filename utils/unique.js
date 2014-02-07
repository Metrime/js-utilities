_unique = function(xs){
	return xs.filter(function(x, idx) {
		return xs.indexOf(x) == idx;
	});
}