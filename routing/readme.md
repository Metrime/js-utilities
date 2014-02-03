#Router

Minimal hash based router in ~530 bytes. IE9 and up.

##Usage


	router.on('this/specific/link',function(){
		//matches foo.bar#/this/specific/link
	});
	
	router.on(':user/edit',function(user){
		//matches foo.bar#/*/edit
		//returns parameters in callback
	});