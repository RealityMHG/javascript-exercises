const fibonacci = function(fibonacciLength) {
    if(fibonacciLength<0) return "OOPS"
    const fibonacciSequence = [0,1];

    for(let i=2; i<fibonacciLength+1; i++) {
        fibonacciSequence.push(fibonacciSequence[i-1] + fibonacciSequence[i-2]);
    }

    return fibonacciSequence[fibonacciLength];
};

// Do not edit below this line
module.exports = fibonacci;
