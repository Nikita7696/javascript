

function Bank (bankanme, location,ifscCode,branchcode) {
    this.bankanme =bankanme;
    this.location =location;
    this.ifscCode=ifscCode;
    this.branchcode=branchcode;
    this.bankDetails = function () {
    console.log(`bank name ==> ${bankanme}, location of bank ==> ${location}, ifsc code of bank ==> ${ifscCode}, 
    branch of bank is ==> ${branchcode}`);
}
}
    const yesBank = new Bank ("Yes Bank", "Mumbai", 100200,  200100)
    const sbiBank = new Bank ("SBI Bank", "Pune", 100210,  200120)
    const  mahBank = new Bank ("Maharashtra Bank", "Pimpri", 102200,  202100)
    const axisBank = new Bank ("Axis Bank", "Delhi", 100203,  200130)

    yesBank.bankDetails();
    sbiBank.bankDetails();
    mahBank.bankDetails();
    axisBank.bankDetails();


    Bank.prototype.openTime = "9 AM IST"
    Bank.prototype.closeTime = "6 PM IST"
    console.log(`Opening time of SBI Bank => ${sbiBank.openTime} and Closing time is => ${sbiBank.closeTime}`);
    console.log(`Opening time of Yes Bank => ${yesBank.openTime} and Closing time is => ${yesBank.closeTime}`);
    console.log(`Opening time of Maharashtra Bank => ${mahBank.openTime} and Closing time is => ${mahBank.closeTime}`);
    console.log(`Opening time of Axis Bank => ${axisBank.openTime} and Closing time is => ${axisBank.closeTime}`);





    