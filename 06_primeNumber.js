

function primeNumber(num) {
    for (let index = 2; index < num; index++) {  // code to find the Prime numbers
      if (num%index==0) {
        return false;
      }
        
    }
    return true;
}

console.log(`7 is a prime Number ===> ${primeNumber (7)}`);
console.log(`5 is a prime Number ===> ${primeNumber (5)}`);
console.log(`6 is a prime Number ===> ${primeNumber (6)}`);
console.log(`19 is a prime Number ===> ${primeNumber (19)}`);