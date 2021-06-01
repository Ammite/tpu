let a = [1, 2, 3];

reverto = function(arr){
    let len = arr.length;
    for(let i = 0; i < len/2; i++){
        let x = arr[i];
        arr[i] = arr[len-i-1];
        arr[len-i-1] = x;
    }
}

reverto(a);
console.log(a);