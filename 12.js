class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    age_comparison(p){
        if(p.age > this.age){
            return (`${p.name} is older than me(${this.name})`);
        }
        if(p.age < this.age){
            return (`${p.name} is younger than me(${this.name})`);
        }
        if(p.age == this.age){
            return (`${p.name} is same age as me(${this.name})`);
        }
    }
}

let p1 = new Person("dima", 18);
let p2 = new Person("vanya", 18);
let p3 = new Person("adil", 19);

console.log(p1.age_comparison(p2));
console.log(p1.age_comparison(p3));
console.log(p2.age_comparison(p1));
console.log(p2.age_comparison(p3));
console.log(p3.age_comparison(p1));
console.log(p3.age_comparison(p2));
