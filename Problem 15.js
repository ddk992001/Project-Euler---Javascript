// Lattice paths
// Published date: 20/4/2002

function factorial(n) {
    var factorial = 1;
    for (let i = 2; i <= n; i++)
        factorial *= i;
    return factorial;
}

function getAllLatticePaths(m, n) {
    return factorial(m + n) / (factorial(n) * factorial(n));
}

console.log(getAllLatticePaths(20, 20));