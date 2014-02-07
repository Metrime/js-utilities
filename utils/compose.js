//compose new functions made out of a collection of other functions
_compose = function(){
  return [].reduce.call(arguments, function(f,g){
    return function() {
      return g(f.apply(this, arguments));
    };
  });
}