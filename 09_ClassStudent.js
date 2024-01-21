class Student{

    //Data Member or Properties
    id
    name
    city
    Marks
    constructor(id, name, city,Marks){   //Constructor is used to initialize the Object
     this.id= id;
     this.name = name;
     this.city = city;
     this.Marks= Marks;
    }
    //Member Functions or Methods

    getDetails(){
        console.log(` ID = ${this.id}, Name =${this.name}, City= ${this.city}, Marks=${this.Marks}`);
    }
}
const jenny = new Student(11,"Jenny", "Pune", 70);
console.table(jenny);
jenny.getDetails(); // Calling the getdetails for jenny

const bill = new Student(22,"Bill", "LA", 60);
bill.getDetails();

const stew = new Student (44,"Stew", "Belgium", 80);
const elon = new Student (55,"Elon", "France", 90);


console.log(`Triversing an array of object`);
const array =[ jenny, bill, stew, elon]; // for of loop used to triversing the array
for (const element of array) {
  element.getDetails();
}


console.log(`WAP tolog the details of students having marks gtreater than 80`);
for (const Student of array) {
    if (Student.Marks>=80) {
        Student.getDetails();
    }
}

class User{ }

//Instance of class

console.log(elon instanceof Student);
console.log(stew instanceof User);