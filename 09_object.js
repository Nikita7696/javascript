
let Person ={
FirstName: "Nikita",
age: 27,
isMarried: true

}
console.log(Person);

//if need to show specific value
console.log(Person.FirstName); //Dot Notation

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
           console.log(`Complete Address: ${this.flatNo}, ${this.street}, ${this.city}, ${this.pin}`); //"this " is a reference element which return the current object value
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

console.log(`====== Traversing an object ========`);//forin loop used to traverse the object
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

developer.skills.push("HTML");
console.log(developer.skills);

const keys = Object.keys (developer);
console.log(keys);                      //we get the array.

let value = Object.values(developer);
console.log(value);
console.log(`Is values are array ===> ${Array. isArray(value)}`);// check theat values are in the array


console.log(`Object entries.....`);
 const entries = Object.entries(developer);
for (const element of entries) {
    console.log(element);
}
console.log(`Acessing nexted array element using double []`);
console.log(entries[0] [0]);
console.log(entries[0] [1]);

console.log(`in operator`); // any property is availabel in the object or not

const isAgeavailabel = "age" in developer;
console.log(`is age available = ${isAgeavailabel}`);

const isCityavailable = "city" in developer;
console.log(`Is city is available ==> ${isCityavailable}`);