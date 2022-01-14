// Power digit sum
// Published date: 4/5/2002

function getSumOfAllDigit(m, n) {
    const result = BigInt(Math.pow(m, n)).toString();
    var sumDigit = 0;
    for (let i = 0; i < result.length; i++) {
        sumDigit += parseInt(result[i]);
    }
    return sumDigit;
}

console.log(getSumOfAllDigit(2, 1000));