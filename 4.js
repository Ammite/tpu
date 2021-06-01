let a = [1,2,3,4];

for(let i=0;i<a.length;i++){
    a[i] = Math.pow(a[i], 3);
}

a = a.reduce((a,b) => a+b, 0);

console.log(a);