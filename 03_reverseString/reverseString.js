const reverseString = function(str) {
    const string =str.split('');
    
   let arr =[];
    for(let i=string.length; i>= 0; i--){
        arr.push(string[i]);
    }
    let result= arr.join('');
  
return result;
};

// Do not edit below this line
module.exports = reverseString;
