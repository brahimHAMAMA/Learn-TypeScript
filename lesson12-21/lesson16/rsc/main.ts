// function showMsg(msg: string): void{
//     console.log(msg);
// //    return msg;
// }

// showMsg("I Am Message");

// //console.log(showMsg("I Am Message"));
// console.log("test");


// function loop(){
//     while(true){
//     }
// }

// const fail = (msg:string)=>{
//     throw new Error(msg);
// }


// const loopWile1 = ()=>{
//     console.log("ddd") 
//     return;
// }

function alwayslog(name:string): never{
    while(true){
        console.log(name);
    }
}
alwayslog("brahim");
// console.log("test");
