var router = new function(){

  var s = this;

  s.routes = [];

  s.hashChange = function(req){
    var params = req.newURL.split('#/')[1].split('/');
    for(var i=0, max = s.routes.length; i<max; i++){
      var callback = [];
      var route = s.routes[i][0];
      if(route.length === params.length){
        for(var x=0, max1 = route.length; x<max1; x++){
          if(route[x] === params[x] || /:/.test(route[x])){
            callback.push(params[x]);
          }else{
            callback = [];
            break;
          }
        };
      }
      if(callback.length > 0) s.routes[i][1].apply(this,callback);
    }
  }

  s.on = function(hash,cb){
    s.routes.push([hash.split('/'),cb]);
  }

  window.addEventListener("hashchange", s.hashChange, false);
  window.addEventListener('load',function(){
    s.hashChange({newURL:window.location.href})
  },false)

};