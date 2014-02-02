sublevel.prototype.eraseID = function(id,cb){
	var result = null;
	var s = this;
	this.createReadStream()
	.on('data',function(data){
		if(data.key === id){
			result = data.key;
			this.end();
		}
	})
	.on('end',function(){
		if(result){
			s.del(result,function(){
				if(cb) cb();
			})
		}else{
			if(cb) cb(true);
		}
	})	
}