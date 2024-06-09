const repeatString = function(textToRepeat, numberOfTimes) {
    if(numberOfTimes<0) return "ERROR";

    let finalString = "";
    for(let i=0; i<numberOfTimes; i++) {
        finalString += textToRepeat;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
