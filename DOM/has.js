require('DOM/core')
require('DOM/get')

$.prototype.has = function(a,b){
	return new RegExp('(\\s|^)'+b+'(\\s|$)').test($(this.el).get(a));
}