sublevel.prototype.getAll = function(cb){
	var result = [];
	this.createReadStream()
	.on('data',function(data){ result.push(data) })
	.on('end',function(){ 
		if(cb) cb(result.sort(function(a,b){
			return a.value.stamp < b.value.stamp ? 1 : -1;
		}));
	})
}