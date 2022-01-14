// Special Pythagorean triplet
// Published date: 26/1/2002

function calculateProductTriplet(n) {
    for (let a = 1; a <= n / 2; a++) {
        for (let b = a + 1; b <= n / 2; b++) {
            const c = n - a - b;
            if (c * c === a * a + b * b)
                return a * b * c;
        }
    }
}

console.log(calculateProductTriplet(1000));