// Summation of primes
// Published date: 9/2/2002

function calculateSumOfPrime(n) {
    var primeList = [];
    for (let i = 0; i < n; i++)
        primeList.push(true);
    var sumOfPrime = 0;
    for (let i = 2; i < n; i++) {
        if (primeList[i]) {
            sumOfPrime += i;
            for (let j = 2 * i; j < n; j += i)
                primeList[j] = false;
        }
    }
    return sumOfPrime;
}

console.log(calculateSumOfPrime(2000000));