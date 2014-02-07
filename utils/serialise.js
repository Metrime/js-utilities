_serialise = function(obj){
  var serialised = '';
  for (key in obj){
    serialised += '&'+key+'='+obj[key];
  }
  return serialised;
}