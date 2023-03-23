
// Hone page
interface Settings{
    theme: boolean,
    font?: string,
    save():void
}

class User implements Settings{
    constructor(public username:string, public theme: boolean, public font:string){}
    save(): void{
        console.log(`Save`);
    }
    update():void{
        console.log(`Updated.`);
    }
}

let user1 = new User("Brahim", true, "Open Sans");

console.log(user1.username);
console.log(user1.font);

user1.save();
user1.update();