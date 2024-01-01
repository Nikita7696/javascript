
function squareOfWordLength (str){

    console.log("========Step 1========");

 var length = str.length;
 console.log(`The length of Given string is ${length}`);
  var square = length * length;
  console.log(`The Square of Given string is ${square}`);

}
squareOfWordLength("JavaScript");
squareOfWordLength( "Google Chrome");
squareOfWordLength ("Developer Smart");

console.log("==========Second String========");

function noValue() {
    var string2 = "I am Angular Developer";
    console.log(`The Given String 2 is ${string2}`);
    var String2len = string2.length;
    console.log(`The Length of Second String is ${String2len}`);

    var wordsavailabel= string2.split(" ");
    console.log(`The words in Secong String is ${wordsavailabel}`);

 var divideby = String2len / wordsavailabel.length;
 console.log(`After dividing the result is ${divideby}`);

  var multiplication = String2len* wordsavailabel.length;
  console.log(`Total words available in string after multiplication is ${multiplication}`);
}
noValue();