// Add your functions here
function map(arr,func){
  return arr.map(func)
}
function reduce(arr,func,sp){
  if(sp!=null)
  return arr.reduce(func,sp)
  else
  return arr.reduce(func)
}