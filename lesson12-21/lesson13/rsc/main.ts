
// Type Alias Advenced

type Buttons = {
    up : string,
    right : string,
    down : string,
    left : string,
}
type last = Buttons & {
    x: boolean
}
function Moving(btns: last){
    console.log(`Get Moving Up ${btns.up}`);
    console.log(`Get Moving Down ${btns.down}`);
    console.log(`Get Moving Up ${btns.left}`);
    console.log(`Get Moving Down ${btns.right}`);
}

Moving({up:"Jump", down:"go down", left:"go left", right:"go right", x: true});
