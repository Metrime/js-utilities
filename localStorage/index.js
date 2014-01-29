var store = new function(){
	var s = this,
		l = localStorage;

	s.type = function(type){
		l = window[type+"Storage"];
	}

	s.get = function(name){
		return JSON.parse(l.getItem(name)) || [];
	}

	s.set = function(name,data){
		l.setItem(name,JSON.stringify(data));
	}

	s.add = function(name,data){
		var newDoc = s.get(name);
		newDoc.unshift(data);
		s.set(name,newDoc);
	}

	s.remove = function(name){
		l.removeItem(name);
	}
}