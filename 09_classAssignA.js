

console.log(`---------------Step1-------------------------`);
class Vehicle{
    constructor(Vehiclename, VehicleColor, VehicleType, VehicleMileage, Vehicleprice){

        this.Vehiclename = Vehiclename;
        this.VehicleColor =VehicleColor;
        this.VehicleType= VehicleType;
        this.VehicleMileage =VehicleMileage,
        this.Vehicleprice=Vehicleprice;
    }
    //Member Functions or Methods
     detailsofvehicle(){
       console.log(`vehicalname is = ${this.Vehiclename}, VehicleColor is =${this.VehicleColor}, VehicleType is =${this.VehicleType}, 
       VehicleMileage is=${this.VehicleMileage}, Vehicleprice is=${this.Vehicleprice}`); 
        }
}
const tataPunch = new Vehicle( "TATA Punch", "White", "SUV", "50 km/hr", "10 lakhs");
const creta = new Vehicle ("Hundai Creta", "Black", "Suv","40 km/hr", "15 lakhs" )
const thar = new Vehicle ("Mahindra Thar", "Red", "Hatchback","9km/hr", "16lakhs" )
const rollsRoyce = new Vehicle ("RollsRoyce", "Blue", "Car","102km/wh", "7 cr" )
const swift = new Vehicle ("Swift", "Grey", "Hatchback","20km/hr", "12lakhs" )

console.log(`Triversing an Vehicle using array`);
const arrayofVehicle = [tataPunch,creta,thar,rollsRoyce,swift];
for (const element of arrayofVehicle) {
    element.detailsofvehicle();
}

//console.log(tataPunch);
//console.log(creta);
//console.log(thar);
//console.log(rollsRoyce);
//console.log(swift);

console.log(`---------------Step2 ------------------------`);

class College {
constructor(collegeName, collegeRank, Principleofcollege, Location){
    this.collegeName = collegeName;
    this.collegeRank= collegeRank;
    this.Principleofcollege= Principleofcollege;
    this.Location = Location;
}

display(){
    console.log(`College Name is ${this.collegeName}, College rank is ${this.collegeRank}, 
    Principle of college is ${this.Principleofcollege},Location is ${this.Location} `)  }
}
   
const moderncollege = new College( "Modern College", 1, "Dr. Chaddha", "Pune")
const fergussuncollege = new College( "Ferggusun College", 2, "Dr. Dhonde", "Pune")
const ganeshkhindcollege = new College( "Ganeshkhind College", 3, "Miss. upadhyay", "Dehli")
const agarkarcollege = new College( "Agarakar College", 4, "Mr. Naykodi", "Chennai")


    moderncollege.display();
    fergussuncollege.display();
    ganeshkhindcollege.display();
    agarkarcollege.display();

    console.log(`---------------Step3 ------------------------`);

    let triverseObj = function (funObj) {
        for (const key in funObj) {
            const element = funObj [key];
            console.log(`Key = ${key}, Value = ${element}`);
            }
        }
        console.log('');
    
    
  triverseObj(moderncollege);
  triverseObj(fergussuncollege);
  triverseObj(ganeshkhindcollege);
  triverseObj(agarkarcollege);


  