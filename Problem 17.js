// Number letter counts
// Published date: 18/5/2002

import T2W from 'numbers2words';
var translator = new T2W("EN_US");

function countWordsFromNumber(n) {
    var count = 0;
    for (let i = 1; i <= n; i++){
        var word = translator.toWords(i);
        word = word.replaceAll(" ", "").replaceAll("-", "");
        count += word.length;
    }
    return count;
}

console.log(countWordsFromNumber(1000));