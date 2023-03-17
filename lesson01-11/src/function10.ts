// 10-Function-Optional

function addAll2(...nums:number[]): number{
    let result =0
    // for(let i=0; i < nums.length; i++){
    //     result +=nums[i];
    // }
    nums.forEach((num) => (result += num));
    return result;
}

console.log(addAll2(10,20,30.5, +true));
