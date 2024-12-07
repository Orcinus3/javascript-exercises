const palindromes = function (word = "") {
    for(let i = 0; i < word.length; i++){
        if(word.at(i) === '!' || word.at(i) === ',' || word.at(i) === '.' || word.at(i) === ' ' || word.at(i) === "'"){
            word = word.slice(0, i) + word.slice(i + 1);
            i--;
        }
    }
    console.log(word);
    word = word.toLowerCase();
    console.log(word);
    for(let i = 0; i < word.length; i++){
        if(word.at(i) !== word.at(word.length - i - 1)){
            console.log(i);
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
