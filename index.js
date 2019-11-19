// Add your functions here
/*const map = function(arr  , fun){
    return arr.map(fun);
}
const reduce = function(arr  , fun , start = true  ){

    if(typeof arr.reduce(fun ,start ) === 'number' && start == 1){
        return arr.reduce(fun ,start ) -1;
    }
    else{
        return arr.reduce(fun ,start ) ;
    }
}*/

const map = function(srArr, srFunction){
    let myArr= srArr.map(srFunction);
    return myArr;
}

const reduce= function (srArr, srFunction, stPoint=0){
    
    if (typeof srArr.reduce(srFunction,stPoint)==='number'&& stPoint>0){
        return srArr.reduce(srFunction,stPoint);
    }
    else{
        return srArr.reduce(srFunction);
    }
}

