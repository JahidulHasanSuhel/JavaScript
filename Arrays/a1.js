let marks = [3, 4, 5, 6, 7, null, false, "Not Given"];
console.log(marks);
console.log("the length of array is ", marks.length)
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[9]);
marks[0] = 34;

console.log(marks);

for(let i = 0; i<marks.length; i++){
    console.log(marks[i]);
}