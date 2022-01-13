// Smallest multiple
// Published date: 1/12/2001

function findSmallestMultiple(n) {
    var smallestMultiple = n;
    while (true) {
        let flag = true;
        for (let i = 2; i <= n; i++) {
            if (smallestMultiple % i !== 0) {
                flag = false;
                break;
            }
        }
        if (flag)
            return smallestMultiple;
        smallestMultiple += n;
    }
}

console.log(findSmallestMultiple(20));