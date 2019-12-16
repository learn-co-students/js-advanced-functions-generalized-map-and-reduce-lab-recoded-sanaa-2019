// Add your functions here
array= [1,2,3]


// generalized map function
function map(array , myFunc){
    
    let newArray = []
    
    array.forEach(element => {
        newArray.push(myFunc(element))
    });

    return newArray;
}

sourceArray55 = [1,2,3]


sourceArray6 = [99, 2, true, "string"]
// generalized reduce function
function reduce(array , myFunc, start ){

    let newSart;  
    if(!!array[0]){ newSart=true; newSart=Boolean(newSart);} 
    if(start){ newSart=start;}

    function myNuum(array) {
        return typeof(array) === "number";
      }
    if(!start && array.every(myNuum)){console.log("okay"); newSart=0}

           for(let i=0; i<array.length; i++){  
            newSart = myFunc(array[i],newSart )
        }

   return newSart ; 
}