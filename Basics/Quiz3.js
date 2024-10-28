// 1
let str = "suh\""
console.log(str.length); //4

// uses of includes
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`,
);


//startsWith
const s = "cats are the best!";
console.log(s.startsWith("cats"));
console.log(s.startsWith("are", 5));

//endsWith
console.log(s.endsWith("best!"));
console.log(s.endsWith("best!, 18"));

//extract the amount given string
let s1 = "please give tk 2000";
let amount = Number.parseInt(s1.slice("please give tk".length))
console.log(amount);

