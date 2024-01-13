console.log(`=============Step 1 object==============`);
let professor = {
Name: "Nikita",
height: 512,
age: 27,
weight:60,
isWorking: true,
  deegree: {
    engineering: "csc",
    Phd: "Adv computing",
    BCA:"Data analyst",
},
certificates:["Hacker Rank Participation","Certificate of IFE course","Ceritificate in advance programming"]
}
console.log(professor);
console.log(`============= step 2 nested object==============`);
professor.deegree
console.log(professor.deegree);
console.log(`============= step 3 Array in the object==============`);
professor.certificates
console.log(professor.certificates);
console.log(`============= step 4 Adding new property in object==============`);
professor.totalExperience = "14 year";
console.log(professor.totalExperience);
console.log(`============= step 5 changing property in object==============`);
professor.deegree.Phd ="R & D";
console.log(professor.deegree);
console.log(`============ step 6 Adding the new certificate=============`);

console.log("");
professor.certificates.splice(2,0, "Oracle Certified");
console.log(professor.certificates);console.log("");
console.log(professor.certificates.indexOf(3));

console.log(`============step 7 Adding the new certificate=============`);
console.log(` Last element of array certificate ==>${professor.certificates [professor.certificates.length -1 ]}`);

console.log(`============step 8 consol log the object=============`);
 professor.deegree
 console.log(professor.deegree);


 console.log(`============step 9 Traverse the certificate array using for of loop=============`);

 for (const iterator of professor.certificates) {
  console.log(iterator);
 }