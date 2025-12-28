const findTheOldest = function(persons) {
  //calc ages
  const currentYear = parseInt(new Date().getFullYear());
  oldest = 0;
  oldestPerson = "Unknown"
  for (let person of persons) {
    if (person.yearOfDeath === undefined) {
      ageYearMax = currentYear;
    } else {
      ageYearMax = person.yearOfDeath;
    }
    age = ageYearMax - person.yearOfBirth;
    if (age > oldest) {
      oldest = age;
      oldestPerson = person;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
