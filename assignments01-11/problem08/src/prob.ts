// Write The Function Here
function printInConsole(...paras: (string | number | boolean)[]){
  paras.forEach((para)=>{
      (typeof(para) =="number")
      ? console.log(`The Value Is ${para} And Type Is ${typeof(para)}`)
      :(
        (typeof(para) =="string")
        ? console.log(`The Value Is ${para} And Type Is ${typeof(para)}`)
        : console.log(`The Value Is ${para} And Type Is ${typeof(para)}`)
      )
    });

  }
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log("Done");
console.log(printInConsole("A", "B", "C"));
console.log("Done");
console.log(printInConsole(true, false, false, true, true));
console.log("Done");

// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done