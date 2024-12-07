const sumAll = function(start, finish) {
    if(start < 0 || finish < 0 || start !== Math.floor(start) || finish !== Math.floor(finish)){
        return 'ERROR';
    }
    let sum = 0;
    if(start > finish){
        let temp = start;
        start = finish;
        finish = temp;
    }
    for(let i = 1; i <= finish + 1 - start; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
