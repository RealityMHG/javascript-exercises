const palindromes = function (palindromeString) {
    const stringWithoutPonc = palindromeString.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    const stringWihtoutSpace = stringWithoutPonc.replace(/\s+/g, '');
    const stringLowercase = stringWihtoutSpace.toLowerCase();
    let reversedString = stringLowercase.split("").reverse().join("");

    if(reversedString===stringLowercase) return true;

    return false;
};

// Do not edit below this line
module.exports = palindromes;
