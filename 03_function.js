

//Function is return Value

function square (num){
console.log("Given Value is;", num);
var result= num * num;
console.log("Result is;", result);
}
square(9);
square(11)
square(10)// Function call or invocation

//

function multiply( n1, n2, n3){

    console.log("Given Number Value is:", n1, n2, n3);
    var result =n1 * n2 * n3;
    return result;
}
var returnvalue = multiply(5,5,5);
console.log("Multilication is", returnvalue);

var returnvalue = multiply (34, 56, 89);
console.log("Multiplication is:", returnvalue);

// Swap Function

  function swap(n1, n2){
    console.log("Before Swap:", "n1=>", n1, "n2=>", n2);
    var temp = n1;
    n1= n2
    n2= temp
    console.log("After Swap:", "n1=>", n1,"n2=>", n2);
  }

swap (10,20);
swap( "jenny", "merry");
