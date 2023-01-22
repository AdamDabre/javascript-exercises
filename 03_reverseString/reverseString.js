const reverseString = function (input) {
    let reversedWord = "";
    let character = "";
    for (let i = input.length; i >= 0; i--) {
        reversedWord = reversedWord + input.charAt(i);
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
