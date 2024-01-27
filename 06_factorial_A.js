

function factorialOfNum (num) {
    if (num==0 || num==1) {
        return `Factorial of given ${num} is 1`;
    }
    if (num < 0 || num == null || num == undefined) {
        return `Factorial of given ${num}==> Invalid`
    }
    let result = 1;
    for (let index = 1; index <= num; index++) {
       
        result=result*index;
    }
    return result;
}
let result= factorialOfNum(5);
console.log(`The factorial of 5 is ${result}`);

console.log(`The factorial of 3 is ===> ${factorialOfNum (3)}`);
console.log(`${factorialOfNum (null)}`);
console.log(`The factorial of 8 is ===> ${factorialOfNum (8)}`);
console.log(`${factorialOfNum (undefined)}`);
console.log(`The factorial of 9 is ===> ${factorialOfNum (9)}`);
console.log(`${factorialOfNum (0)}`);




