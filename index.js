// Add your functions here
const map = function(arr,fn){
  return arr.map(fn);
}
const reduce = function(arr,callback,startingPoint){
  if(startingPoint != null){
    return arr.reduce(callback,startingPoint);
  }
  return arr.reduce(callback);
}
