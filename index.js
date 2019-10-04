const map = function(arr  , fun){
    return arr.map(fun);
}
const reduce = function(arr  , fun , start = true  ){

    if(typeof arr.reduce(fun ,start ) === 'number' && start == 1){
        return arr.reduce(fun ,start ) -1;
    }
    else{
        return arr.reduce(fun ,start ) ;
    }
}