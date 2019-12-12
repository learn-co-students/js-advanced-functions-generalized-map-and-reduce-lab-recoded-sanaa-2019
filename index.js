// Add your functions here

let map= function(array,func){
  return array.map(func)
}

let reduce=function(array,func,start){
  if(start!=null){
 return array.reduce(func,start)
  }else{
    return array.reduce(func)
  }
}
