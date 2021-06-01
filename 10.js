let a = 5;
let answer = 1;

factorial = function(a){
    if(a == 1){
        return 1;
    }
    return a * factorial(a-1);
}

console.log(factorial(a));