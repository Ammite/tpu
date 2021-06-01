let a = 2;
let n = 3;

powah = function(a, n){
    let answer = 1;
    for(let i = 0; i < n; i++){
        answer *= a;
    }
    return answer;
}


console.log(powah(a, n));    