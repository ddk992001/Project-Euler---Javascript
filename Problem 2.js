// Even Fibonacci numbers
// Published date: 20/10/2001

function calculateSum(n) {
    var sum = 2;
    var firstFibo = 1;
    var secondFibo = 2;
    var currentFibo = 0;
    do {
        currentFibo = firstFibo + secondFibo;
        firstFibo = secondFibo;
        secondFibo = currentFibo;
        if (currentFibo % 2 === 0)
            sum += currentFibo;
    } while (currentFibo <= n);
    return sum;
}

console.log(calculateSum(4000000));