const KID = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;

function getHard(){
    return 3;
} 
enum kids{
    Five = 25,
    Seven = 20,
    Ten = 15
}
enum level{
    kid = kids.Ten,
    Easy = 9,
    Medium = Easy - 3,
    Hard = getHard()
}



let lvl:string ="Easy";

if(lvl === "Easy"){
    console.log(`The Level Is ${lvl} And Number Of Sconds Is ${level.Medium}`);
}

lvl ="Hard";
if(lvl === "Hard"){
    console.log(`The Level Is ${lvl} And Number Of Sconds Is ${level.Hard}`);
}