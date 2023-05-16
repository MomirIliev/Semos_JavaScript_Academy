// // First Assignment

// let inputString = prompt("Enter a string to check: ");
// let letter = prompt("Enter a letter to count: ");

// let counter = 0; 
// function CountBs(someString, letter) {
// // Assignment C
//     if(letter) {
//         for (let i = 0; i < someString.length; i++) {
//             if (someString[i] === letter)
//                 counter++;    
//             }
//             if(counter > 0)
//                 console.log(`In the string '${someString}' you entered the letter ${letter} appears ${counter} times.`)
//                 else
//                 console.log(`In the string you entered the letter ${letter} doesn't exist.`)
//                 counter == 0;
//     }
//     // Assignment B
//     else {
//     for (let i = 0; i < someString.length; i++) {
//                 if (someString[i] === 'B')
//                 counter++;
//             }
//     if (counter > 0)
//         console.log(`In the string '${someString}' you entered the letter B appears ${counter} times.`)
//     else
//         console.log(`In the string you entered the letter B doesn't exist.`);        
//             counter == 0;
//         }
// }; 

// CountBs(inputString, letter); 


// // Second Assignment


// let viewWidth = prompt("Enter the width of the screen"); 
// let viewHeight = prompt("Enter the height of the screen"); 
// function LandscapeOrPortrait(width, height) {
//     if (width > height)
//         console.log("Dimensions are for a Landscape")
//         else 
//         console.log("Dimensions are for a Portrait")
// }
// LandscapeOrPortrait(viewWidth, viewHeight); 
    

// // Third Assignment

// let inputSpeed = prompt("Enter the driving speed of the car"); 
// function SpeedLimits(currentSpeed) {
//     if (currentSpeed < 50)
//         console.log("Safe driving. Continue.")
//     else if (currentSpeed > 50) {
//         let difference = currentSpeed - 50; 
//         let penaltyPoints = difference / 5; 
//         if (difference < 70)
//             console.log(`Speed Limit Crossed. Penalty Points: ${penaltyPoints}`); 
//             else {
//             console.log(`Licence Suspended. Penalty Points: ${penaltyPoints}`);
//             }
//         }
// }
// SpeedLimits(inputSpeed); 


// Fourth Assignment

let cars = {
    model: "FerrariF8",
    horsePower: 710,
    topSpeed: "340 km/h", 
    weightKg: 1435, 
    type: "mid-engine sports car"
};


function ReturningStrings(object, typeOfData) {
    if (typeOfData) {
        for (const key of Object.keys(object)) {
            if (typeof object[key] === typeOfData)
                console.log(`The key ${key} have value of type ${typeof object[key]} and it's value is ${object[key]} `);
        }
    }
    else {
        for (const key of Object.keys(object)) {
            if (typeof object[key]  === 'string')
                console.log(`The key ${key} have value of type ${typeof object[key]} and it's value is ${object[key]} `);
        }
    }
}

ReturningStrings(cars); 
ReturningStrings(cars, 'number'); 


