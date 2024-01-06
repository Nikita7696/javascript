
// If Else operator use if there are multiple conditions
var age = 22;
if (age==21) {
    console.log(`Eligible for Marriage`);

    
} else {
    console.log(`Nope...Please try again next time`);
    
}




var isEvenOrOdd = function (num) {
    if(num % 2 == 0) { // ifelse  statement
    return "EVEN";
    } else {
    return "ODD";}
    };
    var result = isEvenOrOdd(23);
    console.log(`23 Given number is ${result}`);
    var result = isEvenOrOdd(30);
    console.log(`30 Given number is ${result}`);


    //using return value


    var evenOrOdd = function (num) {
       var returnvalue ="";
        if (num % 2 == 0) {
            returnvalue= "Even";
        }
        else {
            returnvalue= "Odd";
        }
        return returnvalue;
    };
    var result = evenOrOdd (30);
    console.log(`Given Number is ${result}`);