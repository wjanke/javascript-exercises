const reverseString = function(str) {
    reverse=""
    for (i=str.length - 1;i >= 0;i--) {
        reverse+=str.at(i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
