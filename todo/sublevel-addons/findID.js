sublevel.prototype.findID = function(id,cb){
	var result = null;
	this.createReadStream()
	.on('data',function(data){
		if(data.key === id){
			result = data;
			this.end();
		}
	})
	.on('end',function(){
		if(cb) cb(result)
	})
}