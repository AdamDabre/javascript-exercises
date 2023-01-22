const removeFromArray = function (arr, num) {
    let indexOfTarget = arr.indexOf(num);
    if (indexOfTarget > -1) {
        arr.splice(indexOfTarget, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
