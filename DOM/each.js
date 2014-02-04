require('DOM/core')

$.prototype.each = function(cb){
	var max = this.el.length, i = 0;
	while (i<max){
		cb($(this.el[i]),i);
		i++;
	};
};