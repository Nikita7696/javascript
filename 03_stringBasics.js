console.log(" ==========Type of String:Charater charatAt===========");

var greet = "Good Morning";
console. log("Total character in the string is: ", greet. length);
var charAtIndex5 = greet.charAt (5);
console. log("Char present at index 5 is:", charAtIndex5 );

console.log(" ==========Type of String:Charater concat===========");
var Str1 = "Hey ";
var str2 = "Smarty";
var concatresult= Str1. concat (str2)
console.log("Concated string is", concatresult);


console.log(" ==========Type of String:Charater indexof===========");
var greet = "Good Morning";
var indexofd = greet. indexOf('d')
console.log("Index of d is", indexofd);

var indexOfnin = greet. indexOf('nin');
console.log("Index of nin is", indexOfnin);

var indexOfo = greet. indexOf('o');
console.log("Index of O is", indexOfo );

console.log(" ==========Type of String:Charater Replace===========");

var myName = "Gajanan Kharat";
console.log(myName.replace ("Kharat", "Bill"));
 console.log(myName.replace("Gajanan", "Ricky"));

 console.log(" ==========Type of String:Charater Trim===========");

 var city = "  Pune  ";
 console.log(city.length);
 var trimresult= city.trim();
  console.log(trimresult, trimresult.length);

  console.log(` After trim City is: ${trimresult}, Its Length is: ${ trimresult.length} `);
  console.log(" ==========Using String Template===========");

  var num= 15;
  var result= num.toString();
  console.log(`Number is ${num}, and Its type is ${typeof num}`);
  console.log(`After conversion number is ${result}, Its Type is ${typeof result}`);

  console.log(" ==========Type of String:Charater 'includes'===========");

  var greet = "Good Morning";
  var isAvailable= greet.includes ("ing")
  console.log(`Is Substring 'ing' is available==> ${isAvailable}`);

  var isPresent = greet.includes ("Goo")
console.log(`Is substring "goo" is availabele=> ${isPresent}` );

console.log(" ==========Type of String:Charater 'Slice'===========");

var result= greet.slice(5,8);
console.log(`slice is ${result}`);

var Newresult = greet.slice(5,10);
console.log(`slice is ${Newresult}`);

var word = "Jenny Marry";
 var result= word.split (" ")
 console.log(`After Split ==> ${ result} Total number of words is ${result.length}`);

 var givenString = "Hey I am UI and Java Developer";
 var result = givenString.split(" ")
 console.log(result);
 console.log(` Total Words present in the sentence is ${ result.length}`);





