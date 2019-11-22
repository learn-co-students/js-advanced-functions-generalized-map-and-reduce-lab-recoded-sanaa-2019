// Add your functions here
let arr = [1, 2, 3, -9];
let memo=100;
function map(arr,fn){
    return arr.map((ele)=>fn(ele));
}
map(arr,function(e){return e*-1})
map(arr,function(e){return e})
map(arr,function(e){return e*2})
map(arr,function(e){return e**2})

function reduce(arr,fn,start){
    if(start!=undefined){
        return (arr.reduce((total,ele)=>fn(total,ele))+start);
    }
    else{
        return arr.reduce((total,ele)=>fn(total,ele));
    }
}
reduce(arr,function(e,t){return e+t})
reduce(arr,function(e,t){return e+t},memo)
reduce(arr,function(a,t){return !!a&&!!t})
reduce(arr,function(a,t){return !!a||!!t})