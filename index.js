// Add your functions here
function map(array, newFunc){
    let arr = [];
      console.log(arr)
      array.forEach(element => {
          arr.push(newFunc(element))
      });
      return arr
    }
    console.log(arr)




    function reduce(array , myFunc, newVal ){

    let Start;  
    if(!!array[0]){ Start=true; Start=Boolean(Start);} 
    if(newVal){ Start=newVal;}

    function number(array) {
        return typeof(array) === "number";
      }
      
      
    if(!newVal && array.every(number)){
    Start=0
      
    }

   for(let i=0; i<array.length; i++){  
            Start = myFunc(array[i],Start )
        }

  return Start ; 
}
  
  