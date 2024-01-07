
var gradeSystem = function(Marks) {
    if (Marks <0 || Marks>100 || Marks== undefined|| isNaN(Marks)) { // condition for invalid Output
        console.log(`${Marks}=====> Invalid Output`);
      
    } else {// Condition for Pass or Fail
        if (Marks < 35) { // Condition  for Fail
            console.log(`${Marks} Unfortunately you are failed`);

        } else { 
            if (Marks>= 35 && Marks<50 ) { // Condition for Pass
                console.log(`${Marks} Yes, You are passed with Grade ===> C`);
            } else {
                if (Marks>=50 && Marks<75) { // condition for Pass
                    console.log(`${Marks} Yes, You are passed with Grade ===> B`);
                } else {
                    
                }
            }
            
        }
    }
    
}
gradeSystem (68);