// Create Enums + Function Here
enum Game{
  Easy = 100,
  Medium = Easy -20,
  Hard = (Easy - 10) / 3, // 100 - 10 = 90 /2 = 30
  Insane = levelInsane(10) 
}
function levelInsane(num: number): number{
  return (num < Game.Hard  && num > 0) ? Game.Hard - num : 10
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20