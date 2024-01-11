// Fuction Expression- FE
// FE - Storing function inside the variable
var display = function() {
    console.log("display");
}
display(); // Call - Function expression
//console.log(display);

console.log("===================Step 1========================");


var maleMarriageEligibility = function(gender,age,boyName){
   var result = gender=="Male" && age>=21 
    ?  `Hey ${boyName} you are eligible for Marriage`:
    " Unfortunately - You are not eligible, Please try next time." ; 
    console.log(result);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "SteveJobs");

console.log("================Step 2===================");
var  femaleMarriageEligibility = function (gender,age,girlName) {
    var finalresult = gender=="Female" && age>=18
    ? `Hey ${girlName} you are Eligible for Marriage`: "Not eligible for Marriage";
    console.log(finalresult);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "malinda Gates");
