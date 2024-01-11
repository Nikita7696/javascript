
let Person ={
FirstName: "Nikita",
age: 27,
isMarried: true

}
console.log(Person);

//if need to show specific value
console.log(Person.FirstName); //Dor Notation

console.log(`Square Notation`);
console.log(Person["FirstName"]); //Square Notation

//Add new property in to an object

Person.designation = "Dancer";
console.log(Person);

//Need to update the value in the object

Person.age= 30;
console.log(Person);

Person.isMarried = false;
console.table (Person); // If you want to see resukt in tabular format use " Consol. table ()"

// Need to delete the value form the object

delete Person.designation;
console.log(Person);

console.log( `Empty Object`); //creating Empty Object

let address = {

}
address.city = "Pune";

let user = {
    userName: "Jenny",
    country: "USA",
    address: {
        city: "Pune",
        street: "Wakad",
        pin: 411057,
        getAddress: function(){
           console.log(`Complete Address: ${this.flatNo}, ${this.street}, ${this.city}, ${this.pin}`); 
        }
    },
    show: function(){
        console.log(`Inside show function`);
    }
}
console.log(user);
let country = user.country;
console.log(country);
user.show();

console.log(user.address.pin);
user.address.flatNo = 308;
console.log(user.address);

user.address.getAddress();

console.log(`====== Traversing an object ========`);
let developer = {
    firstName: "Gajanan",
    age: 32,
    isMarried: true,
    skills: ["C", "CPP", "Core Java", "JavaScript", "Microservices" ]
}
for (const key in developer) {
    if (Object.hasOwnProperty.call(developer, key)) {
        const element = developer[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
}

console.log(developer.skills);