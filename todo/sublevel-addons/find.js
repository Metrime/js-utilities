sublevel.prototype.find = function(query,cb){

	var result = [];

	this.createReadStream()
	.on('data',function(data){
		var error = false;
		for(a in query){
			if(!data.value[a] || data.value[a] != query[a]) error = true;
		}
		if(!error) result.push(data);
	})
	.on('end',function(){
		if(cb) cb(result.sort(function(a,b){
			return a.value.stamp < b.value.stamp ? 1 : -1;
		}));
	})
}