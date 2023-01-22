//Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
//sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
const sumAll = function (num1, num2) {
    let total = 0;
    let biggerNumber, SmallerNumber;
    if (num1 >= num2) {
        biggerNumber = num1;
        SmallerNumber = num2;
    } else {
        SmallerNumber = num1;
        biggerNumber = num2;
    }
    if (num1 < 0 || num2 < 0 || isNaN(num1) == true || isNaN(num2) == true) {
        return "ERROR";
    } else {
        for (let i = SmallerNumber; i <= biggerNumber; i++) {
            total = total + i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
