const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    if(num == 0) return 0;
    if(num == 1) return 1;
    let result = 0;
    let successiveNum = 1;
    let prevNum = 0;
    for(let i = 1; i < num; i++){
        result = successiveNum + prevNum;
        prevNum = successiveNum;
        successiveNum = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
