interface User{
    id?: number,
    username: string,
    country: string,
    sayHello():string,
    sayWelcome: ()=>string,
    getDouble(num:number): number

}

let user: User = {
    id:100,
    username:"brahim",
    country:"Alg",
    sayHello(){
        return `Hello ${this.username}`;
    },
    sayWelcome: ()=> `Welcome ${user.username}`,
    getDouble(num) {return num * 2;}
}

console.log(user);
console.log(user.id);
console.log(user.username);
console.log(user.country);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(3));


// function getdata(data: User){
//     console.log(`id Is ${data.id}`);
//     console.log(`username Is ${data.username}`);
//     console.log(`country Is ${data.country}`);
// }

// getdata({id:200, username:"khalil", country: "UK"})