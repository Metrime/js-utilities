require('utils/templating/core')

_.t.micro = function(s,d){
	for(var p in d){
		s=s.replace(new RegExp('{'+p+'}','g'), d[p]);
	}
	return s;
}