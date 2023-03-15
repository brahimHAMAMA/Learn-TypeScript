// 09-Function-Optional

function showData(name: string = "Undif", age: number, country?: string){
    return `${name} + ${age} + ${country}`;    
}

console.log(showData("Brahim",20));