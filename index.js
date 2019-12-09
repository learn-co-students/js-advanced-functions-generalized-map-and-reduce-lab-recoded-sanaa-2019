// Add your functions here
const map = function(arr,fn){
  return arr.map(fn);
}
const reduce = function(arr,callback,start){
  if(start != null){
    return arr.reduce(callback,start);
  }
  return arr.reduce(callback);
}
