let showMsg1 = true;

function showDaitelse1(name1: string, age1: number, salary1: number ): string{
    let test = 10;
    if(showMsg1){
        return `Hello ${name1}, Age Is ${age1}, Salary Is ${salary1}, test Var ${test}`;
    }
    return `Can Note Show msg`;

}

console.log(showDaitelse1("brahim", 10,2100));