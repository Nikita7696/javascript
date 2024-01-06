

var evenOrOdd = function (num) {
    if (num % 2 == 0) {
        return"Even";
    }
    else {
        return "Odd";
    }
};
console.log(`==========Step 1=============`);
var result = evenOrOdd (45);
console.log(`Given Number 45 is ${result}`);


var result = evenOrOdd (70);
console.log(`Given Number 70 is ${result}`);

var result = evenOrOdd (67);
console.log(`Given Number 67 is ${result}`);


var result = evenOrOdd (98);
console.log(`Given Number 98 is ${result}`);

console.log(`==========Step 2=============`);


var eligibleOrNot = function (age) {
    if (age>= 18) {
        console.log(` Yes, This Person is eligible for Voating`);
    }
    else {
        console.log(` No, This Person is not eligible for voating`);
    }
}

eligibleOrNot (18);
eligibleOrNot(17);
eligibleOrNot(40);
eligibleOrNot(20);

console.log( `=============Step 3======================`);
 var resultstr =function (str) {
  var result = str.length;
  if (result > 10) {
    console.log(`Yes the String ${str} length is greater that 10 characters`);
    
} else {
    console.log(`No, the String ${str} length is less that 10 characters`);

}
    
}
resultstr ("JavaScript-ES6");

console.log(`==================Step 4===================`);


var startsWith = function (word) {
    if (word. startsWith ("Java")) {
        console.log(`Yes, The ${word} starts with word Java`);
    } else {
        console.log(`No, The ${word} not starts with word Java`);
    }
}

startsWith ("JavaScript-ES6");

