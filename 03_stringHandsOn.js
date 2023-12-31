console.log(" ==========Answer for Step 1===========");
function stringHandson() {
  var givenstring = "   Hey you are doing good, keep it Up   ";
  console.log(`Given String is ==> ${givenstring}`);

  console.log(" ==========Answer for Step 2===========");

  console.log(`Lenth of given String is, ${givenstring.length}`);

  console.log(" ==========Answer for Step 3===========");
  var trimresult = givenstring.trim(" ");
  console.log(
    `AFter removing leading & trailing spaces===>. ${trimresult}, 
    The length of String after trimming is ${trimresult.length}`
  );
  console.log(" ==========Answer for Step 4===========");

var resultspace = givenstring.length - trimresult.length;
console.log(`Space count remove in step 3 is ${resultspace}`);

console.log(" ==========Answer for Step 5===========");

console. log(`Char present at index 1 is: ${trimresult.charAt(0)}`); 
console. log(`Char present at index 34 is: ${trimresult.charAt(33)}`); 

console.log(" ==========Answer for Step 6===========");

  var resultsplit = trimresult.split(" ");
  console.log(resultsplit);
  console.log(`Total Words available in the String is ${ resultsplit.length}`);

  console.log(" ==========Answer for Step 7===========");
  var indexofgood = trimresult.indexOf ("good");
  console.log(`The index of good is ${indexofgood}`);

  console.log(" ==========Answer for Step 8===========");

   var resultslice =trimresult.slice(22);
   console.log(`substring of given string is ${resultslice}`);

   console.log(" ==========Answer for Step 9===========");
         var Isavailabel =trimresult.includes("Hey");
         var Ispresent = trimresult.includes("Up");
         console.log(`String starts with word "Hey"=> ${Isavailabel}`);
        console.log(`String ends with word "Up"=> ${Ispresent}`);


}
stringHandson();
