const sumAll = function(num1,num2) {
let result=0; 

if(typeof num1 == 'number' && typeof num2=='number' && num1 >= 0 && num2>=0){
    
    if(num1 < num2){
        for(let i=num1; i<=num2; i++){
            result +=i;
        }
    }
    else{
        for(let i=num1; i>=num2; i--){
            result +=i;
        }
    }
   
    return result;
}

return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
