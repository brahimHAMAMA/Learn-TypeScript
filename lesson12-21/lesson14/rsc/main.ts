type compareExit = 0|1|-1
function compare(num1: number, num2: number): compareExit{
    return (num1 === num2)? 0:((num1 > num2)? 1: -1);
}

console.log(compare(20,20));
console.log(compare(20,15));
console.log(compare(15,20));

let mynumber: compareExit = 1;