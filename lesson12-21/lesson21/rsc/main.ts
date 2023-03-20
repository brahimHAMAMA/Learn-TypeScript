let myObj:{
    username: string,
    id: number,
    hire?: boolean,
    skills:{
        html: string,
        css: string
    }    
} = {
    username: "Elzero",
    id: 100,
    // hire: true,
    skills:{
        html: "95%",
        css: "100%"
    },
};

myObj.username = "Brahim";
myObj.id = 101;
myObj.hire = false;

console.log(myObj.username);
console.log(myObj.id);
console.log(myObj.hire);