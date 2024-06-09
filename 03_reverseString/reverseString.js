const reverseString = function(textToReverse) {
    let reversedText = "";
    for(let i=textToReverse.length-1; i>=0; i--) {
        reversedText += textToReverse[i];
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
