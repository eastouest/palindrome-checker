function palindrome(str) {
//make palindrome case-insensitive
str = str.toLowerCase();
//remove punctuation, spaces and symbols
str  = str.replace(/[^a-z0-9]/gi, '');
//split the string in half
let index = str.length;
const partOne = str.slice(0, index / 2);
//check if the index is odd (meaning there is a remainder letter)
if (index % 2 === 1){
  //split the string in half, excluding the middle-most letter
  const partOne = str.slice(0, index / 2);
  const partTwo = str.slice((index / 2+1), str.length);
  //reverse the second half of the string
  var newString = "";
  for (var i = partTwo.length - 1; i >= 0; i--) {
    newString += partTwo[i];
}
}
//do the same thing if the index is even (meaning no remainder letter)
else if (index % 2 == 0){
//split the string in half
const partOne = str.slice(0, index / 2);
const partTwo = str.slice((index / 2), str.length);
//reverse the second half of the string
var newString = "";
for (var i = partTwo.length - 1; i >= 0; i--) {
  newString += partTwo[i];}
}
//print strings (optional)
console.log(newString);
console.log(partOne);
//check if strings match. If they do, return 'true'
return newString === partOne;
}


console.log(palindrome("My age is 0, 0 si ega ym."));
