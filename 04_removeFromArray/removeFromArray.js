const removeFromArray = function(...arr) {
    let result =[];
    const args=arr[0];
         
    for(let i=0; i<args.length; i++){
        if (!arr.includes(args[i])) {
            result.push(args[i]);
    }
  }
         
  return result;     
};

// Do not edit below this line
module.exports = removeFromArray;
    
