const sumAll = function(initialNumber,lastNumber) {
    if (initialNumber<0 || lastNumber<0 ) return "ERROR";

    if(typeof initialNumber != "number" || typeof lastNumber != "number") return "ERROR";

    let sumOfNumbers = 0;

    if(initialNumber<lastNumber) {
        for(let i=initialNumber; i<=lastNumber; i++) {
            sumOfNumbers += i;
        }
    } else {
        for(let i=lastNumber; i<=initialNumber; i++) {
            sumOfNumbers +=i;
        }
    }

    return sumOfNumbers;

};

// Do not edit below this line
module.exports = sumAll;
