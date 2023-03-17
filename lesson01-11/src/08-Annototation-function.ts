let showMsg = true;

function showDetails(name: string, age: number, salary: number) : string{
    let test =10;
if (showMsg){
    return `Hello ${name} Age ${age} Salary is : ${salary} test variable ${test}`
}
    return `no data to show`
}
console.log(showDetails('brahim', 40, 5000));