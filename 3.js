let a = "123";
let b = "23";

areumine = function(a, b){
    if (a.slice(a.length - b.length == b)){
        return(true);
    }
}

console.log(areumine(a, b));