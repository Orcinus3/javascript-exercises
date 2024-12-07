const removeFromArray = function(arr = [], target = undefined, target1 = undefined, target2 = undefined, target3 = undefined) {

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target || arr[i] === target1 || arr[i] === target2 || arr[i] === target3){
            arr.splice(i, 1);
            console.log(i + "target: " + target);
            console.log(i + "target1: " + target1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
