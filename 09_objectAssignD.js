
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
console.log(`=============nested object==============`);
professor.deegree
console.log(professor.deegree);
console.log(`=============Array in the object==============`);
professor.certificates
console.log(professor.certificates);
console.log(`=============Adding new property in object==============`);
professor.totalExperience = "14 year";
console.log(professor.totalExperience);
console.log(`=============changing property in object==============`);
professor.deegree.Phd ="R & D";
console.log(professor.deegree);
console.log(`============Adding the new certificate=============`);

console.log("");
professor.certificates.splice(2,0, "Oracle Certified");
console.log(professor.certificates);console.log("");
console.log(professor.certificates.indexOf(3));