sublevel.prototype.erase = function(query,cb){
	var removeThis = [];
	var s = this;
	this.createReadStream()
	.on('data',function(data){
		var error = false;
		for(a in query){
			if(!data.value[a] || data.value[a] != query[a]) error = true;
		}
		if(!error) removeThis.push(data);
	})
	.on('end',function(){
		if(removeThis.length > 0){
			var clone = removeThis.map(function(a){ return {type:'del',key:a.key} });
			removeThis = removeThis.map(function(a){ return {type:'del',key:a.key} });
			s.batch(removeThis,function(err){
				if(err) console.log("Error when batch removing:",err);
				if(cb) cb(clone);
			})
		}
	})
}