const map = function(array,func){
        return array.map(func);
    }
const reduce = function(array,func,val=true){
    
let x=1;
      
  if (typeof array.reduce(func,val) === 'number' && val == x)
  
      {return array.reduce(func,val) -1}
  else 
  
      {return array.reduce(func,val)}
    }