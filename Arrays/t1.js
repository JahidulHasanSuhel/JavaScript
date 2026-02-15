// slice() - copy

salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
const saladCopy = salad.slice();
console.log("Salad Before Copy", salad);
console.log("Salad After Copy", saladCopy);
console.log(salad === saladCopy); // false

// Array Destructuring
{
  const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

  const tomato = salad[0];
  const mushroom = salad[1];
  const carrot = salad[5];
}

{
  const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
  const [tomato, mushroom, carrot] = ["🍅", "🍄", "🥕"];
  console.log(tomato, mushroom, carrot);
}

{
  const [tomato, mushroom = "🍄"] = ["🍅"];

  console.log(tomato); // '🍅'
  console.log(mushroom); // '🍄'
}

{
  const [tomato, , carrot] = ["🍅", "🍄", "🥕"];

  console.log(tomato); // '🍅'
  console.log(carrot); // '🥕'
}

// Nested Array

// [1 ,2, [4, [6, 8, ['q']]]]
{
  let fruits = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];
  const veg = fruits[4]; // ['🍅', '🍄', '🥕']
  const carrot = veg[2]; // '🥕'

  fruits[4][2]; // '🥕'

  let [, , , , [, , carrot]] = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];
}

// Rest and Spread
// ...
// in an = (assignment operator) the left side is call rest operator and the right side is called spread op..
{
  const [tomato, mashroom, ...rest] = [
    "🍅",
    "🍄",
    "🥦",
    "🥒",
    "🌽",
    "🥕",
    "🥑",
  ];
  console.log(rest);

  const mySalad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
  const mySaaladCopy = [...mySalad];

  console.log(mySaaladCopy); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

  mySalad === mySaaladCopy; // false
}

// Swapping
{
let first = '😔';
let second = '🙂';

[first, second] = [second, first];

console.log(first);  // '🙂'
console.log(second); // '😔'
}

// Merge
{
const emotions = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];

const emotionalVeggies = [...emotions, ...veggies];

console.log(emotionalVeggies);
}
