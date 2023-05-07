// First Assignment

var userInputAge = prompt("Enter your age:"); 
var age = parseInt(userInputAge); 

if (age >= 18) {
    console.log("You are old enough to drive.");
}
else
    console.log("You are not allowed to drive yet. Try again when you will be at least 18 years old."); 


// Second Assignment

var month = prompt("Enter a month:");

switch (month) {
    case "January":
        console.log("January has 31 days");
        break; 
    case "February":
        console.log("February has 28 days");
        break; 
    case "March":
        console.log("March has 31 days");
        break; 
    case "April":
        console.log("April has 30 days");
        break; 
    case "May":
        console.log("May has 31 days");
        break; 
    case "June":
        console.log("June has 30 days");
        break; 
    case "July":
        console.log("July has 31 days");
        break; 
    case "August":
        console.log("August has 31 days");
        break; 
    case "September":
        console.log("September has 30 days");
        break; 
    case "October":
        console.log("October has 31 days");
        break; 
    case "November":
        console.log("November has 30 days");
        break; 
    case "December":
        console.log("December has 31 days");
        break; 
}


// Third Assignment

var  userInputInstruments= prompt("Enter the number of intruments in the band: "); 
var numberOfInstruments = parseInt(userInputInstruments);

if (numberOfInstruments == 1) {
    console.log("This is solo performance");
}
else if (numberOfInstruments == 2) {
    console.log("Thе band is duet");
}
else if (numberOfInstruments == 3) {
    console.log("The band is trio");
}
else if (numberOfInstruments == 4) {
    console.log("The band is quartet");
}
else if (numberOfInstruments == 5) {
    console.log("The band is quintet");
}
else if (numberOfInstruments == 6) {
    console.log("The band is sextet");
}
else {
    console.log("This is orchestra performance");
};


// Fourth Assignment

var educationDegree = prompt("Enter the degree of education: ");
var monthlySalary = 0; 

switch (educationDegree) {
    case "No High School Diploma": 
        monthlySalary = 500; 
        break;
    case "High School Diploma": 
        monthlySalary = 1000; 
        break;
    case "An Associate's degree": 
        monthlySalary = 1500; 
        break;
    case "A Bachelor's degree": 
        monthlySalary = 2000; 
        break;
    case "A Master's degree": 
        monthlySalary = 2500; 
        break;
    case "A Professional degree": 
        monthlySalary = 3000; 
        break;
    case "A Doctoral degree": 
        monthlySalary = 5000; 
        break;
    case "A Political degree":
        monthlySalary = 1000000;
        break;
};

console.log(`Based on the statistics, because you have ${educationDegree} you can earn on average ${monthlySalary} Euros.`);