class User {
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    msg: () => String;
    constructor(private _username: string,protected salary: number, public readonly address: string = "Nill"){
        this.msg = ()=> `Hello ${this.username} Your Salary Is ${this.salary}, Your address Is ${this.address}`;
    } 
    sayMsg(){
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
    // get username(): string{
    //     return this._username;
    // }
    // set username(value:string){
    //     this._username = value;
    // }
}

let userOne = new User("Brahim", 6000);

console.log(userOne.username);
userOne.username = "Ali";
console.log(userOne.username);

// console.log(userOne.salary);
console.log(userOne.sayMsg());
console.log(userOne.msg());