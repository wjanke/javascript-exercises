const sumAll = function(num1, num2) {
    if (num1<0 || num2<0) return "ERROR";
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    sum=0;
    for (i = Math.min(num1,num2); i<=Math.max(num1,num2); i++) {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
