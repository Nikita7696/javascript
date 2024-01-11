
var marriageEligibility = function (gender, age) {
    if (age < 0 || age == undefined || isNaN (age)|| age>=45) { // condition for Marraige
        console.log(`${gender,age} Undefined output`);
    } else {
        if (gender == "Male" && age >=21) {
            console.log(` ${gender}, ${age}==> He is eligible for Marriage`);
        } else {

            if (gender == "FeMale" && age >=18) {
                console.log(`${gender}, ${age}==> She is eligible for Marriage`)
                
            } else {
                console.log(` ${gender}, ${age}==> is Not eligible for Marriage`)

            }
        }
        
    }
}
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("FeMale", 28);
marriageEligibility("FeMale", 16);
marriageEligibility("other", 35);
marriageEligibility("other", 24);