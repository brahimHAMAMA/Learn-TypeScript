// 09-Function-Optional

function addAll1(...nums:number[]): number{
    let result =0
    for(let i=0; i < nums.length; i++){
        result +=nums[i];
    }
    return result;
}

console.log(addAll1(10,20,30, +true));