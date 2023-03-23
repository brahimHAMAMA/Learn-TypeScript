class User {
        u: String;
        s: Number;
        msg: () => String;
    constructor(username: string, salary: number){
        this.u = username;
        this.s = salary;
        this.msg = ()=> `Hello ${this.u} Your Salary Is ${this.s}`;
    } 
    sayMsg(){
        return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
}

let userOne = new User("Brahim", 6000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.sayMsg());
console.log(userOne.msg());