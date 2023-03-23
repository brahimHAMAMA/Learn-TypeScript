interface User{
    id?: number,
    username: string,
    country: string
}
interface Moderator extends User{
    role: string | number
}

interface Admin extends Moderator{
    protect?: boolean
}

let user: Admin = {
    id:100,
    username:"brahim",
    country:"Alg", 
    role: "Mod",
    protect: true
}

console.log(user)

