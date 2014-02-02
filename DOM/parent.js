$$.parent = function(a){
	var s = this.el;
	if(!s) return;

	if(!a){ return $(s.parentNode);}
	else{
		if(typeof a === "string"){
			a = a.toUpperCase();
			while(s.nodeName != a && s.nodeName != "BODY"){ 
				s = s.parentNode;
			}
			return $(s);
		}else{
			while(a-- && s.nodeName != "BODY") s = s.parentNode;
			return $(s);
		}
	}
}