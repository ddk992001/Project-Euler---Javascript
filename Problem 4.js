// Largest palindrome product
// Published date: 17/11/2001

function isPalindrome(n) {
    const str = n.toString();
    for (let i = 0; i <= str.length; i++) {
        if (str[i] !== str[str.length - 1 - i])
            return false;
    }
    return true;
}

function findLargestPalindromeProduct(n) {
    var largestProduct = 0;
    for (let i = Math.pow(10, n - 1); i < Math.pow(10, n); i++) {
        for (let j = i; j < Math.pow(10, n); j++) {
            let temp = i * j;
            if (isPalindrome(temp) && temp > largestProduct)
                largestProduct = temp;
        }
    }
    return largestProduct;
}

console.log(findLargestPalindromeProduct(3));