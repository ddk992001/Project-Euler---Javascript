// Longest Collatz sequence
// Published date: 6/4/2002

function findTheLongestTerm(n) {
    var number = 1;
    var longestTerm = 1;
    for (let i = 2; i < n; i++) {
        var temp = i;
        var countTerm = 1;
        while (temp != 1) {
            if (temp % 2 === 0)
                temp /= 2;
            else
                temp = temp * 3 + 1;
            countTerm++;
        }
        if (countTerm > longestTerm) {
            number = i;
            longestTerm = countTerm;
        }
    }
    return number;
}

console.log(findTheLongestTerm(1000000));