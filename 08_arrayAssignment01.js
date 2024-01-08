

var fruits_Seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_Seasonal);

console.log(`=============Step 1======================`);
console.log(`First element is ${fruits_Seasonal [0]} & Last element is ${fruits_Seasonal [fruits_Seasonal.length-1]} `);

console.log(`=============Step 2======================`);
var fruits_Seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`original array : ${fruits_Seasonal}`);
 fruits_Seasonal.unshift("Papaya");
 console.log(`Adding Papaya before ==>${fruits_Seasonal}`);

 console.log(`=============Step 3======================`);
 var fruits_Seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(`original array : ${fruits_Seasonal}`);
 fruits_Seasonal.splice (3,1);
 console.log(`After removing Mango ===> ${fruits_Seasonal}`);

 console.log(`=============Step 4=====================`);

 var fruits_Seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(`original array : ${fruits_Seasonal}`);
 fruits_Seasonal.push("Pineapple")
console.log(`Adding Pineapple at end ===> ${fruits_Seasonal}`);

console.log(`=============Step 5====================`);
var fruits_Seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`original array : ${fruits_Seasonal}`);
fruits_Seasonal.splice (4,0, "Dragen Fruit")
console.log(`After inserting Dragen fruit ===> ${fruits_Seasonal}`);

console.log(`=============Step 6====================`);
var fruits_Seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`original array : ${fruits_Seasonal}`);
fruits_Seasonal.splice (1,1, "Kiwi")
console.log(`After replacing orange with kiwi ${fruits_Seasonal}`);

console.log(`=============Step 7===================`);
var fruits_Seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`original array : ${fruits_Seasonal}`);
const element = fruits_Seasonal.slice(1,4);
console.log(`Elements starting from 1 - 4 : ${element}`);


console.log(`=============Step 8===================`);
var fruits_Seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`original array : ${fruits_Seasonal}`);
const lastElements = fruits_Seasonal.slice(-3);
console.log(`Last three elements : ${lastElements}`);