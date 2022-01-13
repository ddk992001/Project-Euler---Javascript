// 10001st prime
// Published date: 29/12/2001

function findPrime(n) {
    const size = 1000000;
    var count = 1;
    var primeList = [];
    for (let i = 0; i <= size; i++)
        primeList.push(true);
    for (let i = 2; i <= size; i++) {
        if (primeList[i]) {
            if (count === n)
                return i;
            for (let j = i * 2; j <= size; j += i) {
                primeList[j] = false;
            }
            count++;
        }
    }
}

console.log(findPrime(10001));