// Multiples of 3 or 5
// Published date: 6/10/2001

function calculateSum(n) {
    var sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0)
            sum += i;
    }
    return sum;
}

console.log(calculateSum(1000));