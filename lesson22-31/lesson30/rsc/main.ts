class User {
    private static created:number=0;
    static getCount(): void{
        console.log(`${this.created} Object Created.`);
    }
    
    constructor(public username: string){
        User.created++;
    }
}

let user1 = new User("Brahim");
let user2 = new User("Khalil");
let user3 = new User("Amina");

User.getCount();