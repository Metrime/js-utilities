require('DOM/core')
require('DOM/get')

$.prototype.fetch = function(cb){
	var s = this.el;
	if(!s || !$(s).get('data-fetch')) return;
	if(spinner != undefined) spinner.show(s);
	new ajax($(s).get('data-fetch'),function(res){
		if(spinner != undefined){
			spinner.hide(function(){ cb && cb(res,$(s)); });
		}else{
			cb && cb(res,$(s));
		}
	});
};