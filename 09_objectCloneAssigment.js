
console.log(`=========Step 1==================`);
const bankSbi= {
                Name : "SBI Bank",
                Brach: "Pimpri-chinchwad",
                Address : "Near masulkar colony",
                Manager: "Mr. donde"

}
console.log(bankSbi);

console.log(`=========Step 2==================`);
const bankLocation= {
               street: "M.G Road",
               City: "Pune",
               Pin: 410205
}
console.log(bankLocation);
console.log(`=========Step 3 "Clonning Step 1 & Step 2"==================`);

Object.assign(bankSbi, bankLocation)
console.table(bankSbi);

console.log(`=========Step 4==================`);

const rateOfInterates ={
                    homeLoanInterest: 6,
                    personalLoanInterest: 5,
                    dueInterest: 10
}
console.log(rateOfInterates);

console.log(`=============Step 5==================`);
 
const sbiDetails = Object.assign ({},bankSbi,bankLocation,rateOfInterates);
console.log(bankSbi);
console.log(bankLocation);
console.log(rateOfInterates);
console.table(sbiDetails);

console.log(`=============Step 6==================`);//using the for in loop

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call (sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`Key =====>${key}, Value =====> ${element} `);
    }
}



