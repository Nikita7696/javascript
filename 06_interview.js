

// using if esle

var gradeof = function (gradScore, hscScore, sscScore, candidateName) {
if (gradScore>=70 || hscScore>=80 || sscScore>90) {
    console.log(`Congrats ${candidateName} you are eligible for interview`);
    
} else{
    console.log(`Unfortunately! ${candidateName} you are not eligible for interview`);
                
            }
            
        }
        gradeof(80,86,90,"Nikita");
        gradeof (70,65,55, "Rama")
        gradeof(60,79,88, "Sham")
    
    

