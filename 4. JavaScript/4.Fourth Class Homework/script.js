// First Assignment

let programmingLanguages = [
    "JavaScript", "C++", "Java", "Python", "Pascal", "Delphi"]; 
let favProgrammLanguage = prompt("Enter your favorite programming language"); 

if (programmingLanguages.includes(favProgrammLanguage)) {
    if (favProgrammLanguage == programmingLanguages[0])
        console.log(`My 1st choice is ${programmingLanguages[0]}`);
    else if (favProgrammLanguage == programmingLanguages[1])
        console.log(`My 2nd choice is ${programmingLanguages[1]}`);
    else if (favProgrammLanguage == programmingLanguages[2])
        console.log(`My 3rd choice is ${programmingLanguages[2]}`);
    else
        console.log(`My ${programmingLanguages.indexOf(favProgrammLanguage) + 1}th choice is ${favProgrammLanguage}`)
}
else
    console.log("Invalid programming language. Please select one of the following languages: JavaScript, C++, Java, Python, Pascal and Delphi");


// Second Assignment

let prog_languages = [
    {
        name: "C++",
        founder: {
            name: "Bjarne Stroustrup",
            email: "@research.att.com"
        },
        founded: 1979
    },
    {
        name: "JavaScript",
        founder: {
            name: "Brendan Eich",
            email: "brendan.eich@gmail.com"
        },
        founded: 1995
    },
    {
        name: "Python",
        founder: {
            name: "Guido van Rossum",
            email: "guido@python.org"
        },
        founded: 1991
    }
]

console.log(prog_languages);
console.log(prog_languages[0]);
console.log(prog_languages[2].founder.email);
prog_languages.push({
    name: "Java",
    founder: {
        name: "James Gosling",
        email: "jamesgosling@gmail.com"
    },
    founded: 1995
});

prog_languages.unshift({
    name: "Pascal",
    founder: {
        name: "Niklaus Wirth",
        email: "wirth@inf.ethz.ch"
    },
    founded: 1970
});

console.log(prog_languages[0]);
console.log(prog_languages[prog_languageslength-1]);

