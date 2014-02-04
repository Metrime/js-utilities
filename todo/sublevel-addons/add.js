sublevel.prototype.add = function(obj,cb){
	obj.stamp = new Date().getTime();
	var id = "a"+randomID(19,"aA0");
	this.put(id,obj,function(err){
		if(cb) cb(id)
	});
}