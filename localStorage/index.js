var store = {
	get:function(name){
		var result = localStorage.getItem(name);
		return result!=null ? JSON.parse(result) : [];
	},
	save:function(name,data){
		localStorage.setItem(name,JSON.stringify(data));
	},
	add:function(name,data){
		var result = store.get(name);
		result.unshift(data);
		store.save(name,result);
	},
	remove:function(name){
		localStorage.removeItem(name);
	},
	clear:function(){
		localStorage.clear();
	}
}