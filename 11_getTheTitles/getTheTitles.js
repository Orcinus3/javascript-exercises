const getTheTitles = function(books = []) {
    let newArr = [];
    for(let i = 0; i < books.length; i++){
        newArr[i] = books[i].title;
    }
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
