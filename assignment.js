// Git Repository Link: https://github.com/AbuSalehFaysal/javascript-assignment

// =======================================
// Kilometer to Meter
// =======================================
function kilometerToMeter(kilometer) {
    let meter;
    if (kilometer < 0) {
        return "The Value of Kilometer cannot be negative, thus the conversion of Kilometer to Meter cannot be done!";
    } else {
        meter = kilometer * 1000;
        return meter;
    }
}
let resultOfKilometerToMeter = kilometerToMeter(10);
console.log("Kilometer to Meter Conversion Result: " + resultOfKilometerToMeter);

// =======================================
// Budget Calculatior
// =======================================
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    let totalPrice;
    if (numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0) {
        return "Value of any gadgets cannot be negative, thus the calculation cannot be done!";
    } else {
        let priceOfWatch = 50 * numberOfWatch;
        let priceOfPhone = 100 * numberOfPhone;
        let priceOfLaptop = 500 * numberOfLaptop;
        totalPrice = priceOfWatch + priceOfPhone + priceOfLaptop;
        return totalPrice;
    }
}
let resultOfBudgetCalculator = budgetCalculator(4, 2, 2);
console.log("Budget for your watch, phone, and laptop: " + resultOfBudgetCalculator);

// =======================================
// Hotel Cost
// =======================================
function hotelCost(numberOfDays) {
    let hotelPrice;
    if (numberOfDays < 0) {
        return "The Number of Days cannot be negative!";
    } else if (numberOfDays == 0) {
        return "If you do not stay in the hotel, you do not have to pay anything.";
    } else if (numberOfDays <= 10) {
        hotelPrice = numberOfDays * 100;
        return hotelPrice;
    } else if (numberOfDays <= 20) {
        let firstTenDaysPrice = 10 * 100;
        let remainingDays = numberOfDays - 10;
        let remainingDaysPrice = remainingDays * 80;
        hotelPrice = firstTenDaysPrice + remainingDaysPrice;
        return hotelPrice;
    } else {
        let firstTenDaysPrice = 10 * 100;
        let secondTenDaysPrice = 10 * 80;
        let remainingDays = numberOfDays - 20;
        let remainingDaysPrice = remainingDays * 50;
        hotelPrice = firstTenDaysPrice + secondTenDaysPrice + remainingDaysPrice;
        return hotelPrice;
    }
}
let resultOfHotelCost = hotelCost(15);
console.log("Hotel bill for your staying: " + resultOfHotelCost);

// =======================================
// Mega Friend
// =======================================
function megaFriend(arrayOfNames) {
    if (arrayOfNames.length === 0) {
        return "Array of Names is empty!";
    } else {
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
}
let resultOfMegaFriend = megaFriend(["Abu", "Saleh", "Faysal"]);
console.log("My mega friend is: "+resultOfMegaFriend);