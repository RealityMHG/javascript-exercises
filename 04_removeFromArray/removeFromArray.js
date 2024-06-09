const removeFromArray = function(arrayToChange, numberToRemove) {

    const numbersToRemove = arguments;
    numbersToRemove.shift;

    let arrayChanged = arrayToChange.filter(function (element) {
        return element !== numberToRemove;
    });

    if(numbersToRemove.length >= 2) {
        for (let i=1; i<numbersToRemove.length; i++) {
            arrayChanged = arrayChanged.filter(function (element) {
                return element !== numbersToRemove[i];
            });
        }
    }

    return arrayChanged;
};

// Do not edit below this line
module.exports = removeFromArray;
