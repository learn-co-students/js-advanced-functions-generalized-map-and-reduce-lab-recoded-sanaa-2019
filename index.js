// Add your functions here
const map = function (array, fun){
  return array.map(fun);
}
const reduce = function (array,fun,startPoint){
  if(startPoint==null)
  return array.reduce(fun);
  return array.reduce(fun,startPoint);
}
