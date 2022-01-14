// Highly divisible triangular number
// Published date: 9/3/2002

function countDivisor(n) {
    var count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (n / i === i)
                count += 1;
            else
                count += 2;
        }
    }
    return count;
}

function findFirstTriangularNumber(n) {
    var i = 1;
    var triangularNumber = i;
    while (countDivisor(triangularNumber) <= n) {
        i++;
        triangularNumber += i;
    }
    return triangularNumber;
}

console.log(findFirstTriangularNumber(500));