function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(temp_fahrenheit) {
    temp_celsius=(temp_fahrenheit-32)*5/9;
    return round(temp_celsius,1);
};

const convertToFahrenheit = function(temp_celsius) {
    temp_fahrenheit=(temp_celsius*9/5)+32;
    return round(temp_fahrenheit,1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
