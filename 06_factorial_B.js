
function factorialOfWordsCount (num) {
    if (num==0 || num==1) {
        return `Factorial of the Stirng  ${num}is 1 `
    }
    if (num == null || num == undefined|| isNaN(num)) {
        return`The given string ${num}is Invalid `
    }
    if (num<0) {
        return`The Value of the String  ${num} is negative`
    }
    result= 1;
    for (let index = 1; index <=num; index++) {
    result= result*index;
    }
    return result;
}
let str  = "Revision is the mother of success";
let result = str.split(" ");
console.log(`The given string is==> ${result}, The length of string is ==>${result.length}`);
let strResult = factorialOfWordsCount (`${result.length}`)
console.log(`The factorial of given string is ${strResult}`);

console.log(`===============================================================`);

let str2 = "We never fail, we always learn, Mind it";
let result2 = str2.split(" ");
console.log(`The given string is ==> ${result2}, The length of the string is ==> ${result2.length}`);
let str2Result = factorialOfWordsCount(`${result2.length}`);
console.log(`The factorial of given string is ${str2Result}`);

console.log(`===============================================================`);
let resultofnull = factorialOfWordsCount (null);
console.log(`The Factorial of the null is ===> ${resultofnull}`);

console.log(`===============================================================`);
 let resultof = factorialOfWordsCount("");
 console.log(`The factorial of ("") is ==> ${resultof}`);
 console.log(`===============================================================`);


 let str3 = "Nikita Prasad Ghorpade";
 let resultofstr3= str3.split(" ");
 console.log(`The Length of string is ${resultofstr3}, The Length of the string is ${resultofstr3.length}`);
 let result3 = factorialOfWordsCount(resultofstr3.length);
 console.log(`The factorial of the given string is ==> ${result3}`);