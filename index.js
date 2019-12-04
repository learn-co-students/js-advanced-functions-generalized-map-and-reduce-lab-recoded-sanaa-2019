// Add your functions here
let map = function(sourceArray,sourceFunction){
    return sourceArray.map(sourceFunction);
  }
let reduce = function(sourceArray,callBack,startingPoint){
    if(startingPoint !== undefined){
      return sourceArray.reduce(callBack,startingPoint);
    }
    return sourceArray.reduce(callBack);
  }
