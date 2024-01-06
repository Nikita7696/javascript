

var maleMarriage = function(gender, age, boyName){
    var result1 = gender=="Male" && age>=20 
    ? `Hey ${boyName} yes yor are eligible`: 
      " No you are not eligible";
console.log(result1);
}
maleMarriage("Male", 26, "Ram");


var maleMarriageEligibility = function(gender,age,boyName){
    var result = gender=="Male" && age>=21 
     ?  `Hey ${boyName} you are eligible for Marriage`:
     " Unfortunately - You are not eligible, Please try next time." ; 
     console.log(result);
}
maleMarriageEligibility
("Male", 21, "Danny");


var femaleMarriageEligibility = function (gender, age, girlName) {

var finalResult = gender =="Female" && age >=18
? `Hey ${girlName} Yes you are eligible for Marriage` : "Sorry, your are not eligible for Marriage"; 
console.log(finalResult); 

}
femaleMarriageEligibility ("Female", 16, "Jenny");
femaleMarriageEligibility ("Female", 27, "Malinda Gates");