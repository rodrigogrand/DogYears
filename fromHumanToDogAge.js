//This is the human age, or in other words, it's your age.
let myAge = 22;
let myName = 'Rodrigo Grande'.toLowerCase();
// the first two years are equal to 10.5 each year for dog's age.
let earlyYears = 2;
earlyYears *= 10.5;

let laterYears = myAge - 2;
// After the first two years, we need to multiply the dog's age by 4, that does mean, we're going to sum 4 years to the first two years, and so on.
laterYears *= 4;
//This is when we compare the two ages and get our dog age.
let myAgeInDogYears = earlyYears + laterYears;
//Here we are calling the variables early mentioned.
console.log(earlyYears);
console.log(laterYears);
//This is a phrase where we use the myAgeInDogYears variable to find out how many dog ​​years we would have if we were the same human age as we are now.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
