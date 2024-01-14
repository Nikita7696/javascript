const developer = {
    firstName: "Gajanan",
    age: 32,
    isMarried: true,
   }

   const newDevloper = Object.assign ({},developer) //cloning the existing object
   console.log(newDevloper);
   console.log(developer);

   console.log(`==========Object merge============`);
   const user = {
                name : "Bill",
                designation : "CEO"
   }

   const address = { 
                   City: "LA",
                   Country:"USA",
                   Pin: 112233
   }

    console.log(` Merging the objects into new object`);

    const mergeObj = Object.assign({}, user,address); // we use obly "Object.assign( user,address);""
    console.log(user);
    console.log(address);
    console.log(mergeObj);

