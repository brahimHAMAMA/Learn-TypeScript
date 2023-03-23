class User {

    msg: () => String;
constructor(private username: string,protected salary: number, public readonly address: string = "Nill"){
    this.msg = ()=> `Hello ${this.username} Your Salary Is ${this.salary}, Your address Is ${this.address}`;
} 
sayMsg(){
    return `Hello ${this.username} Your Salary Is ${this.salary}`;
}
}

let userOne = new User("Brahim", 6000);

// console.log(userOne.username);
// console.log(userOne.salary);
console.log(userOne.sayMsg());
console.log(userOne.msg());