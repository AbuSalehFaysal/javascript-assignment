// Git Repository Link: https://github.com/AbuSalehFaysal/javascript-assignment

// =======================================
// Kilometer to Meter
// =======================================
function kilometerToMeter(kilometer) {
    let meter;
    if (kilometer < 0) {
        meter = "The Value of Kilometer cannot be negative, thus the conversion of Kilometer to Meter cannot be done!";
    } else {
        meter = kilometer * 1000;
    }
    return meter;
}
// let resultOfKilometerToMeter = kilometerToMeter(5);
// console.log(resultOfKilometerToMeter);

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    let totalPrice;
    if (numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0) {
        totalPrice = "Value of any gadgets cannot be negative, thus the calculation cannot be done!"
    } else {
        let priceOfWatch = 50 * numberOfWatch;
        let priceOfPhone = 100 * numberOfPhone;
        let priceOfLaptop = 500 * numberOfLaptop;
        totalPrice = priceOfWatch + priceOfPhone + priceOfLaptop;
    }
    return totalPrice;
}
// let resultOfBudgetCalculator = budgetCalculator(4, -2, 2);
// console.log(resultOfBudgetCalculator);

function hotelCost(numberOfDays) {
    // 1-10=100, 11-20=80, 21 or greater = 50
    let hotelPrice;
    if (numberOfDays < 0) {
        hotelPrice = "The Number of Days cannot be negative or Zero!";
    } else if (numberOfDays == 0) {
        hotelPrice = "If you do not stay in the hotel, you do not have to pay anything.";
    } else if (numberOfDays <= 10) {
        hotelPrice = numberOfDays * 100;
    } else if (numberOfDays <= 20) {
        let firstTenDaysPrice = 10 * 100;
        let remainingDays = numberOfDays - 10;
        let remainingDaysPrice = remainingDays * 80;
        hotelPrice = firstTenDaysPrice + remainingDaysPrice;
    } else {
        let firstTenDaysPrice = 10 * 100;
        let secondTenDaysPrice = 10 * 80;
        let remainingDays = numberOfDays - 20;
        let remainingDaysPrice = remainingDays * 50;
        hotelPrice = firstTenDaysPrice + secondTenDaysPrice + remainingDaysPrice;
    }
    return hotelPrice;
}
// let resultOfHotelCost = hotelCost(21);
// console.log(resultOfHotelCost);

function megaFriend(arrayOfNames) {
    let stringLength = 0;
    let longest;
    for (let i = 0; i < arrayOfNames.length; i++) {
        if (arrayOfNames[i].length > stringLength) {
            stringLength = arrayOfNames[i].length;
            longest = arrayOfNames[i];
        }
    }
    return longest;
}
let resultOfMegaFriend = megaFriend([1,2]);
console.log(resultOfMegaFriend);