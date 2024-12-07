const findTheOldest = function(arr) {
    let oldest = 0;
    let oldestIndex = 0;
    let age = 0;
    for(let i = 0; i < arr.length; i++){
        age = getAge(arr[i].yearOfBirth, arr[i].yearOfDeath);
        if(age > oldest){
            oldest = age;
            oldestIndex = i;
        }
    }
    
    return arr[oldestIndex];
};

function getAge(birthYear, deathYear){
    if(!deathYear){
        deathYear = new Date().getFullYear();
        console.log(deathYear);
    }
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
