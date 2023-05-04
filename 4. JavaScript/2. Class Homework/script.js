//  Exercize Number One

var numChildren = 5; 
var partnerName = "Hannah"; 
var geoLocation = "Italy";
var jobTitle = "programmer"; 
console.log(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`);

//  Exercize Number Two

var birthYear = 1989; 
var futureYear = 2085; 

var possibilityOne = futureYear - birthYear; 
var possibilityTwo = futureYear - birthYear + 1; 

console.log(`I will be either ${possibilityOne} or ${possibilityTwo} in ${futureYear}`); 

//  Exercize Number Three

var currentAge = 33; 
var maxAge = 80; 
var dayAmount = 5; 
var totalAmount = (maxAge - currentAge) * 365 * 5;

console.log(`You will need ${totalAmount} to last you until the ripe of old age of ${maxAge}`);

//  Exercize Number Four

var radius = 9; 
var circumferenceCircle = Math.PI * 2 * radius; 
console.log(`The circumference is ${circumferenceCircle}`); 

var areaCircle = Math.pow(radius, 2) * Math.PI; 
console.log(`The area is ${areaCircle}`); 

//  Exercize Number Five

var celsiusTemperature = 39; 
var fahrenheitConvertedTemperature = celsiusTemperature / 5 * 9 + 32; 
console.log(`${celsiusTemperature} C is ${fahrenheitConvertedTemperature} F.`); 

var fahrenheitTemp = 95; 
var celsiusConvertedTemperature = (fahrenheitTemp - 32) * 5 / 9; 
console.log(`${fahrenheitTemp} F is ${celsiusConvertedTemperature} C.`); 

