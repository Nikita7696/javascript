
const arrayNumbers =[20,31,40,25,23,11,29,9,60,2,11]
console.log(`=================step 1==========================`);

console.log(`The total length of array is ${arrayNumbers.length}`);

console.log(`=================step 2==========================`);
 console.log(`First element of array is ${arrayNumbers [0]}, Last element of array is ${arrayNumbers [arrayNumbers.length-1]}`);

 console.log(`=================step 3==========================`);
 let last3 = arrayNumbers.length-3 
 console.log(`third last element in array is ${arrayNumbers [last3]}`);

console.log(`=================step 4==========================`);

console.log(`Print even numbersin the array using for of loop`);
for (const iterator of arrayNumbers) {
    if (iterator%2==0) {
        console.log(iterator);
    }
}
console.log(`=================step 5==========================`);
console.log(`Print odd numbersin the array using for of loop`);
for (const iterator of arrayNumbers) {
    if (iterator%2!=0) {
        console.log(iterator);
    }
}
console.log(`=================step 6==========================`);
console.log(`Find All even positioned array element & sum it using for in loop`);
var sum = 0;
for (const key in arrayNumbers) {
    if (key%2==0) {
     sum= sum+arrayNumbers[key];
        
    }
}
console.log(`sum of even positioned array element is ${sum} `);

console.log(`=================step 7==========================`);
console.log(`Find All odd positioned array element & sum it using for in loop`);
var sum = 0;
for (const key in arrayNumbers) {
    if (key%2!=0) {
     sum= sum+arrayNumbers[key];
        
    }
}
console.log(`sum of odd positioned array element is ${sum} `)

console.log(`=================step 8==========================`);
console.log(`Find the sum of all array elements`);
var sum=0;
for (const key in arrayNumbers) {
    sum= sum + arrayNumbers [key];
    
}

console.log(`the sum of all array element is ${sum}`);

console.log(`=================step 9==========================`);
console.log(`No. multiply by 5`);
for (const element of arrayNumbers) {
    if (element%5==0) {
        console.log(element);
    }
}
console.log(`=================step 10==========================`);
console.log(` Check if array containing 115`);
    if (arrayNumbers.includes(115)) {
        console.log(`yes, This array inclueds 115`);
    } else {
        console.log(`No, This array inclueds 115`);

    }
    
    console.log(`=================step 11==========================`);
 console.log(`Check if array inclues 23`);
if (arrayNumbers.includes(23)) {
    console.log(`yes the array inclueds the no. 23`);
    
} else {
    console.log(`No the array does not inclueds the no. 23`);

}
console.log(`=================step 12==========================`);
console.log(`Add 55, 66 at index 3`);
console.log(`original array is ${arrayNumbers}`);
arrayNumbers.splice(3,0,55,66)
console.log(arrayNumbers);


console.log(`=================step 13==========================`);
 console.log( `original array ${arrayNumbers}`);
 const removed= arrayNumbers.splice(4,3);
 console.log(`array is ${arrayNumbers}`);