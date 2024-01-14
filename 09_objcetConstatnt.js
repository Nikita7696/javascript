const developer = {
    firstName: "Gajanan",
    age: 32,
    isMarried: true,
   }

    developer.age = 34 ;
    console.log(developer);

    // developer = {

  //  }

  console.log(`====Object Freezing====`);
    Object.freeze (developer);
    developer.age= "36";
    console.log(developer);

console.log(`=====Const Array=====`);
const array = [2,3,4,5]
console.log(array);
array[0]=100;
console.log(array);
// array = [99,77,88] not allowed, const value we can not change

console.log(`======Frezzing the array======`);
Object.freeze(array);
array[1]=777;
console.log(array);// the value of index 0 is not going to change as we freezed the object values