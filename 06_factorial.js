

let factorial = function (num) {
    if (num==0 || num==1) {
        return 1;
    }
    if (num<0) {
        return`Invalid Input that is number is negative: ${num}`;
    }
    let result =1;
    for (let index = 1; index <=num; index++) {
      result =result* index;
        
    }
    return result;
}
let result= factorial(5);
console.log(`The factorial of 5 is ${result}`);