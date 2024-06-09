const leapYears = function(yearToTest) {
    return yearToTest % 4 === 0 && (yearToTest % 100 !== 0 || yearToTest % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
