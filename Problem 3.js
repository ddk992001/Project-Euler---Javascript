// Largest prime factor
// Published date: 3/11/2001

function isPrime(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}

function findLargestPrimeFactor(n) {
    var largestPrime = 2;
    var i = 2;
    while (largestPrime <= n) {
        while (n % i === 0 && isPrime(i)) {
            n /= i;
            largestPrime = i;
        }
        if (i === 2)
            i++;
        else
            i += 2;
    }
    return largestPrime;
}

console.log(findLargestPrimeFactor(600851475143));