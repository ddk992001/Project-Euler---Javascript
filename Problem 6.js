// Sum square difference
// Published date: 15/12/2001

function calculateDifference(n) {
    var sumOfSquare = 0;
    var squareOfSum = 0;
    for (let i = 1; i <= n; i++) {
        sumOfSquare += Math.pow(i, 2);
        squareOfSum += i;
    }
    return Math.pow(squareOfSum, 2) - sumOfSquare;
}

console.log(calculateDifference(100));